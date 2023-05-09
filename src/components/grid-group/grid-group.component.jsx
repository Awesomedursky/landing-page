import './grid-group.styles.scss';
import GridItem from '../grid-item/grid-item';

import React from 'react';

const GridGroup = () => {
  return (
    <div>
      <h1 className='heading'>Newest recipes</h1>
      <div className='grid-group'>
        <GridItem
          img='https://flotiqgatsbyrecipe2.gatsbyjs.io/static/354a8585cbde4ea83c622b4d4e078564/e8738/_media-f8b024a1-b0cb-4af4-9733-2728722adc2c.webp'
          imgtitle='fried sausage'
          timeTitle='Time'
          time='12 min'
          portionTitle='Portion'
          portion='3'
          name='Fried Sausage'
        />
        <GridItem
          img='https://flotiqgatsbyrecipe2.gatsbyjs.io/static/bbb68ce856f0cebd2173ae467a8fdcec/4075d/_media-6315e13a-c1b1-49b5-8bfd-969163d5519a.webp'
          imgtitle='Master Eggs'
          timeTitle='Time'
          time='6 min'
          portionTitle='Portion'
          portion='2'
          name='Master Eggs'
        />
        <GridItem
          img='https://flotiqgatsbyrecipe2.gatsbyjs.io/static/8dbc8442601bdda553725eb3b39e4dbf/4075d/_media-54bcefb1-32d0-4106-89ef-d68fc5d1c25b.webp'
          imgtitle='Boiled eggs'
          timeTitle='Time'
          time='10 min'
          portionTitle='Portion'
          portion='4'
          name='Boiled eggs'
        />
        <GridItem
          img='https://flotiqgatsbyrecipe2.gatsbyjs.io/static/32d30cc8a47c71ee2fb43169b723636a/4075d/_media-cdea3ebf-4e36-44d0-b06c-2108e41a11d8.webp'
          imgtitle='Tomato soup'
          timeTitle='Time'
          time='22 min'
          portionTitle='Portion'
          portion='6'
          name='Tomato soup'
        />
        <GridItem
          img='https://flotiqgatsbyrecipe2.gatsbyjs.io/static/e7b0540968eedb34f3b289c9aae650eb/4075d/_media-fe2cda6f-804c-47e7-b461-33325c445834.webp'
          imgtitle='Scrambled eggs'
          timeTitle='Time'
          time='10 min'
          portionTitle='Portion'
          portion='2'
          name='Scrambled eggs'
        />
      </div>
    </div>
  );
};

export default GridGroup;
