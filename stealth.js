//you already know
// deletes like button among other buttons
//GG
//author @todoslosdays
$(document).ready(function(){
  $(window).scroll(function(){
    $('a').each(function(){
      $('[data-testid="fb-ufi-likelink"]').remove();
      $('[data-testid="ufi_reply_like_link"]').remove();
      // deletes the comment like button
      $('[data-testid="ufi_comment_like_link"]').remove();
      //deletes the comment button on facebook
      $('[class="comment_link _5yxe"]').remove();
      //deletes the share button on facebook
      $('[<span>Compartir</span>]').remove();
      $('[class="UFIShareLinkSpinner _1wfk img _55ym _55yn _55yo _5tqs"]').remove();
      //DELETES THE REACTIONS FROM FACEBOOK 
      $('[class="_sa_ _5vsi _ca7"]').remove();
      //deletes the retweet button for twitter
      $('[id="retweet-tweet-dialog"]').remove();
      $('[class="RetweetDialog modal-container"]').remove();
      $('[class="close-modal-background-target"]').remove();
      $('[data-original-title="Like"]').remove();
      //deletes the heart icon from instagram
      $('[class="HeartAnimationContainer"]').remove();
      $('[class="HeartAnimation"]').remove();
      //removes the reply button
      $('[class="ProfileTweet-action--reply u-hiddenVisually"]').remove();
      $('[data-modal="ProfileTweet-reply"]').remove();
      $('[title="Reply"]').remove();
      //removes instagram like button and comment button
      $('[class="_ebwb5 _1tv0k _345gm coreSpriteHeartOpen"]').remove();
      $('[<input class="_7uiwk" placeholder="Add a comment..." type="text" value data-reactid=".0.1.0.1.0.$1189361427190022163.2.2.1.0">').remove();
  	  //removes the like button from linkedin
  	  $('[button class="like"]').remove();
  	  $('[data-liked="true"]').remove();
  	  $('[data-block="like"]').remove();
  	  $('[data-like-url]').remove();
  	  $('[data-like-data]').remove();
  	  $('[data-trk="unlike"]').remove();
  	  //removes the comment button for linkedin
  	  $('[button class="comment"]').remove();
  	  $('[data-block="comment"]').remove();
  	  $('[data-trk="comment"]').remove();
  	  $('[<span aria-hidden="true">Comment</span>').remove();
  	  //removes like button from tumblr
  	  $('[class="post_control post-control-icon like"]').remove();
  	  $('[title="Like"]').remove();
  	  $('[data-subview="like"]').remove();
  	  //removes the reblog button from tumblr
  	  $('[class="radar_button reblog reblog_button "]').remove();
  	  $('[title="Reblog"]').remove();
  	  //REMOVES THE "PAGE HEAD ACTIONS" ON GITHUB >:)
  	  $('[class="pagehead-actions"]').remove();

     });
  });
});
//$('[]').remove();