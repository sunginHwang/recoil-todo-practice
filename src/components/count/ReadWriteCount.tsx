import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countState, doubleCountState } from '../../recoil/count';

function ReadWriteCount() {
    const [ count, setCount ] = useRecoilState(countState);
    const setCountWithSetRecoilState = useSetRecoilState(countState);
    const doubleCount = useRecoilValue(doubleCountState);

    return (
        <div>
            <h2>읽기 쓰기 카운트 컴포넌트</h2>
            <p>카운트 {count}</p>
            <p>더블 카운트 {doubleCount}</p>
            <button onClick={() => setCount(count + 1)}>숫자 증가</button>
            <button onClick={() => setCount(count - 1)}>숫자 감소</button>
            <button onClick={() => setCountWithSetRecoilState(0)}>숫자 0으로 초기화 (useSetRecoilState) 사용</button>
        </div>
    );
}

export default ReadWriteCount;
