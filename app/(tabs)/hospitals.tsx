import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import Colors from '@/constants/Colors';
import { useHospitalsViewModel } from '@/viewmodels/hospitalsViewModel';

export default function HospitalsMapScreen() {
  const { hospitals, search, setSearch, onlyBloodBanks, setOnlyBloodBanks } = useHospitalsViewModel();

  return (
    <View style={styles.screen}>
      <TextInput style={styles.input} placeholder="Search hospitals" value={search} onChangeText={setSearch} />

      {/* the real Google Map is added in Phase 2 */}
      <View style={styles.map}>
        <Text style={styles.mapText}>Map</Text>
        <Text style={styles.mapSmall}>{hospitals.length} hospitals near you</Text>
      </View>

      <View style={styles.row}>
        <Pressable style={styles.smallButton} onPress={() => setOnlyBloodBanks(!onlyBloodBanks)}>
          <Text style={styles.smallButtonText}>{onlyBloodBanks ? 'Show all' : 'Blood banks only'}</Text>
        </Pressable>
        <Pressable style={styles.smallButton} onPress={() => router.push('/find-donors')}>
          <Text style={styles.smallButtonText}>Find donors</Text>
        </Pressable>
      </View>

      <FlatList
        data={hospitals}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item }) => (
          <Pressable style={styles.card} onPress={() => router.push(`/hospital/${item.id}`)}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.info}>
              {item.area} - {item.distance} km
            </Text>
            {item.hasBloodBank && <Text style={styles.badge}>Blood bank</Text>}
          </Pressable>
        )}
        ListEmptyComponent={<Text style={styles.info}>No hospitals found.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 16, gap: 12, backgroundColor: Colors.background },
  input: { backgroundColor: Colors.white, borderWidth: 1, borderColor: Colors.border, borderRadius: 10, padding: 12 },
  map: { height: 150, backgroundColor: '#E6ECF0', borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  mapText: { fontSize: 18, fontWeight: 'bold', color: Colors.grey },
  mapSmall: { color: Colors.grey },
  row: { flexDirection: 'row', gap: 8 },
  smallButton: { flex: 1, backgroundColor: Colors.lightRed, padding: 10, borderRadius: 10, alignItems: 'center' },
  smallButtonText: { color: Colors.primary, fontWeight: '600' },
  card: { backgroundColor: Colors.white, padding: 14, borderRadius: 12, borderWidth: 1, borderColor: Colors.border },
  name: { fontSize: 16, fontWeight: '600', color: Colors.text },
  info: { color: Colors.grey, marginTop: 2 },
  badge: { color: Colors.primary, fontSize: 12, fontWeight: 'bold', marginTop: 6 },
});
