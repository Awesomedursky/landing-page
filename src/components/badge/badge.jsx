import './badge.style.scss';
import React from 'react';

function Badge({ title, portion }) {
  return (
    <div className='badge'>
      <span className='title'>{title}:</span>
      <span className='portion'>{portion}</span>
    </div>
  );
}
export default Badge;
