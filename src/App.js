import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FileFinder from './components/FileFinder';
import MainArea from './components/MainArea';
import NavBar from './components/NavBar';
import NotePad from './components/Tabs/NotePad';

import './Reset.css'


function App() {
  const { t } = useTranslation()

  const TABS = [
    { name: t('fileFinder.tabs.home'), component: null, value: "profile" },
    { name: t('fileFinder.tabs.formation'), component: null, value: "formation" },
    { name: t('fileFinder.tabs.experiences'), component: null, value: "experiences" },
    { name: t('fileFinder.tabs.skills'), component: null, value: "skills" },
    { name: t('fileFinder.tabs.contact'), component: null, value: "contact" },
    { name: t('fileFinder.tabs.notepad'), component: <NotePad />, value: "notepad"}
  ]

  const [selectedTab, setSelectedTab] = useState('notepad')

  return (
    <div className="h-screen w-screen flex">
      <NavBar />
      <FileFinder tabs={TABS} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <MainArea tabs={TABS} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </div>
  );
}

export default App;
