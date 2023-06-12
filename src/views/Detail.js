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
          <img src={images.sofaDa1} alt="logo" />
        </div>
        <div className={cx('content_intro')}>
          <div>
            <h3>Công trình thay vỏ bọc mặt ngồi ghế sofa cho khách ở Lê Đức Thọ</h3>
            Bộ ghế sofa của khách hàng ở Lê Đức Thọ là một bộ sofa bọc da, vì thời gian sử dụng ghế khá lâu rồi nên mặt
            ngồi đã xuất hiện chi chít các vết nứt trắng – điều này ảnh hưởng khá lớn đến tính thẩm mỹ của bộ ghế. Bộ
            ghế này được nhập khẩu với giá thành khá cao, kiểu dáng cũng rất đặc biệt nên gia đình không muốn vứt bỏ mà
            gọi đến để bọc lại phần mặt ngồi của ghế bị nứt.
            <h3>Hình ảnh bộ ghế sofa da cũ của khách hàng</h3>
          </div>
          <div>
            Tuy màu sắc được chọn rất giống với màu sắc ban đầu nhưng sự khác biệt giữa cũ và mới vẫn có thể nhìn ra
            được. Phần vỏ bọc mới bọc ôm sát ruột cũ, phần thành đệm được may chéo ô trám giống y hệt ban đầu. Gia đình
            rất hài lòng khi sau khi thấy được kết quả bọc lại!
          </div>
        </div>
        <div className={cx('img_intro')}>
          <img src={images.DaHong1} alt="logo" />
        </div>
      </div>
    </>
  );

  let context2 = (
    <>
      <div className={cx('content_body_intro')}>
        <div className={cx('img_intro')}>
          <img src={images.Da7} alt="logo" />
        </div>
        <div className={cx('content_intro')}>
          <h3>Công trình bọc lại ghế sofa tại Thanh Nhàn, Hai Bà Trưng</h3>
          <div>
            Bộ ghế sofa của khách hàng ở Thanh Nhàn rất đặc biệt khi được làm kết hợp từ 3 màu sắc (nâu, cam, đỏ tía) và
            2 loại da khác nhau (da thật, giả da). Tuy đặc biệt như vậy nhưng bộ ghế này cũng không tránh khỏi việc bị
            xuống cấp – phần da bọc ghế bên ngoài, nhất là phần mặt da thật, đều đã bị nứt và bám bẩn khá tệ.
          </div>
          <h3>Hình ảnh bộ sofa cũ của khách hàng ở Thanh Nhàn</h3>
          <div>
            Có thể bạn và rất nhiều người khác biết rằng da thật là một chất liệu bền đẹp theo thời gian sử dụng? Nhưng
            nếu bạn nhìn vào hình ảnh bộ ghế của khách hàng ở Thanh Nhàn thì bạn sẽ thấy mặt da nứt và bẩn nhiều nhất
            lại là da thật, còn các phần giả da xung quanh thì rất mới, thậm chí bền đẹp bóng bẩy hơn gấp nhiều lần! Tại
            sao lại vậy? Đó là do thời tiết và khí hậu ở Việt Nam không phù hợp, mùa xuân hè thì độ ẩm cao, thu đông lại
            khô hanh nên rất khó để đảm bảo da thật có thể chịu được thời tiết này nếu không được giữ ẩm/bảo quản đúng
            cách. Quay trở lại với bộ sofa ở Thanh Nhàn, sau khi được tư vấn chọn mẫu da tận nhà thì gia đình đã chọn
            được những màu sắc mình ưng ý. Bộ ghế sau đó đã được tháo lắp cắt may rồi bọc lại ngay tại nhà khách hàng,
            và dưới đây là hình ảnh của bộ ghế sau khi đã được thay da mới.
          </div>
          <div className={cx('img_intro')}>
            <img src={images.DaHong2} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );

  let context3 = (
    <>
      <div className={cx('content_body_intro')}>
        <div className={cx('img_intro')}>
          <img src={images.Da9} alt="logo" />
        </div>
        <div className={cx('content_intro')}>
          <h3>Công trình bọc ghế sofa da nứt và bong chóc tại Cát Linh, Đống Đa</h3>
          <div>
            Bộ ghế sofa của khách hàng ở Cát Linh là một bộ sofa gồm một ghế dài, một ghế đơn và một đôn chữ nhật lớn.
            Do chất lượng da bọc ngoài không tốt nên chỉ mới dùng được một năm mà các vết nứt đã mọc chi chít đầy thân
            ghế, phần nhựa PU cũng bong chóc và vương vãi ra đầy nhà. Gia đình còn phải chuyển ghế ra một góc không sử
            dụng nữa trước khi tìm được các giải quyết.
          </div>
          <h3>Bộ ghế sofa da bị bong chóc của khách ở Cát Linh:</h3>
          <div>
            Tình trạng thực tế của ghế qua các hình ảnh được nhận viên khảo sát chụp lại đã cho thấy lớp da cũ của ghế
            xuống cấp và không thể sử dụng được nữa. Nhưng phần ruột đệm bên trong lại vẫn căng đẹp và chưa có dấu hiệu
            xẹp lún, chất lượng khá tốt. Đây chính là lí do mà khách hàng không vứt bỏ ghế mà tìm đến Vinaco. Sau khi
            chọn được chất da mới ưng ý, chúng tôi đã tiến hành tháo vỏ bọc cũ và sản xuất, bọc lại vỏ bọc mới cho bộ ghế
            này, dưới đây chính là kết quả của bộ sofa sau khi được thay áo mới.
          </div>
          <div className={cx('img_intro')}>
            <img src={images.DaHong3} alt="logo" />
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
