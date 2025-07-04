"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import React, { useContext, useEffect, useState } from 'react'
import { eq } from 'drizzle-orm';
import { HistoryItem } from '../history/HistoryTable';
import { TotalUsageContext } from '@/(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '@/(context)/UpdateCreditUsageContext';

function UsageTrack() {
  const {user}=useUser();
  const {totalUsage,setTotalUsage}=useContext(TotalUsageContext)
  const {updateCreditUsage,setUpdateCreditUsage}=useContext(UpdateCreditUsageContext)
useEffect(()=>{
   user&& GetData();

},[user])

useEffect(()=>{
  user && GetData();
}, [updateCreditUsage, user])

const GetData = async () => {
  // @ts-ignore
  const result: HistoryItem[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));
  GetTotalUsage(result);
};

const GetTotalUsage = (result: HistoryItem[]) => {
  let total: number = 0;
  result.forEach((element: HistoryItem) => {
    total += element.aiResponse ? element.aiResponse.split(/\s+/).filter(Boolean).length : 0;
  });
  setTotalUsage(total)
  console.log('total=', total);
};

  

  return (
    <div className='m-5'>
        <div className='bg-amber-700 text-white p-3 rounded-lg'>
            <h2 className='font-medium'> Credits</h2>
            <div className='h-2 bg-amber-50 w-full rounded-full mt-3'>
                <div className='h-2 bg-black rounded-full'
                style={{
                    width:(totalUsage/10000)*100+"%"
                }}>

                </div>

            </div>
            <h2 className='text-sm font-medium my-2'>{totalUsage}/10000 credits used</h2>
        </div>
        <Button className='w-full my-3 bg-amber-700'>Upgrade</Button>

    </div>
  )
}

export default UsageTrack