interface Props {
  onToggleSidebar: () => void;
}

export default function MobileHeader({ onToggleSidebar }: Props) {
  return (
    <header className="bg-white shadow-sm md:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <button onClick={onToggleSidebar} className="text-gray-500 hover:text-gray-700">
          <i className="fas fa-bars text-xl" />
        </button>
        <h1 className="text-xl font-bold text-blue-800">Samish Homes</h1>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700 relative">
            <i className="fas fa-bell text-xl" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <i className="fas fa-user-circle text-xl" />
          </button>
        </div>
      </div>
    </header>
  );
}
