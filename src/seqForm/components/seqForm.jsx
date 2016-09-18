import React from 'react';

import classNames from 'classnames/bind';
import styles from  './seqForm.css';
let cx = classNames.bind(styles);

import { observer } from 'mobx-react';

import SeqSteps from './seqSteps';

@observer(['seqFormStore'])
export default class SeqForm extends React.Component {

  render() {
    return (
      <div>
         <SeqSteps steps={this.props.seqFormStore.steps} />
      </div>
    );
  }


}


