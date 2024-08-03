function getParameter(x){
    params= window.location.href.split("?")[1].split("&"); 
    for(i=0;i<params.length;i++){
        // ["id","example"]
        e = params[i].split("=");
        if(e[0] == x){
            return e[1];
        }
    }
}var id = getParameter("id")
function CarsGame(){
    function getParameter(x){
        params= window.location.href.split("?")[1].split("&"); 
        for(i=0;i<params.length;i++){
            // ["id","example"]
            e = params[i].split("=");
            if(e[0] == x){
                return e[1];
            }
        }
    }
    var id = getParameter("id")
    
    
    var q = document.getElementById("q")
    var h1 = document.getElementById("h1")
    var left = document.getElementById("left")
    var right = document.getElementById("right")
    var p = document.getElementById("p")
    var h1_2 = document.getElementById("h1_2")
    var p2 = document.getElementById("p2")
    var higher = document.getElementById("higher")
    var lower = document.getElementById("lower")
    var body = document.querySelector("body")
    
    function createSuccessAnimation(locationhref, Ans) {
        return function() {
            body.style.animationName = "SuccesAnimation";
            body.style.animationDuration = "3s";
            body.style.color = "#fff"
            p2.innerHTML = Ans+"$";
            console.log("correct");
            body.addEventListener("animationend", () => {
                location.href = `cars.html?id=${locationhref}`;
            });
        };
    }
    
    function createUnsuccessfulAnimation(locationhref, Ans) {
        return function() {
            body.style.animationName = "UnsuccesfulAnimation";
            body.style.animationDuration = "3s";
            body.style.color = "#fff"
            p2.innerHTML = Ans+"$";
            console.log("uncorrect");
            body.addEventListener("animationend", () => {
                location.href = `cars.html?id=${locationhref}`;
            });
        };
    }
    //  l1
    if(id === "08564f8e-F565-4b04-B519-3ff46eba1d4c"){
        console.log("This Is A Id"+id)       
        left.src = "/Images/Car1.jpg"
        right.src = "/Images/Car1.1.jpeg"
        left.style.width = "320px"
        right.style.width = "400px"
        p.innerHTML = "32,157$"
        h1.innerHTML = "2024 Acura Integra"
        h1_2.innerHTML = "2009 Aston Martin DBS"
        
        higher.addEventListener("click",createSuccessAnimation("9feba0cb-46c6-4c11-Af03-9e365b3e606d",62373) )
        lower.addEventListener("click",createUnsuccessfulAnimation("9feba0cb-46c6-4c11-Af03-9e365b3e606d",62373))
    }
    // l2
    if(id === "9feba0cb-46c6-4c11-Af03-9e365b3e606d"){
        console.log("This Is A Id"+id)  
        left.src = "/Images/changan electric.jpeg"     
        h1.innerHTML = "changan electric"
        p.innerHTML = "23,999$"
        right.src = "/Images/Car3.WEBP"
        left.style.width = "300px"
        right.style.width = "300px"
        h1_2.innerHTML = "kettaneh"
        higher.addEventListener("click",createUnsuccessfulAnimation("1b963544-1025-496d-960c-9be7f8ee3e06",14900))
        lower.addEventListener("click",createSuccessAnimation("1b963544-1025-496d-960c-9be7f8ee3e06",14900))
    }
    // l3
    if(id === "1b963544-1025-496d-960c-9be7f8ee3e06"){
        console.log("This Is A Id"+id)  
        left.src = "/Images/tsla.jpeg"     
        h1.innerHTML = "The 2021 Tesla Model S Plaid+ "
        p.innerHTML = " $149,990$"
        right.src = "/Images/ferari.jpeg"
        h1_2.innerHTML = "Ferrari 250 GTO"
        left.style.width = ""
        right.style.width = ""
        higher.addEventListener("click",createSuccessAnimation("Aa9e07c9-4d27-4fce-9290-Abfdc6264016",`51,705,000$`))
        lower.addEventListener("click",createUnsuccessfulAnimation("Aa9e07c9-4d27-4fce-9290-Abfdc6264016",`51,705,000$`))
    }
    // l4
    if(id === "Aa9e07c9-4d27-4fce-9290-Abfdc6264016"){
        console.log("This Is A Id"+id)  
        left.src = "/images/car4.jpeg"     
        h1.innerHTML = "Toyota Corolla"
        p.innerHTML = "20,000$"
        right.src = "/images/car4.1.jpeg"
        h1_2.innerHTML = "Subaru Outback"
        higher.addEventListener("click",createSuccessAnimation("E146a85e-A44d-404b-Bb38-9745e436c3c0",28000))
        lower.addEventListener("click",createUnsuccessfulAnimation("E146a85e-A44d-404b-Bb38-9745e436c3c0",28000))
    }
    // l5
    if(id === "E146a85e-A44d-404b-Bb38-9745e436c3c0"){
        console.log("This Is A Id"+id)  
        left.src = "/images/CAR 5.jpeg"     
        h1.innerHTML = "Algebra"
        p.innerHTML = "268,000"
        right.src = "/images/car 5.1.jpeg"
        h1_2.innerHTML = "hip hop"
        lower.addEventListener("click",createSuccessAnimation("A0a648122-Dcec-4f48-9b8b-704e75a21930",823000))
        higher.addEventListener("click",createUnsuccessfulAnimation("A0a648122-Dcec-4f48-9b8b-704e75a21930",823000))
    }
    // l6
    if(id === "A0a648122-Dcec-4f48-9b8b-704e75a21930"){
        console.log("This Is A Id"+id)  
        left.src = "/images/CAR 6.jpeg"     
        h1.innerHTML = "Jeep Wrangler: SUV"
        p.innerHTML = "30,000$"
        right.src = "/images/car6.1.jpeg"
        h1_2.innerHTML = "BMW 3 Series"
        higher.addEventListener("click",createSuccessAnimation("486c4302-3c83-409b-8148-37e0fae7da09",45000))
        lower.addEventListener("click",createUnsuccessfulAnimation("486c4302-3c83-409b-8148-37e0fae7da09",45000))
    }
    // l7
    if(id === "486c4302-3c83-409b-8148-37e0fae7da09"){
        console.log("This Is A Id"+id)  
        right.src = "/images/car7.jpeg"     
        h1.innerHTML = "Tesla Model 3"
        p.innerHTML = "40,0000"
        left.src = "/images/car7.1.jpeg"
        h1_2.innerHTML = "Porsche 911(sport car)"
        lower.addEventListener("click",createSuccessAnimation("3b27b95d-5265-422d-8178-D4cc3cd60816",100+"k+"))
        higher.addEventListener("click",createUnsuccessfulAnimation("3b27b95d-5265-422d-8178-D4cc3cd60816",100+"k+"))
    }
    // l8 
    if(id === "3b27b95d-5265-422d-8178-D4cc3cd60816"){
        console.log("This Is A Id"+id)  
        left.src = "/images/car8.jpeg"     
        p.innerHTML = "28,000$"
        h1.innerHTML = "toyota rava"
        right.src = "/images/car8.1.jpeg"
        h1_2.innerHTML = "Chevrolet Bol"
        higher.addEventListener("click",createSuccessAnimation(36000))
        lower.addEventListener("click",createUnsuccessfulAnimation(36000))
        setTimeout(()=>{
           location.href = "/menu.html"
        },3500)
    }
    
}
function CompanyGame(){
    var body = document.querySelector("body")
    function getParameter(x){
        params= window.location.href.split("?")[1].split("&"); 
        for(i=0;i<params.length;i++){
            // ["id","example"]
            e = params[i].split("=");
            if(e[0] == x){
                return e[1];
            }
        }
    }var id = getParameter("id")
    function createSuccessAnimation(locationhref, Ans) {
        return function() {
            body.style.animationName = "SuccesAnimation";
            body.style.animationDuration = "3s";
            body.style.color = "#fff"
            p2.innerHTML = Ans+"$";
            console.log("correct");
            body.addEventListener("animationend", () => {
                location.href = `company.html?id=${locationhref}`;
            });
        };
    }
    
    function createUnsuccessfulAnimation(locationhref, Ans) {
        return function() {
            body.style.animationName = "UnsuccesfulAnimation";
            body.style.animationDuration = "3s";
            body.style.color = "#fff"
            p2.innerHTML = Ans+"$";
            console.log("uncorrect");
            body.addEventListener("animationend", () => {
                location.href = `company.html?id=${locationhref}`;
            });
        };
    }
    // l1
    if(id === "9f634992-Ca55-4a5d-8ce3-E553b338fccb"){
        console.log("This Is A Id"+id)  
        left.src = "/images/mer.jpeg"     
        h1_2.innerHTML = "ferari Company Cost"
        p.innerHTML = "100M$"
        right.src = "/images/fer.jpeg"
        h1.innerHTML = "Mercedes Company Cost"
        lower.addEventListener("click",createSuccessAnimation("96d36d7a-Bdb1-483e-90e1-3f87028a4e41","93.06B"))
        higher.addEventListener("click",createUnsuccessfulAnimation(`96d36d7a-Bdb1-483e-90e1-3f87028a4e41`,"93.06B"))
    }
    // l2
    if(id === "96d36d7a-Bdb1-483e-90e1-3f87028a4e41"){
        console.log("This Is A Id"+id)  
        left.src = "/images/google.jpeg"     
        h1.innerHTML = "google"
        p.innerHTML = "218B $"
        right.src = "/images/apple.jpeg"
        h1_2.innerHTML = "apple"
        lower.addEventListener("click",createSuccessAnimation("263d33ae-13b4-4fba-989e-F3852c30cd1b","1T"))
        higher.addEventListener("click",createUnsuccessfulAnimation("263d33ae-13b4-4fba-989e-F3852c30cd1b","1t"))
    }
    // l3
    if(id === "263d33ae-13b4-4fba-989e-F3852c30cd1b"){
        console.log("This Is A Id"+id)  
        left.src = "/images/twitter.jpeg"     
        h1.innerHTML = "twitter"
        p.innerHTML = "44B"
        right.src = "/images/youtube.jpeg"
        h1_2.innerHTML = "youtube"
        lower.addEventListener("click",()=>{body.innerHTML = "The Answer Is Correct"; setTimeout(()=>{location.href = "/menu.html"},3000);})
        higher.addEventListener("click",()=>{body.innerHTML = "The Answer Is unCorrect"; setTimeout(()=>{location.href = "/menu.html"},3000);})

}
}
CompanyGame()
CarsGame()