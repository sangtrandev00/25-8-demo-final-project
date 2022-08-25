import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import HeaderContact from '../../../../components/HeaderContact/index';
import cateProjectApi from '../../../../api/cateProjectApi';
import Header from '../../../../components/Header/index';
import Footer from '../../../../components/Footer/index';
import FundItemGroup from '../../../../components/FundItemGroup/index';

PoorProjectPage.propTypes = {};

function PoorProjectPage(props) {
  // console.log(props);

  const [projects, setProjects] = useState({
    covid_project_list: [],
    living_project_list: [],
    cheapfood_project_list: [],
    poor_project_list: [],
  });

  // const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const cateProjects = await cateProjectApi.getAll();
      console.log(cateProjects);
      const covid_project_list = cateProjects.category_1;
      const living_project_list = cateProjects.category_2;
      const cheapfood_project_list = cateProjects.category_3;
      const poor_project_list = cateProjects.category_4;

      setProjects({
        covid_project_list: covid_project_list,
        living_project_list: living_project_list,
        cheapfood_project_list: cheapfood_project_list,
        poor_project_list: poor_project_list,
      });
    };

    fetchProjects();
  }, []);

  return (
    <>
      <HeaderContact />
      <Header />
      <FundItemGroup
        nameFundGroup="CÁC DỰ ÁN HỖ TRỢ NGƯỜI NGHÈO"
        fundProjectList={projects.poor_project_list}
      />

      <Footer />
    </>
  );
}

export default PoorProjectPage;
