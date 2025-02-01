import { linkList } from "./data/linkList"
import { Section } from "./components/Section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-100">My Discussion Links</h1>
        <div className="max-w-3xl mx-auto space-y-8">
          {linkList.map((section) => (
            <Section key={section.slug} {...section} />
          ))}
        </div>
      </main>
    </div>
  )
}

