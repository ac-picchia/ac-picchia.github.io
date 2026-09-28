# AC Picchia — Cori Ufficiali 🎵

App PWA per i cori ufficiali dell'A.C. Picchia. Funziona su iOS e Android, si installa come app e funziona anche offline.

---

## 📁 Struttura dei file

```
acpicchia/
├── index.html       ← app principale (non modificare)
├── data.js          ← ✏️  qui aggiungi foto, audio e cori
├── manifest.json    ← configurazione PWA (non modificare)
├── sw.js            ← service worker (aggiorna solo la versione)
├── logo.png         ← logo del team
├── photos/          ← carica qui le foto delle giocatrici
│   └── .gitkeep
└── audio/           ← carica qui i file audio dei cori
    └── .gitkeep
```

---

## ✏️ Come aggiornare l'app

Tutte le modifiche si fanno **solo su `data.js`**.

### Aggiungere una foto

1. Carica il file nella cartella `photos/` (es. `giovanna.jpg`)
2. In `data.js`, trova la giocatrice e sostituisci:
   ```js
   photo: null
   // → diventa:
   photo: "photos/giovanna.jpg"
   ```

### Aggiungere un audio

1. Carica il file nella cartella `audio/` (es. `coro-giovanna.mp3`)
2. In `data.js`, trova il coro e sostituisci:
   ```js
   audio: null
   // → diventa:
   audio: "audio/coro-giovanna.mp3"
   ```

### Aggiungere un coro a una giocatrice

Trova la giocatrice in `data.js` e aggiungi un oggetto nell'array `cori`:
```js
cori: [
  { title: "Nome del coro", audio: null, lyrics: `testo\ndel coro` }
]
```

### Aggiungere una nuova giocatrice

Copia un blocco esistente e cambia `id` (deve essere unico), `number`, `name`:
```js
{
  id: "sofia",        // ← univoco, senza spazi
  number: 11,
  name: "Sofia Rossi",
  photo: null,
  cori: []
}
```
Le giocatrici vengono ordinate automaticamente per numero di maglia.

### Dopo ogni modifica: aggiorna la versione cache

Apri `sw.js` e cambia il numero di versione per svuotare la cache su tutti i dispositivi:
```js
const CACHE = 'acpicchia-v1';
// → diventa:
const CACHE = 'acpicchia-v2';
```

---

## 🚀 Come pubblicare su GitHub Pages (prima volta)

Per avere l'URL **`https://acpicchia.github.io`** (invece di `https://beatrice.github.io/acpicchia`) segui questi passi. È tutto gratuito.

### Passo 1 — Crea un'organizzazione GitHub gratuita

1. Vai su [github.com](https://github.com) (con il tuo account esistente, es. quello di Beatrice)
2. Clicca sulla tua foto in alto a destra → **"Your organizations"**
3. Clicca **"New organization"**
4. Scegli il piano **Free**
5. Come nome organizzazione scrivi: `acpicchia`
   - Se `acpicchia` fosse già occupato, prova `ac-picchia` → l'URL diventerà `https://ac-picchia.github.io`
6. Completa la creazione (puoi saltare l'invito di altri membri per ora)

### Passo 2 — Crea il repository speciale

1. Nella pagina dell'organizzazione `acpicchia`, clicca **"New repository"**
2. Come nome scrivi esattamente: **`acpicchia.github.io`**
   - ⚠️ Il nome deve corrispondere esattamente al nome dell'organizzazione + `.github.io`
3. Lascialo **Public**
4. Non aggiungere README né .gitignore
5. Clicca **"Create repository"**

### Passo 3 — Carica i file

1. Nel repository appena creato, clicca **"uploading an existing file"**
2. Carica tutti i file della cartella `acpicchia/`:
   - `index.html`
   - `data.js`
   - `manifest.json`
   - `sw.js`
   - `logo.png`
3. Poi carica le cartelle `photos/` e `audio/` (anche solo con i `.gitkeep` per ora)
4. Clicca **"Commit changes"**

### Passo 4 — GitHub Pages si attiva automaticamente

Per un repository che si chiama `<organizzazione>.github.io`, GitHub Pages si attiva **automaticamente**.

Dopo 1–2 minuti, l'app sarà live su:
**👉 https://acpicchia.github.io**

> Non serve andare nelle impostazioni a configurare nulla.

### Invitare altre persone a fare aggiornamenti

Se vuoi che anche Ludovica (o chiunque altro) possa aggiornare l'app:
1. Vai su `github.com/acpicchia` → **"People"** → **"Invite member"**
2. Cerca il loro username GitHub e invitali
3. Potranno modificare `data.js` direttamente da browser su GitHub

---

## 📱 Come installare l'app sul telefono

### iPhone (Safari)
1. Apri `https://acpicchia.github.io` in Safari
2. Tocca il pulsante **Condividi** (quadrato con freccia in su)
3. Scorri e tocca **"Aggiungi a schermata Home"**
4. Tocca **"Aggiungi"**

### Android (Chrome)
1. Apri `https://acpicchia.github.io` in Chrome
2. Tocca i tre puntini in alto a destra
3. Tocca **"Aggiungi a schermata Home"** oppure **"Installa app"**

---

## 🔄 Come aggiornare l'app dopo modifiche

1. Modifica `data.js` (e incrementa la versione in `sw.js`)
2. Vai su `github.com/acpicchia/acpicchia.github.io`
3. Clicca sul file da aggiornare → icona matita (✏️) → incolla il nuovo contenuto → **"Commit changes"**
4. Aspetta 1–2 minuti → ricarica l'app sul telefono

---

*Forza Picchie! 🐦‍⬛🧡*
