var startName = ["stark", "blue", "micro", "moist", "furry", "wacky", "frilly", "boxed", "dual", "cranky"];
var endName = ["mustardseeds.com", "walkmans.com", "homesteads.com", "wonkabars.com", "iphones.com", "popbottles.com", "hummuswraps.com", "beefslabs.com", "pillowfights.com", "horseshows.com"];

function getName() {
var randomName = startName[Math.floor(Math.random() * startName.length)] + endName[Math.floor(Math.random() * endName.length)];
return randomName;
}

function nameQty(){
    var userQty = document.querySelector('.qty').value;
    document.querySelector('.nameList').innerHTML = '';
    if (userQty > 10) {
        document.querySelector('.nameList').innerHTML = 'ONLY 10 NAMES CAN BE GENERATED';
    }
    else{
        for (var i = 0; i < userQty; i++) {
            document.querySelector('.nameList').innerHTML += getName() + '<br>';
        }
    }

}