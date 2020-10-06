import React, {Component} from 'react';
import classStyle from '../Messages.module.css'
import {BrowserRouter, NavLink} from "react-router-dom";

const Users = (props) => {
    let path = '/messages/' + props.data.id;
    return (
        <div>
            <NavLink to={path} className={classStyle.user}
                     activeClassName={classStyle.active}>{props.data.name}</NavLink>
        </div>
    )
};

export default Users;
