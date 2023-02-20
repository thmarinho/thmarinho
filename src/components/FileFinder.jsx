import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline"

const FileFinder = ({tabs, selectedTab, setSelectedTab}) => {
  const [sourceActive, setSourceActive] = useState(true)

  return (
    <div className="bg-fileFinder h-full w-72 border-r-1 border-gray-900 hidden md:block text-gray-500 p-1 pl-0">
      <div className="mx-5 mt-2 mb-3 text-xs">EXPLORER</div>
      <button onClick={() => setSourceActive(old => !old)} className="flex items-center font-bold uppercase text-xs">
        <ChevronDownIcon className={'h-4 w-4 mx-1 transition duration-100 '.concat(sourceActive ? '' : '-rotate-90')} /> thmarinho
      </button>
      {sourceActive && (
        <div className="flex flex-col items-start mt-1">
          {tabs.map(tab =>
            <button className={'flex items-center text-sm pl-6 py-[2px] hover:bg-superLightGray w-full '.concat(selectedTab === tab.value ? 'bg-superLightGray text-white' : '')} onClick={() => setSelectedTab(tab.value)}>
              <img className="h-4 w-4 mr-1" src={`/icons/${tab.name.split('.').pop()}.svg`} />
              {tab.name}
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default FileFinder;
