import React from 'react';
import { useRecoilValue } from 'recoil';
import { recoilStarCountState } from '../../recoil/recoilStar';
import withSuspense from "../../hoc/withSuspense";

interface SuspenseType {
    useSuspense?: boolean;
}


interface ISuspenseeAsync extends SuspenseType{

}

function SuspenseAsync({}: ISuspenseeAsync) {
    const starCount = useRecoilValue(recoilStarCountState);
    return <p>{starCount}12</p>;
}

export default withSuspense<SuspenseType>(SuspenseAsync, <div>로딩중</div>);
