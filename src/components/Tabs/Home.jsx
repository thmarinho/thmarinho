import { useTranslation } from "react-i18next";

const Home = ({ navigate }) => {
  const {t} = useTranslation()

  return (
    <div className="h-full bg-hero bg-cover flex flex-col justify-center items-center md:items-start text-white relative">
      <div className="absolute h-full w-full bg-black opacity-60"></div>
      <div className="z-10 p-8">
        <h1 className="text-7xl font-extrabold ">Théo Marinho</h1>
        <h2 className="text-3xl font-thin tracking-tighter">{t('home.job')}</h2>
        <div className="mt-4">
          <button onClick={() => navigate('projects')} className="hover:scale-105 text-lg transition duration-200 px-4 py-2 rounded-md bg-ayu-orange font-extrabold">{t('home.projects')}</button>
          <button onClick={() => navigate('contact')} className="hover:scale-105 text-lg transition duration-200 px-4 py-2 rounded-md border-2 border-ayu-orange md:ml-4">{t('home.contact')}</button>
        </div>
      </div>
    </div>
  );
};

export default Home;