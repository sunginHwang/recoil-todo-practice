
import { atom, selector } from 'recoil';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const countState = atom({
    key: 'countState',
    default: 0,
});

export const inputState = atom({
    key: 'inputState',
    default: '',
});


export const doubleCountState = selector({
    key: 'doubleCountState',
    get: ({ get }) => {
      return get(countState) * 2;
    },
});

// set의 2번째 param인 인자의 타입은 state get 타입과 동일시 해야 함. (제네릭 처리 되어 있음)
export const countTitleState = selector<string>({
    key: 'countTitleState',
    get: ({ get }) => {
        return `현재 카운트는 ${get(countState)} 이고 입력값은 ${get(inputState)} 입니다.`;
    },
    set: ({ set }, newValue) => {
      console.log(newValue);
      set(countState, Number(newValue));
      set(inputState, newValue + '');
    },
});


// 비동기 처리 셀렉터
export const recoilStarSelector = selector<number>({
    key: 'asyncState',
    get: async () => {
        const response = await fetch('https://api.github.com/repos/facebookexperimental/Recoil');
        const recoilProjectInfo = await response.json();
        return recoilProjectInfo['stargazers_count'];
    },
})


// 비동기 처리 셀렉터
export const delay10Selector = selector<string>({
    key: 'asyncState',
    get: async () => {
        await delay(5000);
        return '딜레이 종료';
    },
})
