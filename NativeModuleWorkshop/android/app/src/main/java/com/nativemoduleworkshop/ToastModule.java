package com.nativemoduleworkshop;


import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.widget.Toast;

import java.util.HashMap;
import java.util.Map;

/*
 * RN
 * import {NativeModule } from 'react-native';
 * // getName에서 지정한 이름
 * const { TostModule } = NativeModule
 *
 * // @ReactMethod
 * TostModule.show('Hello World', 1);
 *
 * // Map에서 지정한 이름
 *  * TostModule.show('Hello World', ToastModule.LENGTH_LONG);

 * */


public class ToastModule extends ReactContextBaseJavaModule{
    ToastModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "ToastModule";
    }

    @ReactMethod
    public void show(String message, int duration) {
        ReactApplicationContext context = getReactApplicationContext();
        Toast toast = Toast.makeText(context, message, duration);
        toast.show();
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("SHORT", Toast.LENGTH_SHORT);
        constants.put("LONG", Toast.LENGTH_LONG);
        return constants;
    }

}
