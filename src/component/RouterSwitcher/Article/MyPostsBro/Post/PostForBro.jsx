import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from "./PostForBro.module.css";

const PostForBro = ({data}) => {
    // debugger;
    return (
        <>
            <div className={classes.item}>Post</div>
            <img src='https://images-na.ssl-images-amazon.com/images/I/61jA6R5gmiL._AC_SX522_.jpg'/>
            <ul>
                <li>
                    <p>{data.id} {data.text} {data.like}</p>
                    <span>Like</span>
                </li>
            </ul>
        </>
    );

};

PostForBro.propTypes = {};

export default PostForBro;
