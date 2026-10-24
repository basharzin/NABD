import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import Colors from '@/constants/Colors';
import { Notification } from '@/models/types';
import { useProfileViewModel } from '@/viewmodels/profileViewModel';

export default function NotificationsScreen() {
  const { notifications, markAsRead, markAllAsRead } = useProfileViewModel();

  function open(item: Notification) {
    markAsRead(item.id);
    if (item.requestId) {
      router.push(`/request/${item.requestId}`);
    }
  }

  return (
    <View style={styles.screen}>
      <Pressable onPress={markAllAsRead}>
        <Text style={styles.markAll}>Mark all as read</Text>
      </Pressable>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 8 }}
        renderItem={({ item }) => (
          <Pressable style={[styles.card, !item.read && styles.unread]} onPress={() => open(item)}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.message}>{item.message}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </Pressable>
        )}
        ListEmptyComponent={<Text style={styles.date}>No notifications.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 16, gap: 8, backgroundColor: Colors.background },
  markAll: { color: Colors.primary, fontWeight: '600', textAlign: 'right' },
  card: { backgroundColor: Colors.white, padding: 14, borderRadius: 12, borderWidth: 1, borderColor: Colors.border, gap: 2 },
  unread: { borderLeftWidth: 4, borderLeftColor: Colors.primary },
  title: { fontSize: 16, fontWeight: 'bold', color: Colors.text },
  message: { color: Colors.text },
  date: { color: Colors.grey, fontSize: 12 },
});
