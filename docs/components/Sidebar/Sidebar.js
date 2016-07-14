import React, { Component } from 'react';
import css from './Sidebar.css';
import SidebarLink from '../SidebarLink';

class Sidebar extends Component {
  render() {
    return (
      <div className={css.sidebar}>
        <SidebarLink to="/components/button">Button</SidebarLink>
        <SidebarLink to="/components/text">Text</SidebarLink>
      </div>
    );
  }
}

export default Sidebar;