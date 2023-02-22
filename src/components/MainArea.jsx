import { XMarkIcon } from "@heroicons/react/24/outline";

const MainArea = ({ tabs, selectedTab, setSelectedTab, closeTab, closedTabs }) => {

  const NO_PADDING_TABS = ['profile', 'notepad'];

  return (
    <div className="bg-main h-full flex-grow overflow-hidden">
      <div className="flex flex-col h-full">
        <div className="flex bg-fileFinder border-b-1 border-gray-900 overflow-x-auto min-h-fit">
          {tabs.filter(tab => !closedTabs.includes(tab.value)).map(tab =>
            <div
              key={tab.value}
              className={'flex text-gray-500 group border-t-2 border-transparent '.concat(selectedTab === tab.value ? 'bg-main text-white' : 'hover:border-ayu-yellow')}
            >
              <button
                onClick={() => setSelectedTab(tab.value)}
                className="flex items-center ml-3 my-2 text-md"
              >
                <img className="h-4 w-4 pr-2" src={`/icons/${tab.name.split('.').pop()}.svg`} alt="" />
                {tab.name}
              </button>
              <button
                onClick={() => closeTab(tab.value)}
                className="mx-3 group-hover:text-white"
              >
                <XMarkIcon className="h-3.5 aspect-square" />
              </button>
            </div>
          )}
        </div>
        <div className={'flex-grow h-1 '.concat(NO_PADDING_TABS.includes(selectedTab) ? '' : 'p-4')}>
          {tabs.find(tab => tab.value === selectedTab)?.component || <div>default</div>}
        </div>
      </div>
    </div>
  )
}

export default MainArea;
