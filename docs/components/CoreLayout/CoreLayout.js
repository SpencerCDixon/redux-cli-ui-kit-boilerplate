import React, { PropTypes } from 'react';
import Sidebar from '../Sidebar';
import css from './CoreLayout.css';

function CoreLayout({ children }) {
  return (
    <div className={css.wrapper}>
      <div className={css.sidebar}>
        <Sidebar />
      </div>
      <div className={css.mainContent}>
        {children}
      </div>
    </div>
  );
}

CoreLayout.propTypes = {
  children: PropTypes.node,
};
export default CoreLayout;
