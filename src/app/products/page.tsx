import { getProducts } from '@/service/products';
import Link from 'next/link';

export const revalidate = 3;

const ProductsPage = async () => {
	const products = await getProducts();
	return (
		<>
			<h1>제품 소개 페이지</h1>
			<ul>
				{products.map(({ id, name }, index) => (
					<li key={index}>
						<Link href={`products/${id}`}>{name}</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default ProductsPage;
