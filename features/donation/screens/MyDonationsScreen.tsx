import { FlatList, StyleSheet, Text, View } from 'react-native';
import Colors from '@/shared/Colors';
import { useDonationViewModel } from '@/features/donation/viewmodels/donationViewModel';
import { getHospitalName } from '@/features/requests/viewmodels/requestsViewModel';

export default function MyDonationsScreen() {
  const { donations } = useDonationViewModel();
  const completed = donations.filter((d) => d.status === 'Completed').length;

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.number}>{completed}</Text>
        <Text style={styles.text}>donations completed</Text>
      </View>

      <FlatList
        data={donations}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 8 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.hospital}>{getHospitalName(item.hospitalId)}</Text>
              <Text style={styles.info}>
                {item.date} at {item.time}
              </Text>
            </View>
            <Text style={[styles.status, { color: item.status === 'Completed' ? Colors.green : Colors.primary }]}>
              {item.status}
            </Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.info}>You have no donations yet.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 16, gap: 12, backgroundColor: Colors.background },
  summary: { backgroundColor: Colors.white, padding: 16, borderRadius: 12, borderWidth: 1, borderColor: Colors.border, alignItems: 'center' },
  number: { fontSize: 36, fontWeight: 'bold', color: Colors.primary },
  text: { color: Colors.text },
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.white, padding: 14, borderRadius: 12, borderWidth: 1, borderColor: Colors.border },
  hospital: { fontSize: 16, fontWeight: '600', color: Colors.text },
  info: { color: Colors.grey, marginTop: 2 },
  status: { fontWeight: 'bold' },
});
