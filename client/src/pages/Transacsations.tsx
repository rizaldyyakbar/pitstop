import StatsCard from "../components/StatsCard";

export default function Transactions() {
    return (
        <div className="min-h-screen bg-background text-foreground p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <header className="flex items-center justify-between">
                    <div className="space-y-1">
                        <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
                        <p className="text-muted-foreground">Overview of your recent transactions</p>
                    </div>
                </header>
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatsCard
                        title="Total Amount"
                        value="1,250"
                    />  
                    <StatsCard
                        title="Total Income"
                        value="1,200"
                    />
                    <StatsCard
                        title="Total Expenses"
                        value="800"
                    />
                </div>
            </div>
        </div>
    );
}