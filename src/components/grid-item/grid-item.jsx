import './grid-item.styles.scss';
import Badge from '../badge/badge';

const GridItem = ({
  img,
  imgtitle,
  timeTitle,
  time,
  portionTitle,
  portion,
  name,
}) => {
  return (
    <section className='grid-item'>
      <div>
        <img
          className='img'
          src={img}
          alt={imgtitle}
        />
      </div>
      <div className='bagdge'>
        <Badge
          title={timeTitle}
          portion={time}
        />
        <Badge
          title={portionTitle}
          portion={portion}
        />
      </div>
      <h1>{name}</h1>
    </section>
  );
};

export default GridItem;
