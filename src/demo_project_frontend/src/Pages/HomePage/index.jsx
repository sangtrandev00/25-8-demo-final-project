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
  const [projects, setProjects] = useState({
    covid_project_list: [],
    education_project_list: [],
    homeless_project_list: [],
    poor_project_list: [],
  });

  useEffect(() => {
    const fetchProjects = async () => {
      const listProjects = await demo_project_backend.readValueProjectsInfos();
      const newListProjects = listProjects.map((project) => project[0]);
      // console.log(newListProjects);
      let Covid_Project_List = newListProjects.filter((project) =>
        project.ProjectType.includes('CÁC DỰ ÁN HỖ TRỢ Y TẾ VÀ DỊCH COVID')
      );

      // Covid_Project_List = Covid_Project_List.filter((project)=> )
      // console.log('Covid_Project_List', Covid_Project_List);
      let Education_Project_List = newListProjects.filter((project) =>
        project.ProjectType.includes('CÁC DỰ ÁN HỖ TRỢ GIÁO DỤC')
      );
      // console.log('Education_Project_List', Education_Project_List);
      let Homeless_Project_List = newListProjects.filter((project) =>
        project.ProjectType.includes('CÁC DỰ ÁN HỖ TRỢ NGƯỜI VÔ GIA CƯ')
      );
      // console.log('Homeless_Project_List', Education_Project_List);
      let Poor_Project_List = newListProjects.filter((project) =>
        project.ProjectType.includes('CÁC DỰ ÁN HỖ TRỢ NGƯỜI NGHÈO')
      );

      // console.log('Homeless_Project_List', Homeless_Project_List);

      setProjects({
        covid_project_list: Covid_Project_List,
        education_project_list: Education_Project_List,
        homeless_project_list: Homeless_Project_List,
        poor_project_list: Poor_Project_List,
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
        nameFundGroup="CÁC DỰ ÁN HỖ TRỢ Y TẾ VÀ DỊCH COVID"
        fundProjectList={projects.covid_project_list}
      />
      <FundItemGroup
        nameFundGroup="CÁC DỰ ÁN HỖ TRỢ GIÁO DỤC"
        fundProjectList={projects.education_project_list}
      />
      <FundItemGroup
        nameFundGroup="CÁC DỰ ÁN HỖ TRỢ NGƯỜI VÔ GIA CƯ"
        fundProjectList={projects.homeless_project_list}
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
