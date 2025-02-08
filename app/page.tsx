import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FAQ } from "@/components/FAQ"

export default function Home() {
  return (
    <div>
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl font-bold text-emerald-600 mb-4">Mental Care</h1>
            <p className="text-xl mb-6">
              We provide mental health services to help you find peace and balance in life.
            </p>
            <Button asChild>
              <Link href="/services">Learn More</Link>
            </Button>
          </div>
          <div className="md:w-1/2">
            <img src="/mental-health-support.jpg" alt="Mental Health Support" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="bg-emerald-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-emerald-600 mb-10">Services We Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <i className="fas fa-comments text-4xl text-emerald-600 mb-4"></i>
              <h3 className="text-2xl font-semibold mb-2">24/7 Chatbot Assistance</h3>
              <p className="mb-4">
                Our intelligent chatbot provides real-time mental health support, offering personalized responses to
                help you through difficult times.
              </p>
              <Button asChild>
                <Link href="/chatbot">Try Chatbot Now</Link>
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <i className="fas fa-chart-line text-4xl text-emerald-600 mb-4"></i>
              <h3 className="text-2xl font-semibold mb-2">Predictive Mental Health Insights</h3>
              <p className="mb-4">
                Analyze your mental health trends with our prediction tool. Get insights and personalized
                recommendations based on your inputs.
              </p>
              <Button asChild>
                <Link href="/predict">Get Your Report</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
    </div>
  )
}

