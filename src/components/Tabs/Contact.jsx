import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import Title from "../Title";

const Contact = () => {
  const { t } = useTranslation()
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    },
    onSubmit: async (values) => { console.log(values) }
  })

  const SOCIALS = [
    { name: t('contact.website'), link: 'https://thmarinho.dev', value: 'thmarinho.dev' },
    { name: t('contact.email'), link: 'mailto:thmarinho@outlook.fr', value: 'thmarinho@outlook.fr' },
    { name: t('contact.github'), link: 'https://github.com/thmarinho', value: 'thmarinho' },
    { name: t('contact.linkedin'), link: 'https://linkedin.com/in/thmarinho', value: 'thmarinho' },
  ]

  const Spacer = () => (
    <>
      <span className="whitespace-pre-wrap inline sm:hidden">{' '}</span>
      <span className="whitespace-pre-wrap hidden sm:inline lg:hidden">{'\t'}</span>
      <span className="whitespace-pre-wrap hidden lg:inline">{'\t\t'}</span>
    </>
  )

  return (
    <div className="h-full max-w-7xl mx-auto flex flex-col lg:flex-row text-white pt-8 overflow-y-auto">
      <div className="lg:w-1/2 px-2 md:px-4 lg:px-6 mb-6">
        <Title text={t('contact.title')}/>
        <div className="h-8 bg-gray-300 rounded-t-lg flex justify-between px-4 items-center">
          <div className="italic text-gray-800">Terminal</div>
          <div className="flex gap-1">
            <div className="h-3 aspect-square rounded-full bg-green-600"></div>
            <div className="h-3 aspect-square rounded-full bg-yellow-400"></div>
            <div className="h-3 aspect-square rounded-full bg-red-600"></div>
          </div>
        </div>
        <code className="flex flex-col whitespace-pre-wrap lowercase text-base md:text-xl leading-8 bg-black p-4 rounded-b-2xl">
          <div>$ cat index.css</div>
          <div><span className="text-ayu-yellow">.socials</span>{' {'}</div>
          {SOCIALS.map(social => (
            <div key={social.link}>
              <span>
                <Spacer />
                <span>{`${social.name}: `}</span>
                </span>
              <a className="text-ayu-yellow hover:underline" href={social.link}>{`${social.value}`}</a>
              {';'}
            </div>
          ))}
          <div>{'}'}</div>
          <div>
            <span>$</span>
            <span className="ml-2 text-ayu-yellow animate-blink font-extralight">_</span>
          </div>
        </code>
      </div>
      <div className="lg:w-1/2 mb-6">
        <Title text={t('contact.form.fill')} />
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 px-2 md:px-4 lg:px-6 lg:border-l-2 border-ayu-yellow">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="md:w-1/2">
              <label htmlFor="firstName" className="block text-sm">
                {t('contact.form.firstName')}
              </label>
              <div className="mt-1">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="block w-full rounded-md border-gray-300 shadow-sm p-2 text-gray-800"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <label htmlFor="lastName" className="block text-sm">
                {t('contact.form.lastName')}
              </label>
              <div className="mt-1">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="block w-full rounded-md border-gray-300 shadow-sm p-2 text-gray-800"
                />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm">
              {t('contact.form.email')}
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="block w-full rounded-md border-gray-300 shadow-sm p-2 text-gray-800"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm">
              {t('contact.form.content')}
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                type="message"
                rows={2}
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="block w-full rounded-md border-gray-300 shadow-sm p-2 text-gray-800"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="hover:scale-105 text-lg transition duration-200 px-2 py-1 md:px-4 md:py-2 rounded-md bg-ayu-yellow text-black"
            >
              {t('contact.form.submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact;
