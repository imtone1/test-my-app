'use client'

import { useState } from 'react'
import { Modals } from '../sections'


const Buttons = () => {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')

const handleClick = (logtext) => {
  console.log(logtext);
  setOpen(true)
  setText(logtext)
  
};
  return (
    <div className="bg-white py-16 sm:py-16" id="buttons">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Learn to detect buttons
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            In this section you see different kinds of buttons. Try to detect and click on them with Playwright. You can see some clues on the buttons.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-2xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <button
                    type="button"
                    id='oneclick_button'
                    onClick={() => handleClick(`You clicked One click -button`)}
                    className={`rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
>                   One click
                </button>
                  
                </dt>
                
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <button
                    type="button"
                    id='twoclick_button'
                    onDoubleClick={() => handleClick("You clicked Two click -button") }
                    className={`rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
>                   Two click
                </button>
                  
                </dt>

                <dt className="text-base font-semibold leading-7 text-gray-900 hover:translate-y-16">
                  <button
                    type="button"
                    id='mover_button'
                    onClick={() => handleClick("You clicked Mover -button")}
                    className={` rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
>                   Mover
                </button>
                  
                </dt>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <button
                    type="button"
                    id='disabled_button'
                    disabled
                    onClick={() => handleClick(`Wau, you clicked Disabled button!`)}
                    className={`rounded-md bg-gray-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
>                   Disabled
                </button>
                  
                </dt>
                
          </dl>
        </div>
      </div>
      <Modals open={open} setOpen={setOpen} text={text}/>
    </div>
  )
}

export default Buttons