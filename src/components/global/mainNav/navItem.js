import React from 'react';
import { bool, node } from 'prop-types';
import classnames from 'classnames';

export const NavItem = ({ active, children }) => (
    <li className={classnames({ active })}>
        { children }
        { active && <span className="sr-only">(current)</span> }
    </li>
);

NavItem.propTypes = {
    active: bool,
    children: node
};

export default NavItem;
