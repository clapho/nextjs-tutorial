import Image from 'next/image';
import styles from './page.module.css';
import Counter from '@/components/Counter';

export default function Home() {
	return (
		<>
			<h1>Home</h1>
			<Counter />
		</>
	);
}

// 1. 서버컴포넌트는 서버에서 실행이 된다.(app폴더 안은 기본적으로 서버사이드렌더링)
// 2. 서버에서 실행이 되서 프리 렌더링이 된 html페이지가 브라우저에게 전송 (브라우저에서 코드 실행x)
// 3. 브라우저 api 사용x, node api 사용 가능
// 상태 기억, 사용자 이벤트 처리, 컴포넌트가 브라우저에서 보여지는지?등등 - 서버컴포넌트에서 불가능
