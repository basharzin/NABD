import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import Colors from '@/shared/Colors';
import { useProfileViewModel } from '@/features/profile/viewmodels/profileViewModel';

export default function ProfileScreen() {
  const { user, setUser, unreadCount } = useProfileViewModel();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [area, setArea] = useState(user.area);

  function save() {
    setUser({ ...user, name, phone, area });
    setEditing(false);
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ gap: 12, padding: 16 }}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{user.name.charAt(0)}</Text>
        </View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.bloodType}>Blood type {user.bloodType}</Text>
      </View>

      {editing ? (
        <View style={styles.card}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
          <Text style={styles.label}>Phone</Text>
          <TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
          <Text style={styles.label}>Area</Text>
          <TextInput style={styles.input} value={area} onChangeText={setArea} />
          <Pressable style={styles.button} onPress={save}>
            <Text style={styles.buttonText}>Save</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.card}>
          <Text style={styles.label}>Phone</Text>
          <Text style={styles.value}>{user.phone}</Text>
          <Text style={styles.label}>Area</Text>
          <Text style={styles.value}>{user.area}</Text>
          <Text style={styles.label}>Last donation</Text>
          <Text style={styles.value}>{user.lastDonation}</Text>
          <Pressable style={styles.button} onPress={() => setEditing(true)}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </Pressable>
        </View>
      )}

      <Pressable style={styles.link} onPress={() => router.push('/notifications')}>
        <Text style={styles.linkText}>Notifications</Text>
        {unreadCount > 0 && <Text style={styles.count}>{unreadCount}</Text>}
      </Pressable>
      <Pressable style={styles.link} onPress={() => router.push('/settings')}>
        <Text style={styles.linkText}>Settings</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.background },
  header: { alignItems: 'center', gap: 4, marginTop: 8 },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: Colors.primary, alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: Colors.white, fontSize: 32, fontWeight: 'bold' },
  name: { fontSize: 22, fontWeight: 'bold', color: Colors.text },
  bloodType: { color: Colors.primary, fontWeight: '600' },
  card: { backgroundColor: Colors.white, padding: 16, borderRadius: 12, borderWidth: 1, borderColor: Colors.border, gap: 4 },
  label: { color: Colors.grey, fontSize: 13, marginTop: 6 },
  value: { fontSize: 16, color: Colors.text },
  input: { borderWidth: 1, borderColor: Colors.border, borderRadius: 8, padding: 10 },
  button: { backgroundColor: Colors.primary, padding: 12, borderRadius: 10, alignItems: 'center', marginTop: 12 },
  buttonText: { color: Colors.white, fontWeight: 'bold' },
  link: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.white, padding: 16, borderRadius: 12, borderWidth: 1, borderColor: Colors.border },
  linkText: { fontSize: 16, color: Colors.text },
  count: { backgroundColor: Colors.primary, color: Colors.white, paddingHorizontal: 8, borderRadius: 10, overflow: 'hidden', fontWeight: 'bold' },
});
