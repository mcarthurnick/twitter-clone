// TODO When the user successfully inputs characters and clicks the “Tweet” button, a new tweet should be created and added to the tweet stream in the main column

$(document).ready(function(){

$('#tweet-submit').hide();
$('#char-count').hide();
var currentUser = "Nick McArthur";
var userImg = "img/nick.png";
var userName = "@nickmac"

//Expand text area of tweet box when clicked and also show the submit and char count
$('.tweet-compose').click(function() {
  $(this).height( '65px');
  $('#tweet-submit').show();
  $('#char-count').show();
});

//Count char in text area if less than 10, change color of text to red. Disable submit button if above 140 chars.
$('.tweet-compose').on('keyup keydown' , function() {
  var maxChar = 140;
  var characters = $(this).val().length;
  $('#char-count').text(maxChar - characters);
  var numCount = $('#char-count').text();
  if(numCount <= 10) {
    $('#char-count').css('color', 'red');
  }
  else if (numCount >= 10){
    $('#char-count').css('color', 'black');
  }
  if(characters > maxChar) {
    $('#tweet-submit').hide();
  }
  else if (characters < maxChar) {
    $('#tweet-submit').show();
  }
})

//Add Tweet when submitted
// $('#tweet-submit').on('click', function() {
//  var newTweet = $('.tweet-compose').val();
//  $('#tweet').append('<div class="content">' + newTweet + ', </div>');
// })
//var newTweet = "This is my newTweet!";
//$('#stream').append(newTweet);
//var myText = $('.tweet-compose').val();
$('#tweet-submit').on('click', function() {
  $('#stream').prepend("<div class=" + "tweet" + "><div class=" + "content><img class=" + "avatar" + " src=" + userImg + "><strong>" + currentUser + "</strong><span class=" + "username> " + userName + "</span><p class=" + "tweet-text>" + $('.tweet-compose').val() + "</p></div></div>");
  $('.tweet-compose').val('');
  })

});
