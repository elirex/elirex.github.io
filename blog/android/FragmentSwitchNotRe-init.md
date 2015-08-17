Fragment Switch Not Re-Initial
------------------------------

### 使用replace()方法來切換Fragment
```java
public void swtichFragment(Fragment fragment) {
	if(content != fragment) {
		content = framgnet;
		fragmentManager.beginTransactioin()
				.setCustomAnimations(android.R.anim.fade_in, R.anim.slide_out)
				.replace(R.id.fragment_content, fragment).commit();
	}
}
```
使用replace()方式來切換fragment時，每次framgnet都會被重新實例化，所以資料都重新
load，非常消耗性能與用戶的數據流量。

replace()方法使用的時機為上一個fragmnet不在被需要時可採用的一種快速替換fragment
的方式

### 使用add()和hide()方式來切換不同的framgent
```java
public void switchFragment(Fragmnet from, Fragment to) {
	if(content != to) {
		content = to;
		FragmentTransaction transaction = fragmentManager.beginTransaction();
		transaction.setCustomAnimation(android.R.anim.fade_in, R.anim.slide_out);
		if(!to.isAdded()) {
			transaction.hide(from).add(R.id.fragment_content, to).commit();
		} else {
			transaction.hide(from).show(to).commit();
		}
	}	
}
```
