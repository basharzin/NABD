import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { DONATIONS, NOTIFICATIONS, REQUESTS, USER } from '@/models/data';
import { BloodRequest, Donation, Notification, User } from '@/models/types';

type AppValue = {
  user: User;
  setUser: (user: User) => void;
  requests: BloodRequest[];
  setRequests: (requests: BloodRequest[]) => void;
  donations: Donation[];
  setDonations: (donations: Donation[]) => void;
  notifications: Notification[];
  setNotifications: (notifications: Notification[]) => void;
};

const AppContext = createContext<AppValue | null>(null);

export function AppProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User>(USER);
  const [requests, setRequests] = useState<BloodRequest[]>(REQUESTS);
  const [donations, setDonations] = useState<Donation[]>(DONATIONS);
  const [notifications, setNotifications] = useState<Notification[]>(NOTIFICATIONS);

  return (
    <AppContext.Provider
      value={{ user, setUser, requests, setRequests, donations, setDonations, notifications, setNotifications }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const value = useContext(AppContext);
  if (!value) throw new Error('useApp must be inside AppProvider');
  return value;
}
