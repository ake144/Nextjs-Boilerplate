import Link from 'next/link'
import { Github, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import FeatureList from '@/components/feature-list'
import TechStack from '@/components/tech-stack'
import ProTemplate from '@/components/pro-template'


export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Next.js 15 Boilerplate
            </h1>
            <p className="mt-4 text-xl">
              The ultimate starter template for your next web project
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Button asChild>
                <Link href="https://github.com/yourusername/your-repo" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> Clone Repo
                </Link>
              </Button>
              <Button variant="outline" className='text-black'>
                <Link href="https://github.com/yourusername/your-repo" target="_blank" rel="noopener noreferrer">
                  <Star className="mr-2 h-4 w-4 " /> Star Repo
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
            <FeatureList />
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Tech Stack</h2>
            <TechStack />
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold">Ready to supercharge your development?</h2>
            <p className="mt-4 text-xl">
              Star our repo and clone it to get started with the most developer-friendly Next.js boilerplate!
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Button asChild size="lg">
                <Link href="https://github.com/yourusername/your-repo" target="_blank" rel="noopener noreferrer">
                  <Star className="mr-2 h-5 w-5" /> Star on GitHub
                </Link>
              </Button>
              <Button variant="outline" size="lg" className='text-black'>
                <Link href="https://github.com/yourusername/your-repo" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" /> Clone Repository
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pro Template Section */}
        <ProTemplate />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p>© 2024 Next.js 15 Boilerplate. All rights reserved.</p>
          <div className="mt-4">
            <Link href="#" className="text-gray-400 hover:text-white mx-2">
              Terms
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white mx-2">
              Privacy
            </Link>
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

