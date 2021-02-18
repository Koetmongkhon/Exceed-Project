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

let form= document.getElementById("location_input");            // from = id(location_input)

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


// ดึง real-time data
setInterval (() => {
    fetch("https://exceed15.cpsk-club.xyz", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((data = data.json())
        .then ((datas) => {
            datas.forEach(element => {
                amount = element.people
                real_time = element.real_time
                dens = element.density
                unit = element.unit

                // call line graph and status
            });
        }));
}, 5000);

// ดึงข้อมูลของ bar graph
function getBarData()
{
    fetch("https://exceed15.cpsk-club.xyz", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      .then((data) => data.json())
      .then((datas) => {
        datas.forEach((each) => {
            in_avg = each.in_avg
            out_avg = each.out_avg
            time_range = each.time_range
            // call bar graph function
        });
    })
}

// ดึง ข้อมูลของ piechart
function getPieData()
{
    fetch("https://exceed15.cpsk-club.xyz", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      .then((data) => data.json())
      .then((datas) => {
        datas.forEach((each) => {
            amount = each.pass
            real_time = each.not_pass
            // call pie chart function
        });
    })
}

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