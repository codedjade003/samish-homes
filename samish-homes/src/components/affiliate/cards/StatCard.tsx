// src/components/affiliate/cards/StatCard.tsx
interface StatCardProps {
  title: string;
  value: string;
  change: string;
  iconClass: string;
  iconBg: string;
  trendColor: string;
}

export default function StatCard({
  title,
  value,
  change,
  iconClass,
  iconBg,
  trendColor,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <h3 className="text-2xl font-bold text-samish-dark mt-1">{value}</h3>
          <p className={`${trendColor} text-sm mt-2 flex items-center`}>
            <i className="fas fa-arrow-up mr-1" />
            {change}
          </p>
        </div>
        <div className={`${iconBg} p-3 rounded-lg`}>
          <i className={`${iconClass} text-xl text-samish-primary`} />
        </div>
      </div>
    </div>
  );
}
