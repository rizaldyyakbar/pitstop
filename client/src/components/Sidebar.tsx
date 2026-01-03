import { Home, Receipt, Scan, BrainCircuit, Settings, LogOut, User } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
    const [active, setActive] = useState("home");

    const handleSetActive = (section: string) => {
        setActive(section);
    }

    const menuItems = [
        { name: "Home", icon: Home },
        { name: "Transactions", icon: Receipt },
        { name: "Scan", icon: Scan },
        { name: "Analytics", icon: BrainCircuit },
        { name: "Settings", icon: Settings },
    ];
    return (
        <div className="h-screen w-64 bg-sidebar-foreground text-white flex flex-col justify-between">
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-8">PitStop</h2>
                <nav className="space-y-4">
                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href="#"
                            className={`flex items-center gap-3 hover:text-secondary active:text-primary  ${
                                active.toLowerCase() === item.name.toLowerCase() ? "text-primary font-semibold" : "text-white"
                            }`}
                            onClick={() => handleSetActive(item.name.toLowerCase())}
                        >
                            <item.icon className="h-5 w-5" />
                            {item.name}
                        </a>
                    ))}
                </nav>
            </div>
            <div className="p-3 justify-between border-t border-gray-800 flex items-center gap-4 px-3 py-4">
                <button className="flex items-center gap-2 text-muted-foreground hover:text-white w-full pb-1">
                    <LogOut className="h-5 w-5" />
                    Logout
                </button>
                <div className="group   justify-between flex items-center gap-2 mx-14 ">
                    <button className=" text-small font-normal text-muted-foreground pb-1 group-hover:text-white w-full ">
                        Rizaldy   
                    </button>
                    <button className="flex items-center gap-2 group-hover:text-white">
                        <User className="h-8 w-8 rounded-full border border-gray-700 p-1.5 text-gray-400 group-hover:text-white group-hover:border-white transition-colors " strokeWidth={2.0} />
                    </button>
                </div>
            </div>
        </div>
    );
}