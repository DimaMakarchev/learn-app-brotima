import React, {Component} from 'react';
import style from './Setting.module.css'
class Settings extends Component {
    render() {
        return (
            <>
            <div className={style.mydiv}>
                <div></div>
                <div></div>
                <div></div>
            </div>
                <iframe src="https://www.google.com/maps/embed?..."></iframe>
                <input type="date" name="birthday"/>
                    <input type="time" name="game-time"/>
                        <input type="email" name="email-address"/>
                            <input type="url" name="website"/>
                                <input type="number" name="cost"/>
                                    <input type="tel" name="phone-number"/>
                </>
        );
    }
}

export default Settings;
