import { Link } from 'react-router-dom';
import images from '~/asset/images';

import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <>
      <div className={cx('hr-footer')}></div>
      <footer className={cx('footer')}>
        <div className={cx('footer_information_shop', 'footer_suport_service')}>
          <ul>
            <img className={cx('footer_logoShop')} src={images.avatarShop} alt="logo_Shop" />
            <li>
              <Link to="/">THÔNG TIN LIÊN HỆ</Link>
            </li>
            <li>
              <table>
                <tbody>
                  <tr>
                    <td>Hotline</td>
                    <td>
                      <Link to="/">0366623331</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>
                      <Link to="/">0975971822</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Địa chỉ:</td>
                    <td>
                      <Link to="/">29/78/85 Khương Hạ Khương Đình</Link>
                      <Link to="/">-Thanh Xuân- Hà Nội</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
        </div>
        <div className={cx('footer_suport', 'footer_suport_service')}>
          <ul>
            <li>
              <Link to="/">Dịch vụ</Link>
            </li>
            <li>
              <Link to="/">Giao ghế SOFA tận nhà</Link>
            </li>
            <li>
              <Link to="/">Thiết kế theo mong muốn</Link>
            </li>
            <li>
              <Link to="/">Đặt với số lượng lớn</Link>
            </li>
          </ul>
        </div>
        <div className={cx('footer_service', 'footer_suport_service')}>
          <ul>
            <li>
              <Link to="/">Hỗ trợ</Link>
            </li>
            <li>
              <Link to="/">Hình thức đặt hàng</Link>
            </li>
            <li>
              <Link to="/">Chính sách bảo hàng</Link>
            </li>
            <li>
              <Link to="/">Chính sách vận chuyển</Link>
            </li>
            <li>
              <Link to="/">Hệ thống cửa hàng</Link>
            </li>
          </ul>
        </div>

        <div className={cx('footer_social', 'footer_suport_service')}>
          <div className={cx('footer_suport_service-frame')}>
            <ul>
              <li>
                <Link to="/">Cửa hàng SOFA TM</Link>
              </li>
              <li className={cx('list-icon-footer')}>
                <a href='https://www.facebook.com/profile.php?id=100093342699785&mibextid=LQQJ4d'><FontAwesomeIcon className={cx('oppacityText')} icon={faFacebook} /></a>
                <a href='https://zalo.me/0366623331'><FontAwesomeIcon className={cx('oppacityText')} icon={faWhatsappSquare} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
