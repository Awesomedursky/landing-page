import React from 'react';
import './showcase.styles.scss';
import Badge from '../badge/badge';

function Showcase() {
  return (
    <div className='showcase'>
      <div className='section-one'>
        <div className='group'>
          <Badge
            className='badge'
            title='Time'
            portion='12min'
          />
          <Badge title='Portions' portion='3' />
        </div>

        <div>
          <h1>Fried Sausage</h1>
          <p className='para'>
            Learn how to make pan-fried sausage.
            Follow this easy recipe and enjoy!
          </p>
        </div>
      </div>

      <div className='section-two'>
        <img
          src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60'
          alt='img 1'
        />
      </div>
    </div>
  );
}

export default Showcase;
