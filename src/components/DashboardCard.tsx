import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export function DashboardCard({
  title,
  value,
  icon,
  trend,
  className,
}: DashboardCardProps) {
  return (
    <div
      className={cn(
        "p-6 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-fadeIn",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-semibold mt-1">{value}</h3>
          {trend && (
            <p
              className={cn(
                "text-sm mt-1",
                trend.isPositive ? "text-green-500" : "text-red-500"
              )}
            >
              {trend.isPositive ? "+" : "-"}
              {trend.value}% from last month
            </p>
          )}
        </div>
        <div className="p-3 bg-primary-light rounded-lg">
          {icon}
        </div>
      </div>
    </div>
  );
}