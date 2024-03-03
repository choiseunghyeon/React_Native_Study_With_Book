import {NativeModules} from 'react-native';

const {BrightnessModule} = NativeModules;

export const getBrightness = () => {
  return BrightnessModule.getBrightness();
};
export const setBrightness = brightness => {
  BrightnessModule.setBrightness(brightness);
};
