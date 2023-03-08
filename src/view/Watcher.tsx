import useAppContext from "../context/useAppContext";
import useTangle from "../hooks/useTangle";

const Watcher = () => {
    const {testValue} = useAppContext();
    const [testVal] = useTangle(testValue);

    return (
        <div>
            {testVal}
        </div>
    )
}

export default Watcher;