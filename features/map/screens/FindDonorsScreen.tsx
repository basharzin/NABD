import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '@/shared/Colors';
import { BLOOD_TYPES } from '@/shared/models/data';
import { useFindDonorsViewModel } from '@/features/map/viewmodels/hospitalsViewModel';

const DISTANCES = [5, 10, 20];

export default function FindDonorsScreen() {
  const { donors, bloodType, setBloodType, maxDistance, setMaxDistance } = useFindDonorsViewModel();

  return (
    <View style={styles.screen}>
      <Text style={styles.label}>Blood type needed</Text>
      <View style={styles.wrap}>
        {BLOOD_TYPES.map((type) => (
          <Pressable
            key={type}
            style={[styles.chip, bloodType === type && styles.chipActive]}
            onPress={() => setBloodType(type)}>
            <Text style={bloodType === type ? styles.chipTextActive : styles.chipText}>{type}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.label}>Distance</Text>
      <View style={styles.wrap}>
        {DISTANCES.map((d) => (
          <Pressable key={d} style={[styles.chip, maxDistance === d && styles.chipActive]} onPress={() => setMaxDistance(d)}>
            <Text style={maxDistance === d ? styles.chipTextActive : styles.chipText}>{d} km</Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.result}>{donors.length} donors found</Text>

      <FlatList
        data={donors}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 8 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.type}>{item.bloodType}</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.info}>
                {item.area} - {item.distance} km
              </Text>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.info}>No donors found. Try a bigger distance.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 16, gap: 8, backgroundColor: Colors.background },
  label: { fontWeight: '600', color: Colors.text, marginTop: 4 },
  wrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { paddingVertical: 8, paddingHorizontal: 12, borderRadius: 20, borderWidth: 1, borderColor: Colors.border, backgroundColor: Colors.white },
  chipActive: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  chipText: { color: Colors.text },
  chipTextActive: { color: Colors.white, fontWeight: '600' },
  result: { fontSize: 16, fontWeight: 'bold', color: Colors.primary, marginVertical: 6 },
  card: { flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: Colors.white, padding: 12, borderRadius: 12, borderWidth: 1, borderColor: Colors.border },
  type: { fontSize: 18, fontWeight: 'bold', color: Colors.primary, width: 44 },
  name: { fontSize: 16, fontWeight: '600', color: Colors.text },
  info: { color: Colors.grey },
});
