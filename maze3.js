window.onload = function () {
    var playerx = 1;
    var playery = 1;
    var moves = 5;
    const flagpart = "_d4yzz}";
    const level1 = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
    ]
    document.getElementById("win").style.display = 'none';
    constructLevel();

    document.addEventListener("keydown", function (event) {
        if (moves != 0) {
            if (event.key.toLowerCase() === "s" || event.key.toLowerCase() == "arrowdown") {
                playery += 1;
                if (!testCollision()) {
                    playery -= 1;
                }
                constructLevel();

            }
            if (event.key.toLowerCase() === "w" || event.key.toLowerCase() == "arrowup") {
                playery -= 1;
                if (!testCollision()) {
                    playery += 1;
                }
                constructLevel();

            }
            if (event.key.toLowerCase() === "d" || event.key.toLowerCase() == "arrowright") {
                playerx += 1;
                if (!testCollision()) {
                    playerx -= 1;
                }
                constructLevel();
            }
            if (event.key.toLowerCase() === "a" || event.key.toLowerCase() == "arrowleft") {
                playerx -= 1;
                if (!testCollision()) {
                    playerx += 1;
                }
                constructLevel();
            }
            movementKeys = ["w", "a",  "s", "d", "ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight"]
            if(movementKeys.includes(event.key))
            {
                moves -= 1;
                document.getElementById("moves").innerHTML = "moves: " + moves;
            }
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
                document.getElementById("flag").innerHTML = flagpart;
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
        if (num == 3) {
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

