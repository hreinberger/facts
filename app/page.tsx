import { linkList } from './data/linkList';
import { Section } from './components/Section';
import { cacheLife } from 'next/cache';
import { ViewTransition } from 'react';

async function getCurrentYear() {
    'use cache';
    cacheLife('max');
    return new Date().getFullYear();
}

export default async function Home() {
    const currentYear = await getCurrentYear();

    return (
        <ViewTransition>
            <div className="min-h-screen bg-white dark:bg-gray-900">
                <main className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
                        Fakten
                    </h1>
                    <p className="text-center text-gray-900 dark:text-gray-100 mb-8 text-sm">
                        Hier gibt es Links zu Fakten, die ich in
                        Online-Diskussionen für mehr Kontext gerne anführe.
                    </p>
                    <div className="max-w-3xl mx-auto space-y-8">
                        {linkList.map((section) => (
                            <Section
                                key={section.slug}
                                {...section}
                            />
                        ))}
                    </div>
                </main>
                <footer className="text-center text-gray-400 py-4 text-xs">
                    {currentYear} Hannes Reinberger
                </footer>
            </div>
        </ViewTransition>
    );
}
