import React from 'react';
import List from './../../components/List/List';
import AppContext from '../../context';

const TodosView = () => {
  return (
    <AppContext.Consumer>
      {context => (
        <List items={context.todo}/>
      )}
    </AppContext.Consumer>
  )
}

export default TodosView
