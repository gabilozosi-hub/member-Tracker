loadProfile();

function loadProfile(){

    let name =
    localStorage.getItem("trackerName");

    let avatar =
    localStorage.getItem("trackerAvatar");

    if(!name){

        changeProfile();

    }else{

        document.getElementById("personName").innerHTML =
        name;

        document.getElementById("avatar").innerHTML =
        avatar;

        document.getElementById("bubbleName").innerHTML =
        name;

        document.getElementById("bubbleAvatar").innerHTML =
        avatar;

    }

}

function changeProfile(){

    let name =
    prompt("Who are we tracking today?");

    if(!name) return;

    let gender =
    prompt("1 = Boy 👦\n2 = Girl 👧");

    let avatar = "👦";

    if(gender === "2"){
        avatar = "👧";
    }

    localStorage.setItem(
        "trackerName",
        name
    );

    localStorage.setItem(
        "trackerAvatar",
        avatar
    );

    location.reload();

}

function startTracking(){

    document.getElementById(
        "setupCard"
    ).style.display = "none";

    document.getElementById(
        "bubble"
    ).style.display = "block";

    navigator.geolocation.watchPosition(

        function(position){

            const lat =
            position.coords.latitude;

            const lng =
            position.coords.longitude;

            document.getElementById("map").src =
            `https://maps.google.com/maps?q=${lat},${lng}&z=18&output=embed`;

        },

        function(){

            alert(
            "Please enable location."
            );

        },

        {
            enableHighAccuracy:true,
            maximumAge:0
        }

    );

}