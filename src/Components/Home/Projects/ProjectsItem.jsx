import React from 'react';

const ProjectsItem = (props) => {
  const { img, pp, cat, username } = props;

  return (
    <div className="relative bg-white rounded-lg shadow-lg mr-4">
      <img src={img} className="overflow-hidden rounded-t-lg" />
      <div className="flex gap-3 items-center p-4">
        <img
          src={pp}
          alt={pp}
          className="h-12 w-12 object-cover rounded-full"
        />
        <div className="flex flex-col gap-1 text-sm">
          <span>{cat}</span>
          <span>{username}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsItem;
