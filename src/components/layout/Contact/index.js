import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import images from '~/asset/images';

const cx = classNames.bind(styles);

function Contact() {
  return (
    <>
      <div className={cx('contact')}>
        <ul>
          <li>
            <a href="tel:0366623331">
              <img alt='' src={images.phoneLogo} />
            </a>
          </li>

          <li>
            <a href='https://zalo.me/0366623331'>
              <img alt='' src={images.zaloLogo} />
            </a>
          </li>

          <li>
            <a href='https://www.facebook.com/profile.php?id=100093342699785&mibextid=LQQJ4d'>
              <img alt='' src={images.mesLogo} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Contact;
