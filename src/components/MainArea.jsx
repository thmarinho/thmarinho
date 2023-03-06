import { XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

const MainArea = ({ tabs, selectedTab, setSelectedTab, closeTab, closedTabs }) => {
  const { t } = useTranslation()
  const NO_PADDING_TABS = ['profile', 'notepad', 'projects', 'skills', 'experiences'];

  const Tab = ({ tab }) => (
    <div
      className={'flex text-gray-500 group border-t-2 border-transparent '.concat(selectedTab === tab.value ? 'bg-main text-white' : 'hover:border-ayu-yellow')}
    >
      <button
        onClick={() => setSelectedTab(tab.value)}
        className="flex items-center ml-3 my-2 text-md"
      >
        <img className="h-5 aspect-square pr-2" src={`/icons/${tab.name.split('.').pop()}.svg`} alt="" />
        {tab.name}
      </button>
      <button
        title={t('fileFinder.tabs.close')}
        onClick={() => closeTab(tab.value)}
        className="mx-3 group-hover:text-white"
      >
        <XMarkIcon className="h-3.5 aspect-square" />
      </button>
    </div>
  );

  return (
    <div className="bg-main h-full flex-grow overflow-hidden">
      <div className="flex flex-col h-full">
        <div className="flex bg-fileFinder border-b-1 border-gray-900 overflow-x-auto min-h-fit">
          {tabs.filter(tab => !closedTabs.includes(tab.value)).map(tab => <Tab key={tab.value} tab={tab} />)}
        </div>
        <div className={'flex-grow h-1 '.concat(NO_PADDING_TABS.includes(selectedTab) ? '' : 'p-4')}>
          {tabs.find(tab => tab.value === selectedTab)?.component || tabs[0].component}
        </div>
      </div>
    </div>
  )
}

export default MainArea;
