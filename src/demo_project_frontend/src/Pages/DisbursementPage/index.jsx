import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import Header from '../../components/Header';
import HeaderContact from '../../components/HeaderContact';
import Footer from '../../components/Footer/index';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { demo_project_backend } from '../../../../declarations/demo_project_backend';
import './DisbursementPage.css';
import disbursementApi from '../../api/disbursementApi';
import DisbursementItem from './DisbursementItem/index';

DisbursementPage.propTypes = {};

function DisbursementPage(props) {
  const params = useLocation();
  const IdDetailProject = params.search.substring(6);
  console.log(IdDetailProject);

  const [currentDisbursementList, setCurrentDisbursementList] = useState([]);
  console.log('real: currentDisbursementList', currentDisbursementList);
  // const DateAppliedSystem = new Date(DateConfirm);
  // const listDisbursementString = NumberDisbursement.join(', ');
  // console.log('disbursementId: ', DisbursementID);
  // console.log('disbursementId: typeof', typeof DisbursementID);
  // console.log('NumberDisbursement: ', NumberDisbursement);
  // Name project ???
  // const disbursementIdText = DisbursementID.toString();

  // UseEffect 1

  useEffect(() => {
    const fetchDisbursement = async () => {
      const disbursements = await disbursementApi.getAll();
      console.log(disbursements.list_disbursement);
      const disbursementList = disbursements.list_disbursement;

      disbursementList.forEach((disbursement) => {
        const createDisburement = async () => {
          await demo_project_backend.createDisbursement(
            Number(disbursement.disbursementID),
            disbursement.ProjectID,
            disbursement.CateProject,
            'Nguyen Van A',
            disbursement.DateRequest,
            disbursement.DateConfirm,
            'Nguyen Van C',
            disbursement.Reason,
            12000000
          );
        };
        createDisburement();
      });
    };

    fetchDisbursement();
  }, []);

  // Use Effect 2
  useEffect(() => {
    const getCurrentDisbursementList = async () => {
      let disbursementList = await demo_project_backend.readValueDisbursementInfos();
      console.log('first disbursement: ', disbursementList);
      disbursementList = disbursementList.map((disbursement) => disbursement[0]);
      console.log('disbursementList', disbursementList);
      let currentDisbursementList = disbursementList.filter(
        (disbursement) => disbursement.ProjectID == IdDetailProject
      );
      console.log('currentDisbursementList', currentDisbursementList);
      console.log('typeof currentDisbursementList', typeof currentDisbursementList);
      currentDisbursementList = Array.from(currentDisbursementList);
      setCurrentDisbursementList(currentDisbursementList);
    };
    getCurrentDisbursementList();
  }, []);

  return (
    <div>
      <HeaderContact />
      <Header />
      <h2 className="detail-disbursement__title">LỊCH SỬ GIẢI NGÂN CHI TIẾT</h2>
      {currentDisbursementList.map((currentDisbursement, index) => {
        console.log(currentDisbursement);
        return (
          <DisbursementItem
            IdDetailProject={IdDetailProject}
            key={currentDisbursement.DisbursementID}
            NumberOfDisbursement={index + 1}
            DisbursementID={currentDisbursement.DisbursementID}
            // IdDetailProject={currentDisbursement.IdDetailProject}
            DisbursementMoney={currentDisbursement.DisbursementMoney}
            // DateAppliedSystem={DateAppliedSystem}
            nameProject={'Hello'}
            ProjectID={currentDisbursement.ProjectID}
            TypeProject={currentDisbursement.TypeProject}
            UserRequest={currentDisbursement.UserRequest}
            DateRequest={currentDisbursement.DateRequest}
            UserConfirm={currentDisbursement.UserConfirm}
            DateConfirm={currentDisbursement.DateConfirm}
            Reason={currentDisbursement.Reason}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default DisbursementPage;
