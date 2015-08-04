# Context
> Context is interface to global information about an application environment.

##### Android有兩種Context類型:
1. Application Context:
Application context is attached to the application's life-cycle and will always be same throught the life of applliction.
2. Activity Context: Activity context is attached to the activity's life cycle and can be destroyed if the activity's onDestroy() is raised.

##### App在中創建Context instance的情況:
1. 建立Application物件，整格App只會有一個Application物件
2. Activity建立時
3. Service建立時

##### App中Context的數量為:
```
Context總數 = Activity的數量 + Service的數量 + 1個Applciation對應的Context
```

##### 取得Context的方法
* getApplcationContext(): Returns the context for all activities running in application
* getContext(): Returns the context view only current running activity.
* getBaseContext(): If you want to access Context from another context within application you can access.
