import React, { useState } from "react";
import { VStack, Input, Button, Text } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // handle sign in logic here
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <VStack flex={1} px={10} pb={16}>
        <Input value={email} onChangeText={setEmail} />

        <Input secureTextEntry value={password} onChangeText={setPassword} />

        <Button onPress={handleSignIn}>
          <Text>Sign In</Text>
        </Button>
      </VStack>
    </SafeAreaView>
  );
}
