# Questlog

En personlig spelbacklog byggd med React, TypeScript, React Router och Tailwind CSS. Här kan du lista och filtrera spel på status, se detaljer om ett spel, lägga till nya spel samt uppdatera eller ta bort befintliga spel.

## Mål med inlämningen
Jag siktar på betyget **VG**.

## API & Handle
Appen hämtar och sparar data mot Questlog API med följande handle:
* **Handle:** `react-dev-46`

## Köra projektet lokalt

1. Installera beroenden:
   ```bash
   npm install
   ```
2. Starta utvecklingsservern:
   ```bash
   npm run dev
   ```

## Custom Hooks & Arkitektur

All logik för API-anrop och lokal lagring är flyttad från komponenterna till egna custom hooks i `src/hooks/`:

* **`useGames.ts`**: Samlar samtliga hooks för CRUD-anrop (`useGames`, `useGame`, `useSaveGame`, `useUpdateGame`, `useDeleteGame`). De hanterar `fetch`, kontrollerar `response.ok` och exponerar laddnings- (`loading`) och felstatus (`error`) till komponenterna.
* **`useLocalStorage.ts`**: Sparar det valda statusfiltret i webbläsarens `localStorage` så att filtret finns kvar vid sidomladdning.

**Varför jag byggt så:** Genom att separera datahämtning och lagring från UI-komponenterna hålls komponenterna rena och fokuserade på presentation, samtidigt som logiken blir lättare att återanvända och underhålla.
