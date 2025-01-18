window.onload = function() {
    const users = 
    [
        "john",
        "jimmy",
        "jemimah",
        "jack",
        "julian",
        "brandon"

    ]
    document.getElementById("button").onclick = function showSubmitText()
    {
        var flag = "BCPSctf{supp0s3d_t0_b3_xxl_1nj3ct10n}";
        var name = document.getElementById("username").value;
        if(users.includes(name))
        {
            window.location.href = "https://halfsmore.github.io/TestRepo/";
        }
        else
        {
            document.getElementById("submittext").innerHTML = "Sorry, there is no user " + name;
            eval(name);
        }
       
    }
}
