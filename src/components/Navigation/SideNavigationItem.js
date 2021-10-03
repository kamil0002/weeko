import React from 'react';
import AppContext from './../../context';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SideNavigationItem = ({ image, path, exact, dataPage }) => {
  return (
    <AppContext.Consumer>
      {(context) => (
        
        <NavLink
          to={path}
          exact
          className="w-12 h-12 cursor-pointer flex justify-center items-center rounded-full"
          activeClassName=" bg-gradient-to-t from-green-600 to-green-400"
          onClick={context.page}
          data-page={dataPage}
        >
          <div className="w-8 h-8">
            <img className="w-full h-full" src={image} alt="articles" />
          </div>
        </NavLink>
      )}
    </AppContext.Consumer>
  );
};

SideNavigationItem.propTypes = {
  image: PropTypes.string,
};

export default SideNavigationItem;
