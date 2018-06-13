var Module = (function () {

    var privateArray = [];

    var addToArray = function (name) {
        privateArray.push(createItem(name));
        printArray();
    }

    var createItem = function (name) {
        var i = Object.create(Item);
        i.name = name;

        return i;
    }

    var printArray = function () {
        for (var i = 0; i < privateArray.length; i++) {
            console.log(privateArray[i].name);
        }

        console.dir(privateArray);
    }

    var Item = (function () {

        var name = '';
  
        var publicMethod = function () {
          
            console.log(name);
        };
        
        return {
            name: name,
            publicMethod: publicMethod
        };    
    })();

    return {
        addToArray: addToArray
    };  
})();
