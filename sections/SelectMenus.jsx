'use client'

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

  const htmlElements = [
    {
        id: 1,
        name: "div",
        description: "A container element used to group content and often used with CSS for styling.",
        defaultDisplay: "block"
    },
    {
        id: 2,
        name: "a",
        description: "Defines a hyperlink, which is used to link one page to another.",
        defaultDisplay: "inline"
    },
    {
        id: 3,
        name: "img",
        description: "Used to embed images in a document.",
        defaultDisplay: "inline-block"
    },
    {
        id: 4,
        name: "p",
        description: "Represents a paragraph.",
        defaultDisplay: "block"
    },
    {
        id: 5,
        name: "h1",
        description: "Represents a top-level heading. There are 6 levels of headings from h1 (highest) to h6 (lowest).",
        defaultDisplay: "block"
    },
    {
        id: 6,
        name: "ul",
        description: "Defines an unordered list. It is often used with <li> elements to list items.",
        defaultDisplay: "block"
    },
    {
        id: 7,
        name: "li",
        description: "Represents a list item, used within <ul> or <ol> elements.",
        defaultDisplay: "list-item"
    },
    {
        id: 8,
        name: "span",
        description: "An inline container element often used for styling or scripting purposes.",
        defaultDisplay: "inline"
    },
    {
        id: 9,
        name: "table",
        description: "Defines a table. Used in conjunction with elements like <tr>, <td>, and <thead> to build tables.",
        defaultDisplay: "table"
    },
    {
        id: 10,
        name: "input",
        description: "An input field where the user can enter data. Has different 'types' such as text, password, radio, and checkbox.",
        defaultDisplay: "inline-block"
    }
];


  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const SelectMenus = () => {
    const [selected, setSelected] = useState(htmlElements[0])

    return (
        <div className="bg-white py-16 sm:py-16" id='Select Menu'>
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Learn to detect select menus
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          10 common HTML elements
          </p>
        </div>
      <Listbox value={htmlElements} onChange={setSelected}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Html elements</Listbox.Label>
            <div className="relative mt-2">
              <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                <span className="inline-flex w-full truncate">
                  <span>{selected.name}</span>
                  <span className="ml-2 truncate text-gray-500">{selected.description}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>
  
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {htmlElements.map((element) => (
                    <Listbox.Option
                      key={element.name}
                      className={({ active }) =>
                        classNames(
                          active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-3 pr-9'
                        )
                      }
                      value={element}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex">
                            <span className={classNames(selected ? 'font-semibold' : 'font-normal')}>
                            {element.name}
                            </span>
                            <span className={classNames(active ? 'text-indigo-200' : 'text-gray-500', 'ml-2 truncate')}>
                             {element.description} 
                            </span>
                          </div>
  
                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
      </div>
    </div>
    )

}

export default SelectMenus