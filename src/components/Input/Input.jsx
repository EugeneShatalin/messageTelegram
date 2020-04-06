import s from "./Input.module.css";
import React from "react";

/*домашка от меня №3: создать компоненту, у которой:
    - есть спан с числом, инпут и кнопка
- + при нажатии на кнопку число в спане увеличивается на 1
- + при нажатии на кнопку вызывается алерт с приветствием имени, введённым в инпуте
- + при нажатии на кнопку инпут должен очиститься
(!!! обязательно проверить работу самому !!!)*/

class Input extends React.Component {

    inputChange = React.createRef();

    clickChange = () => {
        alert(`Hi, ${this.inputChange.current.value}`);
        this.inputChange.current.value = "";
        let newNumber = this.state.number + 1;
        this.setState({
            number: newNumber
        })
    };

    state = {
        number: 1,
    };


    render = () => (
        <div className={s.wrapper}>
            <span className={s.span}>{this.state.number}</span>
            <input type="text" ref={this.inputChange} className={s.input}/>
            <button onClick={this.clickChange} className={s.button}>Enter!</button>
        </div>)
};
export default Input;