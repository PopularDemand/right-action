import React from 'react';
import { Link } from 'react-router-dom';
import { startCase } from 'lodash';
import classnames from 'classnames';
import NavItem from './navItem';
import './mainNav.scss';

const mainNav = () => (
  <nav className="navbar navbar-default main-nav">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link className="navbar-brand" to="/">
          <img className="nav-logo" src="/public/images/right-action.png" alt="right action logo"/>
        </Link>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <NavItem active={location.pathname === '/'}>
            <Link to={`/`}>Home</Link>
          </NavItem>
          {
            ['contact'].map((text) => (
              <NavItem active={location.pathname === `/${text}`}>
                <Link to={`/${text}`}>{startCase(text)}</Link>
              </NavItem>
            ))
          }
        </ul>
      </div>
    </div>
  </nav>
);

export default mainNav;
