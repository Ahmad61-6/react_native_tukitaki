import { Client, Account, ID, Models, Avatars } from 'react-native-appwrite';


export const client = new Client();
client
.setEndpoint('https://sgp.cloud.appwrite.io/v1')
  .setProject('69b586e2003937d285eb')   
  .setPlatform('com.ayman.shelfie');

export const account = new Account(client);
export const avatars = new Avatars(client);
 