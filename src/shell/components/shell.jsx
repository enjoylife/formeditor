import React from 'react';
import DevTools from 'mobx-react-devtools';
import {Appbar} from './appbar';
import {Navbar} from './navbar';


export default function Shell(props) {
  return (
    <div>
      <DevTools />
      <Appbar />
      <Navbar />
      {props.children}
    </div>
  );
}
