import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface ChartCardProps {
    title: string;
    description: string;
    type : 'category' | 'time-series';
}

const timeSeriesData = [
    { date: 'Dec 20', expenses: 800, income: 600 },
    { date: 'Dec 22', expenses: 600, income: 700 },
    { date: 'Dec 24', expenses: 700, income: 900 },
    { date: 'Dec 26', expenses: 900, income: 850 },
    { date: 'Dec 27', expenses: 650, income: 1100 },
    { date: 'Dec 28', expenses: 550, income: 950 },
    { date: 'Dec 29', expenses: 1200, income: 800 },
    { date: 'Dec 30', expenses: 2800, income: 3000 },
];

const categoryData = [
    { category: 'Food', value: 36 },
    { category: 'Shopping', value: 40 },
    { category: 'Transportation', value: 10 },
    { category: 'Utilities', value: 14 },
];

// Theme colors matching index.css chart colors
const CHART_COLORS = [
    '#a3e635', // chart-1 - lime green
    '#86c232', // chart-2 - lighter green  
    '#61a63d', // chart-3 - medium green
    '#4a8a3d', // chart-4 - darker green
];

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
                <p className="text-sm font-medium text-popover-foreground">
                    {payload[0].value.toLocaleString()}
                </p>
            </div>
        );
    }
    return null;
};

const ChartCard: React.FC<ChartCardProps> = ({ title, description, type }) => {
    return (
        <div className="bg-card border border-border p-6 rounded-xl shadow-sm">
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{description}</p>
            </div>
            <div className="h-72">
                {type === 'time-series' ? (
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={timeSeriesData}>
                            <defs>
                                <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#a3e635" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#a3e635" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#86c232" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#86c232" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#333333" opacity={0.2} vertical={false} />
                            <XAxis 
                                dataKey="date" 
                                stroke="#9ca3af"
                                style={{ fontSize: '11px' }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <YAxis 
                                stroke="#9ca3af"
                                style={{ fontSize: '11px' }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Legend 
                                wrapperStyle={{ 
                                    fontSize: '12px',
                                    paddingTop: '10px'
                                }}
                                iconType="line"
                            />
                            <Area 
                                type="monotone" 
                                dataKey="expenses" 
                                name="Expenses"
                                stroke="#a3e635" 
                                strokeWidth={2}
                                fill="url(#colorExpenses)"
                                dot={false}
                            />
                            <Area 
                                type="monotone" 
                                dataKey="income" 
                                name="Income"
                                stroke="#86c232" 
                                strokeWidth={2}
                                fill="url(#colorIncome)"
                                dot={false}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={categoryData}
                                    dataKey="value"
                                    nameKey="category"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={100}
                                    paddingAngle={2}
                                    label={({ category, value }) => `${category} ${value}%`}
                                    labelLine={false}
                                >
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={CHART_COLORS[index]} />
                                    ))}
                                </Pie>
                                <Tooltip content={<CustomTooltip />} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ChartCard;