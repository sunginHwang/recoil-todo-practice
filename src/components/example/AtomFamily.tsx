import React from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {personListState, personStateFamily, selectedPersonState} from "../../recoil/family";

function AtomFamily() {
    const personList = useRecoilValue(personListState);
    return (
      <div>
          {
              personList.map((personId) => {
                  return <PersonInfo key={personId} id={personId} />
              })
          }
          <br />
          <PersonNameEdit />
      </div>
    );
}

export interface IPersonInfo {
    id: number;
}

function PersonInfo({ id } : IPersonInfo) {
    const person = useRecoilValue(personStateFamily(id));
    const onSelectPerson = useSetRecoilState(selectedPersonState);
    return (
        <div
            onClick={() => onSelectPerson(id)}
            style={{ width: '200px', height: '100px', backgroundColor: '#e4dcdc', cursor: 'pointer' }}
        >
            <p>이름: {person.name}</p>
            <p>나이: {person.age}</p>
        </div>
    )
}

function PersonNameEdit() {
    const selectedPersonId = useRecoilValue(selectedPersonState);
    const [ selectedPerson, setSelectedPerson ] = useRecoilState(personStateFamily(selectedPersonId));

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedPerson({
            ...selectedPerson,
            name: e.target.value,
        });
    };

    return (
        <div>
            <input value={selectedPerson.name} onChange={onInputChange} />
        </div>
    )
}

export default AtomFamily;
