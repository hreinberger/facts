# Facts Collection

A clean, modern web application for organizing and sharing curated links about various topics. Built with Next.js and Tailwind CSS, this project provides an easy way to create a categorized link library with descriptions.

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Managing Content

All link data is stored in the TypeScript file `app/data/linkList.ts`. The data structure is organized into sections, each containing multiple links.

### How to Add or Edit Links

To add a new link or edit existing ones:

1. Open `app/data/linkList.ts`
2. The data is organized as an array of sections, with each section having:

    - `title`: The name of the section
    - `slug`: URL-friendly version of the title (used for routing)
    - `links`: Array of link objects

3. Each link object contains:
    - `url`: The full URL to the resource
    - `title`: Title of the link
    - `description`: Brief description of the content

Example of adding a new link to an existing section:

```typescript
{
  title: 'Section Name',
  slug: 'section-name',
  links: [
    // existing links...
    {
      url: 'https://example.com/new-resource',
      title: 'Title of the New Resource',
      description: 'Brief description about what this resource contains.',
    }
  ]
}
```

To add a new section, add a new object to the `linkList` array following the same structure.

## Deployment

This project can be easily deployed on Vercel or any other Next.js-compatible hosting platform.
