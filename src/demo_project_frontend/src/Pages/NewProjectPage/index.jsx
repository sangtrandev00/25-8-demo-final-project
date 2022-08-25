import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useLocation } from 'react-router-dom';
import projectApi from '../../api/projectApi';
import fundDonateApi from '../../api/fundDonateApi';
import { demo_project_backend } from '../../../../declarations/demo_project_backend/index';

NewProjectPage.propTypes = {};

function NewProjectPage(props) {
  let { id } = useParams();
  console.log(id);
  const ProjectUrlParams = useLocation();
  console.log(ProjectUrlParams);
  const idProject = ProjectUrlParams.search.substring(6);

  useEffect(() => {
    const getNewProject = async () => {
      const NewProject = await projectApi.get(idProject);
      console.log(NewProject);
      await demo_project_backend.createFundProject(
        NewProject.ProjectID,
        NewProject.ProjectName,
        NewProject.ProjectType,
        NewProject.DateStart,
        NewProject.DateEnd,
        Number(NewProject.TargetMoney),
        NewProject.Avatar,
        'Some where', // Location -- from API
        NewProject.ShortDesc,
        NewProject.FullDesc
      );

      location.reload('https://fpolytuthien.com/admin/project/index_subadmin.php');
    };

    getNewProject();
  }, []);

  return (
    <div>
      <h3>
        ID Project: {id} -- {idProject}
      </h3>
    </div>
  );
}

export default NewProjectPage;
