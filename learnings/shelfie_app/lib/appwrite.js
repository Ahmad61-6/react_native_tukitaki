import { Client, Account, ID, Models, Avatars } from 'react-native-appwrite';


export const client = new Client();
client
.setEndpoint(' https://nyc.cloud.appwrite.io/v1')
  .setProject('69af05c90038f6833004')   
  .setPlatform('com.ayman.shelfie');

export const account = new Account(client);
export const avatars = new Avatars(client);
 