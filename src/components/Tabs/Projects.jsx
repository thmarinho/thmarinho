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
      stack: t('projects.maskott.stack'),
    },
    {
      name: t('projects.vincipit.name'),
      company: 'Vincipit',
      cover: '/projects/vincipit.svg',
      link: "https://github.com/vivitek/",
      description: t('projects.vincipit.description'),
      stack: t('projects.vincipit.stack'),
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
      <div className="p-8 md:p-12 text-center sm:text-left before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-ayu-yellow">
        <h1 className="text-3xl font-semibold">{t('projects.title')}</h1>
      </div>
      <div className="flex-grow flex max-w-full mb-4">
        <div className="h-full w-full lg:py-10 px-2 md:px-4 lg:px-0 flex flex-col lg:flex-row overflow-y-scroll overflow-x-hidden lg:overflow-y-hidden lg:overflow-x-scroll gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="w-full min-w-fit h-auto lg:w-auto lg:h-[90%] lg:min-h-fit rounded-lg my-2 mb-3 lg:first:ml-12 lg:last:mr-12 bg-gray-700 p-4 md:p-10 lg:flex">
              <div className="w-full lg:w-[55rem] flex">
                <div className="hidden lg:flex items-center flex-col justify-between w-1/3">
                  <div className="w-full aspect-square p-4 flex justify-center items-center">
                    <img src={project.cover} className="w-4/5" alt="" />
                  </div>
                </div>
                <div className="hidden lg:block h-full border-r-1 border-superLightGray w-0 mx-8"></div>
                <div className="lg:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-8">
                      <img src={project.cover} className="block lg:hidden w-20" alt="" />
                      <h2 className="ml-8 lg:ml-0 text-2xl font-semibold">{project.name}</h2>
                      <span className="mx-2 font-normal text-base">-</span>
                      <a href={project.link} className="italic text-base hover:underline font-normal flex items-center">
                        {project.company}
                      </a>
                    </div>
                    <p className="w-full whitespace-pre-wrap text-justify">{project.description}</p>
                  </div>
                  <p className="mt-8 lg:mt-0 whitespace-pre-wrap">{project.stack}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
