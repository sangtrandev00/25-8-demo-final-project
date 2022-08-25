import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PoorFund from './components/PoorFund';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Route, Switch, useRouteMatch, useLocation } from 'react-router-dom';
import HomeLessFund from './components/HomeLessFund';
import EducationFund from './components/EducationFund';
import HeaderContact from '../../components/HeaderContact';
import projectApi from '../../api/projectApi';
import FundItemGroup from '../../components/FundItemGroup';
import cateProjectApi from '../../api/cateProjectApi';
import CovidProjectPage from './components/CovidProjectPage/index';
import LivingProjectPage from './components/LivingProjectPage/index';
import PoorProjectPage from './components/PoorProjectPage/index';

FundProgramsPage.propTypes = {};

function FundProgramsPage(props) {
  // const [projects, setProjects] = useState({
  //   homeLessProjects: [],
  //   poorProjects: [],
  //   educationProjects: [],
  // });

  const location = useLocation();
  console.log(location);
  const [projects, setProjects] = useState({
    covid_project_list: [],
    living_project_list: [],
    cheapfood_project_list: [],
    poor_project_list: [],
  });

  const [projectList, setProjectList] = useState([]);

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

  const match = useRouteMatch();

  // switch (location.pathname) {
  //   case '/covid-project-fund':
  //     setProjectList(projects.covid_project_list);
  //     break;
  //   case '/living-project-fund':
  //     setProjectList(projects.living_project_list);
  //     break;
  //   case '/cheap-food-project-fund':
  //     setProjectList(projects.cheapfood_project_list);
  //     break;
  //   case '/poor-project-fund':
  //     setProjectList(projects.poor_project_list);
  //     break;
  //   default:
  //   // setProjectList(projects.poorProjects);
  // }

  return (
    <div>
      <HeaderContact />
      <Header />

      {/* <Route path={`${match.path}/poor-fund`}>
            <Header />
         <Route />  */}
      {/* <FundItemGroup projectList={projectList} /> */}
      {/* <Switch>
        <Route path="/covid-project-fund">
          <CovidProjectPage projectList={projects.covid_project_list} />
        </Route>
        <Route path="/living-project-fund">
          <LivingProjectPage projectList={projects.living_project_list} />
        </Route>
        <Route path="/cheap-food-project-fund">

          <CheapFoodProjectPage projectList={projects.cheapfood_project_list} />
        </Route>
        <Route path="/poor-project-fund">

          <PoorProjectPage projectList={projects.poor_project_list} />
        </Route>
        <Route path="/fund-program-page" />
      </Switch> */}

      <Footer />
    </div>
  );
}

export default FundProgramsPage;
