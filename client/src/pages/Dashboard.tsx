import StatsCard from "../components/StatsCard";
import { ArrowUpIcon, ArrowDownIcon ,DollarSignIcon, ScanIcon } from "lucide-react"
import ChartCard from "../components/ChartCard";

export default function Dashboard() {
    // Data keuangan bulan ini
    const totalIncome = 100000;
    const totalExpenses = 45000;
    const totalRevenue = totalIncome - totalExpenses;

    // Data bulan lalu (untuk perbandingan)
    const lastMonthIncome = 95000;
    const lastMonthExpenses = 46000;
    const lastMonthRevenue = lastMonthIncome - lastMonthExpenses;

    // Hitung trend otomatis
    const calculateTrend = (current: number, previous: number) => {
        const change = ((current - previous) / previous) * 100;
        return {
            percentage: `${change >= 0 ? '+' : ''}${change.toFixed(1)}%`,
            color: change >= 0 ? 'green' as const : 'red' as const
        };
    };

    const revenueTrend = calculateTrend(totalRevenue, lastMonthRevenue);
    const incomeTrend = calculateTrend(totalIncome, lastMonthIncome);
    const expensesTrend = calculateTrend(totalExpenses, lastMonthExpenses);

    return (
        <div className="min-h-screen bg-background text-foreground p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <header className="flex items-center justify-between">
                    <div className="space-y-1">
                        <h1 className="text-3xl font-bold tracking-tight">Finance Dashboard</h1>
                        <p className="text-muted-foreground">Overview of your financial stats</p>
                    </div>
                    <button className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-secondary px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">
                        <ScanIcon className="h-4 w-4" />
                        Scan 
                    </button>
                </header>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatsCard
                        title="Total Revenue"
                        value={`$${totalRevenue.toLocaleString()}`}
                        trend={revenueTrend.percentage}
                        trendColor={revenueTrend.color}
                        icon={DollarSignIcon}
                        iconColor="text-primary"
                        periodInfo="from last month"
                    />  
                    <StatsCard
                        title="Total Income"
                        value={`$${totalIncome.toLocaleString()}`}
                        trend={incomeTrend.percentage}
                        trendColor={incomeTrend.color}
                        icon={ArrowDownIcon}
                        iconColor="text-green-500"
                        periodInfo="from last month"
                    />
                    <StatsCard
                        title="Total Expenses"
                        value={`$${totalExpenses.toLocaleString()}`}
                        trend={expensesTrend.percentage}
                        trendColor={expensesTrend.color}
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