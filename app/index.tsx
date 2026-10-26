import { useRouter } from 'expo-router';
import { Text } from 'react-native';
import { Button } from '../components/Button';
import { Screen, screenStyles } from '../components/Screen';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <Screen>
      <Text accessibilityRole="header" style={screenStyles.title}>Welcome</Text>
      <Text style={screenStyles.description}>Your mobile app template is ready. Explore a second screen to try navigation.</Text>
      <Button label="View details" onPress={() => router.push('/details')} />
    </Screen>
  );
}
