# Managing Network

### Manage Network Usage
Let app supports network access and manage, must have right permissions and intent filters.

1. Access network must includes the following permissions:
	* android.permission.INTERNET : Allows app to open network sockets.
	* android.permission.ACCESS_NETWORK_STATE : Allows app to access network information.
2. Declare the intent filter for the ACTION_MANAGE_NETWORK_USATE action in activity:
	* ACTION_MANAGE_NETWORK_USATE : offers options to control data usage.
	* [The sample code](http://developer.android.com/training/basics/network-ops/managing.html#manage-usage)

### Easy way to check the network connection
Using "getActiveNetworkInfo()" and "isConnected()" to chekc the network connection is available.

```java
public boolean isConnectNetwork() {
	ConnectivityManager manager = (ConnectivityManager) 
					getSystemService(Context.CONNECTIVITY_SERVICE);
	NetworkInfo networkInfo = manager.getActiveNetworkInfo();
	return (networkInfo != null && networkInfo.isConnected());
}
```
### Respectively check Wifi and Mobile connection status
* Wifi: Use "ConnectivityManager.TYPE_WIFI"
* Mobile: Use "ConnectivityManager.TYPT_MOBILE"

```java
ConnectivityManager manager = (ConnectivityManager) 
				getSystemService(Context.CONNECTIVITY_SERVICE);
NetworkInfo networkInfo = null;
// Get Wifi network information
networkInfo = manager.getActiveNetworkInfo(ConnectivityManager.TYPE_WIFI);
Log.d("WIFI", "Wifi connected: " + networkInfo.isConnected());

// Get Mobile network information
networkInfo = manager.getActiveNetworkInfo(ConnectivityManager.TYPE_MOBILE);
Log.d("MOBILE", "Mobile connected: " + networkInfo.isConnected());
```

