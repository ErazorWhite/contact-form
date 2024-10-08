import { createContext, useContext } from 'react';

// This context is used only for sending notifications

export const NotificationContext = createContext({});

export const useNotify = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotify must be used within a NotificationProvider');
    }
    return context;
};