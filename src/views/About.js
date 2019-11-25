import React from 'react';
import { connect } from 'react-redux';
import { Button, InputNumber } from 'antd';

const About = ({
  count,
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
}) => {
  return (
    <div className="about">
      <h1>This is an about page</h1>
      <Button type="primary" onClick={increment}>
        同步+1
      </Button>{' '}
      <Button onClick={incrementAsync}>异步+1</Button>{' '}
      <Button onClick={decrement}>同步-1</Button>{' '}
      <Button onClick={decrementAsync}>异步-1</Button>{' '}
      <InputNumber type="text" value={count} readOnly />
    </div>
  );
};

const mapState = state => ({
  count: state.counter.value,
});

const mapDispatch = ({
  counter: { increment, incrementAsync, decrement, decrementAsync },
}) => ({
  increment: () => increment(1),
  incrementAsync: () => incrementAsync(1),
  decrement: () => decrement(1),
  decrementAsync: () => decrementAsync(1),
});

export default connect(mapState, mapDispatch)(About);
