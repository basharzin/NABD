import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import Colors from '@/shared/Colors';
import { DAYS_BETWEEN_DONATIONS, useDonationViewModel } from '@/features/donation/viewmodels/donationViewModel';

export default function CanIDonateScreen() {
  const { user, days, canDonate, daysLeft, nextDate } = useDonationViewModel();

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={[styles.status, { color: canDonate ? Colors.green : Colors.orange }]}>
          {canDonate ? 'You can donate' : 'Not yet'}
        </Text>
        <Text style={styles.big}>{canDonate ? 'Ready to donate' : `${daysLeft} days left`}</Text>
        <Text style={styles.text}>Your last donation was {days} days ago ({user.lastDonation}).</Text>
        {!canDonate && <Text style={styles.text}>You can donate again on {nextDate.toDateString()}.</Text>}
        <Text style={styles.small}>Donors must wait {DAYS_BETWEEN_DONATIONS} days between donations.</Text>
      </View>

      <Pressable
        style={[styles.button, !canDonate && { opacity: 0.4 }]}
        disabled={!canDonate}
        onPress={() => router.push('/book')}>
        <Text style={styles.buttonText}>Book Appointment</Text>
      </Pressable>

      <Pressable style={styles.secondButton} onPress={() => router.push('/donations')}>
        <Text style={styles.secondButtonText}>My Donations</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 16, gap: 12, backgroundColor: Colors.background },
  card: { backgroundColor: Colors.white, padding: 18, borderRadius: 12, borderWidth: 1, borderColor: Colors.border, gap: 6 },
  status: { fontWeight: 'bold' },
  big: { fontSize: 28, fontWeight: 'bold', color: Colors.text },
  text: { fontSize: 15, color: Colors.text },
  small: { fontSize: 13, color: Colors.grey, marginTop: 6 },
  button: { backgroundColor: Colors.primary, padding: 14, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: Colors.white, fontWeight: 'bold', fontSize: 16 },
  secondButton: { backgroundColor: Colors.lightRed, padding: 14, borderRadius: 12, alignItems: 'center' },
  secondButtonText: { color: Colors.primary, fontWeight: 'bold', fontSize: 16 },
});
