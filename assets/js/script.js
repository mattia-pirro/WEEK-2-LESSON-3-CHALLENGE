/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- L'array starWarsCharacters è già preparato qui sotto: NON modificarlo a inizio file.
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

const starWarsCharacters = [
	{
		name: 'Luke Skywalker',
		height: '172',
		mass: '77',
		hair_color: 'blond',
		skin_color: 'fair',
		eye_color: 'blue',
		birth_year: '19BBY',
		gender: 'male',
	},
	{
		name: 'C-3PO',
		height: '167',
		mass: '750',
		hair_color: 'n/a',
		skin_color: 'gold',
		eye_color: 'yellow',
		birth_year: '112BBY',
		gender: 'n/a',
	},
	{
		name: 'R2-D2',
		height: '96',
		mass: '32',
		hair_color: 'n/a',
		skin_color: 'white, blue',
		eye_color: 'red',
		birth_year: '33BBY',
		gender: 'n/a',
	},
	{
		name: 'Darth Vader',
		height: '202',
		mass: '136',
		hair_color: 'none',
		skin_color: 'white',
		eye_color: 'yellow',
		birth_year: '41.9BBY',
		gender: 'male',
	},
	{
		name: 'Leia Organa',
		height: '150',
		mass: '49',
		hair_color: 'brown',
		skin_color: 'light',
		eye_color: 'brown',
		birth_year: '19BBY',
		gender: 'female',
	},
	{
		name: 'Owen Lars',
		height: '178',
		mass: '120',
		hair_color: 'brown, grey',
		skin_color: 'light',
		eye_color: 'blue',
		birth_year: '52BBY',
		gender: 'male',
	},
	{
		name: 'Beru Lars',
		height: '165',
		mass: '75',
		hair_color: 'brown',
		skin_color: 'light',
		eye_color: 'blue',
		birth_year: '47BBY',
		gender: 'female',
	},
	{
		name: 'R5-D4',
		height: '97',
		mass: '32',
		hair_color: 'n/a',
		skin_color: 'white, red',
		eye_color: 'red',
		birth_year: 'unknown',
		gender: 'n/a',
	},
	{
		name: 'Biggs Darklighter',
		height: '183',
		mass: '84',
		hair_color: 'black',
		skin_color: 'light',
		eye_color: 'brown',
		birth_year: '24BBY',
		gender: 'male',
	},
	{
		name: 'Obi-Wan Kenobi',
		height: '182',
		mass: '77',
		hair_color: 'auburn, white',
		skin_color: 'fair',
		eye_color: 'blue-gray',
		birth_year: '57BBY',
		gender: 'male',
	},
];

/* ESERCIZIO 1 — Estrai i nomi
   Array vuoto "nomi". Con un for, fai push di ogni starWarsCharacters[i].name.
   Stampa "nomi".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const nomi = [];
for (let i = 0; i < starWarsCharacters.length; i++) {
	nomi.push(starWarsCharacters[i].name);
}
console.table(nomi);

/* ESERCIZIO 2 — Solo i femminili
   Array vuoto "personaggiFemminili". Con un for + if (gender === "female"),
   crea un nuovo oggetto { name, hair_color, eye_color } e fai push.
   Stampa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const personaggiFemminili = [];
for (let i = 0; i < starWarsCharacters.length; i++) {
	if (starWarsCharacters[i].gender === 'female') {
		const obj = {
			name: starWarsCharacters[i].name,
			hair_color: starWarsCharacters[i].hair_color,
			eye_color: starWarsCharacters[i].eye_color,
		};
		personaggiFemminili.push(obj);
	}
}
console.table(personaggiFemminili);

/* ESERCIZIO 3 — Oggetto raggruppamento
   Crea perColoreOcchi con chiavi: blue, yellow, brown, red, blue-gray (con trattino).
   Ognuna con un array vuoto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const perColoreOcchi = {
	blue: [],
	yellow: [],
	brown: [],
	red: [],
	'blue-gray': [],
}
console.table(perColoreOcchi);

/* ESERCIZIO 4 — Raggruppa per colore degli occhi
   For su starWarsCharacters + switch (character.eye_color).
   In ogni case fai push del personaggio nell'array giusto. Ricorda break.
   Stampa perColoreOcchi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let i = 0; i < starWarsCharacters.length; i++) {
	switch (starWarsCharacters[i].eye_color) {
		case 'blue':
			perColoreOcchi.blue.push(starWarsCharacters[i].name);
			break;
		case 'yellow':
			perColoreOcchi.yellow.push(starWarsCharacters[i].name);
			break;
		case 'brown':
			perColoreOcchi.brown.push(starWarsCharacters[i].name);
			break;
		case 'red':
			perColoreOcchi.red.push(starWarsCharacters[i].name);
			break;
		case 'blue-gray':
			perColoreOcchi['blue-gray'].push(starWarsCharacters[i].name);
			break;
	}
}
console.table(perColoreOcchi);

/* ESERCIZIO 5 — Massa totale dell'equipaggio (while)
   i = 0, massaTotale = 0.
   While: somma Number(starWarsCharacters[i].mass).
   Stampa la massa totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let massaTotale = 0;
let i = 0;
while (i < starWarsCharacters.length) {
	massaTotale += Number(starWarsCharacters[i].mass);
	i++;
}
console.log('Massa Totale: ' + massaTotale + ' kg');

/* ESERCIZIO 6 — Classifica il carico
   Su massaTotale, switch (true) o if/else if:
   < 500            → "Carico leggero"
   500 – 700        → "Carico medio"
   700 – 900        → "Attenzione: oltre 700"
   900 – 1000       → "Carico critico"
   > 1000           → "PERICOLO: sovraccarico"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
switch (true) {
	case massaTotale < 500:
		console.log('Carico leggero');
		break;
	case massaTotale >= 500 && massaTotale <= 700:
		console.log('Carico medio');
		break;
	case massaTotale > 700 && massaTotale <= 900:
		console.log('Attenzione: oltre 700');
		break;
	case massaTotale > 900 && massaTotale <= 1000:
		console.log('Carico critico');
		break;
	case massaTotale > 1000:
		console.log('PERICOLO: sovraccarico');
		break;
}

/* ESERCIZIO 7 — Robotizza i n/a
   For: per ogni personaggio con gender === "n/a", cambialo in "robot".
   Stampa l'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let i = 0; i < starWarsCharacters.length; i++) {
	if (starWarsCharacters[i].gender === 'n/a') {
		starWarsCharacters[i].gender = 'robot';
	}
}
console.table(starWarsCharacters);

/* ESERCIZIO 8 — Più alto e più basso
   For su starWarsCharacters. Trova il personaggio con altezza maggiore e quello con altezza minore.
   L'altezza è una stringa: convertila con Number().
   Stampa: "Più alto: Darth Vader (202 cm)" e "Più basso: ...".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let max = 0;
let maxNome;
let min = starWarsCharacters[0].height;
let minNome;
for (let i = 0; i < starWarsCharacters.length; i++) {
	if (Number(starWarsCharacters[i].height) > max) {
		max = Number(starWarsCharacters[i].height);
		maxNome = starWarsCharacters[i].name;
	}
	if (Number(starWarsCharacters[i].height) <= min) {
		min = Number(starWarsCharacters[i].height);
		minNome = starWarsCharacters[i].name;
	}
}
console.log(`Più alto: ${maxNome} (${max} cm)`);
console.log(`Più alto: ${minNome} (${min} cm)`);


/* ESERCIZIO 9 — Rimuovi i femminili dai nomi (cicli annidati)
   Sull'array "nomi" dell'esercizio 1: for esterno su nomi, for interno su personaggiFemminili.
   Quando combaciano per nome, rimuovi quel nome da nomi con splice.
   Stampa lunghezza prima e dopo.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('nomi prima: ' + nomi.length);
for (let i = 0; i < nomi.length; i++) {
	for (let i2 = 0; i2 < personaggiFemminili.length; i2++) {
		if (nomi[i] === personaggiFemminili[i2].name) {
			nomi.splice(i, 1);
		}
	}
}
console.log('nomi dopo: ' + nomi.length);
console.table(nomi);

/* ESERCIZIO 10 — Personaggio casuale
   indice = Math.floor(Math.random() * starWarsCharacters.length)
   personaggio = starWarsCharacters[indice]
   if/else su gender per stampare "Lei è alta X cm" o "Lui è alto X cm".
   if su hair_color !== "n/a" && hair_color !== "none": stampa "Capelli: X" o "Senza capelli".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const indice = Math.floor(Math.random() * starWarsCharacters.length);
const peronaggio = starWarsCharacters[indice];
console.log(`Personaggio scelto: ${starWarsCharacters[indice].name}`);
if (starWarsCharacters[indice].gender === 'male') {
	console.log(`Lui è alto ${starWarsCharacters[indice].height} cm`);
} else if (starWarsCharacters[indice].gender === 'female') {
	console.log(`Lei è alta ${starWarsCharacters[indice].height} cm`);
} else {
	console.log(`Il robot è alto ${starWarsCharacters[indice].height} cm`);
}
if (starWarsCharacters[indice].hair_color !== "n/a" && starWarsCharacters[indice].hair_color !== "none") {
	console.log('Capelli: ' + starWarsCharacters[indice].hair_color);
} else {
	console.log('Senza capelli');
}

/* --EXTRA-- ESERCIZIO 11 — Conta per colore di occhi
   For...in sulle chiavi di perColoreOcchi.
   Stampa: "blue: 4 personaggi", "yellow: 2 personaggi", ecc.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let blu = 0;
let giallo = 0;
let marrone = 0;
let rosso = 0;
let bluGrigio = 0;
for (const chiave in perColoreOcchi.blue) {
	blu++;
}
for (const chiave in perColoreOcchi.yellow) {
	giallo++;
}
for (const chiave in perColoreOcchi.brown) {
	marrone++;
}
for (const chiave in perColoreOcchi.red) {
	rosso++;
}
for (const chiave in perColoreOcchi['blue-gray']) {
	bluGrigio++;
}
console.log(`blue: ${blu} personaggi`);
console.log(`yellow: ${giallo} personaggi`);
console.log(`brown: ${marrone} personaggi`);
console.log(`red: ${rosso} personaggi`);
console.log(`blue-gray: ${bluGrigio} personaggi`);