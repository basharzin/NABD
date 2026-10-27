import Colors from "@/shared/Colors";
import { HOSPITALS, TIMES } from "@/shared/models/data";
import { useDonationViewModel } from "@/features/donation/viewmodels/donationViewModel";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

// next 5 days starting from tomorrow
const DAYS: string[] = [];
for (let i = 1; i <= 5; i++) {
  const day = new Date();
  day.setDate(day.getDate() + i);
  DAYS.push(day.toISOString().slice(0, 10));
}

const BLOOD_BANKS = HOSPITALS.filter((h) => h.hasBloodBank);

export default function BookAppointmentScreen() {
  const { bookAppointment } = useDonationViewModel();
  const [hospitalId, setHospitalId] = useState(BLOOD_BANKS[0].id);
  const [day, setDay] = useState(DAYS[0]);
  const [time, setTime] = useState(TIMES[0]);

  function confirm() {
    bookAppointment(hospitalId, day, time);
    Alert.alert("Booked", `Your appointment is on ${day} at ${time}.`);
    router.replace("/donations");
  }

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={{ padding: 16, gap: 8 }}
    >
      <Text style={styles.label}>Blood bank</Text>
      <View style={styles.wrap}>
        {BLOOD_BANKS.map((h) => (
          <Pressable
            key={h.id}
            style={[styles.chip, hospitalId === h.id && styles.chipActive]}
            onPress={() => setHospitalId(h.id)}
          >
            <Text
              style={
                hospitalId === h.id ? styles.chipTextActive : styles.chipText
              }
            >
              {h.name}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.label}>Day</Text>
      <View style={styles.wrap}>
        {DAYS.map((d) => (
          <Pressable
            key={d}
            style={[styles.chip, day === d && styles.chipActive]}
            onPress={() => setDay(d)}
          >
            <Text style={day === d ? styles.chipTextActive : styles.chipText}>
              {d}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.label}>Time</Text>
      <View style={styles.wrap}>
        {TIMES.map((t) => (
          <Pressable
            key={t}
            style={[styles.chip, time === t && styles.chipActive]}
            onPress={() => setTime(t)}
          >
            <Text style={time === t ? styles.chipTextActive : styles.chipText}>
              {t}
            </Text>
          </Pressable>
        ))}
      </View>

      <Pressable style={styles.button} onPress={confirm}>
        <Text style={styles.buttonText}>Confirm Appointment</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.background },
  label: { fontWeight: "600", color: Colors.text, marginTop: 8 },
  wrap: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.white,
  },
  chipActive: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  chipText: { color: Colors.text },
  chipTextActive: { color: Colors.white, fontWeight: "600" },
  button: {
    backgroundColor: Colors.primary,
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: { color: Colors.white, fontWeight: "bold", fontSize: 16 },
});
