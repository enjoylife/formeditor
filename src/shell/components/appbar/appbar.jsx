import React from 'react';
import  Link from 'react-router/Link';
import {observer} from 'mobx-react';
import s from './appbar.css';

let Appbar = observer(
    ['store'],
    ({store: {title}}) => (
        <div className={s.appbar}>
            <Link to="/" className={s.title}>{title}</Link>
        </div>
    )
);

export default Appbar;
