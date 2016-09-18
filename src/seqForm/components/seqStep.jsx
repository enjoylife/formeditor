import React from 'react';

import classNames from 'classnames/bind';

import styles from  './seqForm.css';

let cx = classNames.bind(styles);

import { observer } from 'mobx-react';

@observer(['seqFormStore'])
export default class Step extends React.Component {
  render() {
    const { title, status} = this.props.config;

    // sets the classes to the name of  truthy values

    const classes = cx({
      step: true,             // will always include step e.g. class="step_2829"

    },  status);

    // we are deciding our icon based upon our status
    // done gets a nice 'ok' checkmark
    // warning a caution sign
    // error an exclamation mark
    // and active is raised and highlighted
    let icon;
    switch (status) {
      case 'done':
        icon = (
          <svg className={styles.icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        );
        break;

      case 'warning':
        icon = (
          <svg className={styles.icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
          </svg>
        );
        break;
      case 'error':
        icon = (
          <svg className={styles.icon} viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="19" r="2"/>
            <path d="M10 3h4v12h-4z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        )       ;
        break;
      case 'active':
      default:
        icon = this.props.index;
        break;
    }

    return (
      <div className={classes}
           data-desc={title}>{icon}</div>
    );
  }
}