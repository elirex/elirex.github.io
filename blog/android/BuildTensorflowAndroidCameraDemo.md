#Build Tensorflow Android Camera Demo
>[Tensorflow Android Camera Demo](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/examples/android)使用Google Inception model
即時分類相機畫面中的物體，並將結果顯上在上方。(目前只能用在android 5.0)    
>Build這個Demo app的apk需使用[Bazel](http://bazel.io/)工具，它目前只支援Ubuntu Linux (Wily 15.10 and Trusty 14.04 LTS)和Mac OS X ，
這裡使用ubuntu 14.04 64bit。

## 安裝基本套件
1. 安裝 gcc g++ build-essential   
  ```
  sudo apt-get install gcc g++ build-essential
  ```   
  
2. 安裝Java   
  ```
  sudo add-apt-repository ppa:webupd8team/java    
  sudo apt-get update   
  sudo apt-get install oracle-java8-installer   
  ```     

##安裝Android SDK & NDK
1. 下載[Android SDK](http://developer.android.com/sdk/index.html#Other)及[Android NDK](http://developer.android.com/ndk/downloads/index.html)
2. 在Tensorflow Android Camera Demo的[AndroidManifest](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/examples/android/AndroidManifest.xml)中targetSdkVersion是23，因此在SDK Manager中選擇安裝版本23的相關套件。

##安裝Bazel
1. 下載linux版本的[Bazel安裝檔](https://github.com/bazelbuild/bazel/releases)

2. 安裝   
  ```
  chmod +x install-version-os.sh
  ./install-version-os.sh --user
  ```
  
3. 在.bashr中設定路徑    
  ```
  export PATH="$PATH:$HOME/bin"
  ```

## 設定TensorFlow
1. 下載TensorFlow source code   
  ```
  git clone https://github.com/tensorflow/tensorflow.git --recurse-submodules
  ```

2. 設定SDK和NDK路徑   
  * 打開tensorflow資料夾下的WORKSPACE   
  * 拿掉android_sdk_repository和android_ndk_repository的註解
  * 分別在android_sdk_repository和android_ndk_repository中的path後填入sdk和ndk路徑，如下：
  ```
  android_sdk_repository(
    name = "androidsdk",
    api_level = 23,
    build_tools_version = "23.0.1",
    # Replace with path to Android SDK on your system
    path = "/home/username/android-sdk-linux/"
  )
    
  android_ndk_repository(
    name = "androidndk",
    path = "/home/username/android-nkd-linux/",
    api_level = 21
  )
  ```
  
## 建立TensorFlow Android Camera Demp apk   
1. 下trained model weights    

  ```
  wget https://storage.googleapis.com/download.tensorflow.org/models/inception5h.zip -O /tmp/inception5h.zip
  unzip /tmp/inception5h.zip -d tensorflow/examples/android/assets/
  ```
2. Build apk    
  * 在tensorflow資料夾下執行下面命令來建立apk   
  ```
  bazel build //tensorflow/examples/android:tensorflow_demo
  ```   
  * 完成會在顯示類似下列訊息：    
  ```
  INFO: From Generating signed apk:
  
  THIS TOOL IS DEPRECATED. See --help for more information.
  
  Target //tensorflow/examples/android:tensorflow_demo up-to-date:
    bazel-bin/tensorflow/examples/android/tensorflow_demo_deploy.jar
    bazel-bin/tensorflow/examples/android/tensorflow_demo_unsigned.apk
    bazel-bin/tensorflow/examples/android/tensorflow_demo.apk
  INFO: Elapsed time: 582.274s, Critical Path: 534.03s
  ```   
  * apk位置   
  ```
  tensorflow/bazel-bin/tensorflow/eexamples/android/
  ```   
  
