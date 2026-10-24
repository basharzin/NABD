import { useApp } from './AppContext';
import { Donation } from '@/models/types';

export const DAYS_BETWEEN_DONATIONS = 90;

export function daysSince(date: string) {
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor((Date.now() - new Date(date).getTime()) / oneDay);
}

export function useDonationViewModel() {
  const { user, donations, setDonations } = useApp();

  const days = daysSince(user.lastDonation);
  const canDonate = days >= DAYS_BETWEEN_DONATIONS;
  const daysLeft = DAYS_BETWEEN_DONATIONS - days;

  const nextDate = new Date(user.lastDonation);
  nextDate.setDate(nextDate.getDate() + DAYS_BETWEEN_DONATIONS);

  function bookAppointment(hospitalId: string, date: string, time: string) {
    const newDonation: Donation = {
      id: Date.now().toString(),
      hospitalId,
      date,
      time,
      status: 'Booked',
    };
    setDonations([newDonation, ...donations]);
  }

  return { user, donations, days, canDonate, daysLeft, nextDate, bookAppointment };
}
