import { cn } from '@/lib/utils/cn';
import { ProgramForm } from '@/app/program/_components/ui/ProgramForm';

export default function PageProgram() {
	return (
		<div
			className={cn(
				'content-container',
				'md:mx-[40px] xl:mx-0',
				'border-t-[1px] border-t-[#d9d9d9]',
			)}
		>
			<h1 className={cn('mb-[36px] mt-[28px]', 'text-[36px]/[100%]')}>Подбор программы</h1>
			<span className={cn('block', 'mb-[40px]', 'text-[14px]/[129%] uppercase')}>
				Заполните анкету, и мы подберем <br /> программу питания для вашего кота
			</span>
			<ProgramForm />
		</div>
	);
}
