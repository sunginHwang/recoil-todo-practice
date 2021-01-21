
import { atomFamily, selectorFamily, useSetRecoilState } from 'recoil';

interface IPerson {
    name: string;
    age: number;
};

type getPersonType = (name: string) => Promise<IPerson>;

const getPerson: getPersonType = (name) => new Promise(resolve => {
    console.log('callAsyncfunc : getPerson');
    const person: IPerson = {
        name,
        age: name.length * Math.random(),
    };

    setTimeout(() => resolve(person), 300);
});

const atoms = {};

const atomFamilies = {
    personNameState: atomFamily({
        key: 'personNameState',
        default: 0,
    }),
};

const selectorFamilies = {
    personState: selectorFamily<IPerson, string>({
        key: 'personState',
        get: (name) => async ({ get }) => {
            console.log('call : selectorFamilies');
            const a = get(atomFamilies.personNameState(name)); // Add request ID as a dependency
            console.log(name + '의 atom의존 값: ' + a);
            return await getPerson(name);
        },
    }),
};

const trigger = {
    useRefreshUserInfo(name: string) {
        const setTrigger = useSetRecoilState(atomFamilies.personNameState(name));
        return () => {
            console.log('call trigger ' + name);
            setTrigger((requestID: number) => requestID + 1);
        };
    },
}

export default {
    atomFamilies,
    selectorFamilies,
    trigger,
}
