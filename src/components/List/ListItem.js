import React from 'react';
import AppContext from './../../context';

const dateOptions = {
  dateStyle: 'short',
  timeStyle: 'short',
};

const ListItem = ({
  type,
  title,
  description,
  link,
  startTaskTime,
  endTaskTime,
  reminderDate,
  id
}) => {
  const LinkComponent = link =>
    link ? (
      <span>
        <span className="font-semibold">Link:</span>{' '}
        <a target="_blank" href={link} rel="noopener noreferrer">
          {link.length < 17 ? link : (link.slice(0, 17) + '...')}
        </a>
      </span>
    ) : (
      ''
    );

  const DescriptionComponent = description => (
    <p className="mb-2 break-words">
      <span className="font-semibold overflow-ellipsis">Description:</span>{' '}
      {description}
    </p>
  );

  const TitleComponent = title =>
    title ? (
      <h5 className="mb-2">
        <span className="font-semibold">Title: </span>
        {title}
      </h5>
    ) : (
      ''
    );

  const TodoDurationComponent = (startTaskTime, endTaskTime) => {
    if (type !== 'todo') return;
    const startTime = new Intl.DateTimeFormat(
      navigator.language,
      dateOptions
    ).format(new Date(startTaskTime));
    const endTime = new Intl.DateTimeFormat(
      navigator.language,
      dateOptions
    ).format(new Date(endTaskTime));

    return (
      <>
        <div className="mb-2">
          <span className="font-semibold">Start: </span> {startTime}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Finish: </span> {endTime}
        </div>
      </>
    );
  };

  const ReminderDateComponent = reminderDate => {
    if (type !== 'reminder') return;
    const reminderTime = new Intl.DateTimeFormat(
      navigator.language,
      dateOptions
    ).format(new Date(reminderDate));
    return (
      <div className="mb-2">
        <span className="font-semibold">Date: </span> {reminderTime}
      </div>
    );
  };

  return (
    <AppContext.Consumer>
      {context => (
        <li className="relative text-green-700 border border-green-300 shadow-lg px-7 py-3 max-w-sm md:max-w-xs mr-0 sm:mr-6 mb-8" id={id} type={type}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute top-2 right-2 cursor-pointer"
            fill="none"
            viewBox="0 0 22 22"
            stroke="currentColor"
            onClick={(e) => context.deleteItem(e)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          {ReminderDateComponent(reminderDate)}
          {TodoDurationComponent(startTaskTime, endTaskTime)}
          {TitleComponent(title)}
          {DescriptionComponent(description)}
          {LinkComponent(link)}
        </li>
      )}
    </AppContext.Consumer>
  );
};

export default ListItem;
