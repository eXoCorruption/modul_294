const einkaufsliste = [];

einkaufsliste.push("Milch ");
einkaufsliste.push("Brot ");
einkaufsliste.push("Äpfel ");
einkaufsliste.push("Käse");

console.log("1. Die Gesamte Einkaufsliste: "+einkaufsliste);
console.log("2. Die Anzahl Artikel in der Liste: "+ einkaufsliste.length);
console.log("3. Der erste Artikel ist: " + einkaufsliste[0]);
console.log("4. Der letzte Artikel ist: " + einkaufsliste[3]);

console.log("5. Artikel Entfernt: " + einkaufsliste.shift());
console.log("6. Artikel Entfernt: " + einkaufsliste.pop());