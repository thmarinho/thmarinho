import { useTranslation } from "react-i18next";
import Title from "../Title";

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
    <section className="text-black dark:text-white max-h-full overflow-y-auto lg:mr-4 lg:pt-4 ">
      <div className="max-w-6xl px-4 py-12 mx-auto">
        <div className="flex flex-col lg:flex-row sm:mx-4">
          <Title text={t('skills.title')} />
          <div className="space-y-6 lg:mx-6">
            {Object.keys(SKILLS).map((category, idx) => (
              <div key={idx} className="md:ml-8">
                <div className="text-center lg:text-left mb-3">
                  <h2 className="text-3xl font-semibold">{t(`skills.${category}`)}</h2>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:w-[90%]">
                  {SKILLS[category].map(skill => (
                    <div key={skill.name} className="flex flex-col h-28 aspect-square justify-center items-center rounded-md shadow-md hover:scale-110 transition duration-200 bg-gray-100 dark:bg-gray-700">
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
    </section>
  );
}

export default Skills;
