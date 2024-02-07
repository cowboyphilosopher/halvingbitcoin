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
        'The cost of membership is 5 million satoshis to be considered a Real Bitcoiner™',
    },
    {
        question: 'What do I get for this?',
        answer:
          'A membership includes entry for you and a +1 to 5 distinct party events at each bitcoin halving. Ideally this includes all travel, accommodations, food and etc. The goal is a family friendly celebration of bitcoin. Like christmas and new years but for bitcoin once every halving. The events page will have more details on what to expect.',
    },
    {
        question: 'Who holds the funds?',
        answer:
          'Currently the funds are in a 3/5 multisig wallet between several of the founders. A more concrete solution will be configured soon so that members can monitor funds.',
    },
    {
        question: "What if I can't make one of the events?",
        answer:
          "In order to keep the parties equally funded, all funds are forfeit once submitted. If you can't make it that cycle then we hope to see you at the next one. You will always have a place set at the events.",
    },
    {
        question: "What happens if I die?",
        answer:
          "Memberships are transferrable and I hope having a membership becomes a sort of family legacy. We want everyone to be able to celebrate bitcoin even if members are no longer with us.",
    },
    // Add more FAQ items as needed
  ];

  return (

    <>
    <div className="min-h-screen w-full bg-orange-500">
      <div className="flex flex-col w-screen justify-center items-center bg-orange-500">
        <div className="relative h-1/10 w-screen">
            <NavigationBar />
        </div>
        <div className="flex flex-col md:w-1/2 justify-center items-center gap-2 bg-orange-500 text-center mx-auto py-8">
            <h1 className="text-3xl font-semibold text-white">Frequently Asked Questions</h1>
            <Accordion faqData={faqData} />
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="relative w-full h-1/3 md:w-2/3 flex justify-center items-center">
            <img
                  src="/images/dollars.jpeg"
                  alt="question"
            />
          </div>
        </div>
      </div>
    </div>
    </>

  );
};