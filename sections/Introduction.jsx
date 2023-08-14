'use client'

import React from 'react'

const Introduction = () => {
  return (
    <div className="bg-white px-6 py-16 sm:py-16 lg:px-8" id="Idea behind">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Idea behind this website</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          On this site you will see different html components. The website was developed to study basic functionalities of Playwright but you are free to use any testing tool you like.
        </p>
        <p className="mt-2 text-lg leading-8 text-gray-600">
        You can also contribute to the development of this website. Your insights and test results are highly valued and can be shared on the  <a href="">GitHub repository</a>. 

        </p>
      </div>
    </div>
  )
}

export default Introduction