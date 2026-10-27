# Nabd

Blood donation app. Mobile Application Development coursework, Phase 1.

Report: see the Phase 1 report submitted on the module page.

## How to run

```
npm install
npx expo start
```

Scan the QR code with Expo Go (SDK 57).

## Team

| Member | Part | Screens | Folder |
|---|---|---|---|
| Bashar (team lead) | Requests | Requests List, New Request, Request Details | features/requests/ |
| Karim | Map | Hospitals Map, Find Donors, Hospital Details | features/map/ |
| Malek | Donation | Can I Donate?, Book Appointment, My Donations | features/donation/ |
| Abdulmajid | Profile | Profile, Notifications, Settings | features/profile/ |

Bashar also set up the project and the shared code in shared/ (data types, sample data, AppContext, colours) and the navigation layouts in app/_layout.tsx and app/(tabs)/_layout.tsx.

## Folder structure (MVVM, organised by feature)

```
app/                 routes only (Expo Router), each file points to a screen
features/
  requests/          screens/, components/, viewmodels/
  map/               screens/, viewmodels/
  donation/          screens/, viewmodels/
  profile/           screens/, viewmodels/
shared/              code used by every feature (Model)
  models/            types.ts, data.ts
  AppContext.tsx     shared state
  Colors.ts
```

- Model: shared/models/ (data types and sample data)
- ViewModel: features/*/viewmodels/ (state and logic for the screens)
- View: features/*/screens/ and features/*/components/ (the screens)

Expo Router needs every route to be inside app/, so each file there is one line, for example:

```ts
export { default } from '@/features/donation/screens/CanIDonateScreen';
```

## Git workflow

Each member works on their own branch and merges into main through a pull request:

| Member | Branch |
|---|---|
| Bashar | feature/requests |
| Karim | feature/map |
| Malek | feature/donation |
| Abdulmajid | feature/profile |
