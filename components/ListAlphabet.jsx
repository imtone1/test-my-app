'use client'

const motivationToStudy = {
    Planning: [
        {
            id: 1,
            name: 'Goal Setting',
            description: 'Set specific, measurable, achievable, relevant, and time-bound (SMART) goals for your ICT studies.'
        },
        {
            id: 2,
            name: 'Visual Inspiration',
            description: 'Create a vision board with pictures and quotes related to your ICT aspirations.'
        },
        {
            id: 6,
            name: 'Regular Breaks',
            description: 'Take regular breaks during study sessions to avoid burnout.'
        },
        {
            id: 7,
            name: 'Reward System',
            description: 'Set up a reward system for yourself after completing certain milestones.'
        },
        {
            id: 8,
            name: 'Study Environment',
            description: 'Create a dedicated, distraction-free study environment.'
        },
        {
            id: 25,
            name: 'Consistent Routine',
            description: 'Set a daily or weekly routine for studying to build a habit.'
        },
        {
            id: 28,
            name: 'Limit Distractions',
            description: 'Keep distractions like social media at bay during study hours.'
        }
    ],
    Community: [
        {
            id: 3,
            name: 'Study Groups',
            description: 'Form or join study groups to collaborate and learn together.'
        },
        {
            id: 4,
            name: 'Tech Meetups',
            description: 'Attend tech meetups to stay updated and get inspired by industry professionals.'
        },
        {
            id: 15,
            name: 'Mentorship',
            description: 'Find a mentor in the ICT field to guide and inspire you.'
        },
        {
            id: 14,
            name: 'Online Communities',
            description: 'Join online forums and communities related to ICT topics you`re studying.'
        },
        {
            id: 18,
            name: 'Networking',
            description: 'Network with professionals and peers in the ICT domain to gain perspective.'
        },
        {
            id: 20,
            name: 'Teach Others',
            description: 'Sharing knowledge helps reinforce your own understanding. Teach peers what you learn.'
        },
        {
            id: 21,
            name: 'Challenges and Competitions',
            description: 'Participate in coding challenges and tech competitions.'
        }
    ],
    Learning: [
        {
            id: 9,
            name: 'Tutorials and Workshops',
            description: 'Enroll in hands-on tutorials and workshops to gain practical knowledge.'
        },
        {
            id: 11,
            name: 'Podcasts and Webinars',
            description: 'Listen to tech-related podcasts and webinars to gain insights and stay updated.'
        },
        {
            id: 13,
            name: 'Tech Blogs',
            description: 'Follow tech blogs to stay updated with the latest trends and technologies.'
        },
        {
            id: 22,
            name: 'Gamified Learning',
            description: 'Use gamified platforms to make learning more interactive and fun.'
        },
        {
            id: 23,
            name: 'Diverse Learning Materials',
            description: 'Use a mix of books, online courses, videos, and other materials to enrich learning.'
        },
        {
            id: 12,
            name: 'Real-world Projects',
            description: 'Work on real-world projects to apply what you learn.'
        },
        {
            id: 24,
            name: 'Real-life Application',
            description: 'Relate your studies to real-life applications and scenarios.'
        }
    ],
    Inspiration: [
        {
            id: 5,
            name: 'Success Stories',
            description: 'Read success stories of people who excelled in the ICT field.'
        },
        {
            id: 10,
            name: 'Stay Curious',
            description: 'Always ask questions and seek answers. The tech world is vast and full of wonders.'
        },
        {
            id: 16,
            name: 'Stay Organized',
            description: 'Use tools and apps to keep your study schedule and resources organized.'
        },
        {
            id: 17,
            name: 'Feedback',
            description: 'Regularly get feedback on your work to understand areas of improvement.'
        },
        {
            id: 19,
            name: 'Stay Updated',
            description: 'Technology evolves rapidly. Regularly update your curriculum or resources.'
        },
        {
            id: 26,
            name: 'Healthy Lifestyle',
            description: 'A balanced diet, regular exercise, and adequate sleep can enhance your study efficiency.'
        },
        {
            id: 27,
            name: 'Stay Positive',
            description: 'Maintain a positive mindset. Every expert was once a beginner.'
        },
        {
            id: 30,
            name: 'Future Prospects',
            description: 'Remind yourself of the vast opportunities and prospects in the ICT field to stay motivated.'
        }
    ]
};



const ListAlphabet = () => {
    return (
        <>
        <div className="mx-auto max-w-2xl lg:text-center ml-6" >
          <h2 className="mt-2  text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ways to motivate yourself
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Listing 30 ideas to motivate oneself to study Information and Communication Technology (ICT)
          </p>
        </div>
<div className=" overflow-y-auto max-h-80" aria-label="motivationToStudy">
      {Object.keys(motivationToStudy).map((reason) => (
        <div key={reason} className="relative">
          <div className="sticky top-0 z-10 border-y border-b-gray-200 border-t-gray-100 bg-gray-50 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900">
            <h3>{reason}</h3>
          </div>
          <ul role="list" className="divide-y divide-gray-100">
            {motivationToStudy[reason].map((motivation) => (
              <li key={motivation.name} className="flex gap-x-4 px-3 py-5">
                 <input
                  id={motivation.name}
                  aria-describedby="checkbox_vs._radio-description"
                  name={motivation.name}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{motivation.name}</p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">{motivation.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </>
)
            }

export default ListAlphabet