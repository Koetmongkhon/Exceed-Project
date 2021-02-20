// https://exceed15.cpsk-club.xyz

// ส่ง location ให้ back
function scream(lacation) {
    fetch("https://backend.cpsk-club.xyz/twitter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ location: location }),
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
}

let form = document.getElementById("location_input");            // from = id(location_input)

form.addEventListener("submit",(event)=>{              // กด submit ทำ event
    event.preventDefault();
    let sel = document.getElementById("BUTTON_LOCATION");       // สิ่งที่อยู่ใน select ของ BUTTON LOCATION
    let loc = sel.options[sel.selectedIndex].text;                       // ระบุ select
    // sel = select , loc = location

    if(loc==="LOCATION A") {
        var location_name = "A";
        sessionStorage.setItem("location_name", location_name);
        location.href = "../TODAY/today.html";
    }
    else if(loc==="LOCATION B") {
        var location_name = "B";
        sessionStorage.setItem("location_name", location_name);
        location.href = "../TODAY/today.html";
    }
});

function makeNewNode(text) {
    newNode = document.createElement("p");
    newNode.innerText = text;
    return newNode;
  }

// ดึง real-time data
test_bar = document.getElementById("test-bar")
setInterval (() => {
    fetch("http://158.108.182.17:2255/get_dens_A")
    // fetch("test.json")
        .then((response) => response.json())
        // .then((datas) => appendData(datas))
        .then((data) => {
        //     datas.forEach(data => {
                people = data.people
                // real_time = element.real_time
                dens = data.density
                // test_bar.appendChild(makeNewNode(data.people))
                // console.log(test_bar)
                // call line graph and status
            })
        .catch((error) => console.log("error", error));
},10000);

// function appendData(datas){
//     var div = document.getElementById("test-bar")
//     for(var i = 0; i<datas.length;i++)
//         var div = document.createElement("div")
//         div.innerHTML = `dens = ${datas.density}`
//         test_bar.appendChild(div)
    // }

// ดึงข้อมูลของ bar graph
// function getBarData()
// {
//     fetch("https://exceed15.cpsk-club.xyz", {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       })
//       .then((data) => data.json())
//       .then((datas) => {
//         datas.forEach((each) => {
//             in_avg = each.in_avg
//             out_avg = each.out_avg
//             time_range = each.time_range
//             // call bar graph function
//         });
//     })
// }

// // ดึง ข้อมูลของ piechart
// function getPieData()
// {
//     fetch("https://exceed15.cpsk-club.xyz", {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       })
//       .then((data) => data.json())
//       .then((datas) => {
//         datas.forEach((each) => {
//             amount = each.pass
//             real_time = each.not_pass
//             // call pie chart function
//         });
//     })
// }

// function getLineData()
// {
//     fetch("https://exceed15.cpsk-club.xyz", {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       })
//       .then((data) => data.json())
//       .then((datas) => {
//         datas.forEach((each) => {
//             amount = each.people
//             real_time = each.real_time
//         });
//     })
// }

// function getStatus()
// {
//     fetch("https://exceed15.cpsk-club.xyz", {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       })
//       .then((data) => data.json())
//       .then((datas) => {
//         datas.forEach((each) => {
//             amount = each.pass
//             real_time = each.not_pass
//         });
//     })
// }

// function getDensity()
// {
//     fetch("https://exceed15.cpsk-club.xyz", {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       })
//       .then((data) => data.json())
//       .then((datas) => {
//         datas.forEach((each) => {
//             amount = each.pass
//             real_time = each.not_pass
//         });
//     })
// }