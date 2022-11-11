
function change(){
    const root = document.documentElement;
    const cvetnie_ciferki = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    
    let cvetnoi_code = "";
    for( let i=0;i<6;i++){
        const random = Math.floor(Math.random() * cvetnie_ciferki.length);
        cvetnoi_code += cvetnie_ciferki[random]
    }
    document.getElementById("reshetka").innerHTML = cvetnoi_code;
    root.style.setProperty("--bg-color", `#${cvetnoi_code}` )
}

// console.log(math.random() * cvetnie_ciferki.length)