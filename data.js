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
 ['Tapis roulant','30 min','Camminata sostenuta o in salita, a un ritmo che ti permette ancora di parlare. L’ellittica resta un’alternativa.'],
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

// Guide operative: indicazioni semplici da leggere prima della prima serie.
const GUIDES={
'Cat camel':[['Parti a quattro zampe: mani sotto le spalle e ginocchia sotto le anche.','Spingi la schiena lentamente verso l’alto e porta il mento verso il petto.','Inverti il movimento con delicatezza, aprendo il petto senza forzare il collo.'],'Espira mentre arrotondi; inspira mentre apri.','Muovere solo il collo o forzare il tratto lombare.','Riduci l’ampiezza del movimento.'],
'Estensioni toraciche a terra':[['Sdraiati a pancia in giù con braccia a Y e fronte rivolta al pavimento.','Contrai leggermente addome e glutei. Solleva petto e braccia di pochi centimetri.','Mantieni 3 secondi, poi scendi lentamente.'],'Espira salendo; inspira tornando a terra.','Alzare la testa o inarcare molto la zona lombare.','Solleva solo le braccia o riduci l’altezza.'],
'Face pull con elastico':[['Fissa bene l’elastico all’altezza del viso e arretra finché è teso.','Tira le mani verso i lati del viso, portando i gomiti indietro e larghi.','Fermati un istante con petto aperto, poi ritorna controllando.'],'Espira tirando; inspira nel ritorno.','Sollevare le spalle, inarcare la schiena o lasciar scattare l’elastico.','Usa meno tensione o avvicinati al punto di ancoraggio.'],
'Y · T · W a terra':[['A pancia in giù, fronte bassa e addome leggermente attivo.','Forma prima una Y, poi una T e infine una W piegando i gomiti.','Solleva poco le braccia, con pollici verso l’alto, e torna lentamente.'],'Espira nel piccolo sollevamento.','Cercare altezza inarcando la schiena o stringere le spalle verso le orecchie.','Esegui una lettera alla volta con meno ampiezza.'],
'Ponte glutei':[['Sdraiati supino, piedi a terra larghi quanto il bacino e vicini ai glutei.','Spingi attraverso i piedi e solleva il bacino contraendo i glutei.','Fermati quando spalle, anche e ginocchia sono allineate; scendi lentamente.'],'Espira salendo; inspira scendendo.','Spingere con la zona lombare o lasciare le ginocchia aprirsi/chiudersi.','Riduci l’altezza e avvicina leggermente i piedi.'],
'Piegamenti':[['Mani poco più larghe delle spalle, corpo in linea da testa a talloni.','Piega i gomiti e porta il petto verso il supporto mantenendo addome e glutei attivi.','Spingi il pavimento e torna senza perdere l’allineamento.'],'Inspira scendendo; espira spingendo.','Bacino che cade, gomiti completamente aperti o testa in avanti.','Appoggia le mani su un tavolo o mobile stabile.'],
'Pressa militare con pesi':[['In piedi stabile, pesi all’altezza delle spalle e addome attivo.','Spingi i pesi sopra la testa senza usare le gambe.','Termina con braccia estese ma senza inarcare la schiena; scendi lentamente.'],'Espira salendo; inspira scendendo.','Inarcare la schiena, spingere la testa in avanti o sbilanciarsi.','Usa pesi più leggeri o esegui seduto con schienale stabile.'],
'Tricipiti con elastico':[['Fissa l’elastico in alto e tieni i gomiti aderenti ai fianchi.','Estendi gli avambracci verso il basso senza muovere le spalle.','Arriva quasi a braccia tese, poi risali lentamente.'],'Espira estendendo; inspira risalendo.','Muovere i gomiti avanti e indietro o piegare il busto.','Riduci la tensione dell’elastico.'],
'Plank':[['Avambracci a terra, gomiti sotto le spalle e gambe distese.','Contrai addome e glutei e crea una linea unica da testa a talloni.','Mantieni respirando; interrompi quando perdi la posizione.'],'Respira corto e regolare, senza trattenere.','Bacino troppo alto o basso, spalle chiuse, apnea.','Appoggia le ginocchia mantenendo il busto allineato.'],
'Face pull extra':[['Usa la stessa impostazione del face pull con elastico.','Tira verso i lati del viso con gomiti indietro e larghi.','Fermati un istante, poi ritorna lentamente.'],'Espira tirando; inspira nel ritorno.','Spalle verso le orecchie o ritorno incontrollato.','Riduci la tensione.'],
'Squat con pesi':[['Piedi circa alla larghezza delle spalle, punte leggermente aperte e peso vicino al corpo.','Porta anche e ginocchia in flessione mantenendo tutto il piede appoggiato.','Scendi fin dove controlli schiena e ginocchia, poi spingi il pavimento per risalire.'],'Inspira prima di scendere; espira durante la risalita.','Talloni che si alzano, ginocchia che crollano dentro o schiena che si incurva.','Squat a corpo libero verso una sedia stabile.'],
'Affondi':[['In piedi, fai un passo abbastanza lungo in avanti.','Scendi verticalmente piegando entrambe le ginocchia e mantenendo il busto alto.','Spingi con il piede davanti per tornare; alterna le gambe.'],'Inspira scendendo; espira risalendo.','Passo troppo corto, ginocchio che cade verso l’interno o perdita di equilibrio.','Tieni una mano a un supporto e riduci la profondità.'],
'Stacco rumeno':[['Pesi davanti alle cosce, piedi alla larghezza del bacino e ginocchia appena piegate.','Porta il bacino indietro facendo scorrere i pesi vicino alle gambe.','Fermati quando senti tensione dietro le cosce mantenendo la schiena neutra, poi spingi le anche avanti.'],'Inspira prima della discesa; espira tornando in piedi.','Piegare la schiena, trasformarlo in uno squat o allontanare i pesi dalle gambe.','Impara il movimento senza peso davanti a una parete.'],
'Ponte glutei pesato':[['Posiziona il peso stabile e protetto sul bacino, tenendolo con le mani.','Spingi attraverso i piedi e solleva il bacino contraendo i glutei.','Pausa 2 secondi, poi scendi lentamente.'],'Espira salendo; inspira scendendo.','Peso sull’addome, eccessivo arco lombare o movimento veloce.','Togli il peso e usa il ponte glutei normale.'],
'Polpacci in piedi':[['Piedi paralleli e una mano a un supporto stabile.','Sali lentamente sulle punte mantenendo le caviglie dritte.','Pausa in alto e scendi fino ad appoggiare i talloni.'],'Espira salendo; inspira scendendo.','Rimbalzare o lasciare le caviglie cadere verso l’esterno.','Esegui senza peso e con entrambe le mani in appoggio.'],
'Tapis roulant':[['Inizia piano per 3–5 minuti.','Aumenta fino a un ritmo sostenuto ma che permette di parlare a frasi brevi; puoi usare una leggera inclinazione.','Mantieni postura alta e termina rallentando gradualmente.'],'Respira in modo regolare.','Aggrapparsi alle maniglie, guardare i piedi o partire troppo forte.','Riduci velocità, inclinazione o durata; in alternativa usa l’ellittica.'],
'Crunch':[['Supino, ginocchia piegate e piedi a terra; mani leggere alle tempie.','Avvicina le costole al bacino sollevando solo testa e spalle.','Pausa breve e torna lentamente senza tirare il collo.'],'Espira salendo; inspira scendendo.','Tirare la testa con le mani o sollevare tutta la schiena.','Braccia lungo i fianchi e movimento più corto.'],
'Plank laterale':[['Sul fianco, gomito sotto la spalla e gambe allineate.','Solleva il bacino creando una linea tra testa, anche e piedi.','Mantieni senza ruotare il petto verso terra.'],'Respira normalmente.','Spalla schiacciata, bacino basso o corpo ruotato.','Appoggia il ginocchio inferiore a terra.'],
'Plank + sollevamento gamba':[['Assumi un plank stabile prima di muovere le gambe.','Solleva una gamba di pochi centimetri senza ruotare il bacino.','Appoggiala con controllo e alterna.'],'Espira sollevando; inspira appoggiando.','Sollevare troppo la gamba o oscillare con il bacino.','Plank normale oppure ginocchia appoggiate.'],
'Mobilità finale':[['Esegui il cat camel lentamente.','Muoviti solo nell’ampiezza confortevole.','Termina con qualche respiro tranquillo.'],'Lenta e regolare.','Forzare posizioni dolorose.','Riduci l’ampiezza.'],
'Trazioni alla sbarra':[['Afferra la sbarra con presa sicura e parti con braccia distese senza slancio.','Porta il petto verso la sbarra guidando il movimento con i gomiti.','Scendi lentamente fino a controllo completo.'],'Espira salendo; inspira scendendo.','Dondolare, scalciare o lasciare cadere le spalle.','Esegui negative usando un rialzo stabile o un elastico adatto.'],
'Rematore con peso':[['Appoggia mano e ginocchio su un supporto stabile, schiena neutra.','Tira il peso verso il fianco mantenendo il gomito vicino al corpo.','Pausa breve e abbassa il peso senza ruotare il busto.'],'Espira tirando; inspira scendendo.','Ruotare il tronco, alzare la spalla o tirare verso il petto.','Riduci il peso e accorcia il movimento.'],
'Bicipiti con pesi':[['In piedi stabile, braccia lungo i fianchi e polsi dritti.','Piega i gomiti portando i pesi verso le spalle senza muovere il busto.','Fermati prima che i gomiti avanzino e scendi lentamente.'],'Espira salendo; inspira scendendo.','Dondolare, spingere i gomiti avanti o piegare i polsi.','Alterna un braccio alla volta con peso più leggero.'],
'Estensione a terra':[['A pancia in giù, braccia a Y e fronte verso il pavimento.','Attiva delicatamente addome e glutei.','Solleva poco petto e braccia, poi torna lentamente.'],'Espira salendo.','Inarcare molto la zona lombare o alzare la testa.','Solleva solo le braccia.'],
'Ombre veloci':[['Piedi sfalsati, ginocchia morbide, mani alte davanti al viso.','Esegui diretti e ganci senza bloccare i gomiti, ruotando busto e piedi con controllo.','Riporta sempre le mani in guardia e continua a muoverti leggero.'],'Espira brevemente a ogni colpo.','Colpi fuori controllo, spalle rigide o mani basse.','Riduci velocità e lavora solo su diretti leggeri.'],
'Squat saltati o veloci':[['Parti nella posizione dello squat.','Scendi controllato e risali velocemente; se salti, atterra morbido su tutto il piede.','Stabilizza la posizione prima della ripetizione successiva.'],'Espira nella risalita.','Atterraggio rigido, ginocchia verso l’interno o salti quando sei affaticato.','Esegui squat normali rapidi senza salto.'],
'Mountain climbers':[['Parti in plank alto con mani sotto le spalle.','Porta un ginocchio verso il petto mantenendo il bacino stabile.','Alterna le gambe a una velocità che controlli.'],'Espira a ogni avvicinamento del ginocchio.','Rimbalzare con il bacino o accorciare la posizione delle spalle.','Esegui lentamente oppure con mani su un supporto alto.'],
'Finitura: rematore + negative':[['Esegui prima il rematore con tecnica controllata.','Per le negative, sali alla posizione alta usando un rialzo stabile.','Scendi dalla sbarra lentamente; fermati prima che la presa o la postura cedano.'],'Espira nello sforzo; inspira nel ritorno.','Continuare a cedimento con movimenti incontrollati o usare un rialzo instabile.','Riduci le ripetizioni e aumenta il recupero.'],
'Camminata':[['Cammina con passo naturale e postura comoda.','Mantieni un ritmo che permette di parlare.','Rallenta negli ultimi minuti.'],'Regolare.','Ritmo eccessivo in una giornata di recupero.','Riduci durata o velocità.'],
'Mobilità / stretching':[['Scegli movimenti dolci per schiena, anche e spalle.','Mantieni ogni posizione confortevole senza rimbalzi.','Interrompi se compare dolore.'],'Lenta e rilassata.','Forzare l’allungamento.','Riduci ampiezza e durata.']
};
const GUIDE_VIDEOS={
'Squat con pesi':'https://www.youtube.com/watch?v=q4RiiXo5mgA',
'Pressa militare con pesi':'https://www.youtube.com/watch?v=AfIJ6VwYR5g',
'Rematore con peso':'https://www.youtube.com/watch?v=-ebafKeAmXs'
};
