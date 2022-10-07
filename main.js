"use strict";
(function () {
    var msg = 'Hola mundo';
    console.log(msg);
    var hero = {
        name: 'Iroman',
        age: 45
    };
    hero.age = 50;
    console.log(hero.age + 1);
    var a = 10;
    var b = 10;
    var c;
    c = 3;
    c = 'string';
    c = [];
    c = {};
    c = true;
    function sayHelo(msg) {
        console.log(msg);
    }
})();
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    var PowerLevel;
    (function (PowerLevel) {
        PowerLevel[PowerLevel["fuerzaFlash"] = 5] = "fuerzaFlash";
        PowerLevel[PowerLevel["fuerzaSuperman"] = 100] = "fuerzaSuperman";
        PowerLevel[PowerLevel["fuerzaBatman"] = 1] = "fuerzaBatman";
        PowerLevel[PowerLevel["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
    })(PowerLevel || (PowerLevel = {}));
    var fuerzaFlash = 5;
    var fuerzaSuperman = 100;
    var fuerzaBatman = 1;
    var fuerzaAcuaman = 0;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
function sumar(a, b) {
    return a + b;
}
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
var llamarBatman = function (llamar) {
    if (llamar === void 0) { llamar = true; }
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
var unirheroes = function () {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(", ");
};
var noHaceNada = function (numero, texto, booleano, arreglo) { };
var noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
var batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
var bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        console.log("Disparando");
    }
};
var villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
var charles = {
    poder: "psiquico",
    estatura: 1.78
};
var apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
var mystique;
mystique = charles;
mystique = apocalipsis;
(function () {
    var hero = 'Flash';
    function returName() {
        return hero;
    }
    var activateBatisignal = function () {
        return 'Batiseñal activada!';
    };
    console.log(typeof activateBatisignal);
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    };
    var name = fullName('Tony', 'Stark');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return " ".concat(firstName, " ").concat(lastName || 'no lastname', " ");
    };
    var name = fullName('Tony');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(firstName, " ").concat(lastName || '----').toUpperCase();
        }
        else {
            return "".concat(firstName, " ").concat(lastName || '----');
        }
    };
    var name = fullName('Tony', 'Stark', true);
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return " ".concat(firstName, " ").concat(restArgs.join(' '));
    };
    var superman = fullName('Clark', 'Joseph', 'kent');
    console.log({ superman: superman });
})();
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return "El mundo esta salvado"; };
    var myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
var index = (function () {
    var isSuperman = true;
    var isBatman = false;
    console.log({ isBatman: isBatman });
    isSuperman = true && false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman: isSuperman });
})();
(function () {
    var avangers = 10;
    console.log(avangers);
    var villians = 20;
    if (avangers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avangers = 123;
    avangers = Number('123');
    console.log({ avangers: avangers });
})();
(function () {
    var _a;
    var batman = 'Batman';
    var linternaVerde = "linterna's Verde";
    var volcanNegro = "linterna's Verde";
    var abc = 123;
    console.log("i'm ".concat(batman, ", ").concat(abc.toString()));
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No esta presente');
})();
(function () {
    var avenger = 123;
    var exists;
    var power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    avenger = 150.234;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    numbers.push(11);
    console.log({ numbers: numbers });
    var villians = ['Omega Rojo', 'Dormamu', 'Duende Verde'];
    villians.forEach(function (v) { return console.log(v.toUpperCase()); });
})();
(function () {
    var hero = ['Dr Strange', 100, true];
    hero[0] = 'Iroman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.min;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(function () {
    function callBatman() {
    }
    var callSuperman = function () { };
    var a = callBatman();
    console.log(a);
})();
(function () {
    var abc = function (message) {
        throw new Error(message);
    };
    abc('Auxilio');
})();
(function () {
    var nada = undefined;
    console.log(nada);
})();
//# sourceMappingURL=main.js.map