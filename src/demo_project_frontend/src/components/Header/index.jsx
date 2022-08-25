import React from 'react';
import PropTypes from 'prop-types';
import Logo_1 from '../../../assets/img/logo-1.png';
import { Link, NavLink } from 'react-router-dom';

Header.propTypes = {};

function Header(props) {
  return (
    <div>
      <nav class="menu">
        <div class="img-nav">
          <Link to="/">
            <img src={Logo_1} alt="logo-1" />
          </Link>
          <h2>Quỹ từ thiện Fpoly</h2>
        </div>

        <div class="content-nav">
          <ul class="content-nav__title">
            <li class="content-nav__title-link">
              <NavLink to="/">Trang Chủ</NavLink>
            </li>
            <li class="content-nav__title-link">
              <NavLink to="/introduction-page">Giới Thiệu</NavLink>
            </li>
            <li class="content-nav__title-link">
              <NavLink to="/programs-fund-page">Chương Trình</NavLink>
              <ul class="content-nav__submenu">
                <li class="content-nav__submenu-link">
                  <NavLink to="/covid-project-fund">Hỗ trợ y tế vaccine covid 19</NavLink>
                </li>
                <li class="content-nav__submenu-link">
                  <NavLink to="/education-project-fund">Hỗ trợ giáo dục</NavLink>
                </li>
                <li class="content-nav__submenu-link">
                  <NavLink to="/homeless-project-fund">Hỗ trợ người vô gia cư</NavLink>
                </li>
                <li class="content-nav__submenu-link">
                  <NavLink to="/poor-project-fund">Hỗ trợ người nghèo</NavLink>
                </li>
              </ul>
            </li>
            <li class="content-nav__title-link">
              <a href="https://fpolytuthien.com/pages/donate_default.php">Đóng góp</a>
              {/* <NavLink to="/donation-page" href="donggop.html">
                Đóng Góp
              </NavLink> */}
            </li>
            <li class="content-nav__title-link">
              <NavLink to="/new-donation-page?id=123">Giao dịch mới</NavLink>

              <ul class="content-nav__submenu">
                <li class="content-nav__submenu-link">
                  <NavLink to="/new-project-page">Tạo dự án mới</NavLink>
                </li>
                <li class="content-nav__submenu-link">
                  <NavLink to="/new-donation-page">Tạo đóng góp mới</NavLink>
                </li>
                <li class="content-nav__submenu-link">
                  <NavLink to="/new-disbursement-page">Tạo giải ngân mới</NavLink>
                </li>
              </ul>
            </li>
            <li class="content-nav__title-link">
              <NavLink to="/search-page">Kiểm tra</NavLink>
            </li>
            {/* Other category menu */}
            <li class="content-nav__title-link">
              <NavLink to="/other-page">Khác</NavLink>

              <ul class="content-nav__submenu">
                <li class="content-nav__submenu-link">
                  <NavLink to="/history-detail-donation-page">Lịch sử đóng góp chi tiết</NavLink>
                </li>
                <li class="content-nav__submenu-link">
                  <NavLink to="/disbursement-detail-page">Lịch sử giải ngân chi tiết</NavLink>
                </li>
                <li class="content-nav__submenu-link">
                  <NavLink to="/fund-detail-page">Chương trình chi tiết</NavLink>
                </li>
                <li class="content-nav__submenu-link">
                  <NavLink to="/financial-statement-page">Báo cáo tài chính</NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <form>
            <input class="search" type="text" name="search" placeholder="Tìm kiếm..." />
            <button type="submit">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
        </div>
        {/* <!-- bắt đầu nav-mobile --> */}
        <div class="nav-mobile">
          <div class="icon-mobile" id="btnmenu">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </div>
          <div class="item_menu" id="menutop">
            <form>
              <input type="text" name="search" placeholder="Tìm kiếm..." />
              <button type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
            <ul>
              <li>
                <a href="index.html">Trang Chủ</a>
              </li>
              <li>
                <a href="gioithieu.html">Giới Thiệu</a>
              </li>
              <li>
                <a href="chuongtrinh.html">Chương Trình</a>
              </li>
              <li>
                <a href="donggop.html">Đóng Góp</a>
              </li>
              <li>
                <a href="search-page.html">Kiểm tra</a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- kết thúc nav-mobile --> */}
      </nav>
    </div>
  );
}

export default Header;
