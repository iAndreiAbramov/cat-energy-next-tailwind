import { cn } from '@/lib/utils/cn';
import { ProductCard } from './_components/ui/ProductCard';
import { productsMocks } from '@/app/catalog/_mocks/products-mocks';
import styles from './_styles/PageCatalog.module.css';
import { MoreProductsCard } from '@/app/catalog/_components/ui/MoreProductsCard';

export default function PageCatalog() {
	return (
		<div className={cn('border-t-[1px] border-y-[#ebebeb]', 'md:border-none')}>
			<h1
				className={cn(
					'content-container',
					'py-[26px] md:py-[64px] lg:py-[74px]',
					'text-[36px] leading-none md:text-[60px]',
				)}
			>
				Каталог продукции
			</h1>
			<div
				className={cn(
					`${styles['catalog-container']}`,
					'md:grid md:grid-cols-2 md:gap-[60px]',
					'gap-x-[80px] xl:grid-cols-4',
				)}
			>
				{productsMocks.map(
					({
						productBrand,
						productPrice,
						image,
						productCategory,
						productWeight,
						productTaste,
						id,
					}) => (
						<ProductCard
							key={id}
							id={id}
							image={image}
							productBrand={productBrand}
							productCategory={productCategory}
							productWeight={productWeight}
							productTaste={productTaste}
							productPrice={productPrice}
						/>
					),
				)}
				<MoreProductsCard />
			</div>
		</div>
	);
}
