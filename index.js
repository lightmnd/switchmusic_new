var $lines = $('.prompt p');
$lines.hide();
var lineContents = new Array();

var terminal = function() {

  var skip = 0;
  typeLine = function(idx) {
    idx == null && (idx = 0);
    var element = $lines.eq(idx);
    var content = lineContents[idx];
    if(typeof content == "undefined") {
      $('.skip').hide();
      return;
    }
    var charIdx = 0;

    var typeChar = function() {
      var rand = Math.round(Math.random() * 50) + 5;

      setTimeout(function() {
        var char = content[charIdx++];
        element.append(char);
        if(typeof char !== "undefined")
          typeChar();
        else {
          element.append('<b><span class="output">' + element.text().slice(9, -1) + '</span></b>');
          element.removeClass('active');
          typeLine(++idx);
        }
      }, skip ? 0 : rand);
    }
    content = '' + content + '';
    element.append(' ').addClass('active');
    typeChar();
  }

  $lines.each(function(i) {
    lineContents[i] = $(this).text();
    $(this).text('').show();
  });

  typeLine();
}

terminal();


/* promt 2 */
setTimeout(() =>{
var $lines = $('.prompt2 p');
    $lines.show();
    console.log('ok');
}, 7000);



// var logo = $('.logo img');

// function autoupdate() {
//   setTimeout(function(){
//      $(logo).css('display', 'none');
//      setTimeout(function(){
//         $(logo).css('display', 'block');
//         setTimeout(autoupdate, 50);
//      }, 1000)
//   }, 300)
// }

// $(function(){ //same as $(document).ready(function(){
//    setTimeout(autoupdate, 50);
// });