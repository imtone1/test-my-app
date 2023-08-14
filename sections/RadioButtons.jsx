'use client'

import { useState } from 'react'
import Alerts from '../components/Alerts'
const websiteTestingQuiz = [
    {
        id: 1,
        question: "Which of the following is NOT a common type of website testing?",
        choices: [
            "A. Load Testing",
            "B. Color Testing",
            "C. Usability Testing"
        ],
        correctAnswer: "B. Color Testing"
    },
    {
        id: 2,
        question: "What is the primary purpose of A/B testing?",
        choices: [
            "A. Comparing two website versions to see which performs better",
            "B. Checking the website's compatibility on different devices",
            "C. Identifying broken links on the website"
        ],
        correctAnswer: "A. Comparing two website versions to see which performs better"
    },
    {
        id: 3,
        question: "Which type of testing ensures a website works well on various devices and browsers?",
        choices: [
            "A. Performance Testing",
            "B. Usability Testing",
            "C. Cross-browser Testing"
        ],
        correctAnswer: "C. Cross-browser Testing"
    }
]


const RadioButtons = () => {
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [open, setOpen] = useState(false);
    const [alertText, setAlertText] = useState('');

    const handleChoiceSelection = (questionId, selectedChoice) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionId]: selectedChoice
        });

        const question = websiteTestingQuiz.find(item => item.id === questionId);
        if (question.correctAnswer === selectedChoice) {
            setAlertText('Congratulations! Correct answer.');
            setOpen(true);
            console.log('Congratulations! Correct answer.');
        } else {
            setAlertText('Try again.');
            setOpen(false);
            console.log('Try again.')
        }
    };
    return (
        
        <div className="bg-white py-16 sm:py-16" id="radio buttons">
            {open && <Alerts open={open} setOpen={setOpen} text={alertText} />}
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Learn to detect radio buttons
          </h2>
          <p className="my-6 text-lg leading-8 text-gray-600">
          Quiz centered around website testing 
          </p>
        </div>
            {websiteTestingQuiz.map((item) => (
            <div key={item.id} className="my-8">
              <label className="text-base font-semibold text-gray-900">{item.question}</label>
             
              <fieldset className="mt-4">
                <legend className="sr-only">Question about testing</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                  {item.choices.map((choice) => (
                    <div key={choice} className="flex items-center bg-slate-200 p-1 px-2">
                      <input
                        id={choice}
                        name={`question-${item.question}`}
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        onChange={() =>  handleChoiceSelection(item.id, choice)}
                      />
                      <label htmlFor={choice} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                        {choice}
                      </label>
                    </div>
                 ))}
                </div>
              </fieldset>
              </div>
              ))}
        </div>
        </div>
      )
}

export default RadioButtons