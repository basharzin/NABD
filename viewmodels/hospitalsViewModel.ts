import { useState } from 'react';
import { DONORS, HOSPITALS } from '@/models/data';
import { BloodType } from '@/models/types';
import { canGiveTo } from './requestsViewModel';

export function useHospitalsViewModel() {
  const [search, setSearch] = useState('');
  const [onlyBloodBanks, setOnlyBloodBanks] = useState(false);

  let hospitals = HOSPITALS.filter((h) => h.name.toLowerCase().includes(search.toLowerCase()));
  if (onlyBloodBanks) {
    hospitals = hospitals.filter((h) => h.hasBloodBank);
  }
  hospitals = [...hospitals].sort((a, b) => a.distance - b.distance);

  return { hospitals, search, setSearch, onlyBloodBanks, setOnlyBloodBanks };
}

export function getHospital(id: string) {
  return HOSPITALS.find((h) => h.id === id);
}

export function useFindDonorsViewModel() {
  const [bloodType, setBloodType] = useState<BloodType>('O+');
  const [maxDistance, setMaxDistance] = useState(10);

  const donors = DONORS.filter((d) => d.distance <= maxDistance && canGiveTo(d.bloodType, bloodType));

  return { donors, bloodType, setBloodType, maxDistance, setMaxDistance };
}
