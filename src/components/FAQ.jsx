import { useState } from "react";

const faqs = [
    {
        question: 'How can I get a consultation for my home decor?',
        answer: (
            <>
                I offer three different services, both available on {' '}
                <a 
                    href="https://stan.store/niktamoradi"
                    target= "_blank"
                    rel= "noopener noreferrer"
                    className="text-green hover:text-cream transition-colors duration-300"
                >
                    stan.store/niktamoradi
                </a>
                .
            </>
        )
    },
    {
        question: "what is your rate for designing my house or any other project?",
        answer: "Rates vary based on several details of your project. To get a quote, fill out the inquiry form and I'll get back to you within 72 hours."
    },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-[#1c2b1e] px-6 py-16 md:px-16">
        <div className="max-w-2xl">
            <p className="text-green-md text-xs tracking-widest uppercase mb-4 flex items-center gap-3">
                <span className="w-6 h-[0.5px] bg-green-md" />
                FAQ
            </p>
            <h2 className="text-cream text-3xl font-medium tracking-tight mb-8">
                Frequently asked
            </h2>

            <div className="flex flex-col">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="border-b border-green-md/15 py-5 cursor-pointer"
                    >
                        <div className="flex justify-between items-center gap-4">
                            <span className="text-cream text-sm md:text-base font-medium">
                                {faq.question}
                            </span>
                            <span className={`text-green-md text-lg transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                                +
                            </span>
                        </div>
                        {openIndex === index && (
                            <p className="text-cream/55 text-sm leading-relaxed mt-3">
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}