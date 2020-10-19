import React, {Component} from 'react';
import style from './ArticleNews.module.css'

class ArticleNews extends Component {
    render() {
        return (
            <div className={style.articleNews}>
                <div className={style.data_text}>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor</p>

                    <p>Lorem ipsum dolor</p>
                    <ul>
                        <li>Lorem ipsum dolor</li>
                        <li>Lorem ipsum dolor</li>
                        <li>Lorem ipsum dolor</li>
                    </ul>
                </div>

                <div className={style.data_input}>
                    <form>
                        <fieldset>
                            <legend>BRO</legend>
                            <label>Name
                                <br/>
                                <input type='text' placeholder='Name'/>
                            </label>
                            <br/>
                            <label>Mail
                                <br/>
                                <input type='email' placeholder='Mail'/>
                            </label>
                            <br/>

                            <label>Count
                                <br/>
                                <input type='number'/>
                            </label>
                            <br/>

                            <label>Text_Comment
                                <br/>
                                <textarea></textarea>
                            </label>
                             <br/>
                             <input type='submit' value='Order'/>

                        </fieldset>

                    </form>
                </div>
            </div>
        );
    }
}

export default ArticleNews;
