import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqData = [
  {
    question: "What is mental health?",
    answer:
      "Mental health refers to your emotional, psychological, and social well-being. It affects how we think, feel, and act, and helps determine how we handle stress, relate to others, and make choices.",
  },
  {
    question: "How can a chatbot help with mental health?",
    answer:
      "Our chatbot offers immediate, automated responses to your mental health queries. It can provide support, information, and coping strategies 24/7, making it a valuable tool for managing your mental well-being.",
  },
  {
    question: "How does the prediction tool work?",
    answer:
      "Our prediction tool uses your input data to generate insights about your mental health trends. By analyzing patterns in your responses over time, it can help identify potential areas of concern and suggest personalized strategies for improvement.",
  },
  {
    question: "Is my data safe with your services?",
    answer:
      "Yes, we prioritize your privacy and security. Your data is encrypted and stored securely. We adhere to strict data protection regulations and never share your personal information without your explicit consent.",
  },
  {
    question: "Can I access services without creating an account?",
    answer:
      "Yes, many of our services, including the chatbot, are available without needing to create an account. However, creating an account allows for personalized experiences and the ability to track your progress over time.",
  },
  {
    question: "What should I do in a mental health crisis?",
    answer:
      "If you are experiencing a mental health crisis, please contact emergency services immediately. Our website is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of qualified health providers with any questions you may have regarding a medical condition.",
  },
]

export function FAQ() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-emerald-600 mb-10">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

