import { Link } from 'react-router-dom';
import images from '~/asset/images';

import classNames from 'classnames/bind';
import styles from './ProductCard.module.scss';


const cx = classNames.bind(styles);

function ProductCard({ categoryId }) {
  let products = [
    {
      _id: 1,
      image: images.sofaDa1,
      name: 'Ghế Da',
    },
    {
      _id: 2,
      image: images.sofaDa2,
      name: 'Ghế Da',
    },
    {
      _id: 3,
      image: images.sofaDa3,
      name: 'Ghế Da',
    },
    {
      _id: 4,
      image: images.sofaDa4,
      name: 'Ghế Da',
    },
    {
      _id: 5,
      image: images.sofaDa5,
      name: 'Ghế Da',
    },
    {
      _id: 6,
      image: images.sofaDa6,
      name: 'Ghế Da',
    },
    {
      _id: 7,
      image: images.sofaDa7,
      name: 'Ghế Da',
    },
    {
      _id: 8,
      image: images.sofaDa8,
      name: 'Ghế Da',
    },
    {
      _id: 9,
      image: images.sofaDa9,
      name: 'Ghế Da',
    },
    {
      _id: 10,
      image: images.sofaDa10,
      name: 'Ghế Da',
    },
    {
      _id: 11,
      image: images.sofaDa11,
      name: 'Ghế Da',
    },
    {
      _id: 12,
      image: images.sofaDa12,
      name: 'Ghế Da',
    }
  ];

  let body;

  body = products.map((product, index) => {
    let detailLink = `/sofa/${product._id}`;
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

export default ProductCard;
