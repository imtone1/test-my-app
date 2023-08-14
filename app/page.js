'use client';

import { Headermain, Introduction, Buttons, Checkboxes, SelectMenus, RadioButtons } from '../sections'
import Lists from "@/sections/Lists"

export default function Home() {
  return (
    <main className="min-h-screen">
      
      {/* Congratulations! You found developer tools! */}
      <Headermain/>
      <Introduction/>
      <Buttons/>
      
      <Checkboxes/>
      <Lists />
      <SelectMenus/>
      <RadioButtons/>
       
    </main>
  )
}
