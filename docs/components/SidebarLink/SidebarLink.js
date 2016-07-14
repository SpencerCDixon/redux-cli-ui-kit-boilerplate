import React, { PropTypes } from 'react';
import cn from 'classnames';
import css from './SidebarLink.css';
import { Link } from 'react-router';

function SidebarLink({ children, to }) {
  const classes = cn(
    css.link,
  );

  return (
    <Link to={to} className={classes} activeClassName={css.activeLink}>
      {children}
    </Link>
  );
}

SidebarLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default SidebarLink;
