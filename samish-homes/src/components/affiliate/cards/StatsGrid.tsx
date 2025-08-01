// src/components/affiliate/cards/StatsGrid.tsx
import StatCard from './StatCard';

const stats = [
  {
    title: 'Total Earnings',
    value: '$2,450.00',
    change: '12% from last month',
    iconClass: 'fas fa-wallet',
    iconBg: 'bg-samish-primary bg-opacity-10',
    trendColor: 'text-green-500',
  },
  {
    title: 'Total Referrals',
    value: '24',
    change: '5 new this month',
    iconClass: 'fas fa-users',
    iconBg: 'bg-samish-secondary bg-opacity-10',
    trendColor: 'text-green-500',
  },
  {
    title: 'Conversions',
    value: '8',
    change: '3% conversion rate',
    iconClass: 'fas fa-chart-line',
    iconBg: 'bg-purple-100',
    trendColor: 'text-green-500',
  },
  {
    title: 'Pending Payout',
    value: '$850.00',
    change: '15 days to payout',
    iconClass: 'fas fa-hand-holding-usd',
    iconBg: 'bg-blue-100',
    trendColor: 'text-blue-500',
  },
];

export default function StatsGrid() {
  return (
    <section className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((item, idx) => (
        <StatCard key={idx} {...item} />
      ))}
    </section>
  );
}
