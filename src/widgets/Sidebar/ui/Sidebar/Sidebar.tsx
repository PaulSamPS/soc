import styles from './Sidebar.module.scss';
import clsx from "clsx";
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwwitcher";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className={clsx(styles.sidebar, collapsed && styles.collapsed, className)}>
            <button onClick={onToggle}>toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};

