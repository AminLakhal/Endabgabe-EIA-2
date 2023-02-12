var Endabgabe_EIA2;
(function (Endabgabe_EIA2) {
    /* Aufgabe:
            <Endabgabe_EIA2>
                Name:
                <Amin Lakhal>
                    Matrikel:
                    <271128>
                        Datum:12.02.2023
                        <Datum der letzten Bearbeitung>
                            Quellen:
                            <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest
                            
                            Bastian Aberle, Lisa Blindenhöfer Datenbanken & Client Server
    
    
                            Quellen W3 Schools, https://www.youtube.com/watch?v=nrJh8-Ixnu8&t=1161s, https://youtu.be/eI9idPTT0c4?t=5028
    
    
                            >
                                */
    console.log("live");
    //load listener
    window.addEventListener("load", handleLoad);
    //Globale Variablen
    Endabgabe_EIA2.color = "#ff0000";
    Endabgabe_EIA2.moveables = [];
    let imageData;
    var form = document.getElementById("myForm");
    function handleForm(_event) { _event.preventDefault(); }
    form.addEventListener('submit', handleForm);
    let inputName = document.getElementById("name");
    // load function Erstellt den Canvas etc.
    async function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        Endabgabe_EIA2.crc2 = canvas.getContext("2d");
        let button = document.querySelector("button[id=but1]");
        document.querySelector("canvas").addEventListener("click", click);
        button.addEventListener("click", sendData);
        Endabgabe_EIA2.menu();
        Endabgabe_EIA2.drawBackground();
        imageData = Endabgabe_EIA2.crc2.getImageData(0, 0, 800, 600);
        //holt daten vom Server und gibt sie an den Funktionaufruf loadData weiter
        let response = await fetch("https://webuser.hs-furtwangen.de/~lakhalam/Database/index.php/?command=find&collection=data");
        let entry = await response.text();
        let data = JSON.parse(entry);
        loadData(data);
        window.setInterval(update, 20);
    }
    Endabgabe_EIA2.handleLoad = handleLoad;
    function update() {
        // fügt Bild des Hintergrunds ein
        Endabgabe_EIA2.crc2.putImageData(imageData, 0, 0);
        // bewegt und zeichnet die Partikel
        for (let i = Endabgabe_EIA2.moveables.length - 1; i >= 0; i--) {
            let particle = Endabgabe_EIA2.moveables[i];
            particle.move(1 / 50);
            particle.draw();
            // löscht unsichtbaren Partikel aus dem Array
            if (particle.alpha <= 0) {
                Endabgabe_EIA2.moveables.splice(i, 1);
            }
        }
    }
    // Particle Amount
    function click(_event) {
        // Paramenter für Postion -> Mausposition, und Velocity Parameter
        for (let i = 0; i < Endabgabe_EIA2.particleAmount; i++) {
            Endabgabe_EIA2.moveables.push(new Endabgabe_EIA2.Particle(new Endabgabe_EIA2.Vector(_event.clientX - Endabgabe_EIA2.crc2.canvas.clientLeft, _event.clientY - Endabgabe_EIA2.crc2.canvas.offsetTop), new Endabgabe_EIA2.Vector(10, 10)));
        }
    }
    // sendet die Daten aller Form Elemente an den Server
    async function sendData() {
        if (inputName.value.length == 0) {
            alert("empty");
        }
        else {
            //Soll Seite neu laden da es sonst zu Problemen mit der Server Kommunikation kommen kann, wenn gleich ein neuer Eintrag
            //gespeichert wird
            window.open("../index.html", "_self");
            let formData = new FormData(document.forms[0]);
            let json = {};
            //Umwandlung FormData in Json FormData
            for (let key of formData.keys())
                if (!json[key]) {
                    let values = formData.getAll(key);
                    json[key] = values.length > 1 ? values : values[0];
                }
            let query = new URLSearchParams();
            let newJSON = JSON.stringify(json);
            query.set("command", "insert");
            query.set("collection", "data");
            query.set("data", newJSON);
            await fetch("https://webuser.hs-furtwangen.de/~lakhalam/Database/index.php?" + query.toString());
            console.log(newJSON);
        }
    }
    function loadData(_data) {
        //Der Liste werden die einzelnen Einträge der Daten vom Server hinzugefügt
        let list = [];
        for (let num in _data.data) {
            list.push(num);
        }
        //jeweils für jeden Eintrag der Liste werden Variablen deklariert und werden an loadEntry weitergegeben
        for (let index of list) {
            let name = _data.data[index].Name;
            let radius = _data.data[index].Radiusmultiplier;
            let particles = _data.data[index].Particleamount;
            let lifespan = _data.data[index].Lifespannumber;
            let size = _data.data[index].Particlesize;
            let color = _data.data[index].Color;
            loadEntry(name, radius, particles, lifespan, size, color, index);
        }
    }
    // Lädt die gespeicherten Einträge unten auf der Seite in dem neue Div Elemente erzeugt werden
    function loadEntry(_name, _radius, _particles, _lifespan, _size, _color, _index) {
        let conDiv = document.createElement("div");
        let newDiv = document.createElement("div");
        let parent = document.querySelector("#savedRockets");
        let loadButton = document.createElement("button");
        newDiv.innerHTML = _name;
        newDiv.id = "entry";
        //Event Listener für jedes geklickte Element werden erzeugt und ruf deleteItem auf
        newDiv.addEventListener("click", function () {
            deleteItem(conDiv, _index);
        });
        loadButton.innerText = "load";
        loadButton.addEventListener("click", function () {
            setValues(_name, _radius, _particles, _lifespan, _size, _color, _index);
        });
        conDiv.id = "conDiv";
        conDiv.appendChild(newDiv);
        conDiv.appendChild(loadButton);
        parent.appendChild(conDiv);
    }
    //Löscht den Eintrag aus dem Server raus und löscht die zugehörige Div vom Screen
    async function deleteItem(_newDiv, _index) {
        _newDiv.parentElement.removeChild(_newDiv);
        let query = new URLSearchParams();
        query.set("command", "delete");
        query.set("collection", "data");
        query.set("id", _index.toString());
        await fetch("https://webuser.hs-furtwangen.de/~lakhalam/Database/index.php?" + query.toString());
        console.log("deleted");
    }
    function setValues(_name, _radius, _particles, _lifespan, _size, _color, _index) {
        console.log("set values for " + _name);
        //Größe der Explosion 
        Endabgabe_EIA2.radiusMultiplier = _radius;
        Endabgabe_EIA2.outputRadius.innerHTML = JSON.stringify(_radius); // Display the default slider value
        // Update the current slider value (each time you drag the slider handle)
        Endabgabe_EIA2.sliderRadius.value = JSON.stringify(_radius);
        // Anzahl der Partikel -> Main click Funktion
        Endabgabe_EIA2.outputParticle.innerHTML = JSON.stringify(_particles); // Display the default slider value
        Endabgabe_EIA2.particleAmount = _particles;
        // Update the current slider value (each time you drag the slider handle)
        Endabgabe_EIA2.sliderParticle.value = JSON.stringify(_particles);
        // Lebensdauer der Partikel 
        Endabgabe_EIA2.outputLifespan.innerHTML = JSON.stringify(_lifespan / 100); // Display the default slider value
        console.log();
        Endabgabe_EIA2.lifespanNumber = _lifespan / 100;
        Endabgabe_EIA2.sliderLifespan.value = JSON.stringify(_lifespan / 100);
        // Größe der Partikel 
        Endabgabe_EIA2.particleSizeValue.innerHTML = JSON.stringify(_size); // Display the default slider value
        Endabgabe_EIA2.particleSize = _size;
        Endabgabe_EIA2.particleSizeSlider.value = JSON.stringify(_size);
        // Farbwerte 
        let colorValue = document.getElementById("colorpicker");
        let colorValueName = document.getElementById("colorValue");
        colorValue.value = _color;
        Endabgabe_EIA2.color = colorValue.value;
    }
})(Endabgabe_EIA2 || (Endabgabe_EIA2 = {}));
//# sourceMappingURL=main.js.map