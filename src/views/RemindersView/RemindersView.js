import React from 'react';
import List from './../../components/List/List';
import AppContext from '../../context';

const RemindersView = () => {
  return (
    <AppContext.Consumer>
      {context => (
        <List items={context.reminder}/>
      )}
    </AppContext.Consumer>
  )
}

export default RemindersView
