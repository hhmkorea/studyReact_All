import React from 'react';
import '../App.css';
import { useDispatch } from 'react-redux';
import { increase } from '../store';

const Bottom = () => {

  const dispatcher = useDispatch();

  return (
    <div className='sub_container'>
      <h1>Bottom</h1>
      <button onClick={() => dispatcher(increase())}>증가</button>
    </div>
  );
};

export default Bottom;