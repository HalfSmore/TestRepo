window.onload = function () {
    var playerx = 1;
    var playery = 1;
    const flagpart = "flag{m4z3ss_";
    const level1 = [
        0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0, 2,
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

    function testCollision() {
        switch (level1[(playery - 1) * 10 + (playerx - 1)]) {
            case 0:
                return true;

            case 1:
                return false;

            case 2:
                document.getElementById("win").style.display = '';
                document.getElementById("flag").innerHTML = "BCPSctf{m4z3ss";
                return true;
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
            return "  ";
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

