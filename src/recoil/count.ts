
import { atom, selector } from 'recoil';

export const countState = atom({
    key: 'countState',
    default: 0,
});

export const inputState = atom({
    key: 'inputState',
    default: '',
});

// set의 2번째 param인 인자의 타입은 state get 타입과 동일시 해야 함. (제네릭 처리 되어 있음)
export const countInputState = selector<string>({
    key: 'countTitleState',
    get: ({ get }) => {
        return `현재 카운트는 ${get(countState)} 이고 입력값은 ${get(inputState)} 입니다.`;
    },
    set: ({ set }, newValue) => { // 2번째 파라미터 에는 추가로 받을 인자를 나타냅니다.
        set(countState, Number(newValue)); // count atom 수정
        set(inputState, newValue + ''); // input atom 수정
    },
});
