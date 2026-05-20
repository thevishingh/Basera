import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <View className="flex-1 bg-gray-50 px-6 py-8">
      {/* Header */}
      <Text className="text-3xl font-bold text-gray-900 mb-2">Welcome</Text>
      <Text className="text-base text-gray-600 mb-8">
        Share your thoughts with us
      </Text>

      {/* Form Container */}
      <View className="bg-white rounded-lg p-6 shadow-sm mb-6">
        {/* Name Input */}
        <View className="mb-4">
          <Text className="text-sm font-semibold text-gray-700 mb-2">Name</Text>
          <TextInput
            className="border border-gray-300 rounded-lg px-4 py-3 text-gray-900"
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#999"
          />
        </View>

        {/* Email Input */}
        <View className="mb-4">
          <Text className="text-sm font-semibold text-gray-700 mb-2">
            Email
          </Text>
          <TextInput
            className="border border-gray-300 rounded-lg px-4 py-3 text-gray-900"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="#999"
          />
        </View>

        {/* Message Input */}
        <View className="mb-6">
          <Text className="text-sm font-semibold text-gray-700 mb-2">
            Message
          </Text>
          <TextInput
            className="border border-gray-300 rounded-lg px-4 py-3 text-gray-900 h-24"
            placeholder="Enter your message"
            value={message}
            onChangeText={setMessage}
            multiline
            numberOfLines={4}
            placeholderTextColor="#999"
            textAlignVertical="top"
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          onPress={handleSubmit}
          className="bg-blue-600 rounded-lg py-3 items-center"
        >
          <Text className="text-white font-semibold text-base">Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
