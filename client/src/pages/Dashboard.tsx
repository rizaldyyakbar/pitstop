import StatsCard from "../components/StatsCard";
import { ArrowUpIcon, ArrowDownIcon ,DollarSignIcon, ScanIcon, UserCircle2 } from "lucide-react"

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-[#09090b] text-white px-6 py-8">
            <div className="mx-auto max-w-6xl space-y-12 mt-6">
                <header className="flex items-center justify-between gap-4 ">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Finance Dashboard</h1>
                        <p className="text-muted-foreground">Overview of your financial stats</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="flex items-center bg-primary text-primary-foreground hover:bg-secondary px-4 py-2 rounded-md text-sm font-medium transition-all">
                            <ScanIcon className="mr-2 h-4 w-4" />
                            Scan 
                        </button>
                    </div>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-auto ">
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
            </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">


        </div>

        </div>
    );
}