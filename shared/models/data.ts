import { BloodRequest, BloodType, Donation, Donor, Hospital, Notification, User } from './types';

export const BLOOD_TYPES: BloodType[] = ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'];

export const USER: User = {
  name: 'Omar Hassan',
  phone: '01001234567',
  area: 'Nasr City',
  bloodType: 'O+',
  lastDonation: '2026-09-01',
};

export const HOSPITALS: Hospital[] = [
  { id: 'h1', name: 'Kasr Al Ainy Hospital', area: 'Garden City', phone: '0223654060', hours: 'Open 24 hours', distance: 8.4, hasBloodBank: true, lowStock: ['O-', 'A-'] },
  { id: 'h2', name: 'Ain Shams University Hospital', area: 'Abbassia', phone: '0224024162', hours: 'Open 24 hours', distance: 4.1, hasBloodBank: true, lowStock: ['O+', 'B-'] },
  { id: 'h3', name: 'National Blood Transfusion Center', area: 'Agouza', phone: '0233021755', hours: '8 AM to 8 PM', distance: 11.2, hasBloodBank: true, lowStock: [] },
  { id: 'h4', name: 'Dar Al Fouad Hospital', area: '6th of October', phone: '16370', hours: 'Open 24 hours', distance: 32.5, hasBloodBank: true, lowStock: ['A+'] },
  { id: 'h5', name: 'El Demerdash Hospital', area: 'Abbassia', phone: '0224831750', hours: 'Open 24 hours', distance: 4.4, hasBloodBank: false, lowStock: [] },
];

export const REQUESTS: BloodRequest[] = [
  { id: 'r1', bloodType: 'O-', units: 3, hospitalId: 'h1', phone: '01012345678', urgent: true, note: 'Surgery tonight', date: '2026-10-21' },
  { id: 'r2', bloodType: 'A+', units: 1, hospitalId: 'h2', phone: '01198765432', urgent: true, note: '', date: '2026-10-20' },
  { id: 'r3', bloodType: 'AB+', units: 2, hospitalId: 'h4', phone: '01234567890', urgent: false, note: '', date: '2026-10-19' },
  { id: 'r4', bloodType: 'O+', units: 2, hospitalId: 'h3', phone: '01098761234', urgent: false, note: 'Regular transfusion', date: '2026-10-21' },
];

export const DONORS: Donor[] = [
  { id: 'd1', name: 'Ahmed', bloodType: 'O-', area: 'Nasr City', distance: 1.2, lastDonation: '2026-05-10' },
  { id: 'd2', name: 'Mariam', bloodType: 'A+', area: 'Heliopolis', distance: 3.5, lastDonation: '2026-06-01' },
  { id: 'd3', name: 'Youssef', bloodType: 'O+', area: 'Abbassia', distance: 4.0, lastDonation: '2026-10-01' },
  { id: 'd4', name: 'Nour', bloodType: 'B+', area: 'Nasr City', distance: 2.1, lastDonation: '2026-03-15' },
  { id: 'd5', name: 'Karim', bloodType: 'AB+', area: 'Zamalek', distance: 9.8, lastDonation: '2026-01-20' },
  { id: 'd6', name: 'Salma', bloodType: 'O+', area: 'Maadi', distance: 14.3, lastDonation: '2026-04-02' },
  { id: 'd7', name: 'Hana', bloodType: 'A-', area: 'Dokki', distance: 8.7, lastDonation: '2026-07-11' },
];

export const DONATIONS: Donation[] = [
  { id: 'dn1', hospitalId: 'h2', date: '2026-09-01', time: '10:00', status: 'Completed' },
  { id: 'dn2', hospitalId: 'h3', date: '2026-05-18', time: '12:00', status: 'Completed' },
  { id: 'dn3', hospitalId: 'h1', date: '2026-02-03', time: '09:00', status: 'Completed' },
];

export const NOTIFICATIONS: Notification[] = [
  { id: 'n1', title: 'O- needed at Kasr Al Ainy', message: '3 units needed for surgery tonight.', date: '2026-10-21', read: false, requestId: 'r1' },
  { id: 'n2', title: 'O+ needed at Blood Transfusion Center', message: '2 units needed.', date: '2026-10-21', read: false, requestId: 'r4' },
  { id: 'n3', title: 'Reminder', message: 'You can donate again on 30 November.', date: '2026-10-15', read: true },
  { id: 'n4', title: 'Thank you', message: 'Your last donation reached a patient.', date: '2026-09-10', read: true },
];

export const TIMES = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00'];
