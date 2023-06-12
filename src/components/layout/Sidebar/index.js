import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <>
      <div className={cx('sidebar')}>
        <ul>
          <li>
            <Link to="/">Danh mục sản phẩm</Link>
          </li>

          <li>
            <Link to="/">Bọc ghế sofa da</Link>
          </li>
          <li>
            <Link to="/sofaFabric">Bọc ghế sofa vải</Link>
          </li>
          <li>
            <Link to="/material">Chất liệu</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
