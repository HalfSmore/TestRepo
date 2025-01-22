  window.onload = function () {
    var playerx = 1;
    var playery = 1;
    const level1 = [
        0, 0, 0, 0, 4, 4, 0, 0, 0, 0,
        0, 0, 0, 0, 3, 3, 0, 0, 0, 0,
        0, 0, 0, 0, 3, 3, 0, 0, 0, 0,
        0, 0, 0, 0, 3, 3, 0, 0, 0, 0,
        0, 0, 0, 0, 3, 3, 0, 0, 0, 0,
        0, 0, 0, 0, 3, 3, 0, 0, 0, 0,
        0, 0, 0, 0, 3, 3, 0, 0, 0, 0,
        0, 0, 0, 0, 3, 3, 0, 0, 0, 0,
        0, 0, 0, 0, 3, 3, 0, 0, 2, 0,
        0, 0, 0, 0, 5, 5, 0, 0, 0, 0,
    ]
    document.getElementById("win").style.display = 'none';
    constructLevel();

    document.addEventListener("keydown", function (event) {
        if (event.key == "s" || event.key == "ArrowDown") {
            playery += 1;
            if (!testCollision()) {
                playery -= 1;
            }
            constructLevel();

        }
        if (event.key == "w" || event.key == "ArrowUp") {
            playery -= 1;
            if (!testCollision()) {
                playery += 1;
            }
            constructLevel();

        }
        if (event.key == "d" || event.key == "ArrowRight") {
            playerx += 1;
            if (!testCollision()) {
                playerx -= 1;
            }
            constructLevel();
        }
        if (event.key == "a" || event.key == "ArrowLeft") {
            playerx -= 1;
            if (!testCollision()) {
                playerx += 1;
            }
            constructLevel();
        }
    });

    function testCollision()
    {
        if(playerx - 1 > 3)
        {
            return false;
        }
        switch(level1[(playery - 1) * 10 + (playerx - 1)])
        {
            case 0:
            return true;

            case 1:
            return false;

            case 2:
            document.getElementById("flag").innerHTML = "_ff0r_";
            document.getElementById("win").style.display = '';
            return true;

            case 3:
            return false;
        }

        return true;
    }

    function getEmoji(num) {
        if (num == 0) {
            return "⬜";
        }
        if (num == 1) {
            return "⬛";
        }
        if (num == 2) {
            return "🚩";
        }
        if(num == 3) {
            return "  ";
        }
        if(num == 4) {
            return "⬆️";
        }
        if(num == 5) {
            return "⬇️";
        }
    }
    function constructLevel() {
        var level = "";
        for (var i = 0; i < level1.length; i++) {
            if ((playery - 1) * 10 + (playerx - 1) == i && playerx > 0 && playerx < 11 && playery > 0 && playery < 11) {
                level += "🔴";
            }
            else {
                level += getEmoji(level1[i]);
            }

            if (i > 0 && i % 10 == 9) {
                level += "<br>";
            }
        }
        document.getElementById("level").innerHTML = level;
    }
}
