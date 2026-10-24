import { useState } from 'react';
import { HOSPITALS } from '@/models/data';
import { BloodRequest, BloodType } from '@/models/types';
import { useApp } from './AppContext';

// which patients each donor type can give to
const CAN_GIVE_TO: Record<BloodType, BloodType[]> = {
  'O-': ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'],
  'O+': ['O+', 'A+', 'B+', 'AB+'],
  'A-': ['A-', 'A+', 'AB-', 'AB+'],
  'A+': ['A+', 'AB+'],
  'B-': ['B-', 'B+', 'AB-', 'AB+'],
  'B+': ['B+', 'AB+'],
  'AB-': ['AB-', 'AB+'],
  'AB+': ['AB+'],
};

export function canGiveTo(donor: BloodType, patient: BloodType) {
  return CAN_GIVE_TO[donor].includes(patient);
}

export function getHospitalName(id: string) {
  const hospital = HOSPITALS.find((h) => h.id === id);
  return hospital ? hospital.name : 'Unknown hospital';
}

export function useRequestsViewModel() {
  const { user, requests, setRequests } = useApp();
  const [onlyMatching, setOnlyMatching] = useState(true);

  const shownRequests = onlyMatching
    ? requests.filter((r) => canGiveTo(user.bloodType, r.bloodType))
    : requests;

  function addRequest(request: BloodRequest) {
    setRequests([request, ...requests]);
  }

  function getRequest(id: string) {
    return requests.find((r) => r.id === id);
  }

  return { user, shownRequests, onlyMatching, setOnlyMatching, addRequest, getRequest };
}
