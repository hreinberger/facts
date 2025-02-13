import { linkList } from '../data/linkList';
import { FullSection } from '../components/FullSection';
import { notFound } from 'next/navigation';

export default async function SectionPage(props: {
    params: Promise<{ slug: string }>;
}) {
    const params = await props.params;
    const section = linkList.find((s) => s.slug === params.slug);

    if (!section) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <main className="container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto">
                    <FullSection {...section} />
                </div>
            </main>
        </div>
    );
}

export function generateStaticParams() {
    return linkList.map((section) => ({
        slug: section.slug,
    }));
}
