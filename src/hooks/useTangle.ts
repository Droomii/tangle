import Quantum from "../util/Quantum";
import {useEffect, useState} from "react";

const useTangle = <T>(channel: Quantum<T>): [T, (val: T) => void] => {
    const [state, setState] = useState(channel.value);
    useEffect(() => {
        channel.tangle(setState);

        return () => {
            channel.untangle(setState);
        }
    }, [channel])

    return [state, channel.set];
}

export default useTangle;