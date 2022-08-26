import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeaderContact from '../../components/HeaderContact';
import { demo_project_backend } from '../../../../declarations/demo_project_backend';
import SearchRow from './components/SearchRow/index';
import './SearchPage.css';
import { v4 as uuidv4 } from 'uuid';
SearchPage.propTypes = {};

function SearchPage(props) {
  const [initDonationList, setInitDonationList] = useState([]);
  const [donationList, setDonationList] = useState([]);
  const [totalFunds, setTotalFunds] = useState(0);
  // const [fundIdText, setFundIdText] = useState('');
  // test
  const [DonorName, setDonorName] = useState('');
  const [ProjectName, setProjectName] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [TimeDonate, setTimeDonate] = useState('');

  // Object

  const [searchTerm, setSearchTerm] = useState({
    fundIdText: '',
    donorName: '',
    projectTypeName: '',
    phoneNumber: '',
    timeDonate: '',
    projectName: '',
  });

  useEffect(() => {
    showDonations();
  }, []);

  async function showDonations() {
    const donationEntries = await demo_project_backend.view_all_entries();
    console.log(donationEntries);
    let initDonationList = donationEntries.map((donation) => donation[1][0]);
    console.log(initDonationList);
    // console.log(donationList);
    initDonationList = initDonationList.filter((donation) => donation != null);
    setTotalFunds(initDonationList.length);
    setInitDonationList(initDonationList);
    setDonationList(initDonationList);
  }

  //   console.log(donationList);

  function handIdInputChange(e) {
    console.log(e.target.value);
    setFundIdText(e.target.value);
    // console.log(donationList);
    // const initDonationList = [...donationList];
    // console.log('initDonationList: ' + initDonationList);
    // let newDonationList = [...initDonationList];
    // newDonationList = newDonationList.filter((donation) => donation.FundId.includes(fundIdText));
    // // console.log(newDonationList);
    // setDonationList(newDonationList);
  }

  function handleChangeValue(e) {
    // console.log(e.target.name);
    // console.log(e.target.value);
    const { name, value } = e.target;
    console.log(name);
    console.log(value);

    setSearchTerm((prevValue) => {
      // console.log(prevValue);
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleSearchClick(e) {
    // Ngăn chặn load trang
    e.preventDefault();

    // Khởi tạo danh sách donate mới clone ( từ danh sách có sẵn của canister)
    let newDonationList = [...initDonationList];
    console.log('donation List: ', newDonationList);
    // Lọc ra những phiếu giao dịch cần tìm (match với điều kiện lọc)
    newDonationList = newDonationList.filter((donation) => {
      return (
        donation.FundId.includes(searchTerm.fundIdText) &&
        donation.Name.includes(searchTerm.donorName) &&
        donation.TypeProject.includes(searchTerm.projectTypeName) &&
        donation.Phone.includes(searchTerm.phoneNumber) &&
        donation.TimeDonate.includes(searchTerm.timeDonate) &&
        donation.NameProject.includes(searchTerm.projectName)
        // logic here
      );
    });
    // console.log(newDonationList);
    setDonationList(newDonationList);
    // Reset form after click search btn
    setSearchTerm((prevValue) => {
      return {
        ...prevValue,
        fundIdText: '',
        donorName: '',
        projectTypeName: '',
        phoneNumber: '',
        timeDonate: '',
        projectName: '',
      };
    });
    // searchTerm.fundIdText = '';
  }

  function handleResetBtnForm() {
    setSearchTerm((prevValue) => {
      return {
        ...prevValue,
        fundIdText: '',
        donorName: '',
        projectTypeName: '',
        phoneNumber: '',
        timeDonate: '',
        projectName: '',
      };
    });
  }

  return (
    <div className="search-page-section">
      <HeaderContact />

      <Header />
      <div class="wrapper">
        <div id="search-page">
          <h2 class="seach-page-title">Trang tìm kiếm quỹ cộng đồng FPoly</h2>

          <form id="search-form">
            <div class="header-search">
              {/* <div class="header-search__logo">
              <a href="#" class="header-search__logo-link">
                <img src="img/logo-2.png" alt="" class="header-search__logo-img" />
              </a>
            </div> */}
              <div class="header-search__main">
                <div class="search-main">
                  <div class="search-wrap">
                    <div class="search-item">
                      <label htmlFor="" class="search-item__label">
                        Số phiếu thu
                      </label>
                      <input
                        type="text"
                        name="fundIdText"
                        id=""
                        class="search-item__input"
                        placeholder=""
                        value={searchTerm.fundIdText}
                        onChange={handleChangeValue}
                      />
                    </div>
                    <div class="search-item">
                      <label htmlFor="" class="search-item__label">
                        Tên nhà hảo tâm
                      </label>
                      <input
                        type="text"
                        name="donorName"
                        id=""
                        class="search-item__input"
                        placeholder=""
                        onChange={handleChangeValue}
                        value={searchTerm.donorName}
                      />
                    </div>
                    <div class="search-item">
                      <label htmlFor="" class="search-item__label">
                        Loại dự án
                      </label>
                      <select
                        name="projectTypeName"
                        id=""
                        onChange={handleChangeValue}
                        value={searchTerm.projectTypeName}
                      >
                        <option value="tất cả">Tất cả</option>
                        <option value="HỖ TRỢ NGƯỜI NGHÈO">Hỗ trợ người nghèo</option>
                        <option value="HỖ TRỢ NGƯỜI VÔ GIA CƯ">Hỗ trợ người vô gia cư</option>
                        <option value="HỖ TRỢ GIÁO DỤC">Hỗ trợ giáo dục</option>
                        <option value="HỖ TRỢ Y TẾ VÀ DỊCH COVID">
                          Hỗ trợ y tế và dịch covid 19
                        </option>
                        <option value="Hỗ trợ khác">Hỗ trợ khác</option>
                      </select>
                      {/* <!-- <input type="text" name="" id="" class="search-item__input" placeholder=""> --> */}
                    </div>
                    <div class="search-item">
                      <label htmlFor="" class="search-item__label">
                        Số điện thoại
                      </label>
                      <input
                        type="text"
                        name="phoneNumber"
                        id=""
                        class="search-item__input"
                        placeholder=""
                        onChange={handleChangeValue}
                        value={searchTerm.phoneNumber}
                      />
                    </div>

                    <div class="search-item">
                      <label htmlFor="" class="search-item__label">
                        Ngày thu
                      </label>
                      <input
                        type="date"
                        name="timeDonate"
                        id=""
                        class="search-item__input"
                        placeholder=""
                        value={searchTerm.timeDonate}
                        onChange={handleChangeValue}
                      />
                    </div>

                    <div class="search-item">
                      <label htmlFor="" class="search-item__label">
                        Tên dự án
                      </label>
                      <input
                        type="text"
                        name="projectName"
                        id=""
                        class="search-item__input search-item__input-name-project"
                        placeholder=""
                        onChange={handleChangeValue}
                        value={searchTerm.projectName}
                      />
                    </div>
                  </div>
                </div>
                <div class="header-search__icons">
                  <div class="header-search__icons-wrap">
                    <p class="header-search__icons-desc">Hủy</p>
                    <button
                      type="button"
                      class="header-search__icons-btn"
                      onClick={handleResetBtnForm}
                    >
                      <i class="header-search__icons-exit fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <div class="header-search__icons-wrap">
                    <p class="header-search__icons-desc">Tìm kiếm</p>
                    <button class="header-search__icons-btn" onClick={handleSearchClick}>
                      {/* <!-- <i class="header-search__icons-search fa-regular fa-magnifying-glass"></i> --> */}
                      <i class="header-search__icons-search fa-solid fa-magnifying-glass"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <div class="body-search">
            <div class="multi-table-container">
              <table class="multi-table">
                <thead class="multi-table__head">
                  <tr class="multi-table__row multi-table__row-head">
                    <th class="multi-table__cell multi-table__cell-head">Số phiếu thu</th>
                    <th class="multi-table__cell multi-table__cell-head">Ngày thu</th>
                    <th class="multi-table__cell multi-table__cell-head">Số tiền / Hiện vật</th>
                    <th class="multi-table__cell multi-table__cell-head">Nhà hảo tâm</th>
                    <th class="multi-table__cell multi-table__cell-head">Tên dự án - Mã Dự án</th>
                    <th class="multi-table__cell multi-table__cell-head">Loại</th>
                  </tr>
                </thead>
                <tbody class="multi-table__body">
                  {donationList.map((donation) => (
                    <SearchRow
                      key={uuidv4()}
                      FundID={donation.FundId}
                      Name={donation.Name}
                      TimeDonate={donation.TimeDonate}
                      DonateMoney={donation.DonateMoney}
                      NameProject={donation.NameProject}
                      FundProjectId={donation.FundProjectId}
                      TypeProject={donation.TypeProject}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <div class="multi-table-pagination">
              <div class="table-pagination-bar">
                <div class="table-pagination__spacer"></div>
                <div class="table-pagination__item-list">
                  <p class="table-pagination__item-caption">Rows per page:</p>
                  <div class="table-pagination__item-select-group">
                    <span class="table-pagination__item-select-amount">{totalFunds || '0'}</span>
                    {/* <button name="" id="" class="table-pagination__item-select-btn">
                      <i class="table-pagination__item-select-icon"></i>
                      <i class="fa-solid fa-angle-down"></i>
                      <div class="table-pagination__item-select-options"></div>
                    </button> */}
                  </div>
                  <div class="table-pagination__item-desc">
                    <span>{totalFunds > 0 ? 1 : 0}</span>-<span>{totalFunds || '0'}</span>
                    of
                    <span>{totalFunds || '0'}</span>
                  </div>

                  {/* <div class="table-pagination__item-actions">
                    <button class="table-pagination__item-btn table-pagination__item-btn-prev">
                      <i class="table-pagination__item-prev-icon"></i>
                      <i class="fa-solid fa-angle-left"></i>
                    </button>
                    <button class="table-pagination__item-btn table-pagination__item-btn-next">
                      <i class="table-pagination__item-next-icon"></i>
                      <i class="fa-solid fa-angle-right"></i>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
      <Footer />
    </div>
  );
}

export default SearchPage;
