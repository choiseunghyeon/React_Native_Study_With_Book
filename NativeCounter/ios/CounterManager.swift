//
//  CounterManager.swift
//  NativeCounter
//
//  Created by 최승현 on 3/3/24.
//

import Foundation

@objc (CounterManager)
class CounterManager: RCTViewManager {
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  override func view() -> UIView! {
    return CounterView()
  }
}
