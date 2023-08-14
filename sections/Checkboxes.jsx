'use client'

const Checkboxes = () => {
    return (
      <div className="bg-white py-24 sm:py-32" id="checkboxes">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Learn to detect checkboxes
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Checkboxes might seem simple at a first glance, but they have quite a rich context and some intriguing aspects. Here are some interesting facts about checkboxes.
          </p>
        <fieldset className="mx-auto mt-16 max-w-2xl sm:mt-16 lg:mt-16 lg:max-w-2xl">
          <legend className="sr-only">Notifications</legend>
          <div className="space-y-5">
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  id="differences"
                  aria-describedby="differences-description"
                  name="differences"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="differences" className="font-medium text-gray-900">
                  Cultural Differences
                </label>{' '}
                <span id="differences-description" className="text-gray-500">
                  <span className="sr-only">New comments </span>: In some cultures or contexts, the checkmark symbol (✓) means &quot;correct&quot; or &quot;yes,&quot; while in others, it might mean &quot;no&quot; or &quot;incorrect.&quot; While this doesn&apos;t directly impact the digital checkbox&apos;s function, it&apos;s an interesting note on how symbols can have different meanings in different cultures.
                </span>
              </div>
            </div>
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  id="triState"
                  aria-describedby="triState-description"
                  name="triState"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="triState" className="font-medium text-gray-900">
                TriState Checkboxes
                </label>{' '}
                <span id="triState-description" className="text-gray-500">
                  <span className="sr-only">TriState Checkboxes </span>: While most checkboxes have two states (checked and unchecked), some GUI environments support a third state, often represented as a square or shaded checkbox. This &quot;indeterminate&quot; state is used when the checkbox&apos;s true state is ambiguous or in a &quot;neither checked nor unchecked&quot; state. A common use case is in tree structures, where a parent node with some selected and some unselected child nodes might be in an indeterminate state.
                </span>
              </div>
            </div>
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  id="checkbox_vs._radio"
                  aria-describedby="checkbox_vs._radio-description"
                  name="checkbox_vs._radio"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="checkbox_vs._radio" className="font-medium text-gray-900">
                Checkbox vs. Radio Button
                </label>{' '}
                <span id="checkbox_vs._radio-description" className="text-gray-500">
                  <span className="sr-only">Checkbox vs. Radio Button </span>: They may appear similar, but they have distinct uses. Checkboxes allow for multiple selections, while radio buttons require a single selection within a grouped set. This distinction mirrors real-life scenarios: checkboxes are like choosing toppings on a pizza (you can have more than one), while radio buttons are like choosing a pizza size (small, medium, or large).
                </span>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      </div>
      </div>
    )
  }
  
export default Checkboxes