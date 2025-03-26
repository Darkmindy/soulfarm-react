# Soulfarm React - Replica della Homepage

Questo progetto React replica fedelmente la homepage del sito web Soulfarm (https://soulfarm.it/). Utilizza Vite, TypeScript, React e TailwindCSS per un'esperienza di sviluppo efficiente e un codice ben strutturato.

## Indice dei Contenuti

- [Soulfarm React - Replica della Homepage](#soulfarm-react---replica-della-homepage)
- [Indice dei Contenuti](#indice-dei-contenuti)
- [Installazione](#installazione)
- [Tecnologie Utilizzate (Frontend)](#tecnologie-utilizzate-frontend)
- [Struttura del Progetto](#struttura-del-progetto)
- [Componenti Principali](#componenti-principali)
- [CSS Modules](#css-modules)
- [Responsive Design](#responsive-design)
- [Crediti](#crediti)

## Installazione

1.  Clona la repository da GitHub:

    ```bash
    git clone https://github.com/Darkmindy/soulfarm-react.git
    cd soulfarm-react
    ```

2.  Installa le dipendenze utilizzando pnpm:

    ```bash
    pnpm install
    ```

3.  Avvia il server di sviluppo:

    ```bash
    pnpm run dev
    ```

4.  Apri il browser all'indirizzo `http://localhost:5173` (o la porta indicata da Vite).

## Tecnologie Utilizzate (Frontend)

-   **React:** Libreria JavaScript per la creazione di interfacce utente.
-   **TypeScript:** Linguaggio di programmazione che aggiunge tipizzazione statica a JavaScript.
-   **Vite:** Strumento di build veloce per applicazioni web moderne.
-   **TailwindCSS v.3:** Framework CSS utility-first per uno styling rapido e personalizzato.
-   **pnpm:** Gestore di pacchetti JavaScript veloce ed efficiente.

## Struttura del Progetto

| Cartella/File | Descrizione/Scopo |
|---|---|
| `src/assets/images/` | Immagini del progetto |
| `src/assets/fonts/` | Font del progetto |
| `src/components/EventsGrid.tsx` | Componente per visualizzare la griglia degli eventi |
| `src/sections/Header.tsx` | Intestazione del sito |
| `src/sections/Hero.tsx` | Sezione introduttiva |
| `src/sections/Planetarium.tsx` | Sezione del banner dedicato al Planetario |
| `src/sections/ProductsCarousel.tsx` | Sezione carosello dei prodotti |
| `src/sections/Newsletter.tsx` | Sezione dedicata al banner della newsletter |
| `src/sections/Footer.tsx` | Piè di pagina |
| `src/App.tsx` | Componente principale dell'applicazione |
| `src/main.tsx` | Punto di ingresso dell'applicazione |
| `src/Products.module.css` | Stili per il componente Products |
| `public/` | File statici |
| `package.json` | Informazioni sul progetto e dipendenze |
| `pnpm-lock.yaml` | Lock file per pnpm |
| `vite.config.ts` | Configurazione di Vite |

## Componenti Principali

- **Header**: Intestazione del sito con logo e menu di navigazione.
- **Hero**: Sezione introduttiva principale con immagine di sfondo e testo.
- **EventsGrid**: Griglia che visualizza gli eventi in programma.
- **PlanetariumSection**: Sezione dedicata a promuovere il planetario.
- **ProductsCarousel**: Sezione dedicata alle novità in bottega.
- **Newsletter**: Sezione per invitare gli utenti a iscriversi alla newsletter.
- **Footer**: Piè di pagina con informazioni di contatto e link utili.

## Responsive Design

Il progetto è progettato per essere responsivo e adattarsi a diverse dimensioni dello schermo. Le classi TailwindCSS vengono utilizzate per gestire i layout e gli stili in base ai diversi breakpoint.

## Crediti

Questo progetto è stato creato da \[Stefania Deliso] come replica della homepage di Soulfarm.