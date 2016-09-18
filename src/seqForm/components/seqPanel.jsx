import 'rc-tabs/assets/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from '../src/TabContent';
import ScrollableInkTabBar from '../src/ScrollableInkTabBar';
import InkTabBar from '../src/InkTabBar';

class PanelContent extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.id, 'constructor');
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.id, 'componentWillReceiveProps');
  }

  render() {
    const length = Math.round(10 * (Math.random()) + 4);
    const count = new Array(length);// new Array(4) skip forEach ....
    for (let i = 0; i < length; i++) {
      count[i] = 1;
    }
    const content = new Array(Math.round(100 * (Math.random())) + 4).join(` ${this.props.id}`);
    const els = count.map((c, i) => {
      return <p key={i}>{content}</p>;
    });
    return <div>{els}</div>;
  }
}
PanelContent.propTypes = {
  id: React.PropTypes.number,
};