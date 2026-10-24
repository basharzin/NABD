import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import Colors from '@/constants/Colors';
import { getHospital } from '@/viewmodels/hospitalsViewModel';

export default function HospitalDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const hospital = getHospital(id);

  if (!hospital) {
    return <Text style={styles.notFound}>Hospital not found</Text>;
  }

  return (
    <View style={styles.screen}>
      <Stack.Screen options={{ title: hospital.name }} />

      <View style={styles.card}>
        <Text style={styles.name}>{hospital.name}</Text>
        <Text style={styles.text}>Area: {hospital.area}</Text>
        <Text style={styles.text}>Distance: {hospital.distance} km</Text>
        <Text style={styles.text}>Hours: {hospital.hours}</Text>
        <Text style={styles.text}>Phone: {hospital.phone}</Text>
        <Text style={styles.text}>Blood bank: {hospital.hasBloodBank ? 'Yes' : 'No'}</Text>
      </View>

      {hospital.hasBloodBank && (
        <View style={styles.card}>
          <Text style={styles.subtitle}>Blood needed most</Text>
          <Text style={styles.text}>
            {hospital.lowStock.length > 0 ? hospital.lowStock.join(', ') : 'Stock is good for all types'}
          </Text>
        </View>
      )}

      {hospital.hasBloodBank && (
        <Pressable style={styles.button} onPress={() => router.push('/book')}>
          <Text style={styles.buttonText}>Book a Donation Here</Text>
        </Pressable>
      )}
      <Pressable style={styles.secondButton} onPress={() => router.push('/new-request')}>
        <Text style={styles.secondButtonText}>Post a Request</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 16, gap: 12, backgroundColor: Colors.background },
  notFound: { padding: 20, textAlign: 'center' },
  card: { backgroundColor: Colors.white, padding: 16, borderRadius: 12, borderWidth: 1, borderColor: Colors.border, gap: 6 },
  name: { fontSize: 20, fontWeight: 'bold', color: Colors.text },
  subtitle: { fontSize: 16, fontWeight: '600', color: Colors.text },
  text: { fontSize: 15, color: Colors.text },
  button: { backgroundColor: Colors.primary, padding: 14, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: Colors.white, fontWeight: 'bold', fontSize: 16 },
  secondButton: { backgroundColor: Colors.lightRed, padding: 14, borderRadius: 12, alignItems: 'center' },
  secondButtonText: { color: Colors.primary, fontWeight: 'bold', fontSize: 16 },
});
