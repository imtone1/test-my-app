'use client'

import ListBasic from "../components/ListBasic"
import ListAlphabet from '../components/ListAlphabet';


const Lists = () => {
  return (
    <div className="grid grid-cols-2 gap-5 max-w-xl m-auto" id="checkboxes">
    
    
    <ListBasic />
    
    <ListAlphabet />
    </div>
  )
}

export default Lists