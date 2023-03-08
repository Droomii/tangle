import useAppContext from "../context/useAppContext";
import useTangle from "../hooks/useTangle";

const Changer = () => {
    const {testValue} = useAppContext();
    const [testVal, setTestVal] = useTangle(testValue);

    const handleClickButton = () => {
        setTestVal(testVal + 1);
    }

    return (
        <div>
        <button onClick={handleClickButton}>
            {testVal}
        </button>
        </div>
    )
}

export default Changer;