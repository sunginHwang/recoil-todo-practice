import React, { useState, Suspense } from 'react';
import {useRecoilCallback, useRecoilValue} from 'recoil';
import memorizeTrigger from "../../recoil/study/memorizeTrigger";

function SelectorPrefetch() {
    const [ isShowSelector, setIsShowSelector ] = useState(false);


    const onPrefetchSelector = useRecoilCallback(({ snapshot }) => async () => {
        snapshot.getLoadable(memorizeTrigger.selectors.personListState);
    });

    return (
        <>
            <div>
                <button onClick={() => onPrefetchSelector()}>셀렉터 prefetch 하기</button>
                <button onClick={() => setIsShowSelector(true)}>셀렉터 보여주기</button>
                {
                    isShowSelector && (
                        <Suspense fallback={<div>로딩중</div>} >
                            <SelectorList />
                        </Suspense>
                    )
                }
            </div>
        </>
    );
}

export default SelectorPrefetch;

function SelectorList() {
    const personList = useRecoilValue(memorizeTrigger.selectors.personListState);

    return (
        <>
            {
                personList.map((person) => {
                    return (
                        <div key={person.name}>
                            <p>이름: {person.name}</p>
                            <p>나이: {person.age}</p>
                        </div>
                    );
                })
            }
        </>
    );
}
