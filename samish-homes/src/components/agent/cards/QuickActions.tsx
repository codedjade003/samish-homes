const actions = [
  'Create Proposal',
  'Generate Referral Link',
  'Schedule Property Visit',
  'Create Social Media Post',
];

const QuickActions = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 sm:p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
      <div className="space-y-3">
        {actions.map((action, i) => (
          <button
            key={i}
            className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 text-gray-700 rounded-md hover:bg-gray-100 transition duration-150 ease-in-out text-sm sm:text-base"
          >
            <span className="truncate">{action}</span>
            <i className="fas fa-chevron-right text-xs sm:text-sm" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
