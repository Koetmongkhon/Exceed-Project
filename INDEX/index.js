let form= document.getElementById("location_input");            // from = id(location_input)
form.addEventListener("submit",(event)=>{              // กด submit ทำ event
    event.preventDefault();
    let sel = document.getElementById("BUTTON_LOCATION");       // สิ่งที่อยู่ใน select ของ BUTTON LOCATION
    let loc = sel.options[sel.selectedIndex].text;                       // ระบุ select
    // sel = select , loc = location

    if(loc==="LOCATION A") {
        location.href = "../TODAY/today_a.html";
    }
    else if(loc==="LOCATION B") {
        location.href = "../TODAY/today_b.html";
    }
});