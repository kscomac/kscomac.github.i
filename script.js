// APIを使用せず、既存のTwitter shareボタンを編集したもの

$(function () {
  var imgs = new Array();
  var cnt = 9; // 画像枚数
  var speed = 500; // ミリ秒(1秒=1000)
  var now = -1;
  var timerName;

  for (i = 0; i < cnt; i++) {
    imgs[i] = "img" + (i + 1) + ".jpg";
  }

  //timerName = setInterval(pars2images, speed);   // 自動的に開始する場合はコメント外す

  // パラパラ実行
  function pars2images() {
    now++;
    // var msg = imgs[now]
    // document.getElementById("PassageArea").innerHTML = msg;   // 表示更新

    $("#paraImage").attr("src", './' + imgs[now]);
    if (now >= imgs.length - 1) {
      now = -1;
    }

  }

  // 次
  $("#nextButton").click(function () {
    now++;
    if (now == imgs.length) {
      now = 0;
    }
    $("#paraImage").attr("src", './' + imgs[now]);

    // remove any previous clone
    $('#tweet-area').empty()

    // create a clone of the twitter share button template
    var clone = $('.twitter-share-button-template').clone()

    // fix up our clone
    clone.removeAttr('style'); // unhide the clone
    clone.attr('data-url', location.href + imgs[now]);
    clone.attr('class', 'twitter-share-button'); 
    // copy cloned button into div that we can clear later
    $('#tweet-area').append(clone);

    // reload twitter scripts to force them to run, converting a to iframe
    $.getScript('https://platform.twitter.com/widgets.js');
    
  });

  // 前
  $("#prevButton").click(function () {
    now--;
    if (now == -1) {
      now = cnt - 1;
    }
    $("#paraImage").attr("src", './' + imgs[now]);

    // remove any previous clone
    $('#tweet-area').empty()

    // create a clone of the twitter share button template
    var clone = $('.twitter-share-button-template').clone()

    // fix up our clone
    clone.removeAttr('style'); // unhide the clone
    clone.attr('data-url', location.href + imgs[now]);
    clone.attr('class', 'twitter-share-button'); 
    // copy cloned button into div that we can clear later
    $('#tweet-area').append(clone);

    // reload twitter scripts to force them to run, converting a to iframe
    $.getScript('https://platform.twitter.com/widgets.js');
    

  });

  // スタート
  $("#startButton").click(function () {
    timerName = setInterval(pars2images, speed);
    // スタートボタンを押せないようにする
    $(this).attr("disabled", true);
    // ストップボタンを押せるようにする
    $("#stopButton").attr("disabled", false);

    
  });

  // ストップ
  $("#stopButton").click(function () {

  // remove any previous clone
  $('#tweet-area').empty()

  // create a clone of the twitter share button template
  var clone = $('.twitter-share-button-template').clone()

  // fix up our clone
  clone.removeAttr('style'); // unhide the clone
  clone.attr('data-url', location.href + imgs[now]);
  clone.attr('class', 'twitter-share-button'); 
  // copy cloned button into div that we can clear later
  $('#tweet-area').append(clone);

  // reload twitter scripts to force them to run, converting a to iframe
  $.getScript('https://platform.twitter.com/widgets.js');
      
    if (timerName) {
      clearInterval(timerName);
    }
    // ストップボタンを押せないようにする
    $(this).attr("disabled", true);
    // スタートボタンを押せるようにする
    $("#startButton").attr("disabled", false);
  });
  
  // 最初
  $("#firstButton").click(function () {
    now = 0;
    $("#paraImage").attr("src", './' + imgs[now]);

    // remove any previous clone
    $('#tweet-area').empty()

    // create a clone of the twitter share button template
    var clone = $('.twitter-share-button-template').clone()

    // fix up our clone
    clone.removeAttr('style'); // unhide the clone
    clone.attr('data-url', location.href + imgs[now]);
    clone.attr('class', 'twitter-share-button'); 
    // copy cloned button into div that we can clear later
    $('#tweet-area').append(clone);

    // reload twitter scripts to force them to run, converting a to iframe
    $.getScript('https://platform.twitter.com/widgets.js');
    
  });
  
  // 最後
  $("#lastButton").click(function () {
    now = cnt - 1;
    $("#paraImage").attr("src", './' + imgs[now]);

    // remove any previous clone
    $('#tweet-area').empty()

    // create a clone of the twitter share button template
    var clone = $('.twitter-share-button-template').clone()

    // fix up our clone
    clone.removeAttr('style'); // unhide the clone
    clone.attr('data-url', location.href + imgs[now]);
    clone.attr('class', 'twitter-share-button'); 
    // copy cloned button into div that we can clear later
    $('#tweet-area').append(clone);

    // reload twitter scripts to force them to run, converting a to iframe
    $.getScript('https://platform.twitter.com/widgets.js');
    
  });

  

});
