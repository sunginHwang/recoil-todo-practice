import { useRecoilValue } from 'recoil';
import { recoilStarSelector } from '../../recoil/count';

function RecoilStarCount() {
    const recoilStarCount = useRecoilValue(recoilStarSelector);
    return (
        <>
            <p>recoil gitbub star 갯수 </p>
            <p>{recoilStarCount}개</p>
        </>
    );
}

export default RecoilStarCount;
