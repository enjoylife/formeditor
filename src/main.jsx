import React from 'react';
import ReactDOM from 'react-dom';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';
//import Link from 'react-router/Link' ;
//import Redirect from 'react-router/Redirect'   ;
import Router from 'react-router/BrowserRouter';

import { Provider } from 'mobx-react';
import {extendObservable } from 'mobx';


// Stores
import { store } from './store';

import { seqFormStore }  from './seqForm';

// Components
import { Shell } from './shell';

import SeqForm from './seqForm/components/seqForm';

// Styles
import './assets/styles/styles.css';


// seqFormStore.steps = [
//   {
//     description: 'test a'
//   },
//   {
//     description: 'test a'
//   },
//   {
//     description: 'test c'
//   },
// ];
seqFormStore.addStep('test a', 'error');
seqFormStore.addStep('test b', 'warning');
seqFormStore.addStep('test c', 'active');
seqFormStore.addStep('test d', 'ready');

setTimeout(() => {
  seqFormStore.addStep('test b', 'ready')
},500)

ReactDOM.render(
  <Provider store={store}  seqFormStore={seqFormStore}>
    <Router>
      <div>
        <Shell />
        <Match pattern="/editor" component={SeqForm}/>

        <Miss component={SeqForm} />
      </div>
    </Router>
  </Provider>,
  document.querySelector('main')
);


