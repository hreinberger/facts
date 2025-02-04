import type { LinkEntry as LinkEntryType } from '../data/linkList';

export function LinkEntry({ url, title, description }: LinkEntryType) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">
        <a
          href={url}
          className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="inline-block ml-2 size-5 text-gray-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
