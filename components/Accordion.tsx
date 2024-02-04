import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  faqData: FAQItem[];
  buttonColor?: string;
  activeButtonColor?: string;
  textColor?: string;
}

export default function Accordion({
  faqData,
  buttonColor = 'bg-orange-500 border-2 rounded hover:border-white hover:border-2',
  activeButtonColor = 'border rounded border-white border-2 bg-orange-500',
  textColor = 'text-white',
}: AccordionProps) {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const toggleTab = (index: number) => {
    setActiveTab((prevActiveTab) => (prevActiveTab === index ? null : index));
  };

  return (
    <div className="mx-auto w-full">
      {faqData.map((faq, index: number) => (
        <div key={index} className="mb-4 w-full">
          <button
            className={`w-full flex justify-between items-center py-2 px-4 rounded-md ${buttonColor} ${textColor} ${
              activeTab === index ? activeButtonColor : ''
            }`}
            onClick={() => toggleTab(index)}
          >
            <span className="font-medium">{faq.question}</span>
            <svg
              className={`w-4 h-4 transition ${
                activeTab === index ? 'rotate-180' : ''
              }`}
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414zM10 12a1 1 0 100 2 1 1 0 000-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {activeTab === index && (
            <div className="mt-2 bg-orange-700 rounded border-white border-1 shadow-md p-4">
              <p className="text-white">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
