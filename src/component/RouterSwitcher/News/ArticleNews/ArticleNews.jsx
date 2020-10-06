import React, {Component} from 'react';
import style from './ArticleNews.module.css'

class ArticleNews extends Component {
    render() {
        return (
            <div className={style.articleNews}>
                <div className={style.beginning}>Посвящается ремеслу создания сайтов
                    Каждый год самые яркие веб-дизайнеры и фронтенд-разработчики собираются в Чикаго, чтобы обсудить
                    новейшие технологии. Присоединяйся к нам этим августом!
                </div>
                <div className={style.finish}>
                    <div className={style.maps_one}>
                        <div>STYLES
                            CONFERENCE
                            24–26 августа — Чикаго, штат Иллинойс
                        </div>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?..."></iframe>

                        </div>
                    </div>
                    <div className={style.maps_two}>
                        <div>STYLES
                            CONFERENCE
                            24–26 августа — Чикаго, штат Иллинойс
                            2
                        </div>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?..."></iframe>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ArticleNews;
