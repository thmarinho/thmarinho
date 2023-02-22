import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation()

  const SKILLS = {
    frontend: [
      { name: 'react', icon: 'react.svg' },
      { name: 'next', icon: 'next.svg' },
      { name: 'angular', icon: 'angular.svg' },
    ],
    css: [
      { name: 'css', icon: 'css.svg' },
      { name: 'sass / scss', icon: 'sass.svg' },
      { name: 'tailwind', icon: 'tailwind.svg' },
    ],
    backend: [
      { name: 'typescript', icon: 'typescript.svg' },
      { name: 'nodejs', icon: 'javascript.svg' },
      { name: 'python', icon: 'python.svg' },
      { name: 'php', icon: 'php.svg' },
      { name: 'dotnet', icon: 'dotnet.svg' },
    ],
    database: [
      { name: 'graphql', icon: 'graphql.svg' },
      { name: 'mongo / mongoose', icon: 'mongo.svg' },
      { name: 'mysql', icon: 'mysql.svg' },
      { name: 'redis', icon: 'redis.svg' },
      { name: 'entityframework', icon: 'dotnet.svg' },
    ],
    test: [
      { name: 'jest', icon: 'jest.svg' },
      { name: 'cypress', icon: 'cypress.svg' },
    ],
    devops: [
      { name: 'rabbitmq', icon: 'rabbitmq.svg' },
      { name: 'docker', icon: 'docker.svg' },
      { name: 'grafana', icon: 'grafana.svg' },
      { name: 'nginx', icon: 'nginx.svg' },
    ],
  }

  const Title = ({ name }) => (
    <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-ayu-yellow">
      <h3 className="text-3xl font-semibold">{name}</h3>
    </div>
  )

  return (
    <section className="max-h-full overflow-y-auto">
      {/* <div className="text-white container max-w-6xl px-4 py-12 mx-auto">
        <div className="mx-4 overflow-y-auto">
          {Object.keys(SKILLS).map((category, idx) => (
            <>
              <Title key={idx} name={t(`skills.${category}`)} />
              <div className="flex ">
                {SKILLS[category].map(skill => <img className="h-12 aspect-square" src={`/skills/${skill.icon}`} alt="" />)}
              </div>
            </>
          ))}
        </div>
      </div> */}
    </section>
  )
}

export default Skills;
