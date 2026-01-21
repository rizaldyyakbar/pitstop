import { Home, Receipt, Scan, BrainCircuit, Settings, LogOut, User } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    const menuItems = [
        { name: "Home", icon: Home, path: "/" },
        { name: "Transactions", icon: Receipt, path: "/transactions" },
        { name: "Scan", icon: Scan, path: "/scan" },
        { name: "Analytics", icon: BrainCircuit, path: "/analytics" },
        { name: "Settings", icon: Settings, path: "/settings" },
    ];
    return (
        <div className="h-screen w-64 bg-sidebar-foreground text-white flex flex-col justify-between">
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-8">PitStop</h2>
                <nav className="space-y-4">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 hover:text-secondary transition-colors ${
                                    isActive ? "text-primary font-semibold" : "text-white"
                                }`
                            }
                        >
                            <item.icon className="h-5 w-5" />
                            {item.name}
                        </NavLink>
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