import { linkList } from "../data/linkList"
import { FullSection } from "../components/FullSection"
import { notFound } from "next/navigation"

export default function SectionPage({ params }: { params: { slug: string } }) {
  const section = linkList.find((s) => s.slug === params.slug)

  if (!section) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <FullSection {...section} />
        </div>
      </main>
    </div>
  )
}

export function generateStaticParams() {
  return linkList.map((section) => ({
    slug: section.slug,
  }))
}

