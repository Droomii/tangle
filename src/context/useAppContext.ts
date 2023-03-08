import {useContext} from "react";
import {AppContext} from "./AppContextProvider";

const useAppContext = () => {
    return useContext(AppContext);
}

export default useAppContext;