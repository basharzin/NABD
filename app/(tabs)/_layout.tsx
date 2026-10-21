import { Tabs } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import Colors from '@/constants/Colors';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Colors.primary }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Requests',
          tabBarIcon: ({ color }) => (
            <SymbolView name={{ ios: 'drop.fill', android: 'water_drop', web: 'water_drop' }} tintColor={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="hospitals"
        options={{
          title: 'Hospitals',
          tabBarIcon: ({ color }) => (
            <SymbolView name={{ ios: 'map.fill', android: 'map', web: 'map' }} tintColor={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="donate"
        options={{
          title: 'Can I Donate?',
          tabBarIcon: ({ color }) => (
            <SymbolView name={{ ios: 'heart.fill', android: 'favorite', web: 'favorite' }} tintColor={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <SymbolView name={{ ios: 'person.fill', android: 'person', web: 'person' }} tintColor={color} size={26} />
          ),
        }}
      />
    </Tabs>
  );
}
