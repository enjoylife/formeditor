import React from 'react';

import classNames from 'classnames/bind';
import styles from  './seqForm.css';


//let cx = classNames.bind(styles);
import Step from './seqStep';

import { observer } from 'mobx-react';

@observer(['seqFormStore'])
export default class seqSteps extends React.Component {
  render() {
    console.log(this.props.seqFormStore);
    return (
      <div className={styles.steps}>
        {this.createSteps()}
      </div>
    );
  }

  createSteps = () => {
    const { steps } = this.props;
    console.log(this.props.seqFormStore);
    return steps.map((step, i) => {
      console.log(step, i);
      return (
        <Step config={step} index={i} key={i}/>
      );
    });
  }
}
