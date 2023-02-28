import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      name: t('projects.maskott.name'),
      company: 'Maskott',
      cover: '/projects/maskott.png',
      link: 'https://www.maskott.com',
      description: t('projects.maskott.description'),
    },
    {
      name: t('projects.vincipit.name'),
      company: 'Vincipit',
      cover: '/projects/vincipit.svg',
      link: "https://github.com/vivitek/",
      description: t('projects.vincipit.description'),
    },
    // {
    //   name: 'Création d\'un site vitrine',
    //   company: 'No Hit Studio',
    //   cover: '/skills/cypress.svg',
    //   link: 'https://nohit.studio',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nisl vitae velit suscipit malesuada. Curabitur vitae ipsum ipsum. Duis sagittis lectus enim, ac porta nisi suscipit quis. Pellentesque nec dolor ex. Morbi fringilla felis consectetur velit tincidunt dapibus. Integer commodo aliquet nisi, ut vulputate felis placerat a. Sed imperdiet molestie lectus, ac finibus metus facilisis in. Praesent tristique dolor et ex sagittis malesuada. Nulla ac risus quis velit ullamcorper imperdiet. Nam at augue dignissim, pretium risus ac, suscipit urna. Nulla posuere sagittis purus id pretium. Nullam non libero feugiat, elementum ligula eget, vestibulum eros. Integer rhoncus suscipit varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nisl vitae velit suscipit malesuada. Curabitur vitae ipsum ipsum. Duis sagittis lectus enim, ac porta nisi suscipit quis. Pellentesque nec dolor ex. Morbi fringilla felis consectetur velit tincidunt dapibus. Integer commodo aliquet nisi, ut vulputate felis placerat a. Sed imperdiet molestie lectus, ac finibus metus facilisis in. Praesent tristique dolor et ex sagittis malesuada. Nulla ac risus quis velit ullamcorper imperdiet. Nam at augue dignissim, pretium risus ac, suscipit urna. Nulla posuere sagittis purus id pretium.'
    // },
    // {
    //   name: 'Création d\'un site vitrine',
    //   company: 'Imela Events',
    //   cover: '/skills/docker.svg',
    //   link: 'https://imelaevents.com',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nisl vitae velit suscipit malesuada. Curabitur vitae ipsum ipsum. Duis sagittis lectus enim, ac porta nisi suscipit quis. Pellentesque nec dolor ex. Morbi fringilla felis consectetur velit tincidunt dapibus. Integer commodo aliquet nisi, ut vulputate felis placerat a. Sed imperdiet molestie lectus, ac finibus metus facilisis in. Praesent tristique dolor et ex sagittis malesuada. Nulla ac risus quis velit ullamcorper imperdiet. Nam at augue dignissim, pretium risus ac, suscipit urna. Nulla posuere sagittis purus id pretium. Nullam non libero feugiat, elementum ligula eget, vestibulum eros. Integer rhoncus suscipit varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nisl vitae velit suscipit malesuada. Curabitur vitae ipsum ipsum. Duis sagittis lectus enim, ac porta nisi suscipit quis. Pellentesque nec dolor ex. Morbi fringilla felis consectetur velit tincidunt dapibus. Integer commodo aliquet nisi, ut vulputate felis placerat a. Sed imperdiet molestie lectus, ac finibus metus facilisis in. Praesent tristique dolor et ex sagittis malesuada. Nulla ac risus quis velit ullamcorper imperdiet. Nam at augue dignissim, pretium risus ac, suscipit urna. Nulla posuere sagittis purus id pretium.'
    // },
  ];

  return (
    <div className="text-white flex flex-col h-full overflow-y-scroll lg:overflow-y-auto">
      <div className="p-12 text-center sm:text-left before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-ayu-yellow">
        <h1 className="text-3xl font-semibold">{t('projects.title')}</h1>
      </div>
      <div className="flex-grow flex max-w-full mb-4">
        <div className="h-full w-full lg:py-10 px-4 lg:px-0 flex flex-col lg:flex-row overflow-y-scroll overflow-x-hidden lg:overflow-y-hidden lg:overflow-x-scroll gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="w-full min-w-fit h-auto lg:w-auto lg:h-[90%] lg:min-h-fit rounded-lg pb-1 my-2 mb-3 transform lg:hover:scale-105 transition duration-500 lg:first:ml-12 lg:last:mr-12 bg-gray-700 p-10">
              <div className="text-2xl font-semibold mb-8 flex items-center">
                <img src={project.cover} className="block w-16 mr-4" alt="" />
                <h2 className="ml-8 lg:ml-0">{project.name}</h2>
                <span className="mx-2 font-normal text-base">-</span>
                <a href={project.link} className="italic text-base hover:underline font-normal flex items-center">
                  {project.company}
                </a>
              </div>
              <p className="w-[32rem] max-w-full whitespace-pre-wrap text-justify">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
