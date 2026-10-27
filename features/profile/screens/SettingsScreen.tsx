import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import Colors from '@/shared/Colors';
import { useSettingsViewModel } from '@/features/profile/viewmodels/profileViewModel';

const DISTANCES = [5, 10, 20];

export default function SettingsScreen() {
  const s = useSettingsViewModel();

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.text}>Available to donate</Text>
          <Switch value={s.available} onValueChange={s.setAvailable} />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Blood request alerts</Text>
          <Switch value={s.requestAlerts} onValueChange={s.setRequestAlerts} />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Donation reminders</Text>
          <Switch value={s.reminders} onValueChange={s.setReminders} />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.text}>Show requests within</Text>
        <View style={styles.wrap}>
          {DISTANCES.map((d) => (
            <Pressable key={d} style={[styles.chip, s.distance === d && styles.chipActive]} onPress={() => s.setDistance(d)}>
              <Text style={s.distance === d ? styles.chipTextActive : styles.chipText}>{d} km</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <Text style={styles.version}>Nabd version 1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 16, gap: 12, backgroundColor: Colors.background },
  card: { backgroundColor: Colors.white, padding: 16, borderRadius: 12, borderWidth: 1, borderColor: Colors.border, gap: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  text: { fontSize: 16, color: Colors.text },
  wrap: { flexDirection: 'row', gap: 8 },
  chip: { paddingVertical: 8, paddingHorizontal: 12, borderRadius: 20, borderWidth: 1, borderColor: Colors.border },
  chipActive: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  chipText: { color: Colors.text },
  chipTextActive: { color: Colors.white, fontWeight: '600' },
  version: { textAlign: 'center', color: Colors.grey, marginTop: 12 },
});
