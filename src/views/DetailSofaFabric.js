import { useParams } from 'react-router';
import HeadPage from '~/components/layout/HeadPage';
import Sidebar from '~/components/layout/Sidebar';
import Contact from '~/components/layout/Contact';
import images from '~/asset/images';
import { Redirect } from 'react-router-dom';

import LayoutDefault from '~/components/layout/LayoutDefault/LayoutDefault.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(LayoutDefault);

function Detail() {
  const { categoryName } = useParams();

  let context1 = (
    <>
      <div className={cx('content_body_intro')}>
        <div className={cx('img_intro')}>
          <img src={images.Vai1} alt="logo" />
        </div>
        <div className={cx('content_intro')}>
          <div>
            <h3>Công trình thay vỏ bọc mặt ngồi ghế sofa cho khách ở Lê Đức Thọ</h3>
            Bộ ghế sofa của khách hàng ở Lê Đức Thọ là một bộ sofa bọc da, vì thời gian sử dụng ghế khá lâu rồi nên mặt
            ngồi đã xuất hiện chi chít các vết nứt trắng – điều này ảnh hưởng khá lớn đến tính thẩm mỹ của bộ ghế. Bộ
            ghế này được nhập khẩu với giá thành khá cao, kiểu dáng cũng rất đặc biệt nên gia đình không muốn vứt bỏ mà
            gọi Vinaco đến để bọc lại phần mặt ngồi của ghế bị nứt.
            <h3>Hình ảnh bộ ghế sofa da cũ của khách hàng</h3>
          </div>
          <div>
            Tuy màu sắc được chọn rất giống với màu sắc ban đầu nhưng sự khác biệt giữa cũ và mới vẫn có thể nhìn ra
            được. Phần vỏ bọc mới bọc ôm sát ruột cũ, phần thành đệm được may chéo ô trám giống y hệt ban đầu. Gia đình
            rất hài lòng khi sau khi thấy được kết quả bọc lại!
          </div>
        </div>
        <div className={cx('img_intro')}>
          <img src={images.VaiHong1} alt="logo" />
        </div>
      </div>
    </>
  );

  let context2 = (
    <>
      <div className={cx('content_body_intro')}>
        <div className={cx('img_intro')}>
          <img src={images.Vai2} alt="logo" />
        </div>
        <div className={cx('content_intro')}>
          <h3>Công trình bọc ghế sofa vải cho khách ở Đặng Thùy Trâm</h3>
          <div>
            Bộ ghế sofa của khách hàng ở Đặng Thùy Trâm là một bộ sofa góc da, vừa mới dùng được vải tháng thì phần mặt
            ngồi bắt đầu bị nứt đường chỉ, rồi dần dần lan rộng ra thành một vết rách khá dài.
          </div>
          <h3>Hình ảnh bộ sofa cũ của khách hàng ở Thanh Nhàn</h3>
          <div>
            Vết rách này có nguyên nhân một phần do đường chỉ may bị rút núm kéo quá căng, một phần do da bọc ghế chất
            lượng không tốt, dẫn đến tình trạng rách kéo dài như vậy. Rách khá to đã nhìn được cả ruột mút bên trong,
            nếu cứ để thêm một khoảng thời gian nữa, vết rách này sẽ lan ra cả ghế, thậm chí mút bên trong cũng sẽ bị
            mục do tiếp xúc với bụi bẩn và cọ sát thường xuyên. Gia đình đã gọi cho Vinaco để đổi vỏ bọc mới cho bộ ghế
            này. Khi lựa chọn chất liệu, cả nhà đã rất băng khoăn không biết nên tiếp tục sử dụng da hay chuyển sang
            vải, vì da dùng khá sạch mà vải thì lại bền và dễ dùng hơn.
          </div>
          <div className={cx('img_intro')}>
            <img src={images.VaiHong2} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );

  let context3 = (
    <>
      <div className={cx('content_body_intro')}>
        <div className={cx('img_intro')}>
          <img src={images.Vai3} alt="logo" />
        </div>
        <div className={cx('content_intro')}>
          <h3>Công trình bọc và thay đệm ghế cho khách tại Lương Thế Vinh</h3>
          <div>
            Khách hàng ở Lương Thế Vinh có một bộ ghế sofa góc đã dùng được vài năm. Do ghế được làm bằng vải, nhà lại
            có trẻ nhỏ nên vỏ ngoài đều đã bị bám bẩn khá nghiêm trọng – gần như đã không còn nhận ra được màu sắc ban
            đầu nữa.
          </div>
          <h3>Bộ ghế sofa bị hỏng đệm tại Lương Thế Vinh:</h3>
          <div>
            Ghế đã được thay vỏ bọc mới và ruột đệm cũng được thay đổi trở lại hình dạng vuông vắn, ghế gần như đã trở
            lại 99% so với lúc mới mua về.
          </div>
          <div className={cx('img_intro')}>
            <img src={images.VaiHong3} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
  let body;

  if (parseInt(categoryName) === 1) {
    body = (
      <>
        <HeadPage />
        <div className={cx('sideBar_content')}>
          <Sidebar />
          <Contact />
          <div className={cx('content_body')}>{context1}</div>
        </div>
      </>
    );
  }

  if (parseInt(categoryName) === 2) {
    body = (
      <>
        <HeadPage />
        <div className={cx('sideBar_content')}>
          <Sidebar />
          <Contact />
          <div className={cx('content_body')}>{context2}</div>
        </div>
      </>
    );
  }

  if (parseInt(categoryName) === 3) {
    body = (
      <>
        <HeadPage />
        <div className={cx('sideBar_content')}>
          <Sidebar />
          <Contact />
          <div className={cx('content_body')}>{context3}</div>
        </div>
      </>
    );
  }

  if (parseInt(categoryName) !== 1 && parseInt(categoryName) !== 2 && parseInt(categoryName) !== 3) {
    return <Redirect to="/" />;
  }

  return <>{body}</>;
}

export default Detail;
