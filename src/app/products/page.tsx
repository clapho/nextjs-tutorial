import { getProducts } from '@/service/products';
import Link from 'next/link';
import styles from './page.module.css';

// export const revalidate = 3;

const ProductsPage = async () => {
	const products = await getProducts();
	const res = await fetch('https://meowfacts.herokuapp.com', {
		// revalidate: 0 or cache: 'no-store' 은 서버사이드렌더링
		next: { revalidate: 3 },
	});
	const data = await res.json();
	const factText = data.data[0];

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
			<article className={styles.article}>{factText}</article>
		</>
	);
};

export default ProductsPage;
