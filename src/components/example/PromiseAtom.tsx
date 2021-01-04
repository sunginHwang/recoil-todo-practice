import { useRecoilValueLoadable } from 'recoil';
import { promiseCountState } from '../../recoil/count';

function PromiseAtom() {
    const count = useRecoilValueLoadable(promiseCountState);

    if (count.state === 'loading') {
        return <div>로딩중</div>;
    }

    return (
        <div>
            <p>Promise 반환하는 atom {count.contents}</p>
        </div>
    );
}

export default PromiseAtom;
