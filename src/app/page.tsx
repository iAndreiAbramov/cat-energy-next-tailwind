import { cn } from '@/lib/utils/cn';

export default function Home() {
	return (
		<main className={cn('pt-[65px]', 'w-full md:pt-[108px]')}>
			<span className={cn('content-container')}>Page content</span>
		</main>
	);
}
