import { XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

const MainArea = ({ tabs, selectedTab, setSelectedTab }) => {
  const { t } = useTranslation()
  return (
    <div className="bg-main h-full flex-grow">
      <div className="flex flex-col">
        <div className="flex bg-fileFinder border-b-1 border-gray-900">
          {tabs.map(tab =>
            <button
              onClick={() => setSelectedTab(tab.value)}
              className={'text-gray-500 flex items-center px-3 py-2 text-sm group  '.concat(selectedTab === tab.value ? 'bg-main' : '')}
            >
              <img className="h-4 w-4 mr-1" src={`/icons/${tab.name.split('.').pop()}.svg`} alt="" />
              {tab.name}
              <XMarkIcon className={'h-3 w-3 ml-3 group-hover:text-white '.concat(selectedTab === tab.value ? 'text-white' : 'text-transparent')}/>
            </button>
          )}
        </div>
        <div className="flex-grow">
          {t('current')}
        </div>
      </div>
    </div>
  )
}

export default MainArea;
