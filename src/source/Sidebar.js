import React,{ useState } from 'react';
import { Auth } from 'aws-amplify';
import styles from './App.module.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const [sidebarvisible , setSidebarvisible] = useState(false);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await Auth.signOut();
            console.log("signed out:", Auth.user)
            navigate("/");
        } catch (error) {
        console.log('error signing out:', error);
        }
    };

    const handleMyPage = () => {
        // My page の処理を実装
    };

    const handleSetting = () => {
        // Setting の処理を実装
    };

    const handleSendFeedback = () => {
        // Send Feedback の処理を実装
    };

    const toggleSidebar = () => {
        setSidebarvisible(!sidebarvisible);
    }

    return (
        <div className={styles.sidebar}>
            <button onClick={toggleSidebar} className={styles.hamburgerMenu} >☰</button>
            <button onClick={handleMyPage} className={styles.sidebarItem}>
                My Page
            </button>
            <button onClick={handleSetting} className={styles.sidebarItem}>
                Setting
            </button>
            <button onClick={handleLogout} className={styles.sidebarItem}>
                Log out
            </button>
            <button onClick={handleSendFeedback} className={styles.sidebarItem}>
                Send Feedback
            </button>
        </div>
    );
};
export default Sidebar;
