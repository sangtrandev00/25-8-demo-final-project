import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import HeaderContact from '../../../../components/HeaderContact/index';
import FundItemGroup from '../../../../components/FundItemGroup/index';
import cateProjectApi from '../../../../api/cateProjectApi';
import Header from '../../../../components/Header/index';
import Footer from '../../../../components/Footer/index';
import { demo_project_backend } from '../../../../../../declarations/demo_project_backend/index';

HomeLessProjectPage.propTypes = {};

function HomeLessProjectPage(props) {
  const [projects, setProjects] = useState({
    covid_project_list: [],
    living_project_list: [],
    cheapfood_project_list: [],
    poor_project_list: [],
  });

  useEffect(() => {
    const fetchProjects = async () => {
      const listProjects = await demo_project_backend.readValueProjectsInfos();
      const newListProjects = listProjects.map((project) => project[0]);
      // console.log(newListProjects);
      const Covid_Project_List = newListProjects.filter((project) =>
        project.ProjectType.includes('CÁC DỰ ÁN HỖ TRỢ Y TẾ VÀ DỊCH COVID')
      );
      // console.log('Covid_Project_List', Covid_Project_List);
      const Education_Project_List = newListProjects.filter((project) =>
        project.ProjectType.includes('CÁC DỰ ÁN HỖ TRỢ GIÁO DỤC')
      );
      // console.log('Education_Project_List', Education_Project_List);
      const Homeless_Project_List = newListProjects.filter((project) =>
        project.ProjectType.includes('CÁC DỰ ÁN HỖ TRỢ NGƯỜI VÔ GIA CƯ')
      );
      // console.log('Homeless_Project_List', Education_Project_List);
      const Poor_Project_List = newListProjects.filter((project) =>
        project.ProjectType.includes('CÁC DỰ ÁN HỖ TRỢ NGƯỜI NGHÈO')
      );

      // console.log('Homeless_Project_List', Homeless_Project_List);

      setProjects({
        covid_project_list: Covid_Project_List,
        living_project_list: Education_Project_List,
        cheapfood_project_list: Homeless_Project_List,
        poor_project_list: Poor_Project_List,
      });
    };

    fetchProjects();
  }, []);

  return (
    <>
      <HeaderContact />
      <Header />
      <FundItemGroup
        nameFundGroup="CÁC DỰ ÁN HỖ TRỢ NGƯỜI VÔ GIA CƯ"
        fundProjectList={projects.living_project_list}
        // Chỉnh sửa list này sau
      />

      <Footer />
    </>
  );
}

export default HomeLessProjectPage;
