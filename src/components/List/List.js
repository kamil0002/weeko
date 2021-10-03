import React from 'react';
import Masonry from 'react-masonry-css';
import ListItem from './ListItem';

const breakpoints = {
  default: 5,
  1500: 3,
  900: 2,
  570: 1,
};

const List = ({ items }) => {
  return (
    <>
      <ul className="">
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {items.map((item, i) => (
            <ListItem key={i} {...item} />
          ))}
        </Masonry>
      </ul>
    </>
  );
};

export default List;
