# Memory Leaks
> Memory liaks issuses in Android applications are most of  the time due to the same mistake that is keeping a long-lived reference to a Context.

#### To avoid context-related memory leaks
* Do not keep long-lived references to a context-activity (a reference to an activity should have the same life cycle as the activity itself).
* Try using the context-application instead of a context-activity.
* Avoid non-static inner classes in an activity if you don't control their life cycle, use a static inner class and make a weak reference to the activity inside. The solution to this issue is to use a static inner class with a WeakReference to the outer class, as done in ViewRoot and its W inner class for instance.
* A garbage collector is not an insurance against memory leaks.

#### Reference 
[Android Developers Blog - Avoiding Memory leaks](http://android-developers.blogspot.com.tr/2009/01/avoiding-memory-leaks.html)