 // Get the modal
var popup = document.getElementById("popup");

$("#goldBall").bind("click",{type: "goldBall"}, onClicked)
$("#rooit").bind("click",{type: "rooit"}, onClicked)
$("#contect-me").bind("click", {type: "contect-me"}, onClicked)

$("#english").bind("click", onClickedLanguage)


function onClickedLanguage(event) {

    if (event.target.text == "English") {
        var type = document.getElementById("english");
        removeChild(type);
        insertText(type, ["中文"], "");

        var name = document.getElementById("name");
        removeChild(name);
        name.appendChild(document.createTextNode("Wang, Yuan-Sheng"));

        var summary = document.getElementById("summary");
        removeChild(summary);
        insertText(summary, ["I am a software engineer and have a lot of enthusiasm for programming. I mainly focus on Android and Deep Learning develop. In the free time, I also love to develop the side project and contribute to the open-source."], "p");

        var iii_company = document.getElementById("III-company");
        removeChild(iii_company);
        insertText(iii_company, ["Institute for Information Industry"], "p");

        var iii_details = document.getElementById("III-details");
        removeChild(iii_details);
        insertText(iii_details, ["Focuse on Android and Deep Learning develop."], "p");


        var iii_scs_desc = document.getElementById("III-smart-camera-system-desc");
        removeChild(iii_scs_desc);
        insertText(iii_scs_desc, ["Using Deep Learning to implement the across-camera pedestrian attribute analysis and tracking."], "");

        var iii_scs_main = document.getElementById("III-smart-camera-system-main");
        removeChild(iii_scs_main);
        insertText(iii_scs_main, ["Developed the pedestrian re-identification and the pedestrian attribute analysis on the across-camera environment, and integrated all the system modules."], "");


        var iii_dls_desc = document.getElementById("III-deep-learning-android-sdk-desc");
        removeChild(iii_dls_desc);
        insertText(iii_dls_desc, ["An Android device with an MTK X20 chip can perform a deep learning computation."], "");

        var iii_dls_main = document.getElementById("III-deep-learning-android-sdk-main");
        removeChild(iii_dls_main);
        insertText(iii_dls_main, ["Developed the overall SDK (Through Java Native Interface to connection MTK Deep Neural Networks native library, and build model manager, etc.)."], "");

        var iii_acr_sdk_desc = document.getElementById("III-ACR-SDK-desc");
        removeChild(iii_acr_sdk_desc);
        insertText(iii_acr_sdk_desc, ["Audio Automatic Content Recognition on Android devices."], "");

        var iii_acr_sdk_main = document.getElementById("III-ACR-SDK-main");
        removeChild(iii_acr_sdk_main);
        insertText(iii_acr_sdk_main, ["Developed the overall functionality of the SDK (local ACR, remote ACR, and recording module, etc.)."], "");

        var iii_acr_sdk_other = document.getElementById("III-ACR-SDK-other");
        removeChild(iii_acr_sdk_other);
        insertText(iii_acr_sdk_other, ["SDK is used to Chunghwa Telecom MOD app, China Television app, Golden Melody Award 2015 app, and Sixnology."], "");

        var iii_acr_server_desc = document.getElementById("III-ACR-Server-desc");
        removeChild(iii_acr_server_desc);
        insertText(iii_acr_server_desc, ["TV streaming reception and conversion the audio and video fingerprint."], "");

        var iii_acr_server_main = document.getElementById("III-ACR-Server-main");
        removeChild(iii_acr_server_main);
        insertText(iii_acr_server_main, ["Developed the video streaming receiver module, and the audio and audio fingerprint recorded module."], "");


        var iii_ftv_title = document.getElementById("III-FTV-title");
        removeChild(iii_ftv_title);
        ftv_link = document.createElement("a");
        ftv_link.href = "https://play.google.com/store/apps/details?id=tw.com.ftv.android";
        insertText(ftv_link, ["Formosa Television Online (民視線上) Android App"], "");
        iii_ftv_title.appendChild(ftv_link);
        iii_ftv_title.appendChild(document.createTextNode(" (2017.6 - Present)"));

        var iii_ftv_desc = document.getElementById("III-FTV-desc");
        removeChild(iii_ftv_desc);
        insertText(iii_ftv_desc, ["Live stream with the audience interaction, and has a record of 20000 users online at the same time. (100000 - 500000 installs, rated 4.3/5.0, total rating 2795)"], "");

        var iii_ftv_main = document.getElementById("III-FTV-main");
        removeChild(iii_ftv_main);
        insertText(iii_ftv_main, ["Mainly responsible for the app architecture adjustment, and using Kotlin to refactor."], "");

        var iii_rooit_desc = document.getElementById("III-Rooit-desc");
        removeChild(iii_rooit_desc);
        insertText(iii_rooit_desc, ["A new type chats app that including the voice interaction, the new kind of sticker and chatbot and so on."], "");

        var iii_rooit_main = document.getElementById("III-Rooit-main");
        removeChild(iii_rooit_main);
        insertText(iii_rooit_main, ["Developed the prototype of Rooit app."], "");


        var goldball = document.getElementById("goldBall");
        removeChild(goldBall);
        insertText(goldball, ["Golden Bell Award 50th (金鐘獎50th)"], "");
       

        var iii_goldball_desc= document.getElementById("III-GoldBall-desc");
        removeChild(iii_goldball_desc);
        insertText(iii_goldball_desc, ["Multi-view live stream chatting, and the interactive game. (5000-10000 installs, rated 4.0/5.0, total rating 188)"], "");

        var iii_goldball_main = document.getElementById("III-GoldBall-main");
        removeChild(iii_goldball_main);
        insertText(iii_goldball_main, ["Developed the entire app."], "");

        var iii_ttv_title = document.getElementById("III-TTV-title");
        removeChild(iii_ttv_title);
        ttv_link = document.createElement("a");
        ttv_link.href = "https://play.google.com/store/apps/details?id=com.totvnow.ttv";
        insertText(ttv_link, ["Taiwan Television News (台視新聞) Android app"], "");
        iii_ttv_title.appendChild(ttv_link);
        iii_ttv_title.appendChild(document.createTextNode(" (2014.12 - 2014.12)"));

        var iii_ttv_desc = document.getElementById("III-TTV-desc");
        removeChild(iii_ttv_desc);
        insertText(iii_ttv_desc, ["News browsing app. (5000-10000 installs, rated 4.2/5.0, total rating 242)"], "");

        var iii_ttv_main = document.getElementById("III-TTV-main");
        removeChild(iii_ttv_main);
        insertText(iii_ttv_main, ["Developed the entire app."], "");


        var android_architecture = document.getElementById("Android-Architecture");
        removeChild(android_architecture);
        insertText(android_architecture, ["Android architecture blueprint, using Data Binding and RxJava to implement MVP/MVVM architecture similarly."], "");


        var android_faye_client = document.getElementById("Android-Faye-Client");
        removeChild(android_faye_client);
        insertText(android_faye_client, ["Faye pub/sub client, reduced CPU usage (40% -> 10%) that compared with the original Faye Android client."], "");

        var mini_floating_player = document.getElementById("Mini-Floating-Player");
        removeChild(mini_floating_player);
        insertText(mini_floating_player, ["A Chrome app, let you watching YouTube in a floating window."], "");

    } else if (event.target.text == "中文") {
        location.reload();
    }
}


//$("#acrSDK").bind("click",{type: "acrSDK"}, onClicked)
// $("#dlSDK").bind("click",{type: "dlSDK"}, onClicked)


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
//btn.onclick = function() {
function onClicked(event) {
    var popupBody = document.getElementById("popup-body");
    removeChild(popupBody);

    var title = "";
    if (event.data.type == "goldBall") {
        title = "金鐘50th Android App";
        var images = ["assets/images/goldball/0.jpg", 
                      "assets/images/goldball/1.jpg", 
                      "assets/images/goldball/2.jpg",
                      "assets/images/goldball/3.jpg", 
                      "assets/images/goldball/4.jpg", 
                      "assets/images/goldball/5.jpg"];
        popupBody.className = "popup-body-image";
        insertImage(popupBody, images);
    } else if (event.data.type == "rooit") {
        title = "Rooit Android App";
        var images = ["assets/images/rooit/0.jpg", "assets/images/rooit/1.jpg", "assets/images/rooit/2.jpg" ,
                    "assets/images/rooit/3.jpg"];
        popupBody.className = "popup-body-image";
        insertImage(popupBody, images);

    } else if (event.data.type == "contect-me") {
        title = "Contect Me";
        popupBody.className = "popup-body-text";
        var email = document.createElement("h4");
        email.appendChild(document.createTextNode("Email: "));
        var emailContent = document.createElement("a");
        emailContent.href = "mailto: sheng79225@gmail.com";
        emailContent.appendChild(document.createTextNode("sheng79225@gmail.com")); 
        email.appendChild(emailContent);

        var phone = document.createElement("h4");
        phone.appendChild(document.createTextNode("Phone: "));
        var phoneContent = document.createElement("a");
        phoneContent.href = "tel: 886-911-428-758";
        phoneContent.appendChild(document.createTextNode("886-911-428-758"));
        phone.appendChild(phoneContent);

        var location = document.createElement("h4");
        location.appendChild(document.createTextNode("Location: Taipei, Taiwan"));

        popupBody.appendChild(email);
        popupBody.appendChild(phone);
        popupBody.appendChild(location);
    }

    // else if (event.data.type == "acrSDK") {
    //     title = "Automatic Content Recognition Android SDK";
    //     popupBody.className = "popup-body-text";
    //     var textContents = ["● Android裝置上的聲音自動內容辨識 Librar", 
    //                         "● 我主要負責開發與實作SDK整體功能", 
    //                         "● 使用廠商：中華電信MOD、一直ON TV(中視) App、2015GMA(金曲獎) App、索驥創意"];
    //     insertText(popupBody, textContents);
    // } else if (event.data.type == "dlSDK") {
    //     title = "Deep Learning Android SDK";
    //     popupBody.className = "popup-body-text";
    //     var textContents = ["● 搭載MTK X20晶片的Android裝置可執行Deep Learning運算",
    //                         "● 主要負責開發與實做整體SDK，JNI串接MTK Deep Neural Networks native library"];
    //     insertText(popupBody, textContents);
    // }

    var popupTitle = document.getElementById("popup-title");
    removeChild(popupTitle);
    popupTitle.appendChild(document.createTextNode(title));

    popup.style.display = "block";
}

function insertText(parentBody, textContents, type) {
    for (var i = 0; i < textContents.length; i++) {
        if (type == "") {
            var text = document.createTextNode(textContents[i]);
            parentBody.appendChild(text);        
        } else {
            var desc = document.createElement(type);
            var text = document.createTextNode(textContents[i]);
            desc.appendChild(text);
            parentBody.appendChild(desc);        
        }

    }
}

function insertImage(popupBody, images) {
    for (var i = 0; i < images.length; i++) {
        var img = document.createElement("img");
        img.width = "252";
        img.height = "448";
        img.src = images[i];
        img.style.cssText = "width: 100% height: 100%; margin: 0px 8px 0px 8px;";

        popupBody.appendChild(img);
    }
}

function removeChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    popup.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}