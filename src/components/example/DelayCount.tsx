import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { delayCountState, delay1SecSelector } from '../../recoil/delayCount';

function DelayCount() {
    const delay1Sec = useRecoilValueLoadable(delay1SecSelector);
    const [ delayCount, setDelayCountState ] = useRecoilState(delayCountState);

    if (delay1Sec.state === 'loading') {
        return <div>로딩중...</div>;
    }

    return (
        <>
            <h3>캐싱된 selector 값</h3>
            <p>{delay1Sec.contents}</p>
            <button onClick={() => setDelayCountState(delayCount + 1)}>캐싱 카운트 업</button>
            <button onClick={() => setDelayCountState(delayCount - 1)}>캐싱 카운트 다운</button>
        </>
    );
}

export default DelayCount;
