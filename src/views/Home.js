import HeadPage from '~/components/layout/HeadPage';
import Sidebar from '~/components/layout/Sidebar';
import Contact from '~/components/layout/Contact';
import ProductCard from '~/components/layout/ProductCard';
import images from '~/asset/images';

import LayoutDefault from '~/components/layout/LayoutDefault/LayoutDefault.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(LayoutDefault);

function Home() {
  return (
    <>
      <HeadPage />
      <div className={cx('sideBar_content')}>
        <Sidebar />
        <Contact />
        <div className={cx('content_body')}>
          <div className={cx('content_body_intro')}>
            <div className={cx('img_intro')}>
              <img src={images.Doi1} alt="logo" />
            </div>
            <div className={cx('content_intro')}>
              <div>
              &emsp; Doanh Nghiệp : được thành lập ngày 16/02/1998, đến nay đã hoạt động được trên 25 năm trong lĩnh vực nội
                thất ghế sofa.<br />
              </div>
              <div>
              <p> <br />&emsp;Được biết đối với nhiều gia đinh, ghế Sofa là đồ dùng nội thất quan trọng. Khi ngồi trên ghế Sofa bạn có thể xem phim, đọc báo, uống trà,..rất thư giãn. Nhưng việc sử dụng ghế trong một thời gian dài dẫn đến hỏng hóc một vài chỗ là điều không thể tránh khỏi. Nếu bạn ở Hà Nội, thay vì bỏ ghế ta có thể sửa chữa ghế sofa tại nhà. Bạn có thể tham khảo bài biết dưới đây để biết cách lựa chọn đơn vị sửa chữa Sofa tại Hà Nội uy tín nhé!
              </p>
              <p> &emsp; <br />Nguyên nhân nào gây nên sự xuống cấp của Sofa
              Nhiều khi ta vẫn hay thắc mắc tại sao ghế Sofa của mình hư hỏng, bị xuống cấp trong khi giữ gìn ghế rất cẩn thận. Có thể là do những lý do sau:
              </p>
              <p>&emsp; Sử dụng ghế sai cách:
              Chúng ta thường dùng ghế sofa để ngồi, nằm nghỉ, thư giãn. Nhưng với những nhà có trẻ nhỏ, những đứa trẻ thường hay thoải mái leo chèo, đùa nghịch trên ghế Sofa. Có thể thấy rằng việc nhún nhảy trên một chiếc ghế Sofa mang lại cảm giác tương đối thích thú với lũ trẻ. Nhưng về lâu dài sẽ làm giảm tuổi thọ của đệm ghế. Đệm ghế vì vậy mà xẹp lún nhanh hơn. Không những vậy việc nô đùa trên những chiếc ghế Sofa cũng ảnh hưởng đến dáng ghế. <br /> &emsp; Hoặc nhiều người có thói quen để vật dụng sắc nhọn lên bề mặt, như thế ghế Sofa sẽ có những vết xước nhỏ tại những vị trí chúng ta không biết đến, dần dần vết xước lan rộng ảnh hưởng đến chất lượng của ghế.

              Ngoài ra cũng có một số nguyên nhân khách quan khác đến từ những bé thú cưng như chó, mèo... Đặc biệt, những con vật dễ thương này lại rất thích mài móng của mình, ghế Sofa thông thường sẽ là địa điểm yêu thích của chúng…
              </p><br />
              <p>Hiểu lầm về phương pháp giặt và tẩy rửa ghế</p>
              <p> &emsp; + Bởi vì vải bọc ghế Sofa khá đặc biết. Trong ghế cũng có phần đệm. Nếu sử dụng quá nhiều nước khi tẩy rửa ghế sẽ khiến cho sofa lâu khô, nước bị tích trữ bên trong sẽ gây mùi ẩm ướt. Đây cũng chính là nguyên nhân tạo điều kiện cho nấm mốc, vi khuẩn gây hại phát triển mạnh mẽ. Nếu tiếp xúc lâu dài sẽ gây nên những bệnh về da liễu, ảnh hưởng đến sức khỏe.
              </p>
              <p> &emsp;+ Nhiều người cho rằng chỉ cần sử dụng nước là làm sạch được ghế. Vậy nên nhiều ghế vừa bị ẩm mốc và vết bận cũng không được vệ sinh sạch. Ví dụ như nước tiểu của thú cưng hay các hóa chất vô tình rơi lên ghế. Không những vậy, rửa không sạch mùi hôi còn đọng lại trên ghế gây khó chịu.
              </p>
              <p> &emsp;+ Khi sử dụng hóa chất tẩy rửa, nếu không biết chọn loại hóa chất sẽ khiến màu ghế bị phai hoặc bị bão hòa. Để bị như vậy sẽ khó xử lý hơn. Để đảm bảo giữ gìn ghế được đảm bảo, bạn nên tìm hiểu và áp dụng những loại hóa chất, thiết bị phù hợp. Nếu muốn tốt hơn, bạn có thể gọi hỗ trợ từ những công ty chuyên sửa chữa sofa tại nhà.
              </p> <br />
              <p> &emsp;Khi nào cần sửa chữa Sofa tại nhà
              Có thể nói nhiều ghế Sofa đã sử dụng nhiều năm, khi đó đệm mút Sofa bị xẹp và khung ghế bị sập nặng thì bạn nên cân nhắc việc sửa chữa lại ghế sofa. Nhưng nếu ghế của bạn chỉ xuống cấp với một số lỗi như chân gãy hay bục đường chỉ may, bạn có thể nhờ tư vấn để sửa chữa ghế.
              </p><br />

              <p>Dịch vụ bọc ghế sofa tại nhà giá rẻ Hà Nội và Tp.Hồ Chí Minh
                    <br />Một số công trình bọc lại
                    <br />Danh sách các dịch vụ bọc ghế sofa
                </p>
              <details>
                
                <summary>Quy trình bọc ghế chuyên nghiệp</summary>
                <ul>
                  <li>Bước 1: Tháo vỏ ghế sofa cũ tại nhà khách hàng</li>
                  <li>Bước 2: May lại vỏ bọc mới theo mẫu đã tháo tại xưởng</li>
                  <li>Bước 3: Bọc lại tại ghế tại nhà khách hàng</li>
                  <li>Bước 4: Kiểm tra lại và bàn giao ghế</li>
                </ul>
              </details>
              </div>
            </div>
          </div>
          <div className={cx('product_list')}><ProductCard /></div>
        </div>
      </div>
    </>
  );
}

export default Home;
