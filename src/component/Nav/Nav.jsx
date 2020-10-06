import React, {Component} from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <nav className={classes.nav}>
                <div className={classes.item}><NavLink to="/article"
                                                       activeClassName={classes.activLink}>Article</NavLink></div>
                <div className={classes.item}><NavLink to="/messages"
                                                       activeClassName={classes.activLink}>Messages</NavLink></div>
                <div className={classes.item}><NavLink to="/news" activeClassName={classes.activLink}>News</NavLink>
                </div>
                <div className={classes.item}><NavLink to="/music" activeClassName={classes.activLink}>Music</NavLink>
                </div>
                <div className={classes.item}><NavLink to="/settings"
                                                       activeClassName={classes.activLink}>Settings</NavLink></div>
                <div className={classes.item}>
                    <div>
                        <NavLink to="/s1" activeClassName={classes.activLink + ' ' + classes.round}>
                            <div></div>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/s2" activeClassName={classes.activLink + ' ' + classes.round}>
                            <div></div>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink  to="/s3" activeClassName={classes.activLink + ' ' + classes.round}>
                            <div></div>
                        </NavLink>
                    </div>

                </div>
            </nav>

        );
    }
}

export default Nav;
