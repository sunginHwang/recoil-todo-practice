import { useRecoilValueLoadable } from 'recoil';
import { githubStarCountState } from '../../recoil/recoilStar';

function GithubStar({ repoName }: { repoName: string }) {
    const starCount = useRecoilValueLoadable(githubStarCountState(repoName));

    // 로딩 상태 처리
    if (starCount.state === 'loading') {
        return <div>loading</div>
    }

    return (
        <>
            <p> {repoName} gitbub star 갯수 </p>
            <p>{starCount.contents}개</p>
        </>
    );
}

export default GithubStar;
