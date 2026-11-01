export interface Flashcard {
  id: string;
  front: string;
  back: string;
  hint?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface ContentSection {
  title: string;
  body: string[];
}

export interface Module {
  id: string;
  title: string;
  emoji: string;
  description: string;
  accentColor: string;
  sections: ContentSection[];
  flashcards: Flashcard[];
  quiz: QuizQuestion[];
}

export const modules: Module[] = [
  // ─────────────────────────────────────────────
  // MODULE 1: 10 Gebote
  // ─────────────────────────────────────────────
  {
    id: "gebote",
    title: "Die 10 Gebote",
    emoji: "📜",
    description: "Nova Reach's Grundregeln für Top-Performer",
    accentColor: "amber",
    sections: [
      {
        title: "Warum diese Gebote?",
        body: [
          "Diese 10 Gebote sind das Fundament deiner täglichen Arbeit. Wer sie lebt, gehört zu den Top-Performern.",
        ],
      },
      {
        title: "Die 10 Gebote",
        body: [
          "1. 100% Einsatz, jeden Tag — Top Performer sind hungrig, positiv, lösungsorientiert.",
          "2. Keine Ausreden, keine Zeitdiebe — Wer liefert, sucht Lösungen statt Gründe.",
          "3. Leads werden sofort bearbeitet — Jeder Lead, der liegen bleibt, ist verlorenes Vertrauen.",
          "4. Termine werden sofort gepflegt — Spätestens am selben Tag. Kein Datum in der Vergangenheit. Nie.",
          "5. Offene Tickets blockieren Umsatz — Jeder Vertriebler hält seine Tickets täglich auf null.",
          "6. Dein Kalender ist Gesetz — Value Calls, Jour Fixes, Trainings sind Pflicht. Wer fehlt, verliert Anschluss.",
          "7. Respekt ist Standard, kein Bonus — Kein Ego, kein Kindergarten. Schnelle, klare Kommunikation.",
          "8. Performance ist Pflicht — Stillstand ist Rückschritt. Wer nicht besser wird, wird ersetzt.",
          "9. Jeder Lead erzeugt neuen Lead — Minimum 1 neuer Lead pro Lead.",
          "10. Vorbereitung entscheidet über Abschluss — Jeder Tag mindestens 3 Tage im Voraus geplant.",
        ],
      },
    ],
    flashcards: [
      { id: "g1", front: "Gebot 1", back: "100% Einsatz, jeden Tag\n\nTop Performer sind hungrig, positiv, lösungsorientiert und immer auf der Suche nach Verbesserung." },
      { id: "g2", front: "Gebot 2", back: "Keine Ausreden, keine Zeitdiebe\n\nWer liefert, sucht Lösungen statt Gründe. Ungepflegte Systeme sind keine Umstände, sondern Versäumnisse." },
      { id: "g3", front: "Gebot 3", back: "Leads werden sofort bearbeitet\n\nGeschwindigkeit entscheidet. Jeder Lead, der liegen bleibt, ist verlorenes Vertrauen." },
      { id: "g4", front: "Gebot 4", back: "Termine werden sofort gepflegt\n\nNach jedem Termin wird das System direkt aktualisiert — spätestens am selben Tag. Nie ein Datum in der Vergangenheit." },
      { id: "g5", front: "Gebot 5", back: "Offene Tickets blockieren Umsatz\n\nSCII-Vorbereitung funktioniert nur mit sauberen Tickets. Täglich auf null halten." },
      { id: "g6", front: "Gebot 6", back: "Dein Kalender ist Gesetz\n\nValue Calls, Jour Fixes und Trainings sind Pflicht. Wer nicht da ist, zahlt den Preis." },
      { id: "g7", front: "Gebot 7", back: "Respekt ist Standard, kein Bonus\n\nHigh Performer arbeiten professionell. Kein Ego, kein Kindergarten. Besonders klar mit dem Innendienst." },
      { id: "g8", front: "Gebot 8", back: "Performance ist Pflicht\n\nStillstand ist Rückschritt. Jeder arbeitet aktiv an sich, seinem Pitch, seinem Prozess." },
      { id: "g9", front: "Gebot 9", back: "Jeder Lead erzeugt neuen Lead\n\nNachbarn, Empfehlungen, Umfeld. Minimum ein neuer Lead pro Lead." },
      { id: "g10", front: "Gebot 10", back: "Vorbereitung entscheidet über Abschluss\n\nKein Termin wird verpasst. Jeder Tag ist mindestens 3 Tage im Voraus geplant und geprüft." },
      { id: "g11", front: "Was passiert, wenn Tickets nicht täglich auf null gehalten werden?", back: "Es entsteht aktiver Umsatzverlust. Die SCII-Vorbereitung funktioniert nur mit sauberen Tickets." },
      { id: "g12", front: "Warum ist Mittelmaß bei Nova Reach kein Platz?", back: "Weil nur mit Top-Performern gearbeitet wird — hungrigen, positiven, lösungsorientierten Menschen, die sich ständig verbessern." },
    ],
    quiz: [
      {
        id: "gq1",
        question: "Wie viele neue Leads sollten aus jedem gesetzten Lead entstehen?",
        options: ["Kein bestimmtes Ziel", "Mindestens 1", "Mindestens 3", "Mindestens 5"],
        correct: 1,
        explanation: "Gebot 9: Minimum ein neuer Lead pro Lead. Nachbarn, Empfehlungen, Umfeld — alles darunter ist verschenktes Potenzial.",
      },
      {
        id: "gq2",
        question: "Bis wann müssen Termine nach dem Gespräch im System gepflegt werden?",
        options: ["Innerhalb von 24 Stunden", "Innerhalb einer Woche", "Spätestens am selben Tag", "Beim nächsten Login"],
        correct: 2,
        explanation: "Gebot 4: Spätestens am selben Tag. Es gibt keine Kunden oder Termine mit einem Datum in der Vergangenheit. Nie.",
      },
      {
        id: "gq3",
        question: "Was passiert laut Gebot 8 mit jemandem, der nicht besser wird?",
        options: ["Er bekommt ein Coaching", "Er wird zu Aufgaben degradiert", "Er wird ersetzt", "Er verliert seine Leads"],
        correct: 2,
        explanation: "Gebot 8: Stillstand ist Rückschritt. Jeder arbeitet aktiv an sich. Wer nicht besser wird, wird ersetzt.",
      },
      {
        id: "gq4",
        question: "Wie viele Tage im Voraus muss jeder Tag mindestens geplant und geprüft sein?",
        options: ["1 Tag", "2 Tage", "3 Tage", "5 Tage"],
        correct: 2,
        explanation: "Gebot 10: Jeder Tag ist mindestens drei Tage im Voraus geplant und geprüft. Vorbereitung ist kein Vorteil, sondern Voraussetzung.",
      },
      {
        id: "gq5",
        question: "Was stellen liegen gelassene Kunden oder offene Themen laut Gebot 2 dar?",
        options: ["Normale Umstände", "Versäumnisse", "Prioritäten", "Zufälle"],
        correct: 1,
        explanation: "Gebot 2: Ungepflegte Systeme, liegen gelassene Kunden oder offene Themen sind keine Umstände, sondern Versäumnisse.",
      },
      {
        id: "gq6",
        question: "Mit wem ist besonders klare Kommunikation gemäß Gebot 7 besonders wichtig?",
        options: ["Mit Kunden", "Mit dem Management", "Mit dem Innendienst", "Mit dem Marketing"],
        correct: 2,
        explanation: "Gebot 7: Respekt ist Standard, kein Bonus. Schnelle, klare Kommunikation — besonders mit dem Innendienst.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // MODULE 2: SC1 Grundlagen
  // ─────────────────────────────────────────────
  {
    id: "grundlagen",
    title: "SC1 Grundlagen",
    emoji: "🧠",
    description: "Ziel, 80/20-Regel, 6 Phasen & psychologische Hebel",
    accentColor: "blue",
    sections: [
      {
        title: "Das Ziel des SC1",
        body: [
          "Der SC1 ist kein Informationsgespräch — er ist ein strukturierter Entscheidungsprozess.",
          "Einziges Ziel: Der Kunde unterschreibt direkt die Reservierung und den Vertrag im SC2.",
          "Am Ende soll der Kunde 3 Dinge erlebt haben:",
          "✓ VERTRAUEN — Er vertraut dir persönlich und Enpal als Marktführer.",
          "✓ DRINGLICHKEIT — Er versteht, dass Warten ihn Geld kostet.",
          "✓ KLARHEIT — Er weiß genau, was er bekommt, was es kostet und was es spart.",
        ],
      },
      {
        title: "Die 80/20-Regel der Kaufentscheidung",
        body: [
          "80% emotional · 20% rational — das ist kein Klischee, das ist neurowissenschaftlicher Fakt.",
          "Der rationale Teil (Zahlen, Förderung, Preis) dient nur dazu, eine bereits emotional getroffene Entscheidung zu rechtfertigen.",
          "→ Zuerst das Gefühl erzeugen: Sicherheit, Stolz, Unabhängigkeit.",
          "→ Danach die rationalen Argumente liefern.",
          "Wenn du nur Zahlen präsentierst, verlierst du.",
        ],
      },
      {
        title: "Die 6 Phasen des SC1",
        body: [
          "Phase 1: Begrüßung & Hausbegehung — Rapport aufbauen, Vertrauen durch erste echte Begegnung",
          "Phase 2: Analysephase — Bedürfnisse, Schmerzen und Kaufmotivation aufdecken (Laptop bleibt zu!)",
          "Phase 3: Präsentation — Enpal positionieren, Technologie erklären, Dringlichkeit verankern",
          "Phase 4: Wirtschaftliche Betrachtung — Gemeinsam rechnen, emotionalen Schock durch Zahlen erzeugen",
          "Phase 5: Förderung & Finanzierung — Preis relativieren, monatliche Rate als einzigen Vergleich etablieren",
          "Phase 6: Abschluss & Reservierung — Commitment einholen, nächsten Schritt konkret vereinbaren",
        ],
      },
      {
        title: "Verkaufspsychologische Hebel (Cialdini)",
        body: [
          "🤝 SOZIALE BESTÄTIGUNG — 100.000+ Haushalte, 13.000+ Google-Rezensionen, Marktführer.",
          "💸 VERLUSTÄVERSION — Steigende CO₂-Steuer, Zertifikathandel 2027, Pflicht zum Rückbau bis 2043. Schmerz des Nicht-Handelns > Schmerz des Kaufens.",
          "⏰ KNAPPHEIT & ZEITDRUCK — Geschwindigkeitsbonus, Förderfenster, Kapazitäten.",
          "🏆 AUTORITÄT — Eigene Handwerkerakademie, TÜV, VDE-Zertifizierung, Bosch-Partnerschaft.",
          "🎁 REZIPROZITÄT — Persönliche Begleitung, Einzel-Baubegleitung, Förderservice.",
          "✅ COMMITMENT & KONSISTENZ — Kleine Ja-Schritte ('Klingt gut, oder?') bereiten die Abschlussentscheidung vor.",
        ],
      },
    ],
    flashcards: [
      { id: "gr1", front: "Was ist das EINZIGE Ziel des SC1?", back: "Der Kunde unterschreibt direkt die Reservierung und den Vertrag im SC2.\n\nDer SC1 ist kein Informationsgespräch — er ist ein strukturierter Entscheidungsprozess." },
      { id: "gr2", front: "Die 3 Dinge, die der Kunde am Ende des SC1 erlebt haben soll?", back: "1. VERTRAUEN — vertraut dir persönlich und Enpal als Marktführer\n2. DRINGLICHKEIT — Warten kostet Geld\n3. KLARHEIT — weiß genau was er bekommt, was es kostet und was es spart" },
      { id: "gr3", front: "Die 80/20-Regel der Kaufentscheidung", back: "80% EMOTIONAL · 20% RATIONAL\n\nErst das Gefühl erzeugen (Sicherheit, Stolz, Unabhängigkeit), dann die rationalen Argumente liefern, die der Kunde braucht, um sich selbst grünes Licht zu geben." },
      { id: "gr4", front: "Phase 1 des SC1", back: "Begrüßung & Hausbegehung\n\nZiel: Rapport aufbauen, Vertrauen durch erste echte Begegnung" },
      { id: "gr5", front: "Phase 2 des SC1", back: "Analysephase\n\nZiel: Bedürfnisse, Schmerzen und Kaufmotivation aufdecken.\nWichtig: Laptop bleibt zu!" },
      { id: "gr6", front: "Phase 3 des SC1", back: "Präsentation\n\nZiel: Enpal positionieren, Technologie erklären, Dringlichkeit verankern" },
      { id: "gr7", front: "Phase 4 des SC1", back: "Wirtschaftliche Betrachtung\n\nZiel: Gemeinsam rechnen, emotionalen Schock durch Zahlen erzeugen" },
      { id: "gr8", front: "Phase 5 des SC1", back: "Förderung & Finanzierung\n\nZiel: Den Preis relativieren, monatliche Rate als einzigen Vergleich etablieren" },
      { id: "gr9", front: "Phase 6 des SC1", back: "Abschluss & Reservierung\n\nZiel: Commitment einholen, nächsten Schritt konkret vereinbaren" },
      { id: "gr10", front: "Psychologischer Hebel: Verlustäversion", back: "Steigende CO₂-Steuer, Zertifikathandel 2027, Pflicht zum Rückbau bis 2043.\n\nDer Schmerz des Nicht-Handelns muss größer werden als der Schmerz des Kaufens." },
      { id: "gr11", front: "Psychologischer Hebel: Soziale Bestätigung", back: "100.000+ Haushalte, 13.000+ Google-Rezensionen, Marktführer.\n\nKunden kaufen, was andere bereits gewählt haben." },
      { id: "gr12", front: "Warum ist die Analysephase die wichtigste Phase?", back: "Weil hier entscheidet sich, ob du später PRÄSENTIERST oder VERHANDELST.\n\nWer die Bedürfnisse, Ängste und Kaufmotive des Kunden kennt, kann die Präsentation gezielt darauf ausrichten." },
    ],
    quiz: [
      {
        id: "grq1",
        question: "Was ist laut Playbook kein Informationsgespräch, sondern ein strukturierter Entscheidungsprozess?",
        options: ["Der Baby Call", "Der SC1", "Der SC2", "Das Erstgespräch"],
        correct: 1,
        explanation: "Der SC1 ist kein Informationsgespräch. Er ist ein strukturierter Entscheidungsprozess, dessen einziges Ziel ist: Der Kunde unterschreibt direkt die Reservierung und den Vertrag im SC2.",
      },
      {
        id: "grq2",
        question: "Zu welchem Prozentsatz fallen Kaufentscheidungen laut Playbook emotional?",
        options: ["20%", "50%", "60%", "80%"],
        correct: 3,
        explanation: "Kaufentscheidungen fallen zu 80% emotional und zu 20% rational. Das ist neurowissenschaftlicher Fakt.",
      },
      {
        id: "grq3",
        question: "Was darf während der Analysephase (Phase 2) NICHT geöffnet werden?",
        options: ["Die Haustür", "Der Laptop", "Das Angebot", "Das CRM"],
        correct: 1,
        explanation: "WICHTIG: Noch KEINE Präsentation aufmachen! Der Laptop bleibt zu. Stift und Block liegen bereit. Höre mehr als du sprichst.",
      },
      {
        id: "grq4",
        question: "Welcher Cialdini-Hebel wird eingesetzt, wenn man auf 100.000+ Kunden und Google-Rezensionen hinweist?",
        options: ["Knappheit", "Autorität", "Soziale Bestätigung", "Reziprozität"],
        correct: 2,
        explanation: "Soziale Bestätigung: 100.000+ Haushalte, 13.000+ Google-Rezensionen, Marktführer. Kunden kaufen, was andere bereits gewählt haben.",
      },
      {
        id: "grq5",
        question: "Was ist der strategische Sinn hinter kleinen Ja-Schritten ('Klingt gut, oder?')?",
        options: ["Freundlichkeit zeigen", "Zeit gewinnen", "Commitment & Konsistenz aufbauen", "Einwände vermeiden"],
        correct: 2,
        explanation: "Commitment & Konsistenz: Kleine Ja-Schritte im Gespräch bereiten die Abschlussentscheidung vor. Wer einmal Ja gesagt hat, bleibt konsistent.",
      },
      {
        id: "grq6",
        question: "Was ist die 'Schlüsselfrage' der Analysephase, auf die alles hinläuft?",
        options: [
          "'Wie viel Strom verbrauchen Sie im Jahr?'",
          "'Was muss passieren, dass Sie sagen: Die Enpal Wärmepumpe wird bei mir installiert?'",
          "'Haben Sie schon andere Angebote?'",
          "'Wie lange wohnen Sie schon hier?'",
        ],
        correct: 1,
        explanation: "Die Schlüsselfrage: 'Was muss bei unserem Gespräch passieren, dass Sie sagen: Die Enpal Wärmepumpe wird bei mir installiert?' — Diese Frage definiert deinen Zielzustand und dient später als Brücke zum Abschluss.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // MODULE 3: Phase 1 – Begrüßung & Analyse
  // ─────────────────────────────────────────────
  {
    id: "begruessing",
    title: "Phase 1 & 2: Begrüßung & Analyse",
    emoji: "🏠",
    description: "Small Talk, Hausbegehung, Übergang & Bedarfsanalyse",
    accentColor: "green",
    sections: [
      {
        title: "Mindset vor dem Termin",
        body: [
          "Höre Musik, die dich in eine gute Stimmung versetzt. Lächle!",
          "ENERGIE & SELBSTSICHERHEIT entscheiden — bevor du das erste Wort gesagt hast.",
          "Jeder mit dem du redest, ist ein Käufer — unabhängig von Äußerlichkeiten.",
          "Gepflegtes Äußeres: kein Essen/Kaugummis, gut riechen, Haare und Nägel gepflegt.",
          "Spreche langsam und verständlich, baue Pausen ein.",
        ],
      },
      {
        title: "Begrüßungstext (Wortlaut)",
        body: [
          "<<Hallo Familie XXX, schön, dass wir uns heute nach unserem Telefonat jetzt richtig kennenlernen — geht es Ihnen (beiden) gut?",
          "→ ANTWORT ABWARTEN",
          "<<Super, das freut mich! Mein Name ist [Vorname, Nachname]. Ich bin Ihr persönlicher Ansprechpartner und Wärmepumpenexperte bei Enpal.",
          "→ Gemeinsamen Bezug herstellen / an den Baby-Call anknüpfen",
        ],
      },
      {
        title: "Expertenfragen bei der Hausbegehung",
        body: [
          "🏠 HAUS & DÄMMUNG:",
          "• Wissen Sie, wann das Haus zuletzt energetisch saniert wurde?",
          "• Gab es Veränderungen an Fenstern oder Dämmung in den letzten Jahren?",
          "• Merken Sie im Winter eher gleichmäßige Wärme oder gibt es Räume, die schwer warm werden?",
          "🔥 HEIZSYSTEM & NUTZUNG:",
          "• Wie zufrieden sind Sie aktuell mit der Wärmeverteilung im Haus?",
          "• Haben Sie einen zweiten Heizkreis bei sich?",
          "• Fahren Sie eher konstant durch oder regeln Sie viel über Nachtabsenkung?",
          "📉 VERBRAUCH & KOSTEN:",
          "• Haben Sie das Gefühl, dass Ihr Verbrauch eher stabil ist oder in den letzten Jahren gestiegen?",
          "• Was stört Sie aktuell am meisten — eher die Kosten oder das System an sich?",
        ],
      },
      {
        title: "Übergang zur Analyse",
        body: [
          "<<Ich war diese Woche in 3 ähnlichen Häusern. Die Ausgangssituation ist bei Ihnen ziemlich vergleichbar.",
          "<<Damit wir beide das Beste aus der nächsten Stunde herausholen, schlage ich folgenden Ablauf vor: Erst möchte ich verstehen, was Ihnen wirklich wichtig ist. Dann zeige ich Ihnen, wie die Lösung konkret bei Ihnen aussieht, und wir rechnen gemeinsam durch, ob es sich lohnt. Klingt das fair?",
          "<<Ich bin nicht hier, um Ihnen irgendetwas zu verkaufen. Ich bin hier, um herauszufinden, ob wir zusammenpassen.",
        ],
      },
      {
        title: "Bedarfsanalyse-Fragen",
        body: [
          "• Warum beschäftigen Sie sich aktuell mit dem Thema Wärmepumpe?",
          "• Was stört Sie aktuell am meisten an Ihrer jetzigen Situation?",
          "• Was passiert, wenn Sie das Thema jetzt erstmal nicht angehen?",
          "• Wie sehen Sie das in den nächsten 2–3 Jahren?",
          "• Was müsste erfüllt sein, damit Sie sagen: das passt wirklich für mich?",
          "• Gibt es aktuell Punkte, wo Sie noch unsicher sind?",
          "• Was bereitet Ihnen aktuell die meisten Kopfschmerzen bei diesem Thema?",
          "ZUSAMMENFASSUNG: <<Ihnen ist wichtig, dass X, Y und Z passt. Wenn wir heute genau diese Punkte lösen, gibt es dann noch etwas, das gegen eine Umsetzung sprechen würde?",
        ],
      },
    ],
    flashcards: [
      { id: "b1", front: "Was muss ZWINGEND vor Präsentationsbeginn passieren?", back: "Laptop bleibt GESCHLOSSEN.\n\nStift und Block für beide liegen bereit. Erst die vollständige Bedarfsanalyse durchführen, dann präsentieren." },
      { id: "b2", front: "Wie lautet der Begrüßungstext?", back: "<<Hallo Familie XXX, schön, dass wir uns heute nach unserem Telefonat jetzt richtig kennenlernen — geht es Ihnen gut?\"\n\n→ Antwort abwarten!\n\n<<Mein Name ist [Name]. Ich bin Ihr persönlicher Ansprechpartner und Wärmepumpenexperte bei Enpal.\"" },
      { id: "b3", front: "Wie lautet der Übergangs-Pitch zur Analyse?", back: "<<Damit wir beide das Beste aus der nächsten Stunde herausholen, schlage ich folgenden Ablauf vor: Erst verstehen, was Ihnen wichtig ist. Dann zeige ich die Lösung. Am Ende wissen Sie genau, ob das Ihr Weg ist. Klingt das fair?\"" },
      { id: "b4", front: "Die wichtigste Frage der Analysephase", back: "<<Was muss bei unserem Gespräch passieren, dass Sie sagen: 'Die Enpal Wärmepumpe wird bei mir installiert'?\n\nDiese Frage definiert den Zielzustand und dient als Brücke zum Abschluss." },
      { id: "b5", front: "Wie positionierst du dich beim Auto-Analogievergleich für Heizkörper?", back: "<<Die Wärmepumpe ist der Motor — die Heizkörper sind die Reifen. Der beste Motor bringt nichts, wenn die Reifen die Leistung nicht auf die Straße bringen.\"" },
      { id: "b6", front: "Was tust du aktiv während der Analysephase? (5 Punkte)", back: "1. Laptop bleibt zu\n2. Stift & Block für beide bereit\n3. Fragen stellen\n4. Aktiv und genau zuhören\n5. Aussagen notieren (signalisiert Interesse)" },
      { id: "b7", front: "Was sagst du, wenn das Kaufmotiv im Baby-Call nicht erfahren wurde?", back: "<<Ich weiß noch nicht, ob ich Ihnen helfen kann. Ich werde Ihnen heute einige Fragen stellen. Je offener Sie sind, desto besser kann ich Ihnen helfen.\"\n\n<<Was ist Ihr Grund, sich mit dem Thema Wärmepumpe zu beschäftigen?\"" },
      { id: "b8", front: "Wie lautet die Zusammenfassungsfrage nach der Analyse?", back: "<<Das heißt zusammengefasst: Ihnen ist wichtig, dass X, Y und Z passt.\n\nWenn wir es heute schaffen, genau diese Punkte sauber zu lösen, gibt es dann noch etwas, was gegen eine Umsetzung sprechen würde?\"" },
    ],
    quiz: [
      {
        id: "bq1",
        question: "Was DARF während der Bedarfsanalyse auf keinen Fall geöffnet werden?",
        options: ["Die Haustür", "Das Angebot auf dem Tisch", "Der Laptop / die Präsentation", "Das Kalkulationstool"],
        correct: 2,
        explanation: "WICHTIG: Noch KEINE Präsentation aufmachen! Der Laptop bleibt zu. Stift und Block liegen bereit. Höre mehr als du sprichst.",
      },
      {
        id: "bq2",
        question: "Warum machst du dir während der Analyse sichtbar Notizen?",
        options: ["Damit du nichts vergisst", "Um dein Interesse am Gegenüber zu signalisieren", "Für den SC2-Bericht", "Für die technische Planung"],
        correct: 1,
        explanation: "Notizen signalisieren dem Kunden, dass du aktiv zuhörst und sein Anliegen ernst nimmst. Das baut Vertrauen auf.",
      },
      {
        id: "bq3",
        question: "Was machst du nach dem Begrüßungssatz 'Geht es Ihnen gut?'?",
        options: ["Direkt weitersprechen", "Die Hausbegehung starten", "Antwort abwarten", "Den Laptop öffnen"],
        correct: 2,
        explanation: "→ ANTWORT ABWARTEN. Aktives Zuhören und echtes Interesse sind entscheidend für den Aufbau von Vertrauen.",
      },
      {
        id: "bq4",
        question: "Welche Analogie beschreibt das Zusammenspiel von Wärmepumpe und Heizkörpern?",
        options: ["Smartphone und WLAN", "Motor und Reifen", "Kühlschrank und Steckdose", "Solarpanel und Batterie"],
        correct: 1,
        explanation: "Die Wärmepumpe ist der Motor, die Heizkörper sind die Reifen. Der beste Motor bringt nichts, wenn die Reifen die Leistung nicht auf die Straße bringen.",
      },
      {
        id: "bq5",
        question: "Was ist das Ziel der Übergangsfrage 'Klingt das fair?'",
        options: ["Höflichkeit signalisieren", "Eine Verbindlichkeit beim Kunden erzeugen", "Den Preis vorbereiten", "Die Begehung beenden"],
        correct: 1,
        explanation: "Der Rahmen wird gesetzt, Verbindlichkeit signalisiert, die Entscheidung als natürliches Ende positioniert. Commitment & Konsistenz-Prinzip.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // MODULE 4: Präsentation (Slides)
  // ─────────────────────────────────────────────
  {
    id: "praesentation",
    title: "Die Präsentation",
    emoji: "📊",
    description: "Alle 13 Slides — Argumente, Zahlen & Schlüsselformulierungen",
    accentColor: "purple",
    sections: [
      {
        title: "Slide 1: Herzlich Willkommen bei Enpal",
        body: [
          "<<Unsere Kunden haben sich an uns gewendet, weil sie überwiegend die gleichen Ziele haben: unabhängig machen, sparen, etwas für das Eigenheim tun.",
          "<<Ich habe mir heute 45 Minuten Zeit für Sie genommen. Wir haben genug Zeit für alle Ihre Fragen.",
          "<<Was ich Ihnen zeige, ist eine erste Planung anhand der Infos, die wir aufgenommen haben.",
          "→ <<Sind Sie bereit? — Ja vom Kunden abholen!",
        ],
      },
      {
        title: "Slide 2: Persönliche Vorstellung",
        body: [
          "Vorstellung mit vollständigem Namen → persönliche Story, Bindung herstellen.",
          "Motivation für Enpal zu arbeiten & wie lange du schon im Team bist.",
        ],
      },
      {
        title: "Slide 3: Enpal als System (Virtual Power Plant)",
        body: [
          "<<Wir haben dafür eine eigene Handwerkerakademie aufgebaut, damit die Qualität überall gleich hoch ist.",
          "<<Wir denken das Thema nicht nur als Heizung, sondern als gesamtes Energiesystem — das Virtual Power Plant.",
          "Apple-Analogie: <<Hard- und Software aus einer Hand — alles funktioniert sauber zusammen.",
          "<<Sie haben bei uns einen langfristigen Partner. Auch in 10, 15 oder 20 Jahren.",
          "→ Übergang: <<Wissen Sie, warum sich aktuell so viele Leute für eine Wärmepumpe bei uns entscheiden?",
        ],
      },
      {
        title: "Slide 4: CO₂-Preis & Dringlichkeit",
        body: [
          "CO₂-Steuer: 2023/24 von 30 auf 45 € gestiegen (+50%), heute über 60%.",
          "Ab 2027: CO₂-Zertifikate am freien Markt — Prognose: ~150 € pro Tonne!",
          "<<Hätten Sie sich 2020 vorstellen können, dass Sie mal das Doppelte zahlen?",
          "<<Was denken Sie darüber, wie wird sich das bei Ihnen auswirken? → Antwort abwarten.",
        ],
      },
      {
        title: "Slide 5–6: Wärmepumpentechnologie & Enpal",
        body: [
          "Energieeffizienz A+++ — höchster europäischer Standard.",
          "10 Jahre Garantie inklusive.",
          "Bosch-Partnerschaft: produziert in Europa (Deutschland, Schweden, Portugal).",
          "Schallpegel: 34 dB (40 dB bei 12 kW) = so leise wie ein Computerventilator.",
        ],
      },
      {
        title: "Slide 7–8: Technik & App",
        body: [
          "Außeneinheit + Inneneinheit + Heizstab (aktiv unter -10°C).",
          "Heizstab darf max. 5% des Wärmeenergiebedarfs abdecken (Norm).",
          "Enpal.One App: Energieverbrauch von überall einsehen und steuern.",
          "<<Unabhängigkeit bedeutet, immer Kontrolle über den eigenen Verbrauch zu haben.",
        ],
      },
      {
        title: "Slide 9: Heizkörper-Optimierung",
        body: [
          "<<Wir sind der einzige Anbieter in Deutschland, der jeden Heizkörper einzeln prüft.",
          "Simulation bei kältesten Außentemperaturen der letzten 20 Jahre (z.B. -10,3°C).",
          "<<Sollte ein Heizkörper nicht ausreichen, tauschen wir ihn kostenlos mit aus.",
          "→ Übergang: <<Wie hoch ist die durchschnittliche Lebensdauer einer Wärmepumpe? (20–25 Jahre)",
        ],
      },
      {
        title: "Slide 10: Wirtschaftliche Betrachtung",
        body: [
          "<<Sie hatten gesagt, Ihnen ist die Wirtschaftlichkeit besonders wichtig — richtig? → Ja holen.",
          "Stift + Papier aktivieren — gemeinsam auf dem Block rechnen!",
          "Ausgangssituation aufschreiben: aktueller Gasverbrauch, aktueller Monatsbetrag.",
          "<<Wenn wir die Entwicklung der letzten Jahre weiterdenken — wo stehen wir in 5 Jahren?",
          "<<Sagen wir zwischen 500 und 750 € im Monat — mit welcher Zahl fühlen Sie sich wohler?",
          "Jahresarbeitszahl / COP: 25.000 kWh Gas → nur noch ~8.500 kWh Strom.",
        ],
      },
      {
        title: "Slide 11: Förderung",
        body: [
          "Bis zu 70% Förderung sind aktuell möglich.",
          "Als KfW-Premium Partner können wir Förderkondition 2025 noch sichern.",
          "Geschwindigkeitsbonus: 3.000 € zusätzlich für schnellen Wechsel.",
          "<<Eine moderne Wärmepumpe erhöht den Immobilienwert direkt.",
          "<<Da haben Sie die Möglichkeit, sich von den vielen Steuern mal was zurückzuholen.",
        ],
      },
      {
        title: "Slide 12: Finanzierung",
        body: [
          "Laufzeit 15 Jahre: Rate von nur 202,77 €.",
          "Jederzeit kostenlose Sondertilgung möglich.",
          "<<Was finden Sie besser? → Kunde entscheiden lassen.",
        ],
      },
      {
        title: "Slide 13: Wartung",
        body: [
          "Wartung Voraussetzung für 10-Jahre-Garantie.",
          "Fernwartung + kostenloser Störungsdienst inklusive.",
          "Jahr 1–5: 199 €/Jahr · ab Jahr 6: 299 €/Jahr.",
          "<<Das können Sie bei uns machen, müssen aber nicht.",
        ],
      },
      {
        title: "Slide 14: Reservierung & nächste Schritte",
        body: [
          "<<Ich habe mir heute einen ersten Eindruck gemacht und alle relevanten Bilder aufgenommen.",
          "<<Parallel prüfen wir den Grundbucheintrag — nur als selbstnutzender Eigentümer sind Förderungen erlaubt.",
          "<<Rückmeldung kommt in der Regel innerhalb 48 Stunden.",
          "Förderzusage → technische Vollplanung → Einbautermin.",
        ],
      },
    ],
    flashcards: [
      { id: "p1", front: "Was ist das Virtual Power Plant und die Apple-Analogie?", back: "<<Wir verbinden alle Anlagen unserer Kunden zu einem intelligent gesteuerten Netzwerk (aktuell 100.000+). Hard- und Software aus einer Hand — alles funktioniert sauber zusammen, wie bei Apple.\"" },
      { id: "p2", front: "CO₂-Preis: aktuelle Lage und Prognose 2027", back: "Aktuell: über 60 €/Tonne (von 30 € in 2023/24)\nAb 2027: freier Markthandel → Prognose ~150 €/Tonne\n\nWirkung: drastisch steigende Heizkosten für alle Gas-/Ölheizungen." },
      { id: "p3", front: "Wie viel kWh braucht eine Wärmepumpe im Vergleich zur Gasheizung?", back: "Gas: 25.000 kWh → Wärmepumpe: nur ~8.500 kWh Strom\n\nReduktion um mehr als zwei Drittel — bei gleicher oder besserer Wärme." },
      { id: "p4", front: "Was ist der Enpal Stromtarif und warum ist er günstiger?", back: "~16 Cent/kWh — günstigster Stromtarif Deutschlands.\n\nDurch das Virtual Power Plant: je größer das Netzwerk, desto effizienter und günstiger. Langfristiges Ziel: 0 Cent." },
      { id: "p5", front: "Rechenbeispiel: Was kostet Heizen mit Wärmepumpe pro Monat?", back: "8.500 kWh × 16 Cent = 1.360 € / Jahr = 114 € / Monat\n\nVs. Gasheizung mit perspektivisch 600 € / Monat → Ersparnis ~5.800 € / Jahr → 116.000 € in 20 Jahren." },
      { id: "p6", front: "Was sind die Förderkomponenten und wie hoch ist die maximale Förderung?", back: "Bis zu 70%!\n\nGrundförderung + Geschwindigkeitsbonus (3.000 €) + ggf. Einkommensbonus.\n\nAls KfW-Premium Partner können aktuelle Konditionen 2025 noch gesichert werden." },
      { id: "p7", front: "Was ist der Schallpegel der Enpal/Bosch Wärmepumpe?", back: "34 dB (40 dB bei 12 kW-Modell) bei 1 Meter Abstand.\n\nVergleich: So leise wie ein Computerventilator — geht in den Nebengeräuschen draußen komplett unter." },
      { id: "p8", front: "Was passiert beim gemeinsamen Rechnen? (Methode)", back: "Stift + Papier aktivieren!\nBeide schreiben mit.\n\nLinks: aktuelle Situation (Gaskosten heute, in 5/10/20 Jahren)\nRechts: Wärmepumpe (kWh, Strompreis, monatliche Rate)\n\nKunde soll selbst die Zahlen nennen und sagen lassen." },
      { id: "p9", front: "Was ist die Wartungsrate und wofür ist sie Voraussetzung?", back: "Jahr 1–5: 199 €/Jahr\nAb Jahr 6: 299 €/Jahr\n\nVoraussetzung für die 10-Jahre-Garantie.\nFernwartung + kostenloser Störungsdienst inklusive." },
      { id: "p10", front: "Warum prüft Enpal als EINZIGER Anbieter jeden Heizkörper?", back: "Weil der Heizkörper die Effizienz des Gesamtsystems bestimmt. Simulation bei kältesten Temperaturen der letzten 20 Jahre.\n\nBei unzureichenden Heizkörpern: kostenlosen Tausch inklusive." },
    ],
    quiz: [
      {
        id: "pq1",
        question: "Auf wie viel kWh reduziert sich der Energieeinsatz beim Wechsel von 25.000 kWh Gas auf Wärmepumpe?",
        options: ["15.000 kWh", "12.000 kWh", "8.500 kWh", "5.000 kWh"],
        correct: 2,
        explanation: "25.000 kWh Gas → ~8.500 kWh Strom. Das ist eine Reduktion um mehr als zwei Drittel bei gleicher/besserer Wärme.",
      },
      {
        id: "pq2",
        question: "Wie viel wird mit dem günstigen Enpal-Stromtarif (16 Cent) bei 8.500 kWh monatlich gezahlt?",
        options: ["89 €", "114 €", "156 €", "202 €"],
        correct: 1,
        explanation: "8.500 kWh × 0,16 € = 1.360 €/Jahr ÷ 12 = 114 €/Monat. Vergleich: Gasheizung perspektivisch bei ~600 €/Monat.",
      },
      {
        id: "pq3",
        question: "Was ist der Geschwindigkeitsbonus bei Enpal?",
        options: ["1.000 €", "2.000 €", "3.000 €", "5.000 €"],
        correct: 2,
        explanation: "3.000 € Geschwindigkeitsbonus für schnellen Wechsel — zusätzlich zur Grundförderung und dem Einkommensbonus.",
      },
      {
        id: "pq4",
        question: "Ab wann wird laut Playbook mit CO₂-Zertifikaten am freien Markt gehandelt?",
        options: ["2025", "2026", "2027", "2030"],
        correct: 2,
        explanation: "Ab 2027 werden CO₂-Zertifikate am freien Markt gehandelt. Dann wird mit einer Steuer von rund 150 €/Tonne gerechnet.",
      },
      {
        id: "pq5",
        question: "Was ist die monatliche Finanzierungsrate bei 15 Jahren Laufzeit?",
        options: ["169,99 €", "202,77 €", "249,00 €", "299,99 €"],
        correct: 1,
        explanation: "Bei einer Laufzeit von 15 Jahren beträgt die Rate nur 202,77 €. Jederzeit kostenlose Sondertilgung möglich.",
      },
      {
        id: "pq6",
        question: "Welche Analogie verwendet das Playbook für das Verhältnis Wärmepumpe–Heizkörper?",
        options: ["Flugzeug und Triebwerk", "Motor und Reifen", "Smartphone und App", "Kessel und Rohre"],
        correct: 1,
        explanation: "Motor und Reifen: Der beste Motor bringt nichts, wenn die Reifen die Leistung nicht auf die Straße bringen. Erst wenn beides passt, funktioniert das System wirklich effizient.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // MODULE 5: Einwandbehandlung
  // ─────────────────────────────────────────────
  {
    id: "einwand",
    title: "Einwandbehandlung",
    emoji: "🥊",
    description: "Vom Nein zum Ja — 8 Kapitel, 7 Einwände, 5 Gesetze",
    accentColor: "red",
    sections: [
      {
        title: "Mindset: Verkauf beginnt beim Nein",
        body: [
          "Bestellungen entgegennehmen kann jeder. Verkaufen beginnt erst, wenn der Kunde 'Nein', 'Zu teuer', 'Ich überlege' sagt.",
          "0% Verständnis. 100% Führung.",
          "Du nickst keinen Einwand ab. Du bestätigst nicht 'das verstehe ich'. Wer bestätigt, gibt dem Einwand Gewicht.",
          "Jeder Einwand ist ein Hilferuf nach mehr Sicherheit. Der Kunde will kaufen — aber er traut sich noch nicht.",
        ],
      },
      {
        title: "Die 3 Typen von Widerstand",
        body: [
          "1. BESCHWERDE (offene Tür) — Kunde sagt offen, was ihn stört. Ist KEINE Absage. Behandelst du sachlich und zügig.",
          "2. VORWAND (Wand vor dem echten Grund) — Hinter dem Vorwand steckt der eigentliche Grund. Räumst du weg, indem du dahinter schaust.",
          "3. EINWAND (echter Grund) — Konkreter, fassbarer Punkt. Hat eine Logik. Ist verhandelbar.",
          "MERKSATZ: Beschwerden behandeln. Vorwände sammeln. Einwände auflösen.",
        ],
      },
      {
        title: "Die goldene Wenn-Dann-Brücke",
        body: [
          "<<Also — wenn [Einwand X] gelöst wäre, würden Sie sich die Enpal Wärmepumpe heute zulegen?",
          "Sagt der Kunde JA → echter Einwand → jetzt behandeln",
          "Sagt der Kunde NEIN → Vorwand → nachhaken: 'Okay, was ist dann der eigentliche Punkt?'",
        ],
      },
      {
        title: "Die 4 Vertrauens-Layer",
        body: [
          "Wenn der Kunde mauert, arbeitest du diese 4 Ebenen ab:",
          "Ebene 1: VERTRAUEN IN DICH PERSÖNLICH — 'Vertrauen Sie mir noch nicht?'",
          "Ebene 2: VERTRAUEN IN ENPAL — '100.000 Haushalte, Marktführer...'",
          "Ebene 3: VERTRAUEN IN DIE TECHNIK — 'Sorge, dass es nicht warm wird, laut ist?'",
          "Ebene 4: VERTRAUEN IN DIE UMSETZUNG — 'Sorge um Handwerker, Baustelle, Ablauf?'",
        ],
      },
      {
        title: "Einwand 1: Zu teuer",
        body: [
          "Erste Antwort: <<Was genau meinen Sie mit 'teuer'? Im Vergleich wozu? Heizen müssen Sie ja so oder so.",
          "Zweite Antwort: Zeithebel — <<Wann ist ein Heizungswechsel bei Ihnen geplant? Wie alt ist die Anlage?",
          "Dritte Antwort: Warte-Szenario — CO₂-Preis bis 2030: 200+ €/Tonne. Notfall-Tausch im Winter: 3.000–6.000 € Aufpreis, KEINE Förderung.",
          "<<Nichtstun ist auch eine Entscheidung. Nur die teuerste.",
        ],
      },
      {
        title: "Einwand 2: Wettbewerber ist günstiger",
        body: [
          "SOFORT tauschen: 'günstiger' gegen 'billiger' — 'billig' trägt automatisch 'minderwertig' in sich.",
          "Prüfliste: SCOP, R290 vs R32, Heizkörpertausch inklusive?, hydraulischer Abgleich?, Garantie?, KfW-Antragsbearbeitung?",
          "In 8 von 10 Fällen findet ihr hier 3.000–8.000 € versteckte Differenz.",
          "Lebenszyklusrechnung: Besserer SCOP → 250 € weniger/Jahr → über 20 Jahre = 5.000 €.",
          "NICHT TUN: Sofort Rabatt geben. Kontrollierte Optionen in dieser Reihenfolge: 2% Skonto, Solarthermie-Anbindung entfernen, Gutschein.",
        ],
      },
      {
        title: "Einwand 3: Ich will weitere Angebote einholen",
        body: [
          "Kategorisieren: Was wollen Sie herausfinden — Preis, Technik oder Bauchgefühl beim Anbieter?",
          "Zeitrechnung: 3 Heimtermine = 15 Stunden Ihrer Zeit + 2–4 Wochen Wartezeit pro Angebot + Förderbescheid läuft ab.",
          "Reservierungs-Deal: 'Ich reserviere Ihnen unverbindlich einen Montagetermin. Falls Sie sich gegen uns entscheiden — null Verpflichtung.'",
        ],
      },
      {
        title: "Einwand 4: Lokaler Anbieter / Nachbar empfiehlt",
        body: [
          "NICHT dagegen arbeiten — prüfen lassen!",
          "Prüffragen: Hatte der Nachbar wirklich eine WP? Vergleichbare Hausgröße? Schon einen Winter durchgelaufen?",
          "3 harte Punkte: Wärmepumpen-Erfahrung (<20 WPs in 12 Monaten = vorsichtig), Service-Kapazität (24h-Dienst), Insolvenzrisiko.",
        ],
      },
      {
        title: "Einwand 5–7: Öltank, Heizung läuft noch, Haus verkaufen",
        body: [
          "Öltank: Sunk Cost Fallacy — 'Das Geld ist weg. Die einzige Frage ist: Was ist ab heute die beste Entscheidung für 20 Jahre?'",
          "Heizung läuft noch: Förderung bei Notfall-Tausch faktisch weg (12.000–18.000 € verloren). Warte-Kosten gesamt: 20.000–30.000 € mehr.",
          "Haus verkaufen: Mit WP: +15–25% Immobilienwert. Ohne WP: GEG-Pflicht für Erben, ohne Ihre Förderung.",
        ],
      },
      {
        title: "Die 5 Einwand-Gesetze",
        body: [
          "1. SAMMELN VOR BEHANDELN — Alle Bedenken in der Bedarfsanalyse aufschreiben.",
          "2. 0% VERSTÄNDNIS, 100% FÜHRUNG — Nicht bestätigen, nicht beschönigen. Direkt zur nächsten Frage.",
          "3. WENN-DANN-BRÜCKE nach jedem Einwand.",
          "4. VIER VERTRAUENS-LAYER abklopfen wenn Kunde mauert.",
          "5. KEIN TERMIN OHNE FOLGETERMIN — Datum, Uhrzeit, Dauer. 'Ich melde mich' ist verlorenes Geld.",
        ],
      },
    ],
    flashcards: [
      { id: "e1", front: "Die 3 Typen von Widerstand", back: "1. BESCHWERDE — offen, ehrlich, keine Absage → sachlich behandeln\n2. VORWAND — Wand vor dem echten Grund → dahinter schauen\n3. EINWAND — echter, fassbarer Grund → auflösen\n\nMerksatz: Beschwerden behandeln. Vorwände sammeln. Einwände auflösen." },
      { id: "e2", front: "Die goldene Wenn-Dann-Brücke", back: "<<Also — wenn [Einwand X] gelöst wäre, würden Sie sich die Wärmepumpe heute zulegen?\"\n\nJa → echter Einwand → behandeln\nNein/Zögern → Vorwand → <<Was ist dann der eigentliche Punkt?\"" },
      { id: "e3", front: "Einwand: 'Ist mir zu teuer'", back: "1. Begriff kleinmachen: <<Im Vergleich wozu? Heizen müssen Sie so oder so.\"\n2. Zeithebel: <<Wie alt ist Ihre Anlage? Bestimmen Sie den Zeitpunkt selbst oder bestimmt er Sie?\"\n3. Warte-Szenario: Notfall-Tausch ohne Förderung + CO₂-Anstieg = doppelt zahlen.\n→ <<Nichtstun ist die teuerste Entscheidung.\"" },
      { id: "e4", front: "Einwand: 'Wettbewerber ist günstiger'", back: "SOFORT tauschen: 'günstiger' → 'billiger' (klingt nach Risiko)\n\nPrüfliste: SCOP, R290, Heizkörpertausch, hydraul. Abgleich, Garantie, KfW.\n→ In 8/10 Fällen: 3.000–8.000 € versteckte Differenz gefunden.\n\nNIE sofort Rabatt geben!" },
      { id: "e5", front: "Einwand: 'Ich muss noch weitere Angebote einholen'", back: "1. Kategorisieren: Preis, Technik oder Bauchgefühl?\n2. Zeitrechnung: 15 Stunden + 2–4 Wochen pro Angebot + Förderbescheid läuft ab\n3. Reservierungs-Deal: unverbindlich reservieren, null Verpflichtung" },
      { id: "e6", front: "Einwand: 'Meine Heizung geht noch'", back: "3 Gründe gegen Warten:\n1. Förderung bei Notfall-Tausch faktisch weg (−12.000–18.000 €)\n2. Markt wird teurer (+18% Material, +14% Lohn seit 2022)\n3. CO₂-Preis: heute ~55 €/t, 2027 voraussichtlich 80–100 €/t\n\nGesamt: 20.000–30.000 € teurer als geplanter Tausch heute." },
      { id: "e7", front: "Einwand: 'Ich muss mit meiner Frau sprechen'", back: "<<Was sind die 3 Punkte, an denen sich Ihre Frau garantiert aufhängen wird? Lassen Sie uns die jetzt schon klären — dann gehen Sie heute Abend mit fertigen Antworten ins Gespräch.\n\nTipp: Wenn Kunde sagt, Partner wäre einverstanden, war das nie das echte Thema." },
      { id: "e8", front: "Einwand: 'Voller Öltank'", back: "Sunk Cost Fallacy:\n<<Das Geld ist weg — ob Sie bleiben oder gehen. Die einzige relevante Frage: Was ist ab heute die beste Entscheidung für die nächsten 20 Jahre?\"\n\n<<Haben Sie lieber 2–3.000 € Restwert im Tank — oder 15.000 € Förderung auf dem Konto?\"" },
      { id: "e9", front: "Einwand: 'Ich will das Haus bald verkaufen'", back: "Die Erben-Rechnung:\n• Ohne WP: 15–25% Preisabschlag beim Verkauf oder GEG-Pflicht für Erben (ohne Ihre Förderung)\n• Mit WP: Immobilienwert steigt direkt\n\n→ Sie hinterlassen Ihren Kindern mehr Geld MIT Wärmepumpe als ohne." },
      { id: "e10", front: "Die 5 Einwand-Gesetze", back: "1. SAMMELN vor Behandeln — Bedarfsanalyse\n2. 0% Verständnis, 100% Führung\n3. Wenn-Dann-Brücke nach jedem Einwand\n4. Vier Vertrauens-Layer abklopfen\n5. Kein Termin ohne Folgetermin (Datum, Uhrzeit, Dauer)" },
      { id: "e11", front: "Die 4 Vertrauens-Layer (Reihenfolge)", back: "Ebene 1: Vertrauen in DICH PERSÖNLICH\nEbene 2: Vertrauen in ENPAL als Unternehmen\nEbene 3: Vertrauen in die TECHNIK\nEbene 4: Vertrauen in die UMSETZUNG (Handwerker, Ablauf)\n\n→ Bei einer Ebene reagiert der Kunde → das ist der echte Punkt." },
      { id: "e12", front: "Was passiert laut Playbook mit 'Kein Interesse'?", back: "<<Kein Interesse\" ist NIE der echte Grund. Es ist ein Reflex.\n\nReaktion: <<Ist das 'kein Interesse weil das Thema Sie grundsätzlich nicht betrifft', oder 'weil Sie heute mit etwas anderem gerechnet haben'?\\n\n<<Heizen müssen Sie ja so oder so — die Frage ist nur: zu welchen Kosten?\"" },
    ],
    quiz: [
      {
        id: "eq1",
        question: "Was bedeutet der Merksatz 'Beschwerden behandeln. Vorwände sammeln. Einwände auflösen.'?",
        options: [
          "Alle drei Typen sind gleich zu behandeln",
          "Jeder Typ braucht eine andere Strategie",
          "Nur Einwände sind relevant",
          "Vorwände sind wichtiger als Einwände",
        ],
        correct: 1,
        explanation: "Die drei Typen unterscheiden sich grundlegend: Beschwerden sind offen und werden sachlich behandelt. Vorwände verdecken den echten Grund und müssen aufgedeckt werden. Echte Einwände haben eine Logik und sind verhandelbar.",
      },
      {
        id: "eq2",
        question: "Was tust du mit dem Wort 'günstiger', wenn der Kunde sagt 'Wettbewerber XY ist günstiger'?",
        options: ["Du verwendest es selbst", "Du tauschst es sofort gegen 'billiger'", "Du ignorierst es", "Du fragst nach dem Preis"],
        correct: 1,
        explanation: "SOFORT tauschen: 'günstiger' gegen 'billiger'. Das Wort 'billig' trägt automatisch 'minderwertig' in sich. 'Günstig' klingt nach Schnäppchen — 'billig' nach Risiko. Nutze das.",
      },
      {
        id: "eq3",
        question: "Sagt der Kunde auf die Wenn-Dann-Brücke 'Nein' — was bedeutet das?",
        options: [
          "Der Einwand ist echt und muss behandelt werden",
          "Der Kunde ist nicht kaufbereit",
          "Es war ein Vorwand — der echte Grund liegt woanders",
          "Das Gespräch ist beendet",
        ],
        correct: 2,
        explanation: "Sagt der Kunde Nein — dann war es nie der echte Einwand. Es war ein Vorwand. Jetzt setzt du nach: 'Okay, was ist denn dann der eigentliche Punkt?'",
      },
      {
        id: "eq4",
        question: "Was ist die 'Sunk Cost Fallacy' im Kontext 'voller Öltank'?",
        options: [
          "Der Tank muss zuerst aufgebraucht werden",
          "Das bereits bezahlte Geld ist weg — die Frage ist nur, was ab heute die beste Entscheidung ist",
          "Ein voller Öltank ist ein Vorteil",
          "Man sollte warten bis der Tank leer ist",
        ],
        correct: 1,
        explanation: "Sunk Cost Fallacy: Das Geld ist bezahlt und weg — ob man bleibt oder geht. Die einzige relevante Frage: Was ist ab heute die beste Entscheidung für die nächsten 20 Jahre?",
      },
      {
        id: "eq5",
        question: "Was ist laut den 5 Einwand-Gesetzen der Fehler bei 'Ich melde mich'?",
        options: [
          "Es ist unhöflich", "Es verpflichtet den Kunden nicht", "Es ist verlorenes Geld ohne festes Datum/Uhrzeit/Dauer", "Es gibt keinen Fehler",
        ],
        correct: 2,
        explanation: "Gebot 5: Kein Termin ohne Folgetermin. Datum, Uhrzeit, Dauer — schwarz auf weiß. 'Ich melde mich' ist verlorenes Geld.",
      },
      {
        id: "eq6",
        question: "In wie vielen von 10 Fällen findet man bei Wettbewerbsvergleichen 3.000–8.000 € versteckte Differenz?",
        options: ["3 von 10", "5 von 10", "8 von 10", "10 von 10"],
        correct: 2,
        explanation: "In 8 von 10 Fällen findet ihr durch die detaillierte Prüfliste (SCOP, Heizkörpertausch, Garantie, etc.) 3.000–8.000 € versteckte Differenz, die im Hauptpreis nicht sichtbar war.",
      },
      {
        id: "eq7",
        question: "Was empfiehlt das Playbook bei Entscheidungsangst ('Heizung läuft noch')?",
        options: [
          "Warten und nochmals anrufen",
          "Förderantrag, Heizlastberechnung und Materialreservierung starten — der Kunde entscheidet dann immer noch frei",
          "Preis reduzieren",
          "Termin absagen",
        ],
        correct: 1,
        explanation: "Reaktion bei Entscheidungsangst: Planung anstoßen (Förderantrag, Heizlastberechnung, Materialreservierung dauert 8–12 Wochen). In 4 Wochen alles vorbereitet — Kunde entscheidet frei ob sofort installiert wird.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // MODULE 6: Abschluss & Nachbereitung
  // ─────────────────────────────────────────────
  {
    id: "abschluss",
    title: "Abschluss & Nachbereitung",
    emoji: "✍️",
    description: "Reservierung, Abschlussfragen & Follow-up",
    accentColor: "cyan",
    sections: [
      {
        title: "Die Abschlussfrage",
        body: [
          "<<Wenn Sie sich das Gesamtbild anschauen: Ersparnis, Planbarkeit und die aktuellen Förderungen — macht das für Sie grundsätzlich Sinn?",
          "<<Wenn alles so umgesetzt werden könnte, wie wir es heute besprochen haben — wären Sie bereit, das so anzugehen?",
          "→ Kunde muss sagen: <<Ich finde das gut. Zu 80% will ich es machen!",
          "<<Was müsste noch passieren, damit Sie sich damit wirklich zu 100% wohlfühlen?",
        ],
      },
      {
        title: "Positionierung der Reservierung",
        body: [
          "<<Was wir jetzt machen können: Ich reserviere Ihnen die aktuellen Konditionen und prüfe mit meinem Techniker-Team, ob alles so umsetzbar ist.",
          "<<Das kostet Sie nichts und verpflichtet Sie zu nichts. Aber es sorgt dafür, dass wir für Sie arbeiten dürfen.",
          "<<Ohne Reservierung bleibt das eine nette Präsentation. Mit Reservierung wird es ein echtes Projekt.",
          "Dringlichkeit: <<Die Förderung ist aktuell bei bis zu 70%. Das wird nicht ewig so bleiben.",
        ],
      },
      {
        title: "Gesprächsende & Nachbereitung",
        body: [
          "Laptop zuklappen.",
          "<<Was waren für Sie heute die 2–3 wichtigsten Punkte oder Highlights? → Verstärken!",
          "<<Hat mir wirklich Spaß gemacht heute, sehr angenehmes Gespräch.",
          "<<Dann sehen wir uns am [Datum] wieder. Ich freue mich drauf!",
          "Nach dem SC1: Feel-Good-Dokument per Mail/WhatsApp versenden.",
          "Top-Seller halten Kontakt: WhatsApp, Anrufe — Kunden wollen umworben werden!",
        ],
      },
    ],
    flashcards: [
      { id: "a1", front: "Die zentrale Abschlussfrage", back: "<<Wenn alles so umgesetzt werden könnte, wie wir es heute besprochen haben — wären Sie bereit, das so anzugehen?\n\n→ Kunde muss zu 80% positiv sein, sonst: Einwandbehandlung!" },
      { id: "a2", front: "Wie positionierst du die Reservierung?", back: "<<Das kostet Sie nichts und verpflichtet Sie zu nichts. Aber es sorgt dafür, dass wir für Sie arbeiten dürfen.\n\nOhne Reservierung: nette Präsentation.\nMit Reservierung: echtes Projekt.\"" },
      { id: "a3", front: "Was machst du nach der Reservierung mit dem Laptop?", back: "Laptop ZUKLAPPEN.\n\nDann: 'Was waren für Sie heute die 2–3 wichtigsten Punkte oder Highlights?'\n\n→ Diese Punkte nochmals verstärken → Kaufentscheidung emotional festigen." },
      { id: "a4", front: "Was wird nach dem SC1 versendet?", back: "Das Feel-Good-Dokument — per Mail oder WhatsApp.\n\nDanach: Kontakt halten durch WhatsApp und Anrufe.\nKunden wollen umworben werden — Top-Seller bleiben am Ball!" },
      { id: "a5", front: "Wie lautet die finale Brücke, wenn der Kunde gar nicht loslässt?", back: "<<Zwei Sachen: Montagetermine vor der Heizperiode sind bis Mitte August belegt. Förderung gibt es nur wenn Antrag VOR Auftragserteilung gestellt ist.\n\n'Ich blockiere uns einen festen Termin — nächsten Mittwoch 18 Uhr, 30 Minuten. Klingt das fair?'" },
    ],
    quiz: [
      {
        id: "aq1",
        question: "Was machst du mit dem Laptop nach der Reservierung?",
        options: ["Nächste Präsentation öffnen", "Laptop zuklappen", "Kalkulation zeigen", "CRM öffnen"],
        correct: 1,
        explanation: "Laptop jetzt zuklappen! Dann die Frage stellen: 'Was waren für Sie heute die 2–3 wichtigsten Punkte?' — Diese verstärken und die Kaufentscheidung emotional festigen.",
      },
      {
        id: "aq2",
        question: "Was kostet eine Reservierung den Kunden?",
        options: ["500 € Anzahlung", "Nichts — und verpflichtet zu nichts", "Die erste Monatsrate", "Den Förderantrag"],
        correct: 1,
        explanation: "Die Reservierung kostet den Kunden nichts und verpflichtet ihn zu nichts. Aber sie sorgt dafür, dass das Team für ihn arbeiten darf.",
      },
      {
        id: "aq3",
        question: "Was passiert ohne Reservierung laut Playbook?",
        options: ["Der SC2 findet trotzdem statt", "Es bleibt eine nette Präsentation", "Der Techniktermin wird gebucht", "Der Lead wird abgeschlossen"],
        correct: 1,
        explanation: "Ohne Reservierung bleibt das hier eine nette Präsentation. Mit Reservierung wird es ein echtes Projekt — die Ingenieure planen, das Grundbuch wird geprüft, der Förderantrag vorbereitet.",
      },
      {
        id: "aq4",
        question: "Was wird unmittelbar nach dem SC1 an den Kunden gesendet?",
        options: ["Das finale Angebot", "Das Feel-Good-Dokument", "Der Förderantrag", "Die Heizlastberechnung"],
        correct: 1,
        explanation: "Nach dem SC1: Versand des Feel-Good-Dokuments per Mail/WhatsApp. Danach: Kontakt halten durch WhatsApp und Anrufe — Kunden wollen umworben werden.",
      },
    ],
  },
];
