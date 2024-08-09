import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'Calculadora',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    cleartext: true,
    androidScheme: "http"
  }
};
export default config;
