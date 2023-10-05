import React, { useState } from "react";
import { Container, Input, Button, Text } from "native-base";
import { SafeAreaView } from "react-native";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    // Handle sign up logic here
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Input value={name} onChangeText={setName} />

      <Input value={email} onChangeText={setEmail} />

      <Input secureTextEntry value={password} onChangeText={setPassword} />

      <Input
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button onPress={handleSignUp}>
        <Text>Sign Up</Text>
      </Button>
    </SafeAreaView>
  );
}
