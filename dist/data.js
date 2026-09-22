// Trascrizione del PDF fornito. Le indicazioni non costituiscono una prescrizione clinica.
const POSTURE = [
 ['Cat camel','10 lenti','In quadrupedia, alterna lentamente le due posizioni senza forzare.'],
 ['Estensioni toraciche a terra','10 × 3 sec','A pancia in giù, braccia a Y. Solleva leggermente il petto, pausa 3 secondi.'],
 ['Face pull con elastico','15','Ancora saldamente l’elastico in alto. Tira verso la fronte, gomiti larghi. Pausa 2 secondi.'],
 ['Y · T · W a terra','8 per lettera','A pancia in giù, solleva le braccia alternando Y, T e W. Pollici verso l’alto.'],
 ['Ponte glutei','12','Supino, piedi a terra. Solleva il bacino contraendo i glutei. Pausa 2 secondi.']
];
const DAYS = [
 {name:'Lunedì',short:'Lun',title:'Spinta',color:'#1775ba',image:'006',rest:90,intro:'Petto, spalle e tricipiti. Riscaldamento 5 min + blocco posturale 8 min.',ex:[
 ['Piegamenti','3 × 10–12','Corpo in linea e mani alla larghezza delle spalle. Se necessario, appoggia le mani su un supporto stabile più alto.'],
 ['Pressa militare con pesi','3 × 10–12','Pesi alle spalle. Spingi sopra la testa senza inarcare la schiena. Discesa controllata di 2–3 secondi.'],
 ['Tricipiti con elastico','3 × 12–15','Elastico fissato in alto. Estendi le braccia mantenendo i gomiti vicino al busto.'],
 ['Plank','3 × 40–60 sec','Avambracci a terra, corpo allineato. Respira senza trattenere il fiato.'],
 ['Face pull extra','2 × 15','Due serie aggiuntive di face pull con movimento controllato.']
 ]},
 {name:'Martedì',short:'Mar',title:'Gambe',color:'#25714e',image:'012',rest:90,intro:'Gambe e glutei. Riscaldamento 5 min + blocco posturale 8 min.',ex:[
 ['Squat con pesi','3 × 10–12','Piedi alla larghezza delle spalle. Scendi come per sederti, con un movimento controllato.'],
 ['Affondi','3 × 10 per gamba','Passo in avanti e discesa verticale. Alterna le gambe.'],
 ['Stacco rumeno','3 × 10–12','Ginocchia leggermente piegate, movimento all’anca e schiena neutra. Riduci il carico se perdi il controllo.'],
 ['Ponte glutei pesato','3 × 12','Supino, peso stabile sul bacino. Contrai i glutei in alto per 2 secondi.'],
 ['Polpacci in piedi','3 × 15–20','Sali sulle punte, pausa di 1 secondo, discesa lenta.']
 ]},
 {name:'Mercoledì',short:'Mer',title:'Cardio + core',color:'#a95817',image:'018',rest:60,intro:'Blocco posturale, cardio e lavoro addominale alla fine.',ex:[
 ['Tapis roulant o ellittica','30 min','Ritmo sostenuto ma conversabile. Il PDF propone anche camminata veloce in salita.'],
 ['Crunch','3 × 15','Ginocchia piegate e mani leggere alle tempie. Solleva le spalle, espirando.'],
 ['Plank laterale','3 × 20–30 sec per lato','Avambraccio a terra, fianchi sollevati. Esegui entrambi i lati.'],
 ['Plank + sollevamento gamba','3 × 10','Dal plank, alterna piccoli sollevamenti della gamba mantenendo stabile il bacino.'],
 ['Mobilità finale','2 min','Cat camel lento, senza forzare.']
 ]},
 {name:'Giovedì',short:'Gio',title:'Trazione',color:'#7556ad',image:'024',rest:90,intro:'Schiena e bicipiti. Riscaldamento 5 min + blocco posturale 8 min.',ex:[
 ['Trazioni alla sbarra','3 × max','Presa poco più larga delle spalle. Discesa controllata, niente oscillazioni. Il PDF propone negative se necessario. Fermati quando perdi la tecnica.'],
 ['Rematore con peso','3 × 10–12 per lato','Una mano e un ginocchio su un supporto stabile. Tira il peso verso il fianco, pausa di 1 secondo.'],
 ['Face pull con elastico','4 × 15','Tira verso la fronte mantenendo il movimento controllato.'],
 ['Bicipiti con pesi','3 × 10–12','Gomiti lungo i fianchi. Salita 2 secondi, discesa 3 secondi, senza slancio.'],
 ['Estensione a terra','3 × 12','A pancia in giù, braccia a Y: piccolo sollevamento di petto e braccia. Nel PDF è indicata anche come “pull-over”.']
 ]},
 {name:'Venerdì',short:'Ven',title:'Circuito full body',color:'#b23d59',image:'030',rest:30,intro:'Blocco posturale + 4–5 giri. Recupero 30 sec tra esercizi, 90 sec tra giri. Finitura una sola volta.',ex:[
 ['Ombre veloci','3 min per giro','Boxe a vuoto: guardia alta, ganci e diretti, movimenti controllati.'],
 ['Squat saltati o veloci','10 per giro','Il PDF propone squat normali in alternativa ai salti. Mantieni il controllo.'],
 ['Mountain climbers','20 per gamba / giro','Dal plank, porta alternativamente le ginocchia verso il petto mantenendo il bacino stabile.'],
 ['Plank','40 sec per giro','Corpo allineato, respira normalmente.'],
 ['Finitura: rematore + negative','1 serie finale','Il PDF prevede rematore per lato e negative alla sbarra. Evita di proseguire con tecnica compromessa.']
 ]},
 {name:'Weekend',short:'Sab/Dom',title:'Recupero attivo',color:'#267b89',rest:60,intro:'Riposo, camminata o mobilità. Non è necessario segnare un allenamento di forza.',ex:[
 ['Camminata','30–45 min','Camminata tranquilla, come indicato nel piano.'],
 ['Mobilità / stretching','Facoltativo','Movimenti leggeri senza forzare.']
 ]}
];
const MEALS=[['Colazione','Fiocchi d’avena 40 g + latte o yogurt greco + frutta + 10 g di noci/mandorle. Alternativa del PDF: 2–3 uova + frutta.'],['Spuntino facoltativo','Yogurt greco o un pugno di frutta secca.'],['Pranzo al lavoro','Pasta 80–100 g o riso + legumi/sugo magro + verdure + una fonte proteica.'],['Merenda pre-allenamento','Banana o pane integrale a lunga lievitazione con prosciutto/marmellata, 60–90 minuti prima.'],['Cena','Carne/pesce 200 g o legumi + verdure + patate o pane integrale. Nel PDF: pesce 2–3 sere, legumi 2–3 volte e carne rossa massimo 1–2 volte a settimana.']];
const SHOP=[['Proteine',['Petto di pollo 600–800 g','Carne rossa magra 300 g','Pesce, 3 porzioni','Uova, 10','Legumi per 2–3 pasti','Prosciutto magro','Yogurt greco, 1 kg','Fiocchi di latte o mozzarella light']],['Carboidrati e frutta',['Fiocchi d’avena, 1 confezione','Riso, 1 kg','Pasta integrale, 1 kg','Pane integrale a lunga lievitazione','Patate, 1 kg','Banane, mele, arance o frutta di stagione']],['Extra e verdure',['Olio extravergine d’oliva','Noci o mandorle, 200 g','Semi di chia o lino','Spinaci, insalata, zucchine, broccoli','Pomodori o sugo per la pasta','Caffè / tè']]];
const PHASES=[{title:'Fondamenta',weeks:'1–4',text:'Nel PDF: 3 serie, 10–12 ripetizioni, recupero 60–90 sec. Cardio 30 min. Cura tecnica e regolarità.'},{title:'Costruzione',weeks:'5–8',text:'Nel PDF: 4 serie, +1 ripetizione o piccoli aumenti di carico. Cardio 32–35 min e recupero 60–75 sec.'},{title:'Intensificazione',weeks:'9–12',text:'Nel PDF: 4 serie, discesa 3–4 sec e recupero 45–60 sec. Venerdì 5 giri; cardio 35–40 min. Confronta misure e forza.'}];
