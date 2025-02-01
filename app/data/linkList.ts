export interface LinkEntry {
  url: string
  title: string
  description: string
}

export interface Section {
  title: string
  slug: string
  links: LinkEntry[]
}

export const linkList: Section[] = [
  {
    title: "Technology",
    slug: "tech",
    links: [
      {
        url: "https://example.com/ai-trends",
        title: "Latest AI Trends",
        description:
          "An in-depth look at the current trends in artificial intelligence, including machine learning advancements and ethical considerations in AI development.",
      },
      {
        url: "https://example.com/blockchain-future",
        title: "The Future of Blockchain",
        description:
          "Exploring the potential applications of blockchain technology beyond cryptocurrencies, including supply chain management and decentralized finance.",
      },
    ],
  },
  {
    title: "Politics",
    slug: "politics",
    links: [
      {
        url: "https://example.com/global-democracy",
        title: "State of Global Democracy",
        description:
          "A comprehensive analysis of democratic systems worldwide, examining current challenges and potential solutions for strengthening democratic institutions.",
      },
      {
        url: "https://example.com/climate-policy",
        title: "Climate Change Policies",
        description:
          "An overview of international climate change policies, their effectiveness, and the political challenges in implementing global environmental agreements.",
      },
    ],
  },
  // Add more sections as needed
]

