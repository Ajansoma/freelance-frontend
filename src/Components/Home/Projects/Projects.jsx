import { projects } from '../../../data';
import ProjectsItem from './ProjectsItem';
import Slide from '../../../UI/Slide';
import { slideNumber } from '../../../lib/slideNumber';

const Projects = () => {
  const { slidesToShow } = slideNumber(4, 3, 2, 1);

  return (
    <div className="pt-16 shadow-black-500/50 mb-24 mx-9 md:mx-16 lg:mx-32 flex justify-between">
      <div className="w-[70rem]">
        <Slide slidesToShow={slidesToShow} arrowsScroll={slidesToShow}>
          {projects.map((project) => (
            <ProjectsItem
              img={project.img}
              pp={project.pp}
              cat={project.cat}
              username={project.username}
              key={project.id}
            />
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Projects;
