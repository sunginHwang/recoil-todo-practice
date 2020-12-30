
import { atom, selector } from 'recoil';

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

export const countTitleState = selector({
    key: 'countTitleState',
    get: ({ get }) => {
        return `현재 카운트는 ${get(countState)} 이고 입력값은 ${get(inputState)} 입니다.`;
    },
    set: ({ set }) => {
      set(countState, 0);
      set(inputState, '');
    },
});
