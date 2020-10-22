import React from 'react';
import classes from './Article.module.css';
import MyPostsForBro from "./MyPostsBro/MyPostsForBro";
import {store} from "../../../redux/reduxNew";
import MyPostsForBroContainer from "./MyPostsBro/MyPostsForBroContainer";

const Article = ({store}) => {
    return (
        <article className={classes.article}>
            <div>
                <img className={classes.img_01}
                     src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1200px-MarvelLogo.svg.png'/>
            </div>
            <div>
                <div>
                    <img className={classes.img_02} src='https://nv.ua/img/article/24520/55_main.jpeg'/>
                </div>
            </div>

            <MyPostsForBroContainer
                store={store}
            />
        </article>

    );
};

export default Article;
