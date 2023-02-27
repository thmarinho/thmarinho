import { useTranslation } from "react-i18next";

const Experiences = () => {
  const { i18n, t } = useTranslation()

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
    <section className="text-white max-h-full overflow-y-auto">
      <div className="container max-w-6xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-ayu-yellow">
              <h3 className="text-3xl font-semibold">{t('jobs.title')}</h3>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-2 before:bg-gray-700">
              {JOBS.filter(job => !job.hidden).map((job, idx) => (
                <div key={idx} className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-ayu-yellow">
                  <h3>
                    <span className="text-xl font-semibold">
                      {job.company}
                    </span>
                    <span className="italic">
                      {job.job && ` - ${job.job}`}
                    </span>
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-400">{job.startDate} - {job.endDate}</time>
                  <p className="mt-3 whitespace-pre-wrap">{job.description}</p>
                </div>

              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

export default Experiences;
