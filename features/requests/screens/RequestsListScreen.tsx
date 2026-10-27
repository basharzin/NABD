import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import Colors from '@/shared/Colors';
import RequestCard from '@/features/requests/components/RequestCard';
import { useRequestsViewModel } from '@/features/requests/viewmodels/requestsViewModel';

export default function RequestsListScreen() {
  const { user, shownRequests, onlyMatching, setOnlyMatching } = useRequestsViewModel();

  return (
    <View style={styles.screen}>
      <Pressable style={styles.button} onPress={() => router.push('/new-request')}>
        <Text style={styles.buttonText}>Post Urgent Request</Text>
      </Pressable>

      <View style={styles.row}>
        <Pressable
          style={[styles.filter, onlyMatching && styles.filterActive]}
          onPress={() => setOnlyMatching(true)}>
          <Text style={onlyMatching ? styles.filterTextActive : styles.filterText}>My type ({user.bloodType})</Text>
        </Pressable>
        <Pressable
          style={[styles.filter, !onlyMatching && styles.filterActive]}
          onPress={() => setOnlyMatching(false)}>
          <Text style={!onlyMatching ? styles.filterTextActive : styles.filterText}>All requests</Text>
        </Pressable>
      </View>

      <FlatList
        data={shownRequests}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RequestCard request={item} />}
        contentContainerStyle={{ gap: 10 }}
        ListEmptyComponent={<Text style={styles.empty}>No requests match your blood type right now.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 16, gap: 12, backgroundColor: Colors.background },
  button: { backgroundColor: Colors.primary, padding: 14, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: Colors.white, fontWeight: 'bold', fontSize: 16 },
  row: { flexDirection: 'row', gap: 8 },
  filter: { paddingVertical: 8, paddingHorizontal: 14, borderRadius: 20, borderWidth: 1, borderColor: Colors.border, backgroundColor: Colors.white },
  filterActive: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  filterText: { color: Colors.text },
  filterTextActive: { color: Colors.white, fontWeight: '600' },
  empty: { textAlign: 'center', color: Colors.grey, marginTop: 40 },
});
