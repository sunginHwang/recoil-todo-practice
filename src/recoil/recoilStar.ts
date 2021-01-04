
import { selector } from 'recoil';

// 비동기 처리 셀렉터
export const recoilStarCountState = selector<number>({
    key: 'recoilStarCountState',
    get: async () => {
        const response = await fetch('https://api.github.com/repos/facebookexperimental/Recoil');
        const recoilProjectInfo = await response.json();
        return recoilProjectInfo['stargazers_count'];
    },
});
