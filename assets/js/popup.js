 // Get the modal
var popup = document.getElementById("popup");

$("#goldBall").bind("click",{type: "goldBall"}, onClicked)
$("#rooit").bind("click",{type: "rooit"}, onClicked)
$("#contect-me").bind("click", {type: "contect-me"}, onClicked)


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
        var images = ["assets/images/goldBall/0.jpg", 
                      "assets/images/goldBall/1.jpg", 
                      "assets/images/goldBall/2.jpg",
                      "assets/images/goldBall/3.jpg", 
                      "assets/images/goldBall/4.jpg", 
                      "assets/images/goldBall/5.jpg"];
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

function insertText(popupBody, textContents) {
    for (var i = 0; i < textContents.length; i++) {
        var desc = document.createElement("h4");
        var text = document.createTextNode(textContents[i]);
        desc.appendChild(text);
        popupBody.appendChild(desc);
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