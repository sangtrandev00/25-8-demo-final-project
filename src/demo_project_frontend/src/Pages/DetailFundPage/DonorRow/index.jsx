import React from 'react';
import PropTypes from 'prop-types';

DonorRow.propTypes = {};

function DonorRow(props) {
  console.log('props: ', props);
  const { DonorName, DonateMoney } = props;
  return (
    <li>
      {DonorName} - {DonateMoney}
    </li>
  );
}

export default DonorRow;
