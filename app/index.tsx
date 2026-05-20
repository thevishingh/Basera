import { useAuth } from '@clerk/expo';
import { Redirect, Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function AuthRoutesLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isSignedIn) {
    return <Redirect href={{ pathname: '/(root)/(tabs)' }} />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
