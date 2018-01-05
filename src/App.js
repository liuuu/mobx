import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #234234;
  margin: 3rem auto;
  width: 50vw;
  height: 30vw;
  color: pink;
`;

const Button = styled.button`
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  background: palevioletred;
  opacity: 0.9;
  border-radius: 3px;
`;

const Count = styled.p`
  font-size: 3rem;
  width: 5rem;
  border-radius: 2px;
  text-align: center;
`;

export default observer(({ store }) => {
  return (
    <Wrapper>
      <Count>{store.count}</Count>
      <div>
        <Button onClick={store.increment}>increment</Button>
        <Button onClick={store.decrement}>decrement</Button>
      </div>
    </Wrapper>
  );
});
