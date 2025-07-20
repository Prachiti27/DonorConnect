import React, { useState } from 'react'

const AccordionItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='border border-primary rounded-xl mb-5 px-6 hover:bg-primary/2'>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-4 text-center"
            >
                <span className="text-lg font-medium text-primary/90">{question}</span>
                <span className="text-2xl text-primary/90 hover:cursor-pointer">{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && (
                <p className="text-primary/80 pb-4 transition-all duration-300">{answer}</p>
            )}
        </div>
    )
}

const qnas = [
    {
        Q: "Who can register as a donor?",
        A: "Anyone aged 18–65, healthy, and eligible"
    },
    {
        Q: "How do I know if my request is accepted?",
        A: "You’ll get a notification and an email."
    },
    {
        Q: "Is my data safe? ",
        A: "Yes, we use secure authentication and encrypted storage."
    },
    {
        Q: "How often can I donate blood?",
        A: "Every 3 months (male), every 4 months (female), as per health guidelines."
    }
]

const Faqs = () => {
    return (
        <div className="px-6 md:px-20 py-10">
            <h2 className='text-primary text-3xl text-center font-bold mb-10'>Frequently Asked Questions</h2>
            <div>
                {qnas.map((qna, idx) => (
                    <AccordionItem key={idx} question={qna.Q} answer={qna.A} />
                ))}
            </div>
        </div>
    )
}

export default Faqs
