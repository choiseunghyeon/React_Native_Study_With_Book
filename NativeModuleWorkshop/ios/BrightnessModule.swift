//
//  BrightnessModule.swift
//  NativeModuleWorkshop
//
//  Created by 최승현 on 3/2/24.
//

import Foundation

@objc(BrightnessModule)
class BrightnessModule : NSObject {
  
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return [
      "STRING_VALUE": "Hello World",
      "NUMBER_VALUE": 15
    ]
  }
  
  @objc
  func getBrightness(_ resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) {
    resolve(UIScreen.main.brightness)
  }
  
  @objc
  // 파라미터명 생략
  func setBrightness(_ brightness : CGFloat) {
    print("Setting brightness to \(brightness)")
    DispatchQueue.main.async {
      UIScreen.main.brightness = brightness
    }
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
