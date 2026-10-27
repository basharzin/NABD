import { Stack } from 'expo-router';
import { AppProvider } from '@/shared/AppContext';
import Colors from '@/shared/Colors';

export default function RootLayout() {
  return (
    <AppProvider>
      <Stack screenOptions={{ headerTintColor: Colors.primary }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="new-request" options={{ title: 'New Request' }} />
        <Stack.Screen name="request/[id]" options={{ title: 'Request Details' }} />
        <Stack.Screen name="hospital/[id]" options={{ title: 'Hospital Details' }} />
        <Stack.Screen name="find-donors" options={{ title: 'Find Donors' }} />
        <Stack.Screen name="book" options={{ title: 'Book Appointment' }} />
        <Stack.Screen name="donations" options={{ title: 'My Donations' }} />
        <Stack.Screen name="notifications" options={{ title: 'Notifications' }} />
        <Stack.Screen name="settings" options={{ title: 'Settings' }} />
      </Stack>
    </AppProvider>
  );
}
