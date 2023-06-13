import HeadPage from '~/components/layout/HeadPage';
import Sidebar from '~/components/layout/Sidebar';
import Contact from '~/components/layout/Contact';
import SofaFabricCard from '~/components/layout/SofaFabricCard';
import images from '~/asset/images';

import LayoutDefault from '~/components/layout/LayoutDefault/LayoutDefault.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(LayoutDefault);

function SofaFabric() {
  return (
    <>
      <HeadPage />
      <div className={cx('sideBar_content')}>
        <Sidebar />
        <Contact />
        <div className={cx('content_body')}>
          <div className={cx('content_body_intro')}>
            <div className={cx('img_intro')}>
              <img src={images.Vai4} alt="logo" />
            </div>
            <div className={cx('content_intro')}>
              <div>
                <h3>Bọc ghế sofa vải</h3>
                Bọc ghế sofa vải là khi những bộ ghế sofa bằng vải sử dụng lâu ngày nó trở nên sờn rách hay phần khung
                sương bị sập sệ, hoặc là khi gia đình có nhiều trẻ con làm rớt thức ăn lên bộ ghế sofa vải khiến chúng
                trở nên bẩn và mốc. Khi đó bạn nên sử dụng dịch vụ bọc ghế sofa vải của Nội Thất Việt Nam.
              </div>
              <div>
                Đến với chúng tôi bạn có thể thoải mái lựa chọn màu sắc hay hoa văn mới để thay đổi không gian cho phong
                khách. Hơn nữa khi sử dụng dịch vụ bọc ghế của chúng tôi, bạn sẽ được tư vấn phối màu với đồ đạc và bộ
                ghế cũ cũng được gia cố chắc chắn với chi phí thấp mà bạn vẫn có một bộ ghế sofa mới và hợp với xu
                hướng. Hãy gọi cho chúng tôi theo hotline để được tư vẫn miễn phí nhé!
              </div>
            </div>
          </div>
          <div className={cx('product_list')}>
            <SofaFabricCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default SofaFabric;
