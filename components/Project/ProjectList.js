import React from 'react';
import data from 'data/data.json';
import ProjectItem from './ProjectItem';

const ProjectList = () => {
  return (
    <div className='sm:grid gap-10'>
      {data.projects.map((item) => (
        <ProjectItem
          key={item.id}
          title={item.name}
          description={item.excerpt}
          image={`/projects/${item.img}`}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default ProjectList;
