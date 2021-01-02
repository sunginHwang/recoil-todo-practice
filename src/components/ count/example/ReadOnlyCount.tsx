import { useRecoilValue } from 'recoil';
import { countState } from '../../../recoil/count';

function ReadOnlyCount() {
    const count = useRecoilValue(countState); // 구독하는 atom 의 값만 반환

    return (
        <div>
            <h2>읽기 전용 컴포넌트</h2>
            <p>카운트 {count}</p>
        </div>
    );
}

export default ReadOnlyCount;
