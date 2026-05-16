import React, { useState } from 'react';
import Profile from '../Components/Profile';
import Interests from '../Components/Interests';
import Settings from '../Components/Settings';

interface Tabs {
    name: string;
    component: React.ComponentType<object>;
}

const TabForms = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const tabs: Tabs[] = [
        {
            name: 'Profile',
            component: Profile,
        },
        {
            name: 'Interests',
            component: Interests,
        },
        {
            name: 'Settings',
            component: Settings,
        }
    ];

    const ActiveTabComponent= tabs[activeTab]?.component ?? Profile;;

    return (
        <div>
            <div className="tabs">
                {tabs.map((tab, index) => (
                    <button key={index} onClick={() => setActiveTab(index)}>
                        {tab.name}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                <ActiveTabComponent />
            </div>
        </div>
    )
}

export default TabForms;