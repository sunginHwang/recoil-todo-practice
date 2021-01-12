import { useRecoilValue } from 'recoil';
import memorizeTrigger from '../../recoil/study/memorizeTrigger';


function PersonInfo({ name }: {name: string}) {
    const person = useRecoilValue(memorizeTrigger.selectorFamilies.personState(name));
    const refresh = memorizeTrigger.trigger.useRefreshUserInfo(name);

    return (
        <div>
            <p>이름: ${person.name}</p>
            <p>나이: ${person.age}</p>
            <button onClick={refresh}>정보 초기화</button>
            <br/>
            <br/>
        </div>
    );
}

export default PersonInfo;
