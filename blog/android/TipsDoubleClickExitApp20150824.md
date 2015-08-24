# Tips - Double click to exit app
> 實現雙點擊BACK退出App		

透過Override onBackPressed()方法達到雙點擊退出App
```java
public class MainActivity extends Activity {
	...
	private boolean isExitApp;

	@Override
	public void onBackPressed() {
		if(isExitApp) {
			super.onBackPressed();
			return;
		}

		isExitApp = ture;
		Toast.makeText(this, "Places click again to exit app",
				Toast.LENGTH_SHORT).show();

		new Handler().postDelayed(new Runnable() {
			@Override
			public void run() {
				isExitApp = false;
			}
		}, 1500);
	}

}
```
