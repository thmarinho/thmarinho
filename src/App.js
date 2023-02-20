import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import FileFinder from './components/FileFinder';
import MainArea from './components/MainArea';
import NavBar from './components/NavBar';


function App() {
  const { t } = useTranslation()

  const TABS = [
    { name: t('fileFinder.tabs.home'), value: "profile" },
    { name: t('fileFinder.tabs.formation'), value: "formation" },
    { name: t('fileFinder.tabs.experiences'), value: "experiences" },
    { name: t('fileFinder.tabs.skills'), value: "skills" },
    { name: t('fileFinder.tabs.contact'), value: "contact" },
  ]

  const [selectedTab, setSelectedTab] = useState(TABS[0].value)

  return (
    <div className="h-screen w-screen flex">
      <NavBar />
      <FileFinder tabs={TABS} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <MainArea tabs={TABS} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </div>
  );
}

export default App;
