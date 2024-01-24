import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.test.tom',
  appName: 'scan_app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
