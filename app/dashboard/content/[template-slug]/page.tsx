"use client";
import React, { useContext, useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Link } from "lucide-react";
import { chatSession } from "@/utils/AiModals";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { TotalUsageContext } from "@/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";
import { UpdateCreditUsageContext } from "@/(context)/UpdateCreditUsageContext";
interface PROPS {
  params: {
    "template-slug": string;
  };
  slug: string;
}
function CreateNewContent(Props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug == Props.params["template-slug"]
  );
  //console.log(Props.params['template-slug'])
  const [loading,setLoading]=useState(false);
  const[aiOutput,setAiOutput]=useState<string>('');
  const {user}=useUser();
  const router=useRouter();
  const {totalUsage,setTotalUsage}=useContext(TotalUsageContext)
  const {updateCreditUsage,setUpdateCreditUsage}=useContext(UpdateCreditUsageContext)
  /**
   * used to generate content from AI
   * @param FormData 
   * @returns 
   */
  const GenerateAIcontent=async(FormData:any)=>{
    if(totalUsage>=10000){
      
      console.log("please upgrade");
      router.push('/dashboard/billing')
      return;

    }

    setLoading(true);
    const SelectedPrompt=selectedTemplate?.aiPrompt;
    const FinalAIPrompt=JSON.stringify(FormData)+", "+SelectedPrompt;
    const result=await chatSession.sendMessage(FinalAIPrompt);
    //console.log(result.response.text());
    //setAiOutput(result?.response.text())
    setAiOutput(result?.response.text());
    await saveInDb(JSON.stringify(FormData),selectedTemplate?.slug,result.response.text())
    setLoading(false);
    setUpdateCreditUsage(Date.now())

  }


  const saveInDb = async (formData: any, slug: any, aiResp: string) => {
    if (!formData || !slug || !aiResp || !user?.primaryEmailAddress?.emailAddress) {
      // Optionally handle error or return early
      return;
    }
    await db.insert(AIOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: aiResp,
      createdBy: user.primaryEmailAddress.emailAddress,
      createdAt: moment().format('DD/MM/YYYY')
    });
      console.log(saveInDb);
  }
 


  return (
    <div className="p-10">
      <a href={"/dashboard"}>
        <Button><ArrowLeft/>Back</Button>
      </a>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-5">
        {/*Form section*/}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIcontent(v)}
          loading={loading}
        />

        {/* Output section */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
