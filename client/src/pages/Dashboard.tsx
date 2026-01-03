import StatsCard from "../components/StatsCard";
import { ArrowUpIcon, ArrowDownIcon ,DollarSignIcon, ScanIcon } from "lucide-react"
import ChartCard from "../components/ChartCard";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-background text-foreground p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <header className="flex items-center justify-between">
                    <div className="space-y-1">
                        <h1 className="text-3xl font-bold tracking-tight">Finance Dashboard</h1>
                        <p className="text-muted-foreground">Overview of your financial stats</p>
                    </div>
                    <button className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">
                        <ScanIcon className="h-4 w-4" />
                        Scan 
                    </button>
                </header>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatsCard
                        title="Total Revenue"
                        value="$120,000"
                        trend="+8.5%"
                        trendColor="green"
                        icon={DollarSignIcon}
                        iconColor="text-green-500"
                        periodInfo="from last month"
                    />  
                    <StatsCard
                        title="Total Income"
                        value="$100,000"
                        trend="+5.2%"
                        trendColor="green"
                        icon={ArrowDownIcon}
                        iconColor="text-green-500"
                        periodInfo="from last month"
                    />
                    <StatsCard
                        title="Total Expenses"
                        value="$45,000"
                        trend="-2.3%"
                        trendColor="red"
                        icon={ArrowUpIcon}
                        iconColor="text-red-500"
                        periodInfo="from last month"
                    />
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <ChartCard
                        title="Spending Trend"
                        description="Daily expenses and income over time"
                        type="time-series"
                    />
                    <ChartCard
                        title="Expenses by Category"
                        description="Breakdown of spending by category"
                        type="category"
                    />
                </div>
            </div>
        </div>
    );
}