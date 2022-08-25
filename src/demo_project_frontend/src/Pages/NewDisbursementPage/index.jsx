import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useLocation } from 'react-router-dom';
import projectApi from '../../api/projectApi';
import fundDonateApi from '../../api/fundDonateApi';
import { demo_project_backend } from '../../../../declarations/demo_project_backend/index';
import disbursementApi from '../../api/disbursementApi';

NewDisbursementPage.propTypes = {};

function NewDisbursementPage(props) {
  let { id } = useParams();
  console.log(id);
  const DisbursementUrlParams = useLocation();
  console.log(DisbursementUrlParams);
  const idDisbursement = DisbursementUrlParams.search.substring(6);

  useEffect(() => {
    const getNewDisbursement = async () => {
      const NewDisbursement = await disbursementApi.get(idDisbursement);
      console.log(NewDisbursement);
      await demo_project_backend.createDisbursement(
        Number(NewDisbursement.disbursementID),
        NewDisbursement.ProjectID,
        NewDisbursement.CateProject,
        'Nguyen Van A', // UserRequest
        NewDisbursement.DateRequest,
        NewDisbursement.DateConfirm,
        'Nguyen Van C', // UserConfirm
        NewDisbursement.Reason,
        12000000 // DisbursementMoney
      );
    };

    getNewDisbursement();
  }, []);

  return (
    <div>
      <h3>
        ID Disbursement: {id} -- {idDisbursement}
      </h3>
    </div>
  );
}

export default NewDisbursementPage;
