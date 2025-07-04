"use client"
import React from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'
import { useState } from 'react'
function Dashboard() {
  const[userSearchInput, setUserSearchInput] =useState<string>()
  return (
    <div>
      {/*search section*/}
           <SearchSection onSearchInput={(value:string)=>setUserSearchInput
            (value)} />

      {/* template section */}
      <TemplateListSection userSearchInput={userSearchInput} />
      
      
    </div>
  )
}

export default Dashboard