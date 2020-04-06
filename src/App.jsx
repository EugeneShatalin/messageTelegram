import React from 'react';
import './App.module.css';
import Message from './components/Message/Message';
import NameUser from "./components/NameUser/NameUser";
import PersonalQualities from "./components/PersonalQualities/PersonalQualities";
import Input from "./components/Input/Input";


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
            <Input/>
        </div>

    );
}

export default App;