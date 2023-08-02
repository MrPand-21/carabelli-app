import { createContext, useState } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState("home")

    function handleTabClick(tab) {
        setActiveTab(tab)
    };

    return (
        <NavigationContext.Provider value={ { activeTab, handleTabClick } }>
            { children }
        </NavigationContext.Provider>
    )
}

export { NavigationContext, NavigationProvider }