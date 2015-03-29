Communication between activities
================================
>在Android中要進行Activity之間的訊息傳遞，可以透過Intent將要傳送的訊息放入Intent後，
>再執行startActivity()或者是startActivityForResult()，就可以達到在Activity之間的訊息
>傳遞。

### startActivity and startActivityForResult methods
* startActivity method: 啟動一個新的Activity，當新的Activity結束反回到原本的Activity時，將不會接收到任何資訊。
* startActivityForResult method: 啟動一個新的Activity，當新的Activity結束後，使原本的Activity接收到回傳的的資訊。

### Code Example: startActivity

##### MainActivity啟動新的Activity

```java
public static final String KEY = "MainActivity.message";

Intent intent = new Intent(this, NewActivity.class);
String value = "Main Activity message";
intent.putExtra(KEY, value);
startActivity(intent);
```

透過Intent的putExtra() method將要傳送的extra message放入，putExtra是用key-value的方式來存放extra message，key可以是任何自定義的字串，而value可以是string、intenger、boolean和dobule等資料型別。

##### NewActivity取得資訊

```java
Intent intent = getIntent();
String message = intent.getStringExtra(MainActivity.KEY);
```

NewActivity被MainActivity呼叫啟動後，NewActivity可以透過getIntent()獲得Intent物件，要取得MainActivit傳遞過來的extra message時，要根據extra message value的資料型別，來使用相對應取得資訊method，如在這裡MainActivity傳遞的是string型別因此要使用getStringExtra()和key來取的資訊。

### Code Example: startActivityForResult

##### MainActivity啟動新的Activity

```java
public static final int REQUEST_CODE = 1;
Intent intent = new Intent(this, NewActivity.class);
startActivityForResutl(intent, REQUEST_CODE);
```

與startActivity不同的是在startActivityForResult會加入一個intenger型別的REQUEST_CODE，是用來識別要求，當收到返回的Intent時他會提供相同的REQUEST_CODE可以用來識別及接下來如何處理。

##### NewActivity回傳資訊

```java
public static final String KEY = "NewActivity.message"

Intent intent = new Intent();
String value = "New Activity message";
intent.putExtra(KEY, value);
setResult(RESULT_OK, intent);
```

NewActivity回傳訊息方式跟上面MainActivity傳送訊息的方式一樣是透過putExtra來存放訊息，並透過setResult()來傳送，在setResult()中需要的參是包含RESULT_OK和Intent物件，RESULT_OK是要讓MainActivity用來識別回傳成功，RESULT_OK是android內建的。

##### MainActivity接收NewActivity回傳訊息

```java
@override
protected void onActivityResult(int requestCode, int resultCode, Intent data) {
	// Check which request we're responding to
	if(requestCode == REQUEST_CODE) {
		// Make sure the request was successful
		if(resultCode == RESULT_OK) {
			String message = data.getStringExtra(NewActivity.message);
		}
	}
}
```

MainActivity透過onActivityResult()來接收其他Activity回傳的尋習，因為MainActivity可以啟動不同的Activity因此透過requestCode和resultCode來識別，並執行相對應動作。
