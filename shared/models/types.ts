export type BloodType = 'O-' | 'O+' | 'A-' | 'A+' | 'B-' | 'B+' | 'AB-' | 'AB+';

export type BloodRequest = {
  id: string;
  bloodType: BloodType;
  units: number;
  hospitalId: string;
  phone: string;
  urgent: boolean;
  note: string;
  date: string;
};

export type Hospital = {
  id: string;
  name: string;
  area: string;
  phone: string;
  hours: string;
  distance: number;
  hasBloodBank: boolean;
  lowStock: BloodType[];
};

export type Donor = {
  id: string;
  name: string;
  bloodType: BloodType;
  area: string;
  distance: number;
  lastDonation: string;
};

export type Donation = {
  id: string;
  hospitalId: string;
  date: string;
  time: string;
  status: 'Completed' | 'Booked';
};

export type Notification = {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
  requestId?: string;
};

export type User = {
  name: string;
  phone: string;
  area: string;
  bloodType: BloodType;
  lastDonation: string;
};
