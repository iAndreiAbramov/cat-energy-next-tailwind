import { cn } from '@/lib/utils/cn';
import { PromoSection } from '@/app/_sections/PromoSection/PromoSection';

export default function Home() {
	return (
		<main className={cn('pt-[65px]', 'w-full md:pt-[108px]')}>
			<PromoSection />
		</main>
	);
}
