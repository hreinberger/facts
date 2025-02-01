import type { LinkEntry as LinkEntryType } from "../data/linkList"

export function LinkEntry({ url, title, description }: LinkEntryType) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">
        <a
          href={url}
          className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

