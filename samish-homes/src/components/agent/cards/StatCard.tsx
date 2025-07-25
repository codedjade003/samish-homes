import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type StatCardProps = {
  icon: IconDefinition;
  iconBg: string;
  iconColor: string;
  label: string;
  value: string;
  subtext: string;
  subtextColor: string;
  subIcon?: IconDefinition;
};

export default function StatCard({
  icon,
  iconBg,
  iconColor,
  label,
  value,
  subtext,
  subtextColor,
  subIcon,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center">
        <div className={`p-3 rounded-full ${iconBg} ${iconColor} mr-4`}>
          <FontAwesomeIcon icon={icon} />
        </div>
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-xl font-bold">{value}</p>
        </div>
      </div>
      <div className="mt-3">
        <div className={`flex items-center text-sm ${subtextColor}`}>
          {subIcon && <FontAwesomeIcon icon={subIcon} className="mr-1" />}
          <span>{subtext}</span>
        </div>
      </div>
    </div>
  );
}
