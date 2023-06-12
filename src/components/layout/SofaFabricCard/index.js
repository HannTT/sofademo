import { Link } from 'react-router-dom';
import images from '~/asset/images';

import classNames from 'classnames/bind';
import styles from './SofaFabricCard.module.scss';


const cx = classNames.bind(styles);

function SofaFabricCard({ categoryId }) {
  let products = [
    {
      _id: 1,
      image: images.Vai1,
      name: 'Chất liệu vải',
    },
    {
      _id: 2,
      image: images.Vai2,
      name: 'Chất liệu vải',
    },
    {
      _id: 3,
      image: images.Vai3,
      name: 'Chất liệu vải',
    },
    {
      _id: 4,
      image: images.Vai4,
      name: 'Chất liệu vải',
    },
    {
      _id: 5,
      image: images.Vai5,
      name: 'Chất liệu vải',
    },
    {
      _id: 6,
      image: images.Vai6,
      name: 'Chất liệu vải',
    }
  ];

  let body;

  body = products.map((product, index) => {
    let detailLink = `/sofaFabric/${product._id}`;
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

export default SofaFabricCard;
