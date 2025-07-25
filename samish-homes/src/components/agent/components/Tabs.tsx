type TabProps = {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
};

const Tabs = ({ tabs, activeTab, onTabChange }: TabProps) => {
  return (
    <div className="flex space-x-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-3 py-2 rounded-md text-sm font-medium ${
            tab === activeTab ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-800'
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
