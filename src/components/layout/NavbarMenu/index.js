import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/components/Button';
import images from '~/asset/images';

import classNames from 'classnames/bind';
import styles from './NavbarMenu.module.scss';
import {
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function NavbarMenu() {

  let body;

  const navigation_right = useRef();
  const navigation_center = useRef();

  // // responsive
  const closeMenu = () => {
    navigation_right.current.style.display = 'flex';
    navigation_center.current.style.display = 'none';
  };

  const openMenu = () => {
    navigation_right.current.style.display = 'none';
    navigation_center.current.style.display = 'block';
  };

  body = (
      <>
        <div>
          <nav className={cx('navigation')}>
            <div className={cx('navigation_left')}>
              <Link to="/">
                <img className={cx('logo_Shop')} src={images.avatarShop} alt="logo" />
              </Link>
            </div>
            <div ref={navigation_center} className={cx('navigation_center')}>
              <ul>
                <li>
                  <Button small bgTransparent whiteText to={`/`}>
                    Trang chủ
                  </Button>
                </li>
                <li>
                  <Button small bgTransparent whiteText to={`/sofa`}>
                    Ghế Sofa
                  </Button>
                </li>
                <li>
                  <Button small bgTransparent whiteText to={`/material`}>
                    Chất liệu
                  </Button>
                </li>


                <li>
                  <Button className={cx('btnCloseMenu')} text small onClick={closeMenu}>
                    <FontAwesomeIcon icon={faXmark} />
                  </Button>
                </li>
              </ul>
            </div>
            <div ref={navigation_right} className={cx('navigation_right')}>
              <Button
                onClick={(e) => {
                  openMenu();
                }}
                className={cx('icon_menu')}
                text
                small
              >
                <FontAwesomeIcon icon={faBars} />
              </Button>
            </div>
          </nav>
        </div>
      </>
    );
  return body;
}

export default NavbarMenu;
