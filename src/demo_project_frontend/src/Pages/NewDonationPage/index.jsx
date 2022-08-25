import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useLocation } from 'react-router-dom';
import projectApi from '../../api/projectApi';
import fundDonateApi from '../../api/fundDonateApi';
import { demo_project_backend } from '../../../../declarations/demo_project_backend/index';

NewDonationPage.propTypes = {};

function NewDonationPage(props) {
  let { id } = useParams();
  console.log(id);
  const DonationUrlParams = useLocation();
  console.log(DonationUrlParams);
  const idDonation = DonationUrlParams.search.substring(6);

  useEffect(() => {
    const getNewDonation = async () => {
      const newDonation = await fundDonateApi.get(idDonation);
      console.log(newDonation);
      await demo_project_backend.createDonation(
        newDonation.FundDonateId,
        newDonation.NameDonor,
        newDonation.Email,
        newDonation.Phone,
        20000000,
        newDonation.NameProject,
        newDonation.Message,
        newDonation.TimeDonate,
        newDonation.FundProjectId,
        newDonation.TypeProject
      );
    };

    getNewDonation();
  }, []);

  return (
    <div>
      <h3>
        ID Donation: {id} -- {idDonation}
      </h3>
    </div>
  );
}

export default NewDonationPage;
