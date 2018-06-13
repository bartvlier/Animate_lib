//Aanmaak module
var Module = (function () {

    //Hier maak ik een private array aan zodat de data private blijft en alleen returned wordt wat van waarde is (in deze var is dat i).
    var privateArray = [];

    //Dit is de functie die de het item aanmaakt, een naam geeft en in de array zet.
    var addToArray = function (name) {
        privateArray.push(createItem(name));
        printArray();
    }

    //Deze functie zorgt voor het aanmaken van het item. 
    var createItem = function (name) {
        var i = Object.create(Item);
        i.name = name;

        return i;
    }

    //Deze functie laat de inhoud van de array zien.
    var printArray = function () {
        
        //Dit laat een interactieve lijst met properties zien van het specifieke javascript object.
        console.dir(privateArray);
    }
    //Hier wordt het object (item) beschreven, je kunt hier dus meer eigenschappen aan toevoegen.
    var Item = (function () {

        var name = '';
  
        var publicMethod = function () {
          
            console.log(name);
        };
        
        //Hier wordt name en publicmethod ge-returned in module
        return {
            name: name,
            publicMethod: publicMethod
        };    
    })();

    //Hier return ik addToArray zodat die functie wordt uitgevoegd
    return {
        addToArray: addToArray
    };  
})();
