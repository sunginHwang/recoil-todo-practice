import { useRecoilValueLoadable } from 'recoil';
import { recoilStarCountState } from '../../recoil/recoilStar';

function RecoilStarCount() {
    const recoilStarCount = useRecoilValueLoadable(recoilStarCountState);

    // 로딩 상태 처리
    if (recoilStarCount.state === 'loading') {
        return <div>loading</div>
    }

    return (
        <>
            <p>recoil gitbub star 갯수 </p>
            <p>{recoilStarCount.contents}개</p>
        </>
    );
}

export default RecoilStarCount;
