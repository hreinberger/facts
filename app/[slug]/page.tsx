import { linkList } from '../data/linkList';
import { FullSection } from '../components/FullSection';
import { notFound } from 'next/navigation';
import { ViewTransition } from 'react';

// instant = false: kept on purpose — unmatched slugs must 404 with a real
// request-time render. Streaming the notFound() check behind <Suspense>
// flushes the shell with a 200 before the 404 is known.
export const instant = false;

export default async function SectionPage(props: {
    params: Promise<{ slug: string }>;
}) {
    const params = await props.params;
    const section = linkList.find((s) => s.slug === params.slug);

    if (!section) {
        notFound();
    }

    return (
        <ViewTransition>
            <div className="min-h-screen bg-white dark:bg-gray-900">
                <main className="container mx-auto px-4 py-8">
                    <div className="max-w-3xl mx-auto">
                        <FullSection {...section} />
                    </div>
                </main>
            </div>
        </ViewTransition>
    );
}

export function generateStaticParams() {
    return linkList.map((section) => ({
        slug: section.slug,
    }));
}
