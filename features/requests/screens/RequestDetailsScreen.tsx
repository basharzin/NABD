import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import Colors from '@/shared/Colors';
import { BLOOD_TYPES } from '@/shared/models/data';
import { canGiveTo, getHospitalName, useRequestsViewModel } from '@/features/requests/viewmodels/requestsViewModel';

export default function RequestDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { user, getRequest } = useRequestsViewModel();
  const request = getRequest(id);

  if (!request) {
    return <Text style={styles.notFound}>Request not found</Text>;
  }

  const donorTypes = BLOOD_TYPES.filter((type) => canGiveTo(type, request.bloodType));
  const iCanHelp = canGiveTo(user.bloodType, request.bloodType);

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.bloodType}>{request.bloodType}</Text>
        {request.urgent && <Text style={styles.urgent}>Urgent</Text>}
        <Text style={styles.hospital}>{getHospitalName(request.hospitalId)}</Text>
        <Text style={styles.text}>Units needed: {request.units}</Text>
        <Text style={styles.text}>Contact: {request.phone}</Text>
        <Text style={styles.text}>Posted: {request.date}</Text>
        {request.note !== '' && <Text style={styles.text}>Note: {request.note}</Text>}
      </View>

      <View style={styles.card}>
        <Text style={styles.text}>Who can donate: {donorTypes.join(', ')}</Text>
        <Text style={[styles.text, { color: iCanHelp ? Colors.green : Colors.grey }]}>
          {iCanHelp ? 'Your blood type matches this request.' : 'Your blood type does not match this request.'}
        </Text>
      </View>

      <Pressable style={styles.button} onPress={() => router.push(`/hospital/${request.hospitalId}`)}>
        <Text style={styles.buttonText}>View Hospital</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 16, gap: 12, backgroundColor: Colors.background },
  notFound: { padding: 20, textAlign: 'center' },
  card: { backgroundColor: Colors.white, padding: 16, borderRadius: 12, borderWidth: 1, borderColor: Colors.border, gap: 6 },
  bloodType: { fontSize: 40, fontWeight: 'bold', color: Colors.primary },
  urgent: { color: Colors.orange, fontWeight: 'bold' },
  hospital: { fontSize: 18, fontWeight: '600', color: Colors.text },
  text: { fontSize: 15, color: Colors.text },
  button: { backgroundColor: Colors.primary, padding: 14, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: Colors.white, fontWeight: 'bold', fontSize: 16 },
});
