#import "RCTAlertModule.h"

@implementation RCTAlertModule


// 네이티브 모듈 내보내기
// 빈값인 경우 현재 클래스 이름에서 RCT를 제외한 AlertModule이 네이티브 모듈 이름으로 사용
RCT_EXPORT_MODULE(AlertModule);

// https://developer.apple.com/documentation/uikit/uialertcontroller?language=objc

RCT_EXPORT_METHOD(alert:(NSString *)message)
{
  UIAlertController* alert = [UIAlertController alertControllerWithTitle:@"My Alert"
  message:@"This is an alert."
  preferredStyle:UIAlertControllerStyleAlert];
  
  UIAlertAction* defaultAction = [UIAlertAction actionWithTitle:@"OK" style:UIAlertActionStyleDefault handler:^(UIAlertAction * action) {}];
  
  [alert addAction:defaultAction];
  
  UIViewController *rootViewController = [UIApplication sharedApplication].delegate.window.rootViewController;
  
  dispatch_async(dispatch_get_main_queue(), ^{[rootViewController presentViewController:alert animated:YES completion:nil];});
}

// 상수 내보내기
- (NSDictionary *)constantsToExport
{
  return @{
    @"STRING_VALUE": @"Hello World",
    @"NUMBER_VALUE": @(15)
  };
}

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}
@end
