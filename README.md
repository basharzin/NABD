
# Nabd

Blood donation app. Mobile Application Development coursework, Phase 1.

## How to run

npm install
npx expo start


Scan the QR code with Expo Go (SDK 57).

## Team

| Member | Part | Screens | Files |
|---|---|---|---|
| Bashar (team lead) | Requests | Requests List, New Request, Request Details | `app/(tabs)/index.tsx`, `app/new-request.tsx`, `app/request/[id].tsx`, `viewmodels/requestsViewModel.ts`, `components/RequestCard.tsx` |
| Karim | Map | Hospitals Map, Find Donors, Hospital Details | `app/(tabs)/hospitals.tsx`, `app/find-donors.tsx`, `app/hospital/[id].tsx`, `viewmodels/hospitalsViewModel.ts` |
| Malek | Donation | Can I Donate?, Book Appointment, My Donations | `app/(tabs)/donate.tsx`, `app/book.tsx`, `app/donations.tsx`, `viewmodels/donationViewModel.ts` |
| Abdulmajid | Profile | Profile, Notifications, Settings | `app/(tabs)/profile.tsx`, `app/notifications.tsx`, `app/settings.tsx`, `viewmodels/profileViewModel.ts` |

Bashar also set up the project and the shared code: `models/`, `viewmodels/AppContext.tsx`, `constants/` and the navigation layouts in `app/_layout.tsx` and `app/(tabs)/_layout.tsx`.

## Folder structure (MVVM)

- `models/` - data types and sample data (Model)
- `viewmodels/` - state and logic for the screens (ViewModel)
- `app/` and `components/` - the screens (View)
- `constants/` - colours

## Git workflow

Each member works on their own branch and merges into `main` through a pull request:

| Member | Branch |
|---|---|
| Bashar | `feature/requests` |
| Karim | `feature/map` |
| Malek | `feature/donation` |
| Abdulmajid | `feature/profile` |
