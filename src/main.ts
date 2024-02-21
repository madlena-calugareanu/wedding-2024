import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

const firebaseConfig = {
  apiKey: 'AIzaSyCox_-sLxXxq5V7-GbETV3RShw3FniK2iw',
  authDomain: 'personal-2024-65d36.firebaseapp.com',
  databaseURL:
    'https://personal-2024-65d36-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'personal-2024-65d36',
  storageBucket: 'personal-2024-65d36.appspot.com',
  messagingSenderId: '566802586501',
  appId: '1:566802586501:web:17f1d5a3954910e13102ec',
  measurementId: 'G-X4YYZ8QPBX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
