function addData(){
    var name = document.getElementById("name");
    var number = document.getElementById("number");
    var adress = document.getElementById("address");
    var city = document.getElementById("city");
    var state = document.getElementById("state");

    postData(name, number, adress, city, state);
}

function postData(name, number,adress, city, state){
   
    var url="https://dorian-dawn-cross.glitch.me/users";
    var options={
        "method" : "POST",
        "headers":{
            "Content-Type" :"application/json"
        },
        "body":JSON.stringify({
            "name":name.value,
            "number":number.value,
            "adress":adress.value,
            "city":city.value,
            "state":state.value,

        })
    }

    fetch(url, options)
     .then(response=>{
        if(response.ok){
            alert("Data added successfully...");
            displayData();
            name.value ="";
            number.value  ="";
            adress.value ="";
            city.value ="";
            state.value ="";
        }
        
     })
     .catch(err=>{
        alert("Something is fishy....");
        console.error(err);
     }

     )
}

function displayData(){
    var container = document.getElementsByClassName("lowerContainer");
    fetch("https://dorian-dawn-cross.glitch.me/users")
        .then(response=> response.json())
        .then(data=>{
            console.log(data[0].name); 
            var items = "";
            for (var i = 0; i < data.length; i++) {                
                items += "<div class='user-item'>";
                items += "<div class='user-name'><p>" + data[i].name + "</p></div>";
                items += "<div class='user-details'>";
                items += "<p>" + data[i].number + "</p>";
                items += "<p>" + data[i].adress + "</p>";
                items += "<p>" + data[i].city + "</p>";
                items += "<p>" + data[i].state + "</p>";
                items += "</div>";
                items += "</div>";
            }

            document.getElementById("lowerContainer").innerHTML=items;
        });

}

 
