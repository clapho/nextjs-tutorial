export default function ProductsLoading() {
	return <p>로딩중 입니다...</p>;
}

// layout 까지는 보여주고 layout안의 실제 페이지가 보여주는 부분만 로딩으로 감싸줌
// 개발모드로 실행할 때는 SSR처럼 행동
// SSG에서는 로딩이 큰 의미가 없음
