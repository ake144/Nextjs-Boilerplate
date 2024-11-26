import { Check } from 'lucide-react'

const features = [
  "Next.js 15 with App Router",
  "TypeScript for type safety",
  "Tailwind CSS for styling",
  "ESLint & Prettier for code quality",
  "Prisma ORM for database management",
  "Clerk for authentication",
  "Supabase for backend services",
  "VSCode configuration",
  "Vercel deployment ready",
  "PostCSS for advanced CSS processing",
  "shadcn/ui components"
]

export default function FeatureList() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center space-x-3">
          <Check className="h-5 w-5 text-green-500" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  )
}

