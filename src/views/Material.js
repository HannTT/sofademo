import HeadPage from '~/components/layout/HeadPage';
import Sidebar from '~/components/layout/Sidebar';
import Contact from '~/components/layout/Contact';
import MaterialCard from '~/components/layout/MaterialCard';
import images from '~/asset/images';

import LayoutDefault from '~/components/layout/LayoutDefault/LayoutDefault.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(LayoutDefault);

function Material() {
  return (
    <>
      <HeadPage />
      <div className={cx('sideBar_content')}>
        <Sidebar />
        <Contact />
        <div className={cx('content_body')}>
          <div className={cx('content_body_intro')}>
            <div className={cx('img_intro')}>
              <img src={images.CLDa1} alt="logo" />
            </div>
            <div className={cx('content_intro')}>
              <div>
                Doanh Nghiệp : được thành lập ngày 16/02/1998, đến nay đã hoạt động được trên 25 năm trong lĩnh vực nội
                thất ghế sofa.
              </div>
              <div> <br/>
                Ngoài bán ghế sofa và đóng ghế theo yêu cầu thì còn có các dịch vụ khác giúp khách hàng có được
                những bộ ghế đẹp và tiện dụng như: bọc ghế sofa cũ, bọc lại ghế sofa da vải, làm đệm ghế gỗ theo kích
                thước chuẩn vừa vặn,… với chất lượng hàng đầu hiện nay bất kể tại Hà Nội hãy trên toàn quốc.

                <p>Chất liệu Da bọc ghế sofa: <br />
                    &emsp; Ghế sofa da luôn được xem là thước đo của độ sang trọng và lịch sự. Với các chất liệu da thật và giả
                    da của bên em , quý khách sẽ được lựa chọn chất liệu da mà mình thích, chọn được một chất liệu da
                    phù hợp với căn phòng của gia đình giúp tăng thêm sự sang trọng cho cả gia đình. Không những thế
                    da còn rất dễ vệ sinh, không lo bám bẩn khó là sạch.
                </p>
              </div>
            </div>
          </div>
          <div className={cx('product_list')}><MaterialCard /></div>
        </div>
      </div>
    </>
  );
}

export default Material;
