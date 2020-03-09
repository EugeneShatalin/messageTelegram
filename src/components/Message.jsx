import s from "./Message.module.css";
import React from "react";


const Message = () => {
    return <div className={s.wrapper}>
        <div className={s.cloud}>
            <div className={s.name}>
                Шаталин Евгений
            </div>
            <div className={s.before}>

            </div>
            <div className={s.after}>

            </div>
            <div className={s.message}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fuga veniam dolores et incidunt tenetur
                non
                natus consectetur laboriosam saepe minima magni, necessitatibus soluta ipsa nesciunt perferendis vero
                esse
                quo.
            </div>
            <div className={s.time}>
                07:41 AM
            </div>
        </div>
    </div>
}

export default Message;