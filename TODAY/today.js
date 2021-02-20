let block1 = document.getElementById("BLOCKS_DENSITY_M2");
let block2 = document.getElementById("BLOCKS_DENSITY_MIN");
let checkQuantity1 = 100;
let checkQuantity2 = 50;

// เปลี่ยนสี blocks
function test(block,checkQuantity,checkBlock){
    if ( (checkQuantity<=10 && checkBlock===1 ) || (checkQuantity<=49 && checkBlock===2) ) {
        block.style.backgroundColor = "#4dd77f";
    }
    else if ((checkQuantity<=36 && checkBlock===1 ) || (checkQuantity<=100 && checkBlock===2)) {
        block.style.backgroundColor = "#f68b39";
    }
    else {
        block.style.backgroundColor = "#f62f2f";
    }
}

test(block1,checkQuantity1,1);
test(block2,checkQuantity2,2);

// ลิ้ง location
let ln =document.getElementById("location_name");
var location_name = sessionStorage.getItem("location_name");
ln.innerText = location_name;


window.onload = function () {
    CanvasJS.addColorSet("brown",
    [//colorSet Array
    "#795321",
    ]);


var dps = []; // dataPoints
var chart = new CanvasJS.Chart("chartContainer", {
    // width: 700, height: 350,
    colorSet: "brown",
    backgroundColor: "#fdfaf2",
    title :{
        text: "Real-Time Chart",
        fontFamily: "Nanum Gothic Coding"
    },
    data: [{
        type: "line",
        dataPoints: dps
    }]
});
fetch("https://exceed15.cpsk-club.xyz", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      .then((data) => data.json())
      .then((datas) => {
        datas.forEach((each) => {
            dps.push({x:each.people,y:each.real_time})
        });
    })


var updateInterval = 1000;
var dataLength = 20; // number of dataPoints visible at any point

var updateChart = function (count) {

    count = count || 1;
    // Data to read from in here.
    if (dps.length > dataLength) {
        dps.shift();
    }

    chart.render();
};

updateChart(dataLength);
setInterval(function(){updateChart()}, updateInterval);

}