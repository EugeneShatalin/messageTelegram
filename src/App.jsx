import React from 'react';
import './App.module.css';
import Message from './components/Message';
import s from './App.module.css';
import NameUser from "./components/NameUser";
import PersonalQualities from "./components/PersonalQualities";


function App() {
    let tasks = [
        {quality: "Легко обучаем"},
        {quality: "Целе устремленный"},
        {quality: "Эмоционально устойчивый"}
    ];
    return (
        <div>
            <NameUser/>
            <Message/>
            <PersonalQualities tasks={tasks}/>
        </div>

    );
}

export default App;