import { XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

const MainArea = ({ tabs, selectedTab, setSelectedTab, closeTab, closedTabs }) => {
  const { t } = useTranslation()

  const Tab = ({ tab }) => (
    <div
      className={'flex group border-t-2 border-transparent px-3 py-2 '.concat(selectedTab === tab.value ? 'bg-gray-200 dark:bg-main text-black dark:text-white' : 'hover:border-ayu-yellow text-gray-500')}
    >
      <button
        onClick={() => setSelectedTab(tab.value)}
        className="flex items-center text-md min-w-max"
      >
        <img className="h-5 aspect-square pr-2" src={`/icons/${tab.name.split('.').pop()}.svg`} alt="" />
        <span className="min-w-fit">{tab.name}</span>
      </button>
      <button
        title={t('fileFinder.tabs.close')}
        onClick={() => closeTab(tab.value)}
        className="ml-3 group-hover:text-black dark:group-hover:text-white hidden sm:inline"
      >
        <XMarkIcon className="h-3.5 aspect-square" />
      </button>
    </div>
  );

  return (
    <div className="dark:bg-main h-full flex-grow overflow-hidden">
      <div className="flex flex-col h-full">
        <div className="flex dark:bg-fileFinder border-b-1 dark:border-gray-900 overflow-x-auto min-h-fit">
          {tabs.filter(tab => !closedTabs.includes(tab.value)).map(tab => <Tab key={tab.value} tab={tab} />)}
        </div>
        <div className="flex-grow h-1">
          {tabs.find(tab => tab.value === selectedTab)?.component || tabs[0].component}
        </div>
      </div>
    </div>
  )
}

export default MainArea;
