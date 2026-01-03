import { Home, Receipt, Scan, BrainCircuit, Settings, LogOut, UserCircle2 } from "lucide-react";
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
                <div className="justify-between flex items-center gap-2 mx-14 ">
                    <button className=" text-small font-normal text-card-foreground pb-1 ">
                        Rizaldy   
                    </button>
                    <button className="flex items-center gap-2 hover:shadow-glow brightness-90">
                        <UserCircle2 className="h-6 w-6 text-primary" />
                    </button>
                </div>
            </div>
        </div>
    );
}