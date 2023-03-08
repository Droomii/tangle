import React from 'react';
import './App.css';
import AppContextProvider from "./context/AppContextProvider";
import Changer from "./view/Changer";
import Watcher from "./view/Watcher";

function App() {
    return (
        <div className="App">
            <AppContextProvider>
                <div style={{width: 500, height: 500, border: '1px solid gray'}}>
                    big
                    <Changer/>
                    <div style={{width: 300, height: 300, border: '1px solid gray'}}>
                        small
                        <Watcher/>
                    </div>
                </div>
            </AppContextProvider>
        </div>
    );
}

export default App;
