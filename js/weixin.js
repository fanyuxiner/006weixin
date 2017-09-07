$(function() {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/communication',
            dataType: 'json',
            success: function(data) {
                this.renderDate = data
                    //   console.log(that.renderDate)
                data.end = '0' ? renderTemplate(data.posts) : "";
            }
        })
    })
    // datalist()
function renderTemplate(renderDate) {
    var html = '';
    for (var i = 0; i < renderDate.length; i++) {
        data = renderDate[i];
        console.log(data.type)
        switch (data.type) {
            case 'left-txt':
                html += [' <div class="flow-left clearfix">',
                    ' <div class="left-header">',
                    ' <div class="img-box">',
                    '<img src="' + data.headImage + '" class="pic" />',
                    '</div>',
                    ' </div>',
                    '<div class="left-txt clearfix">' + data.content + '</div>',
                    '</div>'
                ].join("");
                break;
            case 'right-txt':
                html += ['  <div class="flow-right clearfix">',
                    '<div class="right-header">',
                    ' <div class="img-box">',
                    '<img src="' + data.headImage + '" class="pic" />',
                    ' </div>',
                    '</div>',
                    '<div class="right-txt clearfix">' + data.content + '</div>',
                    '</div>'
                ].join("");
                break;
            case 'leftSound':
                html += ['<div class="flow-left clearfix">',
                    ' <div class="left-header">',
                    '<div class="img-box">',
                    '<img src="' + data.headImage + '" class="pic" />',
                    '</div>',
                    ' </div>',
                    '<div class="left-speack clearfix img_total  con div-img1" id="txt-a">',
                    '<div class="div-img " id="div-img1">',
                    '<img class="active" src="img/au3.png" />',
                    '<img src="img/au1.png" />',
                    '<img src="img/au2.png" />',
                    '</div>',
                    ' <audio src="' + data.sound.url + '"></audio>',
                    ' </div>',
                    '<div class="red">	',
                    '<!-- <p class="p"><img src="img/021_15_02.jpg" alt=""></p> -->',
                    '<!-- <span class="js-long">' + data.sound.duration + '</span><b>"</b>',
                    ' </div>',
                    '</div>'
                ].join("");
                break;
            case 'rightSound':
                html += ['<div class="flow-right clearfix">',
                    '            <div class="right-header">',
                    '                <div class="img-box">',
                    '                    <img src="' + data.headImage + '" class="pic" />',
                    '                </div>',
                    '            </div>',
                    '            <div class="right-speack img_total  con  div-img1">',
                    '                <div class="div-img " id="div-img1">',
                    '                    <img class="active" src="img/au3.png" />',
                    '                    <img src="img/au1.png" />',
                    '                    <img src="img/au2.png" />',
                    '                </div>',
                    '                <audio src="' + data.sound.url + '"></audio>',
                    '            </div>',
                    '            <div class="red">',
                    '                <!-- <p class="p"><img src="img/021_15_02.jpg" alt=""></p> -->',
                    '                 <span class="js-long">' + data.sound.duration + '</span><b>"</b>',
                    '               </div> ',
                    '        </div>'
                ].join("");
                break;
            case 'leftImage':
                html += [' <div class="flow-left clearfix">',
                    '            <div class="left-header">',
                    '                <div class="img-box">',
                    '                    <img src="' + data.headImage + '" class="pic" />',
                    '                </div>',
                    '            </div>',
                    '            <div class="img2 clearfix"><img src="' + data.imageArray.turl + '" /></div>',
                    '		 </div>'
                ].join("");
                break;
        }

    }
    $('#js-container').append(html)




    var img_total = document.getElementsByClassName("img_total")[0];
    var audio = document.getElementsByTagName("audio");
    var check_main = document.getElementsByClassName("check-main")[0];
    var input_show = document.getElementsByClassName("input-show")[0];
    var check_text = document.getElementsByClassName("check-text")[0];
    var a1 = document.getElementsByClassName("check-key")[0];
    var con = document.getElementsByClassName("con");
    var pho = document.getElementsByClassName("pho");
    var img1 = document.getElementsByClassName("img1")[0];
    var imgs = document.getElementsByClassName("imgs");
    var big = document.getElementsByClassName("big")[0];
    var bg = document.getElementsByClassName("bg")[0];
    var p = document.getElementsByClassName("p");
    var flag = true;
    var speed = 0;
    var num = 0;
    var timer = "";
    var renderDate = ''
    for (var i = 0; i < con.length; i++) {
        con[i].onclick = function() {
            var a = this.children[1];
            var img1 = this.children[0];
            var imgs = img1.children;
            if (flag == false) {
                a.pause();
                clearInterval(timer);
                for (var j = 0; j < imgs.length; j++) {
                    imgs[j].className = "";
                }
                imgs[0].className = "active";
                flag = true;
                console.log("暂停");
            } else {
                for (var i = 0; i < con.length; i++) {
                    audio[i].pause();
                }
                timer = setInterval(function() {
                    num++;
                    if (num > imgs.length - 1) {
                        num = 0;
                    }
                    for (var j = 0; j < imgs.length; j++) {
                        imgs[j].className = "";
                    }
                    imgs[num].className = "active";
                }, 500)
                a.play();
                a.currentTime = 0;
                flag = false;
                console.log("播放")
            }
        }

    }
    check_main.onclick = function() {
        if (flag == false) {
            input_show.style.display = "block";
            check_text.style.display = "none";
            flag = true;
        } else {
            input_show.style.display = "none";
            check_text.style.display = "block";
            flag = false;
        }
    }
}
// renderTemplate(renderDate)