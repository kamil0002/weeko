import React from 'react';
import ArticleImage from '../../images/ArticlesIcon.svg';
import NoteImage from '../../images/NotesIcon.svg';
import TodoIcon from '../../images/TodosIcon.svg';
import ReminderIcon from '../../images/RemindersIcon.svg';
import SideNavigationItem from './SideNavigationItem';

const SideNavigation = ({ active }) => {
  return (

        <div className="w-18 bg-green-500 fixed top-0 left-0 bottom-0">
          <ul className="h-72 mt-10 flex flex-col justify-between items-center">
            <li>
              <SideNavigationItem
                image={ArticleImage}
                exact
                path="/"
                dataPage="Articles"
              />
            </li>
            <li>
              <SideNavigationItem
                image={NoteImage}
                path="/notes"
                dataPage="Notes"
              />
            </li>
            <li>
              <SideNavigationItem
                image={TodoIcon}
                path="/todos"
                dataPage="Todos"
              />
            </li>
            <li>
              <SideNavigationItem
                image={ReminderIcon}
                path="/reminders"
                dataPage="Reminders"
              />
            </li>
          </ul>
        </div>

  );
};

export default SideNavigation;
