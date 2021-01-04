
import { atom, atomFamily } from 'recoil';
interface IPerson {
    name: string;
    age: number;
};
const personList: IPerson[] = [
    {
        name: '성인',
        age: 31,
    },
    {
        name: '혜진',
        age: 30,
    },
    {
        name: '유진',
        age: 32,
    },
];


export const personListState = atom({
    key: 'personListState',
    default: [0, 1, 2],
})

export const selectedPersonState = atom({
    key: 'selectedPersonState',
    default: 0,
})

export const personStateFamily = atomFamily({
    key: 'personStateFamily',
    default: (id: number) => personList[id],
});
