import type { Section as SectionType } from "../data/linkList"
import { LinkEntry } from "./LinkEntry"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function FullSection({ title, links }: SectionType) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-gray-100">{title}</CardTitle>
        <Link href="/" className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200">
          ← Back to All Sections
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {links.map((link, index) => (
            <LinkEntry key={index} {...link} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

