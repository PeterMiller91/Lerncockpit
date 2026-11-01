"use client";

import { useState, useEffect, useCallback } from "react";
import { modules } from "@/data/content";
import type { Module, Flashcard, QuizQuestion } from "@/data/content";

// ─── Types ──────────────────────────────────────────────────────────────────

type View = "home" | "module" | "reader" | "flashcards" | "quiz";

interface ModuleProgress {
  knownCardIds: string[];
  quizBestScore: number;
  readerDone: boolean;
}

interface AppProgress {
  [moduleId: string]: ModuleProgress;
}

// ─── Progress helpers ────────────────────────────────────────────────────────

function loadProgress(): AppProgress {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem("sc1_progress") || "{}");
  } catch {
    return {};
  }
}

function saveProgress(p: AppProgress) {
  localStorage.setItem("sc1_progress", JSON.stringify(p));
}

function getModuleProgress(p: AppProgress, id: string): ModuleProgress {
  return p[id] || { knownCardIds: [], quizBestScore: 0, readerDone: false };
}

function moduleScore(p: AppProgress, mod: Module): number {
  const mp = getModuleProgress(p, mod.id);
  const cardPct = mod.flashcards.length > 0 ? (mp.knownCardIds.length / mod.flashcards.length) * 40 : 0;
  const quizPct = mod.quiz.length > 0 ? (mp.quizBestScore / mod.quiz.length) * 40 : 0;
  const readerPct = mp.readerDone ? 20 : 0;
  return Math.min(100, Math.round(cardPct + quizPct + readerPct));
}

// ─── Accent colours ──────────────────────────────────────────────────────────

const ACCENT: Record<string, { bg: string; text: string; border: string; ring: string; btn: string; light: string }> = {
  amber:  { bg: "bg-amber-500",  text: "text-amber-400",  border: "border-amber-500",  ring: "#f59e0b", btn: "bg-amber-500 hover:bg-amber-400",  light: "bg-amber-500/10" },
  blue:   { bg: "bg-blue-500",   text: "text-blue-400",   border: "border-blue-500",   ring: "#3b82f6", btn: "bg-blue-500 hover:bg-blue-400",    light: "bg-blue-500/10" },
  green:  { bg: "bg-emerald-500",text: "text-emerald-400",border: "border-emerald-500",ring: "#10b981", btn: "bg-emerald-500 hover:bg-emerald-400", light: "bg-emerald-500/10" },
  purple: { bg: "bg-violet-500", text: "text-violet-400", border: "border-violet-500", ring: "#8b5cf6", btn: "bg-violet-500 hover:bg-violet-400",  light: "bg-violet-500/10" },
  red:    { bg: "bg-rose-500",   text: "text-rose-400",   border: "border-rose-500",   ring: "#f43f5e", btn: "bg-rose-500 hover:bg-rose-400",    light: "bg-rose-500/10" },
  cyan:   { bg: "bg-cyan-500",   text: "text-cyan-400",   border: "border-cyan-500",   ring: "#06b6d4", btn: "bg-cyan-500 hover:bg-cyan-400",    light: "bg-cyan-500/10" },
};

function accent(color: string) {
  return ACCENT[color] || ACCENT.amber;
}

// ─── ProgressRing ────────────────────────────────────────────────────────────

function ProgressRing({ pct, color, size = 56 }: { pct: number; color: string; size?: number }) {
  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return (
    <svg width={size} height={size} className="rotate-[-90deg]">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#27272a" strokeWidth={5} />
      <circle
        cx={size / 2} cy={size / 2} r={r} fill="none"
        stroke={accent(color).ring} strokeWidth={5}
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        style={{ transition: "stroke-dashoffset 0.6s ease" }}
      />
      <text
        x={size / 2} y={size / 2 + 1}
        textAnchor="middle" dominantBaseline="middle"
        fill="#f4f4f5" fontSize={size < 50 ? 10 : 12} fontWeight="600"
        style={{ transform: "rotate(90deg)", transformOrigin: `${size / 2}px ${size / 2}px` }}
      >
        {pct}%
      </text>
    </svg>
  );
}

// ─── Home view ───────────────────────────────────────────────────────────────

function HomeView({
  progress,
  onSelectModule,
}: {
  progress: AppProgress;
  onSelectModule: (mod: Module) => void;
}) {
  const totalScore = modules.reduce((s, m) => s + moduleScore(progress, m), 0);
  const overallPct = Math.round(totalScore / modules.length);

  return (
    <div className="fade-in min-h-screen px-4 py-8 max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="text-5xl mb-3">🚀</div>
        <h1 className="text-3xl font-bold text-white mb-1">SC1 Lerncockpit</h1>
        <p className="text-zinc-400 text-sm">Nova Reach · Sales Playbook</p>
        <div className="flex items-center justify-center gap-3 mt-5">
          <ProgressRing pct={overallPct} color="amber" size={64} />
          <div className="text-left">
            <p className="text-zinc-400 text-xs uppercase tracking-wide">Gesamtfortschritt</p>
            <p className="text-white font-semibold">{overallPct}% abgeschlossen</p>
          </div>
        </div>
      </div>

      {/* Module cards */}
      <div className="space-y-3">
        {modules.map((mod) => {
          const pct = moduleScore(progress, mod);
          const mp = getModuleProgress(progress, mod.id);
          const a = accent(mod.accentColor);
          return (
            <button
              key={mod.id}
              onClick={() => onSelectModule(mod)}
              className={`w-full text-left rounded-2xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition-all p-5 flex items-center gap-4 group`}
            >
              <div className={`text-3xl w-12 h-12 flex items-center justify-center rounded-xl ${a.light} flex-shrink-0`}>
                {mod.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`font-semibold text-white group-hover:${a.text} transition-colors`}>{mod.title}</p>
                <p className="text-zinc-500 text-sm truncate">{mod.description}</p>
                <div className="flex gap-3 mt-2 text-xs text-zinc-500">
                  <span>{mp.readerDone ? "✓" : "○"} Lesen</span>
                  <span>{mp.knownCardIds.length}/{mod.flashcards.length} Karten</span>
                  <span>{mp.quizBestScore}/{mod.quiz.length} Quiz</span>
                </div>
              </div>
              <ProgressRing pct={pct} color={mod.accentColor} size={48} />
            </button>
          );
        })}
      </div>

      <p className="text-center text-zinc-600 text-xs mt-10">
        Fortschritt wird automatisch gespeichert
      </p>
    </div>
  );
}

// ─── Module view ─────────────────────────────────────────────────────────────

function ModuleView({
  mod,
  progress,
  onBack,
  onStartReader,
  onStartCards,
  onStartQuiz,
}: {
  mod: Module;
  progress: AppProgress;
  onBack: () => void;
  onStartReader: () => void;
  onStartCards: () => void;
  onStartQuiz: () => void;
}) {
  const mp = getModuleProgress(progress, mod.id);
  const pct = moduleScore(progress, mod);
  const a = accent(mod.accentColor);

  return (
    <div className="fade-in min-h-screen px-4 py-8 max-w-2xl mx-auto">
      <button onClick={onBack} className="text-zinc-400 hover:text-white flex items-center gap-2 mb-6 text-sm transition-colors">
        ← Zurück
      </button>

      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className={`text-4xl w-16 h-16 flex items-center justify-center rounded-2xl ${a.light}`}>
          {mod.emoji}
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-white">{mod.title}</h1>
          <p className="text-zinc-400 text-sm">{mod.description}</p>
        </div>
        <ProgressRing pct={pct} color={mod.accentColor} size={56} />
      </div>

      {/* Learning modes */}
      <div className="space-y-3">
        {/* Reader */}
        <button
          onClick={onStartReader}
          className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition-all p-5 flex items-center gap-4 text-left"
        >
          <div className="text-2xl">📖</div>
          <div className="flex-1">
            <p className="font-semibold text-white">Lesen & Verstehen</p>
            <p className="text-zinc-500 text-sm">Alle Inhalte im Überblick</p>
          </div>
          {mp.readerDone && <span className="text-emerald-400 text-sm">✓ Gelesen</span>}
          <span className="text-zinc-600">›</span>
        </button>

        {/* Flashcards */}
        <button
          onClick={onStartCards}
          className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition-all p-5 flex items-center gap-4 text-left"
        >
          <div className="text-2xl">🃏</div>
          <div className="flex-1">
            <p className="font-semibold text-white">Karteikarten</p>
            <p className="text-zinc-500 text-sm">{mod.flashcards.length} Karten · Flip & learn</p>
          </div>
          <span className={`text-sm font-semibold ${a.text}`}>
            {mp.knownCardIds.length}/{mod.flashcards.length}
          </span>
          <span className="text-zinc-600">›</span>
        </button>

        {/* Quiz */}
        <button
          onClick={onStartQuiz}
          className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition-all p-5 flex items-center gap-4 text-left"
        >
          <div className="text-2xl">🧪</div>
          <div className="flex-1">
            <p className="font-semibold text-white">Quiz</p>
            <p className="text-zinc-500 text-sm">{mod.quiz.length} Fragen · Multiple Choice</p>
          </div>
          {mp.quizBestScore > 0 && (
            <span className={`text-sm font-semibold ${a.text}`}>
              Rekord {mp.quizBestScore}/{mod.quiz.length}
            </span>
          )}
          <span className="text-zinc-600">›</span>
        </button>
      </div>
    </div>
  );
}

// ─── Reader view ─────────────────────────────────────────────────────────────

function ReaderView({
  mod,
  onBack,
  onDone,
}: {
  mod: Module;
  onBack: () => void;
  onDone: () => void;
}) {
  const a = accent(mod.accentColor);
  return (
    <div className="fade-in min-h-screen px-4 py-8 max-w-2xl mx-auto">
      <button onClick={onBack} className="text-zinc-400 hover:text-white flex items-center gap-2 mb-6 text-sm transition-colors">
        ← Zurück
      </button>
      <div className="flex items-center gap-3 mb-8">
        <span className="text-3xl">{mod.emoji}</span>
        <h1 className="text-xl font-bold text-white">{mod.title}</h1>
      </div>

      <div className="space-y-8">
        {mod.sections.map((sec, si) => (
          <div key={si} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className={`font-semibold text-sm uppercase tracking-wide mb-4 ${a.text}`}>
              {sec.title}
            </h2>
            <div className="space-y-2">
              {sec.body.map((line, li) => {
                const isBullet = line.startsWith("•") || line.startsWith("✓") || line.startsWith("→") || line.match(/^\d+\./);
                return (
                  <p
                    key={li}
                    className={`text-sm leading-relaxed ${
                      isBullet ? "text-zinc-300 pl-2" : "text-zinc-300"
                    } ${line.startsWith("→") ? `${a.text} font-medium` : ""}`}
                  >
                    {line}
                  </p>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onDone}
        className={`w-full mt-8 py-4 rounded-2xl font-semibold text-white ${a.btn} transition-colors`}
      >
        ✓ Gelesen — weiter zu den Karten
      </button>
    </div>
  );
}

// ─── Flashcard view ───────────────────────────────────────────────────────────

function FlashcardsView({
  mod,
  progress,
  onBack,
  onUpdateProgress,
}: {
  mod: Module;
  progress: AppProgress;
  onBack: () => void;
  onUpdateProgress: (p: AppProgress) => void;
}) {
  const mp = getModuleProgress(progress, mod.id);
  const unknown = mod.flashcards.filter((c) => !mp.knownCardIds.includes(c.id));
  const [deck, setDeck] = useState<Flashcard[]>(unknown.length > 0 ? unknown : mod.flashcards);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [done, setDone] = useState(false);
  const a = accent(mod.accentColor);

  const card = deck[idx];

  function markKnown() {
    const newKnown = [...new Set([...mp.knownCardIds, card.id])];
    const updated = { ...progress, [mod.id]: { ...mp, knownCardIds: newKnown } };
    onUpdateProgress(updated);
    nextCard();
  }

  function markAgain() {
    nextCard();
  }

  function nextCard() {
    setFlipped(false);
    if (idx + 1 >= deck.length) {
      setDone(true);
    } else {
      setIdx(idx + 1);
    }
  }

  function restart() {
    setDeck(mod.flashcards);
    setIdx(0);
    setFlipped(false);
    setDone(false);
  }

  function restartUnknown() {
    const freshMp = getModuleProgress(progress, mod.id);
    const u = mod.flashcards.filter((c) => !freshMp.knownCardIds.includes(c.id));
    setDeck(u.length > 0 ? u : mod.flashcards);
    setIdx(0);
    setFlipped(false);
    setDone(false);
  }

  const freshMp = getModuleProgress(progress, mod.id);
  const knownCount = freshMp.knownCardIds.length;

  if (done) {
    return (
      <div className="fade-in min-h-screen px-4 py-8 max-w-2xl mx-auto flex flex-col items-center justify-center">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold text-white mb-2">Runde abgeschlossen!</h2>
        <p className="text-zinc-400 mb-6">
          {knownCount} / {mod.flashcards.length} Karten beherrscht
        </p>
        <ProgressRing pct={Math.round((knownCount / mod.flashcards.length) * 100)} color={mod.accentColor} size={80} />
        <div className="flex gap-3 mt-8 w-full max-w-xs flex-col">
          {mod.flashcards.length - knownCount > 0 && (
            <button onClick={restartUnknown} className={`py-3 rounded-xl font-semibold text-white ${a.btn} transition-colors`}>
              Unbekannte nochmal ({mod.flashcards.length - knownCount})
            </button>
          )}
          <button onClick={restart} className="py-3 rounded-xl font-semibold text-zinc-300 border border-zinc-700 hover:bg-zinc-800 transition-colors">
            Alle Karten wiederholen
          </button>
          <button onClick={onBack} className="py-3 rounded-xl text-zinc-500 hover:text-zinc-300 transition-colors">
            Zurück zum Modul
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-in min-h-screen px-4 py-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="text-zinc-400 hover:text-white text-sm transition-colors">
          ← Zurück
        </button>
        <span className="text-zinc-500 text-sm">
          {idx + 1} / {deck.length}
        </span>
        <span className={`text-sm font-semibold ${a.text}`}>
          {knownCount} bekannt
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-zinc-800 rounded-full mb-8 overflow-hidden">
        <div
          className={`h-full ${a.bg} rounded-full transition-all duration-300`}
          style={{ width: `${((idx + 1) / deck.length) * 100}%` }}
        />
      </div>

      {/* Card */}
      <div
        className="perspective-1000 cursor-pointer mb-6"
        style={{ perspective: "1000px", height: "300px" }}
        onClick={() => setFlipped(!flipped)}
      >
        <div className={`card-inner ${flipped ? "flipped" : ""}`} style={{ height: "100%" }}>
          {/* Front */}
          <div className={`card-face rounded-2xl border ${a.border} bg-zinc-900 p-6 flex flex-col items-center justify-center`}>
            <p className={`text-xs uppercase tracking-widest mb-4 ${a.text}`}>Frage</p>
            <p className="text-white text-center text-xl font-semibold leading-relaxed">{card.front}</p>
            <p className="text-zinc-500 text-sm mt-6">Tippe zum Umdrehen</p>
          </div>
          {/* Back */}
          <div className={`card-face card-back rounded-2xl border border-zinc-700 bg-zinc-800 p-6 flex flex-col items-center justify-center overflow-y-auto`}>
            <p className="text-xs uppercase tracking-widest mb-4 text-zinc-400">Antwort</p>
            <p className="text-zinc-200 text-center text-sm leading-relaxed whitespace-pre-line">{card.back}</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      {flipped && (
        <div className="fade-in flex gap-3">
          <button
            onClick={markAgain}
            className="flex-1 py-4 rounded-2xl font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
          >
            🔁 Nochmal
          </button>
          <button
            onClick={markKnown}
            className={`flex-1 py-4 rounded-2xl font-semibold text-white ${a.btn} transition-colors`}
          >
            ✓ Kenne ich
          </button>
        </div>
      )}
      {!flipped && (
        <div className="text-center text-zinc-600 text-sm mt-4">
          Karte antippen zum Umdrehen
        </div>
      )}
    </div>
  );
}

// ─── Quiz view ────────────────────────────────────────────────────────────────

function QuizView({
  mod,
  progress,
  onBack,
  onUpdateProgress,
}: {
  mod: Module;
  progress: AppProgress;
  onBack: () => void;
  onUpdateProgress: (p: AppProgress) => void;
}) {
  const mp = getModuleProgress(progress, mod.id);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const a = accent(mod.accentColor);

  const q: QuizQuestion = mod.quiz[idx];

  function select(optIdx: number) {
    if (selected !== null) return;
    setSelected(optIdx);
    if (optIdx === q.correct) setScore((s) => s + 1);
  }

  function next() {
    if (idx + 1 >= mod.quiz.length) {
      const finalScore = selected === q.correct ? score : score;
      const newBest = Math.max(mp.quizBestScore, finalScore);
      const updated = { ...progress, [mod.id]: { ...mp, quizBestScore: newBest } };
      onUpdateProgress(updated);
      setDone(true);
    } else {
      setIdx(idx + 1);
      setSelected(null);
    }
  }

  function restart() {
    setIdx(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  }

  if (done) {
    const pct = Math.round((score / mod.quiz.length) * 100);
    const freshBest = Math.max(mp.quizBestScore, score);
    return (
      <div className="fade-in min-h-screen px-4 py-8 max-w-2xl mx-auto flex flex-col items-center justify-center">
        <div className="text-6xl mb-4">{pct >= 80 ? "🏆" : pct >= 50 ? "💪" : "📚"}</div>
        <h2 className="text-2xl font-bold text-white mb-2">Quiz beendet!</h2>
        <p className="text-zinc-400 mb-6">
          {score} von {mod.quiz.length} richtig ({pct}%)
        </p>
        <ProgressRing pct={pct} color={mod.accentColor} size={80} />
        {freshBest >= score && (
          <p className={`mt-4 text-sm ${a.text}`}>
            Bester Score: {freshBest}/{mod.quiz.length}
          </p>
        )}
        <div className="flex flex-col gap-3 mt-8 w-full max-w-xs">
          <button onClick={restart} className={`py-3 rounded-xl font-semibold text-white ${a.btn} transition-colors`}>
            Nochmal versuchen
          </button>
          <button onClick={onBack} className="py-3 rounded-xl text-zinc-500 hover:text-zinc-300 transition-colors">
            Zurück zum Modul
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-in min-h-screen px-4 py-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="text-zinc-400 hover:text-white text-sm transition-colors">
          ← Zurück
        </button>
        <span className="text-zinc-500 text-sm">
          Frage {idx + 1} / {mod.quiz.length}
        </span>
        <span className={`text-sm font-semibold ${a.text}`}>
          {score} richtig
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-zinc-800 rounded-full mb-8 overflow-hidden">
        <div
          className={`h-full ${a.bg} rounded-full transition-all duration-300`}
          style={{ width: `${((idx + 1) / mod.quiz.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 mb-6">
        <p className={`text-xs uppercase tracking-widest mb-3 ${a.text}`}>Frage {idx + 1}</p>
        <p className="text-white text-lg font-medium leading-relaxed">{q.question}</p>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {q.options.map((opt, oi) => {
          let style = "border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-200";
          if (selected !== null) {
            if (oi === q.correct) {
              style = "border-emerald-500 bg-emerald-500/10 text-emerald-300";
            } else if (oi === selected && selected !== q.correct) {
              style = "border-rose-500 bg-rose-500/10 text-rose-300";
            } else {
              style = "border-zinc-800 bg-zinc-900 text-zinc-500";
            }
          }
          return (
            <button
              key={oi}
              onClick={() => select(oi)}
              className={`w-full text-left rounded-xl border p-4 transition-all ${style} ${
                selected === null ? "cursor-pointer" : "cursor-default"
              }`}
            >
              <span className="text-zinc-500 mr-3 text-sm font-mono">
                {["A", "B", "C", "D"][oi]}
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {/* Explanation + Next */}
      {selected !== null && (
        <div className="fade-in space-y-4">
          <div className={`rounded-xl p-4 text-sm leading-relaxed ${
            selected === q.correct ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30" : "bg-zinc-800 text-zinc-300 border border-zinc-700"
          }`}>
            <p className="font-semibold mb-1">{selected === q.correct ? "✓ Richtig!" : "✗ Leider falsch."}</p>
            <p>{q.explanation}</p>
          </div>
          <button
            onClick={next}
            className={`w-full py-4 rounded-2xl font-semibold text-white ${a.btn} transition-colors`}
          >
            {idx + 1 < mod.quiz.length ? "Weiter →" : "Ergebnis sehen"}
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Root App ─────────────────────────────────────────────────────────────────

export default function App() {
  const [view, setView] = useState<View>("home");
  const [activeMod, setActiveMod] = useState<Module | null>(null);
  const [progress, setProgress] = useState<AppProgress>({});

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const updateProgress = useCallback((p: AppProgress) => {
    setProgress(p);
    saveProgress(p);
  }, []);

  function selectModule(mod: Module) {
    setActiveMod(mod);
    setView("module");
  }

  function markReaderDone() {
    if (!activeMod) return;
    const mp = getModuleProgress(progress, activeMod.id);
    const updated = { ...progress, [activeMod.id]: { ...mp, readerDone: true } };
    updateProgress(updated);
    setView("flashcards");
  }

  if (view === "home") {
    return <HomeView progress={progress} onSelectModule={selectModule} />;
  }

  if (!activeMod) return null;

  if (view === "module") {
    return (
      <ModuleView
        mod={activeMod}
        progress={progress}
        onBack={() => setView("home")}
        onStartReader={() => setView("reader")}
        onStartCards={() => setView("flashcards")}
        onStartQuiz={() => setView("quiz")}
      />
    );
  }

  if (view === "reader") {
    return (
      <ReaderView
        mod={activeMod}
        onBack={() => setView("module")}
        onDone={markReaderDone}
      />
    );
  }

  if (view === "flashcards") {
    return (
      <FlashcardsView
        mod={activeMod}
        progress={progress}
        onBack={() => setView("module")}
        onUpdateProgress={updateProgress}
      />
    );
  }

  if (view === "quiz") {
    return (
      <QuizView
        mod={activeMod}
        progress={progress}
        onBack={() => setView("module")}
        onUpdateProgress={updateProgress}
      />
    );
  }

  return null;
}
