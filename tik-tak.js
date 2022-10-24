$(document).ready(function () {
  let move = 1;
  let play = true;

  $("#board tr td").click(function () {
    if ($(this).text() == "" && play) {
      if (move % 2 == 1) {
        $(this).append("X");
        $(this).css("color", "#fff");
      } else {
        $(this).append("O");
        $(this).css("color", "#fff");
      }
      move++;
      if (checkWinner() != -1 && checkWinner() != "") {
        if (checkWinner() == "X") {
          $("#board").append(
            '<div class="winner"><span>Winner</span>X</div><button onclick="location.reload();" id="reload">Play Again</button>'
          );
        } else {
          $("#board").append(
            '<div class="winner"><span>Winner</span>O</div><button onclick="location.reload();" id="reload">Play Again</button>'
          );
        }
        play = false;
      }
    }
  });

  function checkWinner() {
    let position1 = $("#board tr:nth-child(1) td:nth-child(1)").text();
    let position2 = $("#board tr:nth-child(1) td:nth-child(2)").text();
    let position3 = $("#board tr:nth-child(1) td:nth-child(3)").text();
    let position4 = $("#board tr:nth-child(2) td:nth-child(1)").text();
    let position5 = $("#board tr:nth-child(2) td:nth-child(2)").text();
    let position6 = $("#board tr:nth-child(2) td:nth-child(3)").text();
    let position7 = $("#board tr:nth-child(3) td:nth-child(1)").text();
    let position8 = $("#board tr:nth-child(3) td:nth-child(2)").text();
    let position9 = $("#board tr:nth-child(3) td:nth-child(3)").text();
    // check table rows
    if (position1 == position2 && position2 == position3) {
      return position3;
    } else if (position4 == position5 && position5 == position6) {
      return position6;
    } else if (position7 == position8 && position8 == position9) {
      return position9;
    }
    // check table columns
    else if (position1 == position4 && position4 == position7) {
      return position7;
    } else if (position2 == position5 && position5 == position8) {
      return position8;
    } else if (position3 == position6 && position6 == position9) {
      return position9;
    }
    // check table diagonals
    else if (position1 == position5 && position5 == position9) {
      return position9;
    } else if (position3 == position5 && position5 == position7) {
      return position7;
    }
    // no winner
    return -1;
  }
});
