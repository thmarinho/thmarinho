import { useTranslation } from "react-i18next";
import Title from "../Title";

const Experiences = () => {
  const { t } = useTranslation()

  /*
    {
      company: "",
      job: t('jobs..job'),
      description: t('jobs..description'),
      startDate: "",
      endDate: "",
      hidden: false,
    },
  */


  const JOBS = [
    {
      company: "Aktislab",
      job: t('jobs.aktislab.job'),
      description: t('jobs.aktislab.description'),
      startDate: "07/2022",
      endDate: "02/2023",
      hidden: false,
    },
    {
      company: "Epitech",
      job: t('jobs.epitech2.job'),
      description: t('jobs.epitech2.description'),
      startDate: "03/2022",
      endDate: "08/2022",
      hidden: false,
    },
    {
      company: t('jobs.freelance.job'),
      job: null,
      description: t('jobs.freelance.description'),
      startDate: "02/2022",
      endDate: "08/2022",
      hidden: false,
    },
    {
      company: "Charvet Digital Media",
      job: t('jobs.charvet.job'),
      description: t('jobs.charvet.description'),
      startDate: "04/2020",
      endDate: "02/2022",
      hidden: false,
    },
    {
      company: "Epitech",
      job: t('jobs.epitech.job'),
      description: t('jobs.epitech.description'),
      startDate: "07/2021",
      endDate: "07/2021",
      hidden: false,
    },
    {
      company: "Padoa",
      job: t('jobs.padoa.job'),
      description: t('jobs.padoa.description'),
      startDate: "09/2018",
      endDate: "12/2018",
      hidden: false,
    }
  ];

  return (
    <section className="dark:text-white max-h-full overflow-y-auto mx-1 md:mx-4 md:pt-4">
      <div className="max-w-6xl px-2 md:px-4 py-12 mx-auto">
        <div className="flex flex-col lg:flex-row">
          <Title text={t('jobs.title')} />
          <div className="px-6 space-y-6">
            <div className="relative px-4 space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-2 before:bg-gray-400 dark:before:bg-gray-700">
              {JOBS.filter(job => !job.hidden).map((job, idx) => (
                <div key={idx} className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-34px] before:z-[1] before:bg-ayu-yellow">
                  <h3>
                    <span className="text-xl font-semibold">
                      {job.company}
                    </span>
                    <span className="italic">
                      {job.job && ` - ${job.job}`}
                    </span>
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-900 dark:text-gray-400">{job.startDate} - {job.endDate}</time>
                  <p className="mt-3 whitespace-pre-wrap">{job.description}</p>
                </div>

              ))}
            </div>
          </div>
        </div>
      </div>
    </section >
  )

}

export default Experiences;
