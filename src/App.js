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
    { name: t('fileFinder.tabs.home'), component: <div>profile</div>, value: "profile" },
    { name: t('fileFinder.tabs.formation'), component: <div>formation</div>, value: "formation" },
    { name: t('fileFinder.tabs.experiences'), component: <div>exp</div>, value: "experiences" },
    { name: t('fileFinder.tabs.skills'), component: <div>skills</div>, value: "skills" },
    { name: t('fileFinder.tabs.contact'), component: <div>contact</div>, value: "contact" },
    { name: t('fileFinder.tabs.notepad'), component: <NotePad />, value: "notepad" },
  ]

  const [selectedTab, setSelectedTab] = useState(TABS[0].value)
  const [closedTabs, setClosedTabs] = useState([])

  const closeTab = (tabValue) => {
    const _closedTabs = [...closedTabs, tabValue]
    setClosedTabs(_closedTabs)

    if (selectedTab === tabValue) {
      const toOpenTab = TABS.find(tab => !_closedTabs.includes(tab.value))
      console.log(toOpenTab)
      setSelectedTab(toOpenTab?.value)
    }
  }

  const openTab = (tabValue) => {
    setClosedTabs(old => old.filter(tab => tab !== tabValue))
    setSelectedTab(tabValue)
  }

  return (
    <div className="h-screen w-screen flex">
      <NavBar />
      <FileFinder tabs={TABS} selectedTab={selectedTab} setSelectedTab={openTab} />
      <MainArea tabs={TABS} selectedTab={selectedTab} setSelectedTab={openTab} closeTab={closeTab} closedTabs={closedTabs} />
    </div>
  );
}

export default App;
