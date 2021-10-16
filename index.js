import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Progress } from 'antd';

ReactDOM.render(
  <>
    <Progress percent={30} strokeColor="#FF8600" showInfo={false} />
    <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} />
  </>,
  document.getElementById('container')
);
