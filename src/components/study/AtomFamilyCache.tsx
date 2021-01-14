import { useState, Suspense } from 'react';
import { useRecoilCallback } from 'recoil';
import PersonInfo from "./PersonInfo";
import memorizeTrigger from "../../recoil/study/memorizeTrigger";

function AtomFamilyCache() {
    const [ name, setName ] = useState('');
    const [ personList, setPersonList ] = useState<string[]>([]);
    const [ activePersonName, setActivePersonName ] = useState<string>('');

    const onClickAddPerson = () => {
        const isDuplicateName = personList.some(n => n === name);

        if (isDuplicateName) {
            alert('동명이인 존재');
            return;
        }

        setPersonList(prevState => [...prevState, name]);
        setName('');
    };

    return (
        <>
            <input value={name} placeholder='이름을 입력해주세요.' onChange={(e) => setName(e.target.value)}/>
            <button onClick={onClickAddPerson}>사람 추가</button>
            <br/>
            <div>
                {
                    personList.map((name) => {
                        return <button key={name} onClick={() => setActivePersonName(name)}>{name} 정보 불러오기</button>;
                    })
                }
            </div>
            <div>
                {
                    personList.map((name) => <ResetPerson key={name} name={name} />)
                }
            </div>
            <br />
            {
                activePersonName !== '' && (
                    <div>
                        <h2>사람정보</h2>
                        <Suspense fallback={<div>로딩중</div>}>
                            <PersonInfo name={activePersonName} />
                        </Suspense>
                    </div>
                )
            }
        </>
    );
}

function ResetPerson({ name }: { name: string }) {
    const refresh = memorizeTrigger.trigger.useRefreshUserInfo(name);
    const onPrefetch = useRecoilCallback(({ snapshot, set }) => async (name: string) => {
        console.log('onPrefetch');
        await snapshot.getPromise(memorizeTrigger.selectorFamilies.personState(name));
        // snapshot.getLoadable(memorizeTrigger.selectorFamilies.personState(name));
    });

    const onClickReset = async () => {
        await refresh();
        await onPrefetch(name);
    };

    return <button key={name} onClick={onClickReset}>{name} 정보 리셋하기</button>;
}


export default AtomFamilyCache;
