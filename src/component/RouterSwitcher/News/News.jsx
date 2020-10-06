import React, {Component} from 'react';
import style from './News.module.css'
import ArticleNews from "./ArticleNews/ArticleNews";
import HeaderNews from "./HeaderNews/HeaderNews";
import FooterNews from "./FooterNews/FooterNews";

class News extends Component {
    render() {
        return (
            <div className={style.news}>
                <HeaderNews/>
                <ArticleNews/>
                <FooterNews/>
            </div>
        );
    }
}

export default News;
