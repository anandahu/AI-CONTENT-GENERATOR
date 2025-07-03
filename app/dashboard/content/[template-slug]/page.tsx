"use client";
import React from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Link } from "lucide-react";
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
  const GenerateAIcontent=(FormData:any)=>{

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
        />

        {/* Output section */}
        <div className="col-span-2">
          <OutputSection />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
