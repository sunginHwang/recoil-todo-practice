import { useRecoilState, useRecoilValue } from 'recoil';
import { recoilStarSelector, delay10Selector, delayCountState } from '../../recoil/count';

function RecoilStarCount() {
    const recoilStarCount = useRecoilValue(recoilStarSelector);
    const delay10Value = useRecoilValue(delay10Selector);
    const [ delayCount, setDelayCountState ] = useRecoilState(delayCountState);

    return (
        <>
            <p>recoil gitbub star 갯수 </p>
            <p>{recoilStarCount}개</p>
            <h3>캐싱 테스트</h3>
            <p>{delay10Value}</p>
            <button onClick={() => setDelayCountState(delayCount + 1)}>캐싱 카운트 업</button>
            <button onClick={() => setDelayCountState(delayCount - 1)}>캐싱 카운트 다운</button>
        </>
    );
}

export default RecoilStarCount;
