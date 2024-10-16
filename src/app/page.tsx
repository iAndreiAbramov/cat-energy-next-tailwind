import { cn } from '@/lib/utils/cn';
import { PromoSection } from '@/app/_sections/PromoSection';
import { MotivationSection } from '@/app/_sections/MotivationSection';
import { ExplanationSection } from '@/app/_sections/ExplanationSection';
import { ExampleSection } from '@/app/_sections/ExampleSection';

export default function Home() {
	return (
		<main className={cn('pt-[65px]', 'w-full md:pt-[108px]')}>
			<PromoSection />
			<MotivationSection />
			<ExplanationSection />
			<ExampleSection />
		</main>
	);
}
