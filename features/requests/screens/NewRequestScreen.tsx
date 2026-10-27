import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import Colors from '@/shared/Colors';
import { BLOOD_TYPES, HOSPITALS } from '@/shared/models/data';
import { BloodType } from '@/shared/models/types';
import { useRequestsViewModel } from '@/features/requests/viewmodels/requestsViewModel';

export default function NewRequestScreen() {
  const { addRequest } = useRequestsViewModel();
  const [bloodType, setBloodType] = useState<BloodType>('O+');
  const [hospitalId, setHospitalId] = useState(HOSPITALS[0].id);
  const [units, setUnits] = useState('1');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const [urgent, setUrgent] = useState(true);

  function save() {
    addRequest({
      id: Date.now().toString(),
      bloodType,
      units: Number(units),
      hospitalId,
      phone,
      urgent,
      note,
      date: new Date().toISOString().slice(0, 10),
    });
    router.back();
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: 16, gap: 8 }}>
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

      <Text style={styles.label}>Hospital</Text>
      <View style={styles.wrap}>
        {HOSPITALS.map((h) => (
          <Pressable
            key={h.id}
            style={[styles.chip, hospitalId === h.id && styles.chipActive]}
            onPress={() => setHospitalId(h.id)}>
            <Text style={hospitalId === h.id ? styles.chipTextActive : styles.chipText}>{h.name}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.label}>Units needed</Text>
      <TextInput style={styles.input} value={units} onChangeText={setUnits} keyboardType="number-pad" />

      <Text style={styles.label}>Contact phone</Text>
      <TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" placeholder="01xxxxxxxxx" />

      <Text style={styles.label}>Note</Text>
      <TextInput style={styles.input} value={note} onChangeText={setNote} placeholder="Optional" />

      <View style={styles.switchRow}>
        <Text style={styles.label}>Urgent</Text>
        <Switch value={urgent} onValueChange={setUrgent} />
      </View>

      <Pressable style={styles.button} onPress={save}>
        <Text style={styles.buttonText}>Post Request</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.background },
  label: { fontWeight: '600', color: Colors.text, marginTop: 8 },
  wrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { paddingVertical: 8, paddingHorizontal: 12, borderRadius: 20, borderWidth: 1, borderColor: Colors.border, backgroundColor: Colors.white },
  chipActive: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  chipText: { color: Colors.text },
  chipTextActive: { color: Colors.white, fontWeight: '600' },
  input: { backgroundColor: Colors.white, borderWidth: 1, borderColor: Colors.border, borderRadius: 10, padding: 12 },
  switchRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  button: { backgroundColor: Colors.primary, padding: 14, borderRadius: 12, alignItems: 'center', marginTop: 12 },
  buttonText: { color: Colors.white, fontWeight: 'bold', fontSize: 16 },
});
