var i = 0;
var arr = new Array();

arr[0] = "images/slide/slide_1.jpg";
arr[1] = "images/slide/slide_2.jpg";
arr[2] = "images/slide/slide_3.jpg";
arr[3] = "images/slide/slide_4.jpg";
arr[4] = "images/slide/slide_5.jpg";

var next;
function slide_photos(next){
    var photo = document.getElementById("slide_photo");
    if(next == 1){
        if(i == arr.length-1){
            i = 0;
        }else{
            i += 1;
        }
    }else if(next == 2){
        if(i == 0){
            i = arr.length-1;
        }else{
            i -= 1;
        }
    }
    photo.style.backgroundImage = `url("${arr[i]}")`;
}

//重新加載時間
setInterval("slide_photos()",2000);