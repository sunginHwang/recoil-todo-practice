import { useRecoilValue } from 'recoil';
import { countState, doubleCountState } from '../recoil/count';

function ReadOnlyCount() {
    const count = useRecoilValue(countState);
    const doubleCount = useRecoilValue(doubleCountState);

    return (
        <div>
            <h2>읽기 전용 컴포넌트</h2>
            <p>카운트 {count}</p>
            <p>더블 카운트 {doubleCount}</p>
        </div>
    );
}

export default ReadOnlyCount;
