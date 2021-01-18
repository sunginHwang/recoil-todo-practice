
import { selector } from 'recoil';

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

    setTimeout(() => resolve(person), 2000);
});


const selectors = {
    personListState: selector({
        key:'SELECTOR_PREFETCH/personListState',
        get: async () => {
            const [ person1, person2 ] = await Promise.all([getPerson('1'), getPerson('2')]);
            return [person1, person2];
        },
    })
}

export default {
    selectors,
}

