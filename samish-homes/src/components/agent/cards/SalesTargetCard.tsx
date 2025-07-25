export default function SalesTargetCard() {
  return (
    <div className="bg-white rounded-lg shadow p-6 h-full flex flex-col justify-between">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Sales Target</h2>
      <div className="flex flex-col items-center">
        <div className="relative w-40 h-40 mb-4">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle className="text-gray-200" strokeWidth="8" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
            <circle
              className="text-indigo-600"
              strokeWidth="8"
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="40"
              cx="50"
              cy="50"
              strokeDasharray="251.2"
              strokeDashoffset="75.36"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl font-bold">70%</p>
              <p className="text-xs text-gray-500">Completed</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-600 mb-2">₦12,450,000 of ₦18,000,000</p>
          <p className="text-sm text-gray-500">You're on track to meet your quarterly target</p>
        </div>
      </div>
    </div>
  );
}
