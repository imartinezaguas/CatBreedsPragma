import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'CatBreeds',
  webDir: 'www',
   plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      androidScaleType: 'CENTER_CROP',
      splashFullScreen: true,
      splashImmersive: true,
      showSpinner: false,
      backgroundColor: '#ffffff'
    }
  }
};

export default config;
