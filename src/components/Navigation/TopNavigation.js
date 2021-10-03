import React from 'react';
import Button from './../Button';
import AppContext from './../../context';

const TopNavigation = () => {
  return (
    <AppContext.Consumer>
      {(context) => (
      <div className="h-18 width-calculer float-right border-b-4 border-green-500 shadow-md flex items-center justify-between">
        <div className="ml-3 sm:ml-8">
          <h1 className="font-bold text-green-400 text-2xl sm:text-3xl">
            Weeko
          </h1>
          <p className="-mt-2 text-black hidden sm:block">
            keep your thoughts in one place
          </p>
        </div>
        <Button onClick={context.openModal}>New</Button>
      </div>
      )}
    </AppContext.Consumer>
  );
};

export default TopNavigation;
