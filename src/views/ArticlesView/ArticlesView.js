import React from 'react';
import List from './../../components/List/List';
import AppContext from '../../context';

const ArticlesView = () => {
  return (
    <AppContext.Consumer>
      {context => (
        <List items={context.article}/>
      )}
    </AppContext.Consumer>
  )
}

export default ArticlesView
