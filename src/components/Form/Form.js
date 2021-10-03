import React from 'react';
import FormItem from './FormItem';
import RadioItem from './RadioItem';
import Button from './../Button';
import AppContext from './../../context';

const types = {
  article: 'article',
  note: 'note',
  todo: 'todo',
  reminder: 'reminder',
};


const initialState = {
  type: 'article',
  id: undefined,
  title: null,
  link: null,
  description: null,
  startTaskTime: null,
  endTaskTime: null,
  reminderDate: null,
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleRadioChange = (e) => {
    this.resetState();
    this.setState({
      type: e.target.value,
    });
    document.querySelector('form').reset();
  };

  resetState = () => {
    this.setState(initialState);
  }

  dateInputs = () => {
    if (this.state.type === 'todo') {
      return (
        <>
          <FormItem
            date="datetime-local"
            type="input"
            name="startTaskTime"
            onChange={this.handleInputChange}
          >
            Start
          </FormItem>
          
          <FormItem
            date="datetime-local"
            type="input"
            name="endTaskTime"
            onChange={this.handleInputChange}
            >Finish</FormItem>
        </>
      );
    }

    if (this.state.type === 'reminder') {
      return (
        <FormItem
          date="datetime-local"
          type="input"
          name="reminderDate"
          onChange={this.handleInputChange}
        >
          Date
        </FormItem>
      );
    }
    
  };

  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <>
            <h3 className="text-green-400 font-medium text-3xl md:ml-10 mb-12">
              Add new {this.state.type}
            </h3>
            <form
              className="h-full m-auto flex items-center:justify-start md:ml-10"
              autoComplete="off"
              onSubmit={(e) => context.addItem(e,this.state)}
            >
              <div className="mr-8 sm:mr-16">
                {this.dateInputs()}
                {this.state.type !== 'todo' && this.state.type !== 'reminder' && (
                  <FormItem
                    type="input"
                    name="title"
                    onChange={this.handleInputChange}
                  >
                    Title
                  </FormItem>
                )}

                {this.state.type === 'article' && (
                  <FormItem
                    type="input"
                    name="link"
                    onChange={this.handleInputChange}
                  >
                    Link
                  </FormItem>
                )}
                <FormItem
                  type="textarea"
                  name="description"
                  onChange={this.handleInputChange}
                >
                  Description
                </FormItem>
                <Button>Add</Button>
              </div>

              <div className="md:mr-10 self-center">
                <h3 className="text-green-800 text-xl relative -top-14 font-semibold">Categories</h3>
                <RadioItem
                  value={types.article}
                  onChange={this.handleRadioChange}
                  checked={this.state.type === types.article}
                >
                  Article
                </RadioItem>
                <RadioItem
                  value={types.note}
                  onChange={this.handleRadioChange}
                  checked={this.state.type === types.note}
                >
                  Note
                </RadioItem>
                <RadioItem
                  value={types.todo}
                  onChange={this.handleRadioChange}
                  checked={this.state.type === types.todo}
                >
                  Todo
                </RadioItem>
                <RadioItem
                  value={types.reminder}
                  onChange={this.handleRadioChange}
                  checked={this.state.type === types.reminder}
                >
                  Reminder
                </RadioItem>
              </div>
            </form>
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
