import React from 'react';
import PropTypes from 'prop-types';
import FundProjectItem from '../FundProjectItem';
import { calculateDaysLeft } from '../../utils/Common';
FundItemGroup.propTypes = {};

function FundItemGroup(props) {
  console.log(props);
  const { fundProjectList, nameFundGroup } = props;

  return (
    <div>
      <section class="our_cuauses">
        <h2>{nameFundGroup}</h2>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              {/* our_cuauses_single owl-carousel owl-theme */}
              <div class="our_cuauses_single owl-carousel owl-theme">
                {fundProjectList.map((fundItem) => {
                  return (
                    <FundProjectItem
                      key={fundItem.ProjectID}
                      ProjectID={fundItem.ProjectID}
                      Avatar={fundItem.Avatar}
                      ProjectName={fundItem.ProjectName}
                      ProjectType={fundItem.ProjectType}
                      DateStart={fundItem.DateStart}
                      DateEnd={fundItem.DateEnd}
                      // location={fundItem.location}
                      ShortDesc={fundItem.ShortDesc}
                      FullDesc={fundItem.FullDesc}
                      CurrentDonate={0}
                      TargetMoney={fundItem.TargetMoney}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FundItemGroup;
