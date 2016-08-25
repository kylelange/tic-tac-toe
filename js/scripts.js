//game logic
function Game() {
  this.gameOver = true;
  this.player1 = new Player("X");
  this.player2 = new Player("0");
  this.board = new Board();
}

Game.prototype.startGame = function () {
  this.gameOver = false;
  this.board = new Board();
}

function Player(mark) {
  this.mark = mark;
  //this.score = 0;
}

function Board() {
  this.ax = new Square();
  this.ay = new Square();
  this.az = new Square();
  this.bx = new Square();
  this.by = new Square();
  this.bz = new Square();
  this.cx = new Square();
  this.cy = new Square();
  this.cz = new Square();
  this.isWinner = false;
  this.winner; //if .isWinner is true = player
}

Board.prototype.testWin = function() {
if (
     ((this.ax.mark===this.ay.mark)&&(this.ay.mark===this.az.mark)&&(this.az.mark)) ||
     ((this.bx.mark===this.by.mark)&&(this.by.mark===this.bz.mark)&&(this.bz.mark)) ||
     ((this.cx.mark===this.cy.mark)&&(this.cy.mark===this.cz.mark)&&(this.cz.mark)) ||
     ((this.ax.mark===this.bx.mark)&&(this.bx.mark===this.cx.mark)&&(this.cx.mark)) ||
     ((this.ay.mark===this.by.mark)&&(this.by.mark===this.cy.mark)&&(this.cy.mark)) ||
     ((this.az.mark===this.bz.mark)&&(this.bz.mark===this.cz.mark)&&(this.cz.mark)) ||
     ((this.ax.mark===this.by.mark)&&(this.by.mark===this.cz.mark)&&(this.cz.mark)) ||
     ((this.cx.mark===this.by.mark)&&(this.by.mark===this.az.mark)&&(this.az.mark))
   )
  {
    this.isWinner = true;
    setTimeout(function() { alert("You Won!"); }, 500);
  } else if ((this.ax.mark)&&(this.ay.mark)&&(this.az.mark)&&
            (this.bx.mark)&&(this.by.mark)&&(this.bz.mark)&&
            (this.cx.mark)&&(this.cy.mark)&&(this.cz.mark)){
    setTimeout(function() { alert("It's a draw!"); }, 500);
  }
}

function Square() {
  this.empty = true;
  this.mark = "";
}

//ui logic
function gameUI() {}
  var newGame = new Game();
  var player1Mark = "X";
  var player2Mark = "O";
  var turn=0;

  $("#startGame").click(function(){
    newGame.startGame();
    $("#playArea .col-xs-4").text("");
  });

  $(".col-xs-4").click(function() {
    if($(this).text()==="") {
      turn++;
      var square = $(this).prop("id");
      if(turn%2===1) {
        $(this).text(player1Mark);
        newGame.board[square].mark=newGame.player1.mark;
      } else {
        $(this).text(player2Mark);
        newGame.board[square].mark=newGame.player2.mark;
      }
      newGame.board.testWin();
    } else {
      alert("You can only place a mark on empty squares, please try again.");
    }
  });
