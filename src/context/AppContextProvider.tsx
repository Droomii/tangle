import {createContext, PropsWithChildren, useState} from "react";
import Quantum from "../util/Quantum";

interface IContext {
    testValue: number;
    b: string;
}

type Statify<T> = {
    [key in keyof T]: Quantum<T[key]>
}

const defaultValue: Statify<IContext> = {
    testValue: new Quantum(1),
    b: new Quantum('123')
}

export const AppContext = createContext(defaultValue);

const AppContextProvider = ({children}: PropsWithChildren) => {
    const [contextState] = useState(defaultValue);

    return <AppContext.Provider value={contextState}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;
