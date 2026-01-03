
interface ChartCardProps {
    title: string;
    description: string;
    type : 'category' | 'time-series';
}
const ChartCard: React.FC<ChartCardProps> = ({ title, description, type }) => {
    return (
        <div className="bg-[#121214] p-6 rounded-2xl border border-gray-800 shadow-md">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{description}</p>
            <div className="h-48 bg-gray-700 flex items-center justify-center">
                <span className="text-gray-400">[Chart Placeholder - {type}]</span>
            </div>
        </div>
    );
}