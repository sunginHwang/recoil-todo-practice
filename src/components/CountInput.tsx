import { useRecoilState } from 'recoil';
import { inputState, countTitleState } from '../recoil/count';

function CountInput() {
    const [ countTitle, setCountTitle ] = useRecoilState(countTitleState);
    const [ inputValue, setInput ] = useRecoilState(inputState);

    return (
        <div>
            <h1>{countTitle}</h1>
            <input value={inputValue} onChange={(e) => setInput(e.target.value)} />
            <br/>
            <button onClick={() => setCountTitle('setTitle')}>리셋(selector set 테스트)</button>
        </div>
    );
}

export default CountInput;
