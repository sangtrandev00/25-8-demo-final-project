import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useLocation } from 'react-router-dom';
import projectApi from '../../api/projectApi';
import fundDonateApi from '../../api/fundDonateApi';
import { demo_project_backend } from '../../../../declarations/demo_project_backend/index';
import disbursementApi from '../../api/disbursementApi';

NewDonationPage.propTypes = {};

function NewDonationPage(props) {
  let { id } = useParams();
  console.log('id:', id);

  // const DonationUrlParams = useLocation();
  // console.log(DonationUrlParams);
  // const idDonation = DonationUrlParams.search.substring(6);

  useEffect(() => {
    const getNewDonation = async () => {
      const myArray = id.split('_');
      const Name_ = myArray[0];
      console.log(Name_);
      const ID_ = myArray[1];
      console.log(ID_);
      if (Name_ == 'project') {
        const newProject = await projectApi.get(ID_);
        console.log(newProject);
        const newProjectObj = newProject.list_project[0];
        console.log(newProjectObj);
        await demo_project_backend.createFundProject(
          newProjectObj.ProjectID,
          newProjectObj.ProjectName,
          newProjectObj.ProjectType,
          newProjectObj.DateStart,
          newProjectObj.DateEnd,
          Number(newProjectObj.TargetMoney),
          newProjectObj.Avatar,
          // 'Some where', // Location -- from API
          newProjectObj.Location,
          newProjectObj.ShortDesc,
          newProjectObj.FullDesc
        );
        window.open('https://fpolytuthien.com/admin/project/index_subadmin.php');
      } else if (Name_ == 'donate') {
        console.log('get ID donate');
        const newDonation = await fundDonateApi.get(ID_);
        console.log('newDonation 1: ', newDonation.list_donate);
        const newDonationObj = newDonation.list_donate[0];
        console.log('newDonation 2: ', newDonationObj);
        await demo_project_backend.createDonation(
          newDonationObj.FundDonateId,
          newDonationObj.NameDonor,
          newDonationObj.Email,
          newDonationObj.Phone,
          Number(newDonationObj.Money),
          newDonationObj.NameProject,
          newDonationObj.Message,
          newDonationObj.TimeDonate,
          newDonationObj.FundProjectId,
          newDonationObj.TypeProject
        );
        window.open('https://fpolytuthien.com/pages/donate_default.php');
      } else if (Name_ == 'disbursement') {
        const newDisbursement = await disbursementApi.get(ID_);
        console.log('newDisbursement: ', newDisbursement);
        const newDisbursementObj = newDisbursement.list_disbursement[0];

        console.log('newDisbursementObj', newDisbursementObj);

        await demo_project_backend.createDisbursement(
          Number(newDisbursementObj.disbursementID),
          newDisbursementObj.ProjectID,
          newDisbursementObj.CateProject,
          newDisbursementObj.userRequest,
          newDisbursementObj.DateRequest,
          newDisbursementObj.DateConfirm,
          newDisbursementObj.UserConfirm,
          newDisbursementObj.Reason,
          Number(newDisbursementObj.Money) // DisbursementMoney
        );
        window.open('https://fpolytuthien.com/admin/disbursement/index_subadmin.php');
      }
    };

    getNewDonation();
  }, []);

  return (
    <div>
      <h3>
        {/* {idDonation} */}
        ID Donation: {id} --
      </h3>
    </div>
  );
}

export default NewDonationPage;
