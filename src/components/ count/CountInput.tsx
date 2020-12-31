import { useRecoilState, useResetRecoilState } from 'recoil';
import { inputState, countTitleState, countState } from '../../recoil/count';

function CountInput() {
    const [ countTitle, setCountTitle ] = useRecoilState(countTitleState);
    const [ inputValue, setInput ] = useRecoilState(inputState);
    // 해당 요소의 기본값으로 reset 시키는 역활
    const resetState = useResetRecoilState(countState);

    return (
        <div>
            <h1>{countTitle}</h1>
            <input value={inputValue} onChange={(e) => setInput(e.target.value)} />
            <br/>
            <button onClick={() => setCountTitle('12121')}>12121로 리셋(selector set 테스트)</button>
            <button onClick={() => resetState()}>카운트 정보 리셋(useResetRecoilState reset 테스트)</button>
        </div>
    );
}

export default CountInput;
