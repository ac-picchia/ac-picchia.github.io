// ============================================================
//  AC PICCHIA — CORI UFFICIALI
//  Modifica questo file per aggiungere foto, audio e cori
// ============================================================
//
//  AGGIUNGERE UNA FOTO:
//    1. Carica il file nella cartella photos/
//    2. Sostituisci  photo: null  con  photo: "photos/nomefile.jpg"
//
//  AGGIUNGERE UN FILE AUDIO:
//    1. Carica il file nella cartella audio/
//    2. Sostituisci  audio: null  con  audio: "audio/nomefile.mp3"
//
//  AGGIUNGERE UN CORO A UN GIOCATORE:
//    Aggiungi un oggetto dentro cori: [ … ]
//    { title: "Titolo coro", audio: null, lyrics: `testo\ndel coro` }
//
//  AGGIUNGERE UN GIOCATORE:
//    Copia un blocco esistente, cambia id (univoco!), numero e nome.
//    I giocatori sono ordinati automaticamente per numero di maglia.
//
//  DOPO OGNI MODIFICA:
//    Ricordati di aggiornare il numero di versione in sw.js
//    (es. acpicchia-v1 → acpicchia-v2) per svuotare la cache.
// ============================================================

const APP_DATA = {

  // ── CORI DI SQUADRA ──────────────────────────────────────
  team: [
    {
      id: "team-1",
      title: "Forza ACPicchia!",
      photo: null,
      audio: null,
      lyrics: `eeeeh per la gente che
aaaaama soltanto te
ACPicchia ACPicchia
eeeeh per chi vuole stare
sempre insieme a giocare
ACPicchia ACPicchia
e allora dai dai dai
dai dai dai
FORZA ACPICCHIA!`
    },
    {
      id: "team-2",
      title: "Avanti Picchie!",
      photo: null,
      audio: null,
      lyrics: `Che confusione sarà
quando le Picchie entreranno
urleremo più forte che mai
AVANTI PICCHIE AVANTI
avanti Picchie avanti
la vittoria arriverà
avanti Picchie avanti
con noi voi vincerete
e poi festeggierete
avanti Picchie alè`
    }
  ],

  // ── STAFF ────────────────────────────────────────────────
  staff: [
    {
      id: "marco",
      name: "Marco",
      role: "Missister · Genitore 1",
      photo: null,
      cori: []
    },
    {
      id: "paolo",
      name: "Paolo",
      role: "Missister · Genitore 2",
      photo: null,
      cori: []
    }
  ],

  // ── GIOCATRICI ───────────────────────────────────────────
  // ordinate automaticamente per numero di maglia
  players: [
    {
      id: "giovanna",
      number: 2,
      name: "Giovanna Carillo",
      photo: null,
      cori: [
        {
          title: "È Giovanna!",
          audio: null,
          lyrics: `è GIOVANNA è
è GIOVANNA è
non ci ferma nessuno
nemmeno il pallone
lei corre lei segna
e poi se ne va
è Giovanna alè
fatta DI PANNNAAAA`
        }
      ]
    },
    {
      id: "anna",
      number: 4,
      name: "Anna Tracagni",
      photo: null,
      cori: [
        {
          title: "Se Segna Anna",
          audio: null,
          lyrics: `vado fuori di testa
non c'è più niente che regge
quando entra in campo lei
il pallone ubbidisce
e se segna Anna
e se segna Anna
urlo finché ho fiato
SE SEGNA ANNA`
        }
      ]
    },
    {
      id: "maria-lucia",
      number: 6,
      name: "Maria Lucia Martuscelli",
      photo: null,
      cori: []
    },
    {
      id: "elisa",
      number: 7,
      name: "Elisa Cavagna",
      photo: null,
      cori: [
        {
          title: "Elisa Cavagna Alè",
          audio: null,
          lyrics: `Elisa Cavagna è
la più forte che c'è
corre e dribbla e poi
lascia tutti lì
Elisa Cavagna alè
Elisa Cavagna alè`
        }
      ]
    },
    {
      id: "ottavia",
      number: 8,
      name: "Ottavia Tracagni",
      photo: null,
      cori: [
        {
          title: "Otti Tracagni",
          audio: null,
          lyrics: `tutta Roma sa che
Otti Tracagni c'è
e quando tira lei
il portiere cede
poi tremerà pure er cuppolone`
        }
      ]
    },
    {
      id: "benedetta",
      number: 9,
      name: "Benedetta Caputo",
      photo: null,
      cori: []
    },
    {
      id: "adelasia",
      number: 10,
      name: "Adelasia Lazzari",
      photo: null,
      cori: []
    },
    {
      id: "kelly",
      number: 15,
      name: "Kelly Doolittle",
      photo: null,
      cori: [
        {
          title: "Kelly Goool!",
          audio: null,
          lyrics: `A voi sembra piccolina
ma fa paura quando tira
KELLY GOOOL KEELLLY GOOOL`
        },
        {
          title: "Goooo Kelly!",
          audio: null,
          lyrics: `GOOOO KELLY GO GO
GOOOO KELLY GO GO`
        }
      ]
    },
    {
      id: "fabiola",
      number: 16,
      name: "Fabiola Midulla",
      photo: null,
      cori: [
        {
          title: "Fabi Midulla Alè",
          audio: null,
          lyrics: `Senza stancarsi lei
corre per tutto il campo
e quando arriva in fondo
il gol è già fatto
Fabi Midulla Alè!`
        }
      ]
    },
    {
      id: "alice",
      number: 19,
      name: "Alice Camponovo",
      photo: null,
      cori: []
    },
    {
      id: "bianca",
      number: 21,
      name: "Bianca Oetiker",
      photo: null,
      cori: [
        {
          title: "Bibbi Goool!",
          audio: null,
          lyrics: `Che ci frega di Regina
Non c'avemo Bibbi Goooool
Bibbi Goooool Bibbi Goooool`
        }
      ]
    },
    {
      id: "matilde",
      number: 22,
      name: "Matilde Todisco",
      photo: null,
      cori: []
    },
    {
      id: "carlotta",
      number: 23,
      name: "Carlotta Gianni",
      photo: null,
      cori: [
        {
          title: "Totta in Campo",
          audio: null,
          lyrics: `Tira forte corre e segna
Lei paura non ne ha
Totta scende in campo e urlerà
Qui non si sgombera`
        }
      ]
    },
    {
      id: "lea",
      number: 26,
      name: "Lea Katharina Rzadtki",
      photo: null,
      cori: []
    },
    {
      id: "eugenia",
      number: 29,
      name: "Eugenia Masella",
      photo: null,
      cori: [
        {
          title: "Masella Vola (v.1)",
          audio: null,
          lyrics: `Vola, su quella fascia vola,
la squadra grida ancora,
Masella vola!`
        },
        {
          title: "Masella Vola (v.2)",
          audio: null,
          lyrics: `Vola, su quella fascia vola,
la squadra fa la ola,
Masella vola`
        },
        {
          title: "Masella Vola (v.3)",
          audio: null,
          lyrics: `Vola, su quella fascia vola,
e dai che segna ancora,
Masella vola`
        }
      ]
    },
    {
      id: "livia-c",
      number: 33,
      name: "Livia Ciarrapico",
      photo: null,
      cori: []
    },
    {
      id: "camilla",
      number: 44,
      name: "Camilla Di Marcantonio",
      photo: null,
      cori: [
        {
          title: "Il Muro Cami",
          audio: null,
          lyrics: `E quel muro là
E quel muro là
Si chiama Cami e non puoi segnaaaa`
        }
      ]
    },
    {
      id: "ludovica",
      number: 69,
      name: "Ludovica Spinola",
      photo: null,
      cori: []
    },
    {
      id: "livia-o",
      number: 92,
      name: "Livia Oetiker",
      photo: null,
      cori: []
    },
    {
      id: "beatrice",
      number: 99,
      name: "Beatrice Foroni",
      photo: null,
      cori: [
        {
          title: "Mini-Tilde",
          audio: null,
          lyrics: `Come fa? Come fa?
Mini-Tilde come fa?
Vola qua vola là
ECCO COME PARERÀ`
        }
      ]
    }
  ]
};
