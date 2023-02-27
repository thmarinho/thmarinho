import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation()

  const SKILLS = {
    frontend: [
      { name: 'React.js', icon: 'react.svg' },
      { name: 'Next.js', icon: 'next.svg' },
      { name: 'Angular 2+', icon: 'angular.svg' },
    // ],
    // css: [
      { name: 'CSS', icon: 'css.svg' },
      { name: 'Sass / SCSS', icon: 'sass.svg' },
      { name: 'Tailwind CSS', icon: 'tailwind.svg' },
    ],
    backend: [
      { name: 'TypeScript', icon: 'typescript.svg' },
      { name: 'JavaScript', icon: 'javascript.svg' },
      { name: 'Python', icon: 'python.svg' },
      { name: 'PHP', icon: 'php.svg' },
      { name: '.NET', icon: 'dotnet.svg' },
    ],
    database: [
      { name: 'GraphQl', icon: 'graphql.svg' },
      { name: 'MongoDB', icon: 'mongo.svg' },
      { name: 'MySQL', icon: 'mysql.svg' },
      { name: 'Redis', icon: 'redis.svg' },
      { name: 'Entity Framework', icon: 'dotnet.svg' },
    ],
    test: [
      { name: 'Jest', icon: 'jest.svg' },
      { name: 'Cypress', icon: 'cypress.svg' },
    ],
    devops: [
      { name: 'RabbitMQ', icon: 'rabbitmq.svg' },
      { name: 'Docker', icon: 'docker.svg' },
      { name: 'Grafana', icon: 'grafana.svg' },
      { name: 'NGINX', icon: 'nginx.svg' },
    ],
  }

  return (
    <section className="text-white max-h-full overflow-y-auto">
      <div className="container max-w-6xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-ayu-yellow">
              <h1 className="text-3xl font-semibold">{t('skills.title')}</h1>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8">
              {Object.keys(SKILLS).map((category, idx) => (
                <div key={idx}>
                  <div className="text-center sm:text-left mb-3">
                    <h2 className="text-3xl font-semibold">{t(`skills.${category}`)}</h2>
                  </div>
                  <div className="flex flex-wrap mt-0">
                    {SKILLS[category].map(skill => (
                      <div key={skill.name} className="flex m-2 flex-col h-28 aspect-square justify-center items-center rounded-md shadow-md hover:scale-110  transition duration-200 bg-gray-700">
                        <img className="h-12 aspect-square" src={`/skills/${skill.icon}`} alt="" />
                        <h3 className="text-center mt-2 italic text-sm">{skill.name}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
