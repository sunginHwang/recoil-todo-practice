import { atom, selector } from "recoil";

// 지정한 ms 만큼 지연시키는 util 입니다.
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const delayCountState = atom({
    key: 'delayCountState',
    default: 0,
});

export const delay1SecSelector = selector<string>({
    key: 'delay1SecSelector',
    get: async ({ get }) => {
        const result = `delayCountState 는 ${get(delayCountState)} 입니다.`;
        await delay(1000); // 1초씩 일부러 지연 시키도롭 합니다. (비동기 캐싱 확인 위함)
        return result;
    },
})
