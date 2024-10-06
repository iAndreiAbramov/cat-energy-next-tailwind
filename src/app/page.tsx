import { Button } from '@/lib/components/ui';
import HamburgerIcon from '@/assets/icons/header/hamburger.svg';

export default function Home() {
	return (
		<>
			<Button variant="primary" text="Подобрать программу" />
			<Button variant="icon" icon={<HamburgerIcon />} />
		</>
	);
}
