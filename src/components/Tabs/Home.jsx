import { useTranslation } from "react-i18next";

const Home = ({ navigate }) => {
  const { t } = useTranslation()

  return (
    // Using background image from https://unsplash.com/photos/f77Bh3inUpE
    <div className="h-full bg-hero bg-cover flex flex-col justify-center md:items-start text-white relative">
      <div className="absolute h-full w-full bg-black opacity-60"></div>
      <div className="z-10 p-8">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold ">Théo Marinho</h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-thin tracking-tighter">{t('home.job')}</h2>
        <div className="mt-4 gap-4 flex flex-wrap">
          <button onClick={() => navigate('projects')} className="hover:scale-105 text-lg transition duration-200 px-2 py-1 md:px-4 md:py-2 rounded-md bg-ayu-yellow text-black font-extrabold">{t('home.projects')}</button>
          <button onClick={() => navigate('contact')} className="hover:scale-105 text-lg transition duration-200 px-2 py-1 md:px-4 md:py-2 rounded-md border-2 border-ayu-yellow md:ml-4">{t('home.contact')}</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
