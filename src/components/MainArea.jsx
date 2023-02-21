import { XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

const MainArea = ({ tabs, selectedTab, setSelectedTab }) => {
  return (
    <div className="bg-main h-full flex-grow overflow-hidden">
      <div className="flex flex-col h-full">
        <div className="flex bg-fileFinder border-b-1 border-gray-900 overflow-x-auto">
          {tabs.map(tab =>
            <button
              key={tab.value}
              onClick={() => setSelectedTab(tab.value)}
              className={'text-gray-500 flex items-center px-3 py-2 text-md group border-t-2 border-transparent '.concat(selectedTab === tab.value ? 'bg-main text-white' : 'hover:border-yellow-400')}
            >
              <img className="h-4 w-4 mr-1" src={`/icons/${tab.name.split('.').pop()}.svg`} alt="" />
              {tab.name}
              <XMarkIcon className={'h-3.5 w-3.5 ml-4 group-hover:text-white '.concat(selectedTab === tab.value ? 'text-white' : 'text-transparent')}/>
            </button>
          )}
        </div>
        <div className={'flex-grow h-full '.concat(selectedTab === 'notepad' ? '' : 'p-4')}>
          {tabs.find(tab => tab.value === selectedTab ).component}
        </div>
      </div>
    </div>
  )
}

export default MainArea;
