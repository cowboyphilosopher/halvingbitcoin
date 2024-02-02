import NavigationBar from 'components/Navigation';
import Accordion from '../components/Accordion';



export default function FAQPage() {
  const faqData = [
    {
      question: 'I have to pay to go to this party? Why?',
      answer:
        'Yes! All funds put into the pool are used for the events. The same amount of funds will be used for each party.',
    },
    {
      question: 'How much does it cost?',
      answer:
        '5 million satoshis is the cost of the membership to be considered a Real Bitcoiner™',
    },
    // Add more FAQ items as needed
  ];

  return (

    <>
    <div className="min-h-screen w-full bg-orange-500">
      <div className="flex flex-col justify-center items-center bg-orange-500">
        <div className="relative h-1/10 w-full">
            <NavigationBar />
        </div>
        <div className="flex flex-col justify-center items-center gap-2 bg-orange-500 text-center mx-auto py-8">
            <h1 className="text-3xl font-semibold text-white">Frequently Asked Questions</h1>
            <Accordion faqData={faqData} />
        </div>
      </div>
    </div>
    </>

  );
};