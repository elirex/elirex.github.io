Use Gradle build the release apk
=================================

>基本上publish一個可以裝到其他手機的android App時需對apk進行簽章，且為了保護App中
>的code不被其他人輕易透過反組譯工具來觀看整個程式架構以及安全性問題，通常在build 
>apk時會對程式碼進行代碼混淆(Obfuscated code)的動作。以下將介紹如何在build.gradle
>中來作這兩個動作。

### Signing Configurations
在build.gradle加入簽章需要以下的設定：
<font color="green">
* storeFile file("Your keystore file path") --指定keystore檔案的所在路徑
</font>
<font color="green">
* storePassword "pasword" --keystore的密碼
</font>
<font color="green">
* keyAlias "alias name" --alias的名稱
</font>
<font color="green">
* keyPassword "password" --密碼
</font>

為了確保密碼安全性，不會將storePassword和keyPassword的密碼直接寫在build.gradle裡，
會使用KEYSTOR_PASSWORD和KEY_PASWORD來取代，會將這兩個的密碼寫在gradle.properties
中，如下<font color="red">（不要將gradle.properties放入版本控制系統）</font>：
```
KEYSTORE_PASSWORD=123456
KEY_PASSWORD=654321
```

Signing configs 範例：
```groovy
andriod {
	...
	signingConfigs {
		release {
			try {
				storeFile file("app.keystore")
				storePassword KEYSTORE_PASSWORD
				kayAlias "anything"
				keyPassword KEY_PASSWORD
			} catch(ex) {
				throw new InvalidUserDataException("You shoudl check KEYSTORE_PASSWORD and KEY_PASSWORD has been define.")
			}
		}
	}

	buildTypes {
		...
		signigConfig signigConfigs.release
	}
}
```
### Obfuscated Code
Android使用Proguard來進行程式碼混淆，混淆程式碼所需的的設定：
<font color="green">
* minfyEnable true --啟用混淆功能
</font>
<font color="green">
* proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rule.txt'
</font>

proguard-android.txt是android sdk中提供的，可以在"sdk資料夾/tools/proguardFiles"下
看到，而proguard-rule.txt是自行在app或library module資料夾下建立，用來設定一些自訂
規則。

Proguard 範例：
```groovy
android {
	...
	buildTypes {
		release {
			minifyEnabled true
			proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rule.txt'
		}
	}
}
```

### Build apk
* 在android studio左邊tool bar的Build Variants中選擇要建立的variants
（選擇有簽章和混淆的模式 ex: release）
* 使用gradle tasks "assembleRelease" command建立apk
* 建好的apk會在"module資料夾/build/outputs/apk/"下
