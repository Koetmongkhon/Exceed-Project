let block1 = document.getElementById("BLOCKS_DENSITY_M2");
let block2 = document.getElementById("BLOCKS_DENSITY_MIN");
let checkQuantity1 = 100;
let checkQuantity2 = 50;

// เปลี่ยนสี blocks
function test(block,checkQuantity,checkBlock){
    if ( (checkQuantity<=10 && checkBlock===1 ) || (checkQuantity<=49 && checkBlock===2) ) {
        block.style.backgroundColor = "#51e972";
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