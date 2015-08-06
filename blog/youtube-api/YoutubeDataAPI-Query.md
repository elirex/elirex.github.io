Youtube Data API Query
======================

>Youtube API Query參數提供所收尋的影片的的標題、描述、上傳者和時間等相關資訊，透過HTTP GET發送請求
>的URL，基本API URL如下：
```
https://gdata.youtube.com/feeds/api/videos
```
### Query
要執行Query的動作需要在基本API URL加上q參數，下面的範例說明你想收尋所有Marvel相關影片但不包含鋼鐵人，參數q後面可以接任何你想要收尋目標，執行下面的URL後會得到收尋後的結果以XML格式呈現。(v：指定api版本)

```
https://gdata.youtube.com/feeds/api/videos?q=marvel+-ironman&v=2
```

### Other 參數
除了基本的收尋，還有其他參數可以結合一起使用，可用的參數如下：

|Name|Definition|
|----|----------|
|alt |alt參數用來指定Query後回傳的格式，目前可用的格式有atom, rss, json, json-in-script和jsonc，預設的格式是atom。|
|author|指定收尋特定上傳者的影片。|
|max-results|指定最多的回傳結果的數量。|
|prettyprint|將回傳結果以比較好閱讀的方式呈現。|
|start-index|設定回傳結果從幾個開始。|

### 範例

```
https://gdata.youtube.com/feeds/api/videos?q=billboard&v=2&max-results=10&start-index=11&prettyprint=true&alt=jsonc
```
這個範例是收尋Billboard，參數設定最大回傳數量為10，起始位置從第11個開始，使用jsonc格式輸出，[Result Link](http://gdata.youtube.com/feeds/api/videos?q=billboard&v=2&max-results=10&start-index=11&prettyprint=true&alt=jsonc)

### Reference
[Youtube API v2.0 - API Query Parameters](https://developers.google.com/youtube/2.0/developers_guide_protocol_api_query_parameters)