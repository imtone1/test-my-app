'use client'

const motivations = [
    {
      name: 'Passion for Problem Solving',
      text: 'Many developers are inherently motivated by the challenge of solving complex problems, and coding provides an avenue to tackle and overcome these challenges.'
    },
    {
      name: 'Continuous Learning',
      text: 'The tech industry is always evolving, offering endless opportunities for developers to learn new technologies, languages, and methodologies. This constant evolution can be a significant motivational factor.'
    },
    {
      name: 'Recognition and Appreciation',
      text: 'Being recognized for one\'s efforts, either through peer appreciation, awards, or promotions, can be a powerful motivator.'
    },
    {
      name: 'Impact and Contribution',
      text: 'Knowing that their work has a direct impact on users or the business can motivate developers. This might be through creating a popular app, improving system efficiency, or even contributing to open-source projects that benefit many.'
    },
    {
      name: 'Collaboration',
      text: 'Working in a team where ideas are exchanged, and collaborative coding sessions (like pair programming) are encouraged can be motivating. Positive team dynamics and feeling part of a community can drive productivity.'
    },
    {
      name: 'Autonomy',
      text: 'The freedom to choose the tools, technologies, or methodologies to get the job done can be a significant motivator. Developers often thrive when they have the autonomy to approach problems in ways they deem best.'
    },
    {
      name: 'Career Advancement',
      text: 'Opportunities for growth, whether in terms of technical depth (becoming an expert in a specific area) or breadth (moving into leadership roles or new tech domains), can motivate developers to excel in their roles.'
    },
    {
      name: 'Competitive Compensation',
      text: 'While money isn\'t the only motivator, competitive salaries and benefits are undeniably factors that can motivate developers.'
    },
    {
      name: 'Flexible Work Environment',
      text: 'Options like remote work, flexible hours, and a comfortable work environment can make a big difference in motivation. The COVID-19 pandemic made remote work more standard, and many developers found motivation in the work-life balance it offered.'
    },
    {
      name: 'Purpose and Alignment with Values',
      text: 'Working on projects that align with a developer\'s personal values or broader societal goals can be a strong motivator. For instance, developers might be motivated to work on software that addresses environmental issues, promotes education, or supports charitable causes.'
    }
  ];
  

const ListBasic = () => {
    return (
        <>
        <div className="mx-auto max-w-2xl lg:text-center ml-6">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Motivators for Software Developers
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Motivation factors can vary from one developer to another, but here are ten positive things that commonly motivate software developers
          </p>
        </div>
        <ul role="list" className="mr-2 divide-y divide-gray-100">
        {motivations.map((motivation) => (
          <li key={motivation.name} className="flex gap-x-4 py-5">
             <input
                  id={motivation.name}
                  aria-describedby="checkbox_vs._radio-description"
                  name={motivation.name}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
            <div className="min-w-0">
              <p className="text-sm font-semibold leading-6 text-gray-900">{motivation.name}</p>
              <p className="mt-1 text-xs leading-5 text-gray-500">{motivation.text}</p>
            </div>
          </li>
        ))}
      </ul>
      </>
    )
  }
  
  export default ListBasic