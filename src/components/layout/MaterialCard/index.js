import { Link } from 'react-router-dom';
import images from '~/asset/images';

import classNames from 'classnames/bind';
import styles from './MaterialCard.module.scss';


const cx = classNames.bind(styles);

function MaterialCard({ categoryId }) {
  let products = [
    {
      _id: 1,
      image: images.CLDa1,
      name: 'Chất liệu da',
    },
    {
      _id: 2,
      image: images.CLDa2,
      name: 'Chất liệu da',
    },
    {
      _id: 3,
      image: images.CLDa3,
      name: 'Chất liệu da',
    },
    {
      _id: 4,
      image: images.CLDa4,
      name: 'Chất liệu da',
    },
    {
      _id: 5,
      image: images.CLDa5,
      name: 'Chất liệu da',
    },
    {
      _id: 6,
      image: images.CLDa6,
      name: 'Chất liệu da',
    }
  ];

  let body;

  body = products.map((product, index) => {
    let detailLink = '/material';
    return (
      <div key={index} className={cx('infor_Product')}>
        <img src={product.image} alt={product.name} className={cx('Picture_Product')} />
        <Link to={detailLink}>
          <p className={cx('product-name')}>{product.name}</p>
          <div className={cx('wrapperPrice')}>
            <span className={cx('price')}>LIÊN HỆ</span>
          </div>
        </Link>
      </div>
    );
  });

  return <>{body}</>;
}

export default MaterialCard;
