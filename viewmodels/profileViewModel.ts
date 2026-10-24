import { useState } from 'react';
import { useApp } from './AppContext';

export function useProfileViewModel() {
  const { user, setUser, notifications, setNotifications } = useApp();

  const unreadCount = notifications.filter((n) => !n.read).length;

  function markAsRead(id: string) {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)));
  }

  function markAllAsRead() {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  }

  return { user, setUser, notifications, unreadCount, markAsRead, markAllAsRead };
}

export function useSettingsViewModel() {
  const [available, setAvailable] = useState(true);
  const [requestAlerts, setRequestAlerts] = useState(true);
  const [reminders, setReminders] = useState(true);
  const [distance, setDistance] = useState(10);

  return { available, setAvailable, requestAlerts, setRequestAlerts, reminders, setReminders, distance, setDistance };
}
