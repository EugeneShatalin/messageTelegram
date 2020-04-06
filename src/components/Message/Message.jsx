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
                Мы представляем собой то, что делаем раз за разом. Таким образом, успех – это не одномоментное действо и вовсе не случайность, а привычка постоянно повторять все те действия, которые нужны для его достижения.
                <br/><br/>
                ддддддддддддддддддддддддддддддддллллллллллллллллллллллллллллллллллллллллииииииииииииииииииииииииииииииииииннннннннннннннннннныыыыыыыыыыыыыыыыыыыыыыыыыыыыыййййййййййййййййййййййййййй
            </div>
            <div className={s.time}>
                07:41 AM
            </div>
        </div>
    </div>
}
export default Message;