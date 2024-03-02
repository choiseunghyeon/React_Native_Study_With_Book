import {GoogleSignin} from '@react-native-google-signin/google-signin';
console.log('process.env.GOOGLE_CLIENT_ID', process.env.GOOGLE_CLIENT_ID);
GoogleSignin.configure({
  webClientId:
    '673661111777-s6fopecobgp7ebf7bick7v6jvng1oifu.apps.googleusercontent.com',
  iosClientId:
    '673661111777-v4du2h2bvs7297lb44up3sn28s4uojir.apps.googleusercontent.com',
  offlineAccess: true,
  hostedDomain: '',
});

const loginWithGoogle = async () => {
  await GoogleSignin.hasPlayServices();

  const response = await GoogleSignin.signIn();

  if (response.idToken) {
    return {
      idToken: response.idToken,
    };
  }

  return null;
};

const authLib = {
  loginWithGoogle,
};
export default authLib;
