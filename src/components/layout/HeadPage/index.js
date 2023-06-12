import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './HeadPage.module.scss';

const cx = classNames.bind(styles);

function HeadPage({ children }) {
  return (
    <div className={cx('page-header')}>
      <Link to="/">SỬA CHỮA SOFA TẠI HÀ NỘI GIÁ RẺ, UY TÍN VÀ CHUYÊN NGHIỆP</Link>
    </div>
  );
}

export default HeadPage;
