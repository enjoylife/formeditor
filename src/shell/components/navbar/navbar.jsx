import React from 'react';
import  Link from 'react-router/Link';

import s from './navbar.css';

export default () => (
    <nav className={s.navbar}>
        <Link to="/" activeClassName={s.active}>HOME</Link>
        <Link to="/clock" activeClassName={s.active}>CLOCK</Link>
    </nav>
);
