import { useState, Suspense } from 'react';
import PersonInfo from "./PersonInfo";

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
            {
                personList.map((name) => {
                    return <button key={name} onClick={() => setActivePersonName(name)}>{name} 정보 불러오기</button>;
                })
            }
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




export default AtomFamilyCache;
