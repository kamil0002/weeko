import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppContext from './context';
import Modal from './components/Modal';
import ArticlesView from './views/ArticlesView/ArticlesView';
import NotesView from './views/NotesView/NotesView';
import RemindersView from './views/RemindersView/RemindersView';
import TodosView from './views/TodosView/TodosView';
import SideNavigation from './components/Navigation/SideNavigation';
import TopNavigation from './components/Navigation/TopNavigation';

const types = ['article', 'note', 'todo', 'reminder'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedPage: 'Articles',
      modalOpened: false,
      article: [],
      note: [],
      todo: [],
      reminder: [],
    };
  }

  componentDidMount = () => {
    // localStorage.clear();
    this.getLocalStorage();
  };

  getLocalStorage = () => {
    types.forEach(type => {
      let storageItems;
      if (
        localStorage.getItem(type) === null ||
        localStorage.getItem(type) === '[]'
      )
        return;
      storageItems = JSON.parse(localStorage.getItem(type));
      this.setState({
        [storageItems[0].type]: [...storageItems],
      });
    });
  };

  setLocalStorage = (type, items) => {
    localStorage.setItem(type, JSON.stringify(items));
  };

  closeModal = () => {
    this.setState({
      modalOpened: false,
    });
  };

  openModal = () => {
    this.setState({
      modalOpened: true,
    });
  };

  controlDisplayingPage = e => {
    const targetType = e.target.tagName.toLowerCase();
    const target = e.target;
    let data;
    targetType === 'img'
      ? (data = target.closest('a').dataset.page)
      : (data = target.dataset.page);

    this.setState({
      displayedPage: data,
    });
  };

  addItem = (e, item) => {
    e.preventDefault();
    item.id = Math.random().toString();
    this.setState(prevState => ({
      [item.type]: [...prevState[item.type], item],
    }));

    // localStorage.setItem(
    //   item.type,
    //   JSON.stringify([...this.state[item.type], item])
    // );
    this.setLocalStorage(item.type, [...this.state[item.type], item]);
    this.closeModal();
  };

  deleteItem = e => {
    const listItem = e.target.closest('li');
    const itemID = listItem.getAttribute('id');
    const itemType = listItem.getAttribute('type');
    const searchedItem = this.state[itemType].find(type => itemID === type.id);
    const newItems = this.state[itemType];
    const indexToDelete = newItems.findIndex(item => item === searchedItem);
    newItems.splice(indexToDelete, 1);
    this.setState({
      [itemType]: newItems,
    });

    // localStorage.setItem(itemType, JSON.stringify(this.state[itemType]));
    this.setLocalStorage(itemType, this.state[itemType]);
  };

  render() {
    const context = {
      ...this.state,
      page: this.controlDisplayingPage,
      openModal: this.openModal,
      addItem: this.addItem,
      deleteItem: this.deleteItem,
    };

    return (
      <Router>
        <AppContext.Provider value={context}>
          {this.state.modalOpened && <Modal closeModal={this.closeModal} />}
          <TopNavigation />
          <div
            className={`${
              this.state.modalOpened
                ? 'bg-black bg-opacity-20 fixed top-0 bottom-0 w-full transition-all duration-150'
                : ''
            }`}
            onClick={this.state.modalOpened ? this.closeModal : undefined}
          ></div>
            <SideNavigation />
            <div className="inline-block width-calculer ml-18 mt-12">
              <h3 className="underline text-green-400 text-2xl font-semibold ml-12 mb-10">
                {this.state.displayedPage}
              </h3>
              <Switch>
                <Route exact path="/" component={ArticlesView} />
                <Route path="/notes" component={NotesView} />
                <Route path="/todos" component={TodosView} />
                <Route path="/reminders" component={RemindersView} />
              </Switch>
          </div>
        </AppContext.Provider>
      </Router>
    );
  }
}
export default App;
