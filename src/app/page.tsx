import { PromoSection } from '@/app/_sections/PromoSection';
import { MotivationSection } from '@/app/_sections/MotivationSection';
import { ExplanationSection } from '@/app/_sections/ExplanationSection';
import { ExampleSection } from '@/app/_sections/ExampleSection';

export default function Home() {
	return (
		<>
			<PromoSection />
			<MotivationSection />
			<ExplanationSection />
			<ExampleSection />
		</>
	);
}
