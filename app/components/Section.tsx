import type { Section as SectionType } from '../data/linkList';
import { LinkEntry } from './LinkEntry';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export function Section({ title, slug, links }: SectionType) {
    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex justify-between items-center">
                    {title}
                    <Link
                        href={`/${slug}`}
                        className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                        View Section →
                    </Link>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {links.map((link, index) => (
                        <LinkEntry
                            key={index}
                            {...link}
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
