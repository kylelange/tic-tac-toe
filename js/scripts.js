//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly

//game logic


//ui logic
function gameUI() {}
  var player1Mark = "X";
  var player2Mark = "O";
  var turn=0;

  $(".col-xs-4").click(function() {
    if($(this).text()==="") {
      turn++;
      if(turn%2===1) {
        $(this).text(player1Mark);
      } else {
        $(this).text(player2Mark);
      }
    } else {
      alert("You can only place a mark on empty squares, please try again.");
    }
  });
