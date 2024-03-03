import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';

const Top = () => {

  const number = useSelector((store) => store.number);

  return (
    <div className='sub_container'>
      <h1>Top</h1>
      번호 : {number}
    </div>
  );
};

export default Top;