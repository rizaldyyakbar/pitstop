import { TrendingUp, TrendingDown, LucideIcon } from "lucide-react";

interface StatsCardProps {
    title: string;
    value: string | number;
    trend?: string;
    trendColor?: 'green' | 'red' | 'gray';
    icon?: LucideIcon;
    iconColor?: string;
    periodInfo?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, trend, trendColor, icon: Icon, iconColor, periodInfo }) => {    
    return (
        <div className="border border-border bg-card p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-glow cursor-pointer">
            <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{title}</p>
                {Icon && <Icon className={`h-6 w-6 ${iconColor}`} />}   
            </div>
            <h3 className="mt-2 text-3xl font-bold">{value}</h3>    
            {trend && (
                <p className={`mt-1 text-sm flex items-center gap-1 ${trendColor === "green" ? "text-green-500" : trendColor === "red" ? "text-red-500" : "text-gray-500"}`}>
                    {trendColor === 'green' && <TrendingUp className="h-4 w-4" />}
                    {trendColor === 'red' && <TrendingDown className="h-4 w-4" />}
                    {trend}
                    {periodInfo && <p className="text-sm text-muted-foreground">{periodInfo}</p>}
                </p>
            )}
        </div>
    );
};

export default StatsCard;