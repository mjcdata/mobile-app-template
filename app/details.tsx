import { useRouter } from 'expo-router';
import { Text } from 'react-native';
import { Button } from '../components/Button';
import { Screen, screenStyles } from '../components/Screen';

export default function DetailsScreen() {
  const router = useRouter();

  function goBack() {
    if (router.canGoBack()) router.back();
    else router.replace('/');
  }

  return (
    <Screen>
      <Text accessibilityRole="header" style={screenStyles.title}>Details</Text>
      <Text style={screenStyles.description}>Both screens share a button, colors, spacing, and a layout that adapts to your screen.</Text>
      <Button label="Back to Home" onPress={goBack} />
    </Screen>
  );
}
