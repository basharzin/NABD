import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import Colors from '@/constants/Colors';
import { BloodRequest } from '@/models/types';
import { getHospitalName } from '@/viewmodels/requestsViewModel';

export default function RequestCard({ request }: { request: BloodRequest }) {
  return (
    <Pressable style={styles.card} onPress={() => router.push(`/request/${request.id}`)}>
      <View style={styles.circle}>
        <Text style={styles.bloodType}>{request.bloodType}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.hospital}>{getHospitalName(request.hospitalId)}</Text>
        <Text style={styles.info}>
          {request.units} {request.units === 1 ? 'unit' : 'units'} - {request.date}
        </Text>
      </View>
      {request.urgent && <Text style={styles.urgent}>Urgent</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: Colors.white,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  circle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: Colors.lightRed,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bloodType: { fontSize: 18, fontWeight: 'bold', color: Colors.primary },
  hospital: { fontSize: 16, fontWeight: '600', color: Colors.text },
  info: { fontSize: 13, color: Colors.grey, marginTop: 2 },
  urgent: { color: Colors.orange, fontWeight: 'bold', fontSize: 12 },
});
