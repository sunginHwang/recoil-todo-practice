
import {atom, atomFamily, selectorFamily, useSetRecoilState} from 'recoil';

interface IPerson {
    name: string;
    age: number;
};

type getPersonType = (name: string) => Promise<IPerson>;
const getPerson: getPersonType = (name) => new Promise(resolve => {
    const person: IPerson = {
        name,
        age: name.length * 10,
    };

    setTimeout(() => resolve(person), 300);
});

const atoms = {
    personKeyListState: atom({
        key: 'personKeyListState',
        default: [],
    }),

}

const atomFamilies = {
    personNameState: atomFamily({
        key: 'personNameState',
        default: '',
    }),
};

const selectorFamilies = {
    personState: selectorFamily<IPerson, string>({
        key: 'personState',
        get: (name) => async ({get}) => {
            get(atomFamilies.personNameState(name)); // Add request ID as a dependency
            return await getPerson(name);
        },
    }),
};

const trigger = {
    useRefreshUserInfo(name: string) {
        const setTrigger = useSetRecoilState(atomFamilies.personNameState(name));
        return () => {
            setTrigger((name:string) => `${name}-`);
        };
    },
}

export default {
    atoms,
    atomFamilies,
    selectorFamilies,
    trigger,
}

