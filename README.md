# Expo Go AsyncStorage Bug

This repository demonstrates a bug where using AsyncStorage in an Expo app results in a crash when running on Expo Go.  The issue arises from AsyncStorage's incompatibility with the Expo Go environment.  The solution involves configuring Expo to use an alternative storage mechanism, like MMKV.

## Bug Description

When attempting to utilize AsyncStorage within an Expo application and running it using Expo Go, the app crashes, producing an error indicating that AsyncStorage is unavailable in the current environment.

## Solution

The provided solution uses MMKV, a high-performance key-value storage engine, to address the AsyncStorage incompatibility.  This ensures consistent functionality across different environments.

## Setup

1. Clone the repository.
2. Run `npm install` or `yarn install`.
3. Start the development server using `expo start`.
4. Run the app in Expo Go to observe the bug. 
5. Implement the solution. Run `expo start` again and test in Expo Go to verify fix.