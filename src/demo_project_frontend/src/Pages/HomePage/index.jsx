import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import HeaderContact from '../../components/HeaderContact';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import LastestNews from '../../components/LastestNews';
import Footer from '../../components/Footer';
import ImportantDonation from '../../components/ImportantDonation';
import FundItemGroup from '../../components/FundItemGroup';
import {
  poorFundProjects,
  educationFundProjects,
  homeLessFundProjects,
} from './fund-projects-data';
import axiosClient from '../../api/axiosClient';
import projectApi from '../../api/projectApi';
import cateProjectApi from '../../api/cateProjectApi';
import { calculateDaysLeft } from '../../utils/Common';
import { demo_project_backend } from '../../../../declarations/demo_project_backend';
HomePage.propTypes = {};

function HomePage(props) {
  // get data from here!!!

  // Sample data:
  // const homeLessFundList = homeLessFundProjects;
  // const poorFundList = poorFundProjects;
  // const educationFundList = educationFundProjects;

  const [projects, setProjects] = useState({
    covid_project_list: [],
    living_project_list: [],
    cheapfood_project_list: [],
    poor_project_list: [],
  });

  const [newProjects, setNewProjects] = useState({
    covid_project_list: [],
    living_project_list: [],
    cheapfood_project_list: [],
    poor_project_list: [],
  });

  // console.log(projects);

  useEffect(() => {
    const fetchProjects = async () => {
      // const params = {
      //   _limit: 3,
      // }

      const cateProjects = await cateProjectApi.getAll();
      console.log(cateProjects);
      const covid_project_list = cateProjects.category_1.filter((cate, index) => index < 3);
      const living_project_list = cateProjects.category_2.filter((cate, index) => index < 3);
      const cheapfood_project_list = cateProjects.category_3.filter((cate, index) => index < 3);
      const poor_project_list = cateProjects.category_4.filter((cate, index) => index < 3);

      // console.log(
      //   covid_project_list,
      //   living_project_list,
      //   cheapfood_project_list,
      //   poor_project_list
      // );

      setProjects({
        covid_project_list: covid_project_list,
        living_project_list: living_project_list,
        cheapfood_project_list: cheapfood_project_list,
        poor_project_list: poor_project_list,
      });
    };

    fetchProjects();
  }, []);

  // Phần này làm sau

  // useEffect(() => {
  //   // Lọc những dự án có số tiền vừa đủ
  //   const getProjectListBackend = async () => {
  //     console.log('call project list from motoko');
  //     const ProjectListEntries = await demo_project_backend.readValueProjectInfos();
  //     let newProjectList = ProjectListEntries.map((projectList) => projectList[0]);
  //     newProjectList = newProjectList.filter(
  //       (project) => project != null && project.CurrentMoney < project.TargetMoney
  //     );
  //     console.log(newProjectList);
  //     // const newProjectList = ProjectList[0];
  //     // console.log(newProjectList);

  //     // Lọc ra những dữ án có số tiền vượt quá hạn mức trên trang chủ !!!
  //     let covid_project_list = newProjectList.filter((cate, index) => cate.TypeProject == "Covid");
  //     let living_project_list = newProjectList.filter((cate, index) => cate.TypeProject == "living");
  //     let cheapfood_project_list = newProjectList.filter((cate, index) => cate.TypeProject == "cheap food");
  //     let poor_project_list = newProjectList.filter((cate, index) => cate.TypeProject == "poor fund");
  //   };

  //   getProjectListBackend();
  // }, []);

  return (
    <div>
      <HeaderContact />
      <Header />
      <Banner />
      <ImportantDonation />
      <FundItemGroup
        nameFundGroup="CÁC DỰ ÁN HỖ TRỢ Y TẾ VACCINE COVID 19"
        fundProjectList={projects.covid_project_list}
      />
      <FundItemGroup
        nameFundGroup="CÁC DỰ ÁN HỖ TRỢ PHƯƠNG TIỆN MƯU SINH"
        fundProjectList={projects.living_project_list}
      />
      <FundItemGroup
        nameFundGroup="CÁC DỰ ÁN HỖ TRỢ XUẤT ĂN GIÁ RẺ"
        fundProjectList={projects.cheapfood_project_list}
      />
      <FundItemGroup
        nameFundGroup="CÁC DỰ ÁN HỖ TRỢ NGƯỜI NGHÈO"
        fundProjectList={projects.poor_project_list}
      />
      <LastestNews />
      <Footer />
    </div>
  );
}

export default HomePage;
