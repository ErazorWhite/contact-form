import { createContext, useContext } from 'react';

// This context is used only for displaying and controlling toasts

export const ToastContext = createContext({});

export const useToasts = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToasts must be used within a NotificationProvider');
    }
    return context;
};
