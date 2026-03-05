
const SENTENCE_POOL = [
  "the morning breeze carried the scent of pine across the quiet valley",
  "a complex problem often requires patience and careful observation",
  "she packed her journal and set out before sunrise to photograph the fog",
  "every great invention began as an unusual question nobody dared to ask",
  "the library stood at the edge of town filled with forgotten knowledge",
  "working quietly through the night he fixed every broken line of code",
  "sunlight filtered through the leaves casting golden patterns on the path",
  "they built the bridge one plank at a time over the rushing river",
  "her curiosity led her down a winding road full of unexpected discoveries",
  "the chef combined unusual flavors to craft a dish nobody had tasted before",
  "a jazz quartet played softly beneath the neon glow of the city street",
  "he memorized every mountain trail and could navigate without a compass",
  "the scientist spent years studying how starfish regenerate lost limbs",
  "quiet determination separates those who finish from those who stop early",
  "autumn leaves drifted lazily past the window of the old reading room",
  "the submarine descended into darkness where pressure crushed everything",
  "she wrote three chapters by candlelight during a sudden power blackout",
  "the expedition crossed frozen tundra for six weeks before reaching base",
  "each paragraph revealed a clue that unlocked the next layer of mystery",
  "fixing a vintage clock requires steady hands and exceptional knowledge",
  "navigating by the stars sailors trusted the sky more than any map",
  "the documentary explored how bees communicate through precise movement",
  "a well-structured argument requires evidence logic and honest reflection",
  "the fog rolled in from the harbor blanketing the docks in silence",
  "her painting captured the moment just before rain touches dry earth",
  "birds migrating south adjusted their flight paths based on wind patterns",
  "the tournament demanded both physical endurance and tactical creativity",
  "she practiced the piano sonata every evening until her fingers knew it",
  "the telescope revealed a nebula glowing faintly sixty light-years away",
  "baking sourdough bread involves cultivating living organisms over days",
  "the detective examined every thread of fabric left behind at the scene",
  "mountains formed over millions of years through relentless tectonic force",
  "the marathon runner kept a steady pace knowing the final mile was hardest",
  "deep beneath the coral reef lived creatures nobody had catalogued before",
  "the architect designed the building so shadows shifted beautifully at noon",
  "the engineer calibrated each sensor before the rocket left the launchpad",
  "lightning struck the old oak tree splitting it straight down the center",
  "the bakery opened at dawn filling the street with warmth and fresh aroma",
  "she translated the ancient manuscript revealing a forgotten trade route",
  "the wolf pack moved silently through the snow tracking their distant prey",
  "the algorithm sorted millions of entries in less than a single second",
  "every brushstroke on the canvas was deliberate intentional and irreversible",
  "he trained every morning before the city woke to sharpen his reflexes",
  "the novel unfolded through a series of letters exchanged over forty years",
  "waves eroded the cliffs leaving behind arches and caves in the limestone",
  "her thesis examined how urban noise affects the sleep quality of children",
  "solving puzzles every day keeps the mind sharp and connections flexible",
  "the storm knocked out power to the entire district for three days straight",
  "the surgeon performed the delicate procedure with remarkable steady hands",
  "the satellite transmitted data from orbit back to the ground station below",
  "the owl watched silently from the branch as the field mice scattered below",
  "she folded the map carefully and tucked it into the lining of her coat",
  "the city hummed with electricity even long after midnight had passed",
  "he opened the envelope slowly as though afraid of what it contained inside",
  "the train slowed as it entered the tunnel and everything went completely dark",
  "a single candle burned on the windowsill keeping the room barely warm",
  "the river curved sharply at the base of the hill before widening again",
  "she had memorized the entire periodic table by the time she was thirteen",
  "the clouds gathered quickly and the temperature dropped ten degrees in an hour",
  "he placed the last tile carefully completing the mosaic after seven months",
  "the old radio crackled to life playing a song nobody had heard in decades",
  "she pressed her palm flat against the cold glass and watched her breath fog it",
  "the market was loud and colorful with vendors shouting across every stall",
  "he rebuilt the engine entirely from parts he had salvaged over two years",
  "the storm passed overnight leaving behind a strange and silver quiet morning",
  "she traced the coastline on the map with her finger imagining the journey",
  "the puppy chased its own tail in circles until it finally collapsed exhausted",
  "he wrote the first draft in one sitting and then deleted every single word",
  "the glacier moved imperceptibly forward reshaping the valley beneath it slowly",
  "she kept a list of every book she had read since the age of nine years old",
  "the signal bounced off three satellites before reaching the receiver on earth",
  "he carved his initials into the wooden desk the first day of his new job",
  "the museum was quiet on a Tuesday morning except for the echo of footsteps",
  "she adjusted the telescope three times before the planet finally came into view",
  "the bread rose unevenly in the oven but tasted perfect when it came out",
  "he drove through the night and arrived just as the sun began to rise slowly",
  "the fishing net was heavy with the weight of an unusually large catch today",
  "she noticed the shadow on the wall before she heard the door open behind her",
  "the professor paused mid-sentence and stared out the window for a long moment",
  "he filled the notebook with sketches of birds he had never actually seen before",
  "the crane lifted the steel beam into position with millimeter precision today",
  "she turned the corner and stopped when she saw the old house was still standing",
  "the coffee cooled quickly in the ceramic mug sitting beside the open window",
  "he spent three hours debugging a single function that turned out to be fine",
  "the waterfall dropped sixty meters into a pool of impossibly clear blue water",
  "she taught herself to read music by studying the sheet from left to right slowly",
  "the footprints in the snow led to the edge of the forest and then stopped abruptly",
  "he watched the chess clock tick down and made his move with two seconds remaining",
  "the paper airplane sailed across the office and landed perfectly on her keyboard",
  "she remembered every detail of the dream but forgot it completely by noon",
  "the highway stretched flat and empty for as far as the eye could possibly see",
  "he pressed the cold compress to his wrist and kept typing through the soreness",
  "the curtain billowed inward as the evening wind came through the open window",
  "she photographed every door she passed on the way through the old neighborhood",
  "the patient investor waited twelve years before the decision finally paid off",
  "he could identify any bird by its call alone without ever needing to see it",
  "the first draft was terrible but the fifth was something she felt proud of finally",
  "she walked the entire perimeter of the city in one day just to say she had done it",
  "the machine learned from its mistakes faster than any human operator could manage",
  "he kept the receipt in his wallet for six years as a reminder of that afternoon",
  "the tide came in faster than expected and soaked everything left on the beach",
  "she drew the floor plan from memory after visiting only once for twenty minutes",
  "the documentary crew waited four days in the cold before the animal appeared",
  "he replaced every bulb in the lighthouse before the storm season began that year",
  "the silence in the recording studio was so complete it felt like pressure on the ears",
  "she built the habit slowly adding one minute to her practice time every single day",
  "the shadow of the sundial moved imperceptibly and yet time passed without mercy",
  "he read the same page four times before finally admitting he could not concentrate",
  "the greenhouse stayed warm even in the coldest winter through careful insulation",
  "she named every plant on the balcony and talked to them each morning before work",
  "the code ran perfectly in testing and catastrophically in production as expected",
  "he folded the origami crane with the precision of someone who had done it thousands of times",
  "the harbor master recorded every vessel that passed through in a leather logbook",
  "she pressed the wildflowers between the pages of the heaviest book she owned",
  "the ice cores drilled from the glacier contained air from two hundred thousand years ago",
  "he arrived exactly on time every day for eleven years and they never once noticed",
  "the painting had been hanging upside down in the gallery for three weeks before anyone said anything",
];

const SENTENCE_POOL_CAPS = [
  "The morning light was pale, quiet, and full of promise.",
  "She opened the letter slowly, then set it down without reading further.",
  "Every summer, they returned to the same small town by the coast.",
  "The market was loud, colorful, and impossible to navigate on a Saturday.",
  "He practiced for hours, and by evening, he finally got it right.",
  "Clouds gathered quickly, and the air turned cold before noon.",
  "The café was warm, dimly lit, and always smelled of fresh coffee.",
  "She packed her bag the night before, then repacked it twice more.",
  "The road curved sharply, then widened into a long, flat stretch.",
  "He read the instructions carefully, paused, and started from the beginning.",
  "The old bridge was narrow, mossy, and slightly terrifying to cross.",
  "Rain came without warning, soaking everything left outside overnight.",
  "She planted the seeds in the spring, watered them daily, and waited.",
  "The meeting ran long, ended badly, and left everyone exhausted.",
  "He cooked a simple meal, set the table, and ate alone by the window.",
  "The library was closed on Mondays, so she sat on the steps and read anyway.",
  "The fog was thick, disorienting, and slower to lift than expected.",
  "She called twice, left no message, and did not try again that evening.",
  "The engine coughed, sputtered, and finally fell silent on the highway.",
  "He arrived early, chose a seat near the back, and waited for the others.",
  "The trail climbed steeply, leveled off briefly, and then climbed again.",
  "She finished the painting on a Thursday, framed it, and gave it away.",
  "The storm knocked out power, flooded the basement, and lasted three days.",
  "He studied the map, folded it poorly, and asked for directions anyway.",
  "The cat watched the bird, crouched low, and then completely lost interest.",
  "She laughed at the joke, apologized for laughing, and then laughed again.",
  "The submission deadline passed quietly, and nobody mentioned it afterward.",
  "He fixed the leak, cleaned up the mess, and discovered a second leak.",
  "The presentation went well, the questions were difficult, and lunch was late.",
  "She turned thirty on a rainy Tuesday, ate cake alone, and felt perfectly fine.",
  "The building was old, drafty, and beloved by everyone who worked inside it.",
  "He wrote the email, deleted it, rewrote it, and finally hit send at midnight.",
  "The keys were on the table, then in her pocket, and then nowhere at all.",
  "She learned to drive at forty, passed on the third attempt, and never looked back.",
  "The concert was loud, overcrowded, and absolutely worth every moment of it.",
  "He borrowed the book, renewed it twice, and returned it without finishing.",
  "The town was small, quiet, and famous for nothing in particular.",
  "She ran every morning before work, except on the days that mattered most.",
  "The window was open, the curtain was moving, and nobody was in the room.",
  "He noticed the error, fixed it silently, and mentioned it to no one.",
];

const SENTENCE_POOL_PUNCT = [
  "Wait; I need to think about this more carefully before we proceed.",
  "She asked, \"Are you sure?\" and he replied, \"I've never been more certain.\"",
  "The options are simple: work harder, work smarter, or accept the result.",
  "It wasn't the destination that mattered; it was the decision to leave.",
  "He said, \"Don't worry,\" but his hands told a completely different story.",
  "The contract specified three things: quality, speed, and zero exceptions.",
  "She paused mid-sentence, looked up, and said, \"That's not what I meant.\"",
  "There's a fine line between confidence and arrogance; he crossed it daily.",
  "The note read: \"Gone fishing. Back never. Don't touch my things.\"",
  "Did you check the report? I left it on your desk before the 9 a.m. meeting.",
  "He typed quickly, deleted half of it, and started again: \"Dear sir/madam...\"",
  "The question isn't whether it works; the question is whether it lasts.",
  "She whispered, \"Can you hear that?\" and they both stopped breathing.",
  "The recipe calls for: two eggs, one cup of flour, and a pinch of patience.",
  "Why did nobody say anything? The answer was obvious to everyone in the room.",
  "He wrote in the margin: \"False? Check source.\" and circled it three times.",
  "The clock read 3:47 a.m.; she hadn't slept, and she wasn't planning to.",
  "\"Trust the process,\" she said, but the process had failed them twice before.",
  "The sign above the door read: \"Enter at your own risk / Exit freely.\"",
  "He asked one question: \"Why?\" She thought about it for the rest of her life.",
  "The old saying goes: \"Measure twice, cut once\" — advice he always ignored.",
  "She left a voicemail that said: \"Call me back. It's not urgent; it is, though.\"",
  "The choices narrowed to two: stay and fight, or leave and never explain.",
  "\"You were right,\" he finally admitted; it took him three years to say it.",
  "The file was labeled: \"Final_v3_REAL_final / do not edit.\"",
  "She smiled and said, \"Of course,\" but her eyes were asking a different question.",
  "The error log showed one warning: \"Unexpected input; process terminated.\"",
  "Why rush? The deadline passed; the damage was done; the lesson was free.",
  "He underlined two words: \"never again\" — then underlined them a second time.",
  "The instruction manual read: \"If this fails, try again; if it fails twice, call us.\"",
  "\"I'll be five minutes,\" she said; forty-five minutes later, she reappeared.",
  "The report concluded: \"Insufficient data; further study is strongly recommended.\"",
  "He read the email twice: once for content, once to decide whether to reply.",
  "The path split into three: left toward the river, right toward the road, straight into the unknown.",
  "\"Don't quote me on this,\" she said; naturally, he quoted her on everything.",
  "The system responded: \"Error 404 / Resource not found; please try again.\"",
  "She had two fears: failing publicly, and succeeding without anyone noticing.",
  "The letter began: \"By the time you read this...\" and ended without explanation.",
  "He completed the task; nobody acknowledged it; he completed it again anyway.",
  "The agenda listed three items: introductions, the problem, and \"other business.\"",
];

let selectedMode = 'normal';
let cursorBlinkTimeout = null;

function buildWordList(target) {
  const pool = selectedMode === 'caps'  ? SENTENCE_POOL_CAPS
             : selectedMode === 'punct' ? SENTENCE_POOL_PUNCT
             : SENTENCE_POOL;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const result = [];
  let sentenceIdx = 0;
  while (result.length < target) {
    const sentence = shuffled[sentenceIdx % shuffled.length];
    sentence.split(' ').forEach(w => { if (result.length < target) result.push(w); });
    sentenceIdx++;
    if (sentenceIdx > 0 && sentenceIdx % shuffled.length === 0) {
      shuffled.sort(() => Math.random() - 0.5);
    }
  }
  return result;
}

const CHALLENGE_QUOTES = [
  "no cap, your WPM is about to go crazy 🔥",
  "bestie, the keyboard said choose violence",
  "it's giving speed. it's giving accuracy. slay.",
  "POV: you actually cooked this time fr fr",
  "main character energy only. type like you mean it.",
  "the rizz is irrelevant. fingers on keys. now.",
  "not me manifesting your highest WPM yet 💅",
  "okay but what if you just... didn't miss a single key",
  "touch grass later. touch keys now.",
  "lowkey obsessed with how fast you're about to go",
  "era of zero typos starts rn bestie",
  "the delulu is the solulu. believe you're fast. be fast.",
  "serving keyboard supremacy and we love to see it",
  "ate and left no crumbs. that's the goal.",
  "it's giving Olympic-level typing and I'm here for it ✨",
];

const LIVE_QUOTES = {
  slowPoor: [
    "bestie... are you okay? 💀",
    "this ain't it and we both know it fr",
    "no cap that was tragic. try again bestie.",
    "the keyboard is not the problem just saying 😭",
    "touch typing could never be your villain origin story",
  ],
  slowOkay: [
    "it's giving... effort. we respect the grind.",
    "lowkey warming up or lowkey napping? 👀",
    "the slow and steady arc but like... speedrun it?",
    "y'all this is giving main character who just woke up",
    "not bad not good. solidly mid-tier era fr.",
  ],
  mediumPoor: [
    "fast fingers, chaotic energy. very unhinged bestie.",
    "the speed is there but accuracy said nah 💀",
    "going full send but the keyboard said no lmao",
    "girlboss speed, girlboss typos. it evens out ig.",
    "speedrunning errors is not the move fr fr",
  ],
  mediumOkay: [
    "okay not terrible, not elite, very much mid 💅",
    "this is giving 9-to-5 office keyboard warrior era",
    "you're literally one energy drink away from cooking",
    "the potential is there and we see it bestie",
    "solidly fine. but fine is not the vibe we're after.",
  ],
  mediumGood: [
    "okay wait you're actually built different rn ✨",
    "no cap this is lowkey impressive fr",
    "the glow-up is REAL and I'm obsessed",
    "slay behavior detected. continue this arc.",
    "certified keyboard menace and we love to see it 🔥",
  ],
  fastPoor: [
    "fast as hell but the accuracy said not today 💀",
    "fingers on espresso, brain on chamomile lmao",
    "bro said speed run and forgot accuracy existed",
    "chaotic fast energy but we need accuracy to slay",
    "unhinged speed. truly a disaster but make it fashion.",
  ],
  fastGood: [
    "bestie you're actually cooking and I'm shook 😭🔥",
    "the words are literally scared of you rn",
    "no cap this is elite behavior fr fr",
    "ChatGPT is nervous and rightfully so bestie",
    "you just unlocked main character typing arc ✨",
  ],
  veryFastGood: [
    "are you human? be so fr with me rn 👀",
    "this is illegal in multiple countries no cap",
    "the FBI just opened a tab on you bestie 💀",
    "you type like rent is due in 5 minutes fr",
    "not the keyboard going absolutely feral rn 🔥🔥",
  ],
  perfect: [
    "zero typos zero chill absolute unhinged behavior 💅",
    "perfect accuracy?? bestie you are NOT normal",
    "ate. left no crumbs. not a single one. slay.",
    "this is giving god-tier and I am not okay 😭✨",
    "the keyboard just submitted to you and honestly valid",
  ],
};

function getQuoteTier(wpm, acc) {
  if (acc === 100 && wpm >= 60)  return 'perfect';
  if (wpm >= 85  && acc >= 85)   return 'veryFastGood';
  if (wpm >= 60  && acc >= 78)   return 'fastGood';
  if (wpm >= 55  && acc < 72)    return 'fastPoor';
  if (wpm >= 38  && acc >= 78)   return 'mediumGood';
  if (wpm >= 35  && acc >= 62)   return 'mediumOkay';
  if (wpm >= 30  && acc < 62)    return 'mediumPoor';
  if (wpm >= 12  && acc >= 65)   return 'slowOkay';
  return 'slowPoor';
}

let lastTier = '', lastLiveIdx = -1;
function pickLiveQuote(tier) {
  const pool = LIVE_QUOTES[tier];
  let idx = Math.floor(Math.random() * pool.length);
  if (tier === lastTier && pool.length > 1)
    while (idx === lastLiveIdx) idx = Math.floor(Math.random() * pool.length);
  lastTier = tier; lastLiveIdx = idx;
  return pool[idx];
}

let challengeIdx = Math.floor(Math.random() * CHALLENGE_QUOTES.length);
let challengeInterval = null;

let typewriterTimer = null;

function typewriterWrite(el, text, onDone) {
  if (typewriterTimer) { clearTimeout(typewriterTimer); typewriterTimer = null; }
  el.textContent = '';
  el.style.opacity = '1';
  el.style.transform = 'none';

  const chars = text.split('');
  let i = 0;
  function typeNext() {
    if (i >= chars.length) { if (onDone) onDone(); return; }
    const ch = chars[i];
    el.textContent += ch;
    i++;
    let delay;
    const r = Math.random();
    if (ch === ' ') {
      delay = 35 + Math.random() * 55;
    } else if (r < 0.06) {
      delay = 180 + Math.random() * 200;
    } else if (r < 0.18) {
      delay = 18 + Math.random() * 14;
    } else if (r < 0.32) {
      delay = 65 + Math.random() * 60;
    } else {
      delay = 32 + Math.random() * 38;
    }
    typewriterTimer = setTimeout(typeNext, delay);
  }
  typeNext();
}

function setQuoteText(text) {
  const el = document.getElementById('live-quote');
  if (!el) return;
  el.style.opacity = '0';
  el.style.transform = 'translateY(6px)';
  el.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
  setTimeout(() => {
    el.style.transition = 'none';
    el.style.transform = 'translateY(0)';
    typewriterWrite(el, text);
  }, 280);
}

function rotateChallengeQuote() {
  challengeIdx = (challengeIdx + 1) % CHALLENGE_QUOTES.length;
  setQuoteText(CHALLENGE_QUOTES[challengeIdx]);
}

function startChallengeRotation() {
  setQuoteText(CHALLENGE_QUOTES[challengeIdx]);
  challengeInterval = setInterval(rotateChallengeQuote, 5500);
}

function stopChallengeRotation() {
  if (challengeInterval) { clearInterval(challengeInterval); challengeInterval = null; }
}

let lastQuoteUpdate = 0;

function updateLiveQuote(force = false) {
  if (!started || finished) return;
  const now = Date.now();
  if (!force && now - lastQuoteUpdate < 5500) return;
  lastQuoteUpdate = now;

  const elapsed = Math.max(selectedTime - timeLeft, 1);
  const wpm = Math.round((correctChars / 5) / (elapsed / 60));
  const acc = totalTyped > 0 ? Math.round((correctChars / totalTyped) * 100) : 100;
  const tier = getQuoteTier(wpm, acc);
  setQuoteText(pickLiveQuote(tier));
}

let selectedTime = 30, timeLeft = 30;
let timer = null;
let started = false, finished = false;
let currentWordIndex = 0, currentCharIndex = 0;
let totalTyped = 0, totalErrors = 0, correctChars = 0;
let words = [], wordElements = [], charElements = [];

const wordsDisplay = document.getElementById('words-display');
const hiddenInput  = document.getElementById('hidden-input');
const clickPrompt  = document.getElementById('click-prompt');
const timerBar     = document.getElementById('timer-bar');
const timerBarWrap = document.getElementById('timer-bar-wrap');
const cursorBeam   = document.getElementById('cursor-beam');
const statsPanel   = document.getElementById('stats-panel');
const mainCard     = document.getElementById('main-card');

function generateWords(count = 100) { words = buildWordList(count); }

let wordsInner = null;

// ── PRE-GAME CHAR SCRAMBLER ─────────────────────────────────────────────────
const SCRAMBLE_CHARS = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%*?/';
let scrambleInterval = null;
let _scrambleFrame   = 0;

function _randChar() {
  return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
}

// Animate a single charEl through a few random chars then settle on finalCh
function _slotChar(charEl, finalCh, delay) {
  const flickers = 1 + Math.floor(Math.random() * 2);
  const flickerMs = 220;
  setTimeout(() => {
    if (started) return;
    charEl.classList.add('scrambling');
    charEl.style.opacity = '0.55';
    charEl.style.color   = 'rgba(245,197,66,0.55)';
    let tick = 0;
    const iv = setInterval(() => {
      if (started) { clearInterval(iv); return; }
      tick++;
      if (tick < flickers) {
        charEl.textContent = _randChar();
        charEl.style.opacity = (0.5 + Math.random() * 0.35).toFixed(2);
        charEl.style.color   = `rgba(245,197,66,${(0.45 + Math.random() * 0.3).toFixed(2)})`;
      } else {
        // Settle back to resting state
        charEl.textContent   = finalCh;
        charEl.style.opacity = '0.75';
        charEl.style.color   = 'rgba(175,175,175,0.55)';
        clearInterval(iv);
      }
    }, flickerMs);
  }, delay);
}

function startScrambler() {
  stopScrambler();
  _scrambleFrame = 0;

  function runWave() {
    if (started) return;
    _scrambleFrame++;

    const allChars = [];
    const containerRect = (wordsInner || wordsDisplay).getBoundingClientRect();
    const midX = containerRect.left + containerRect.width / 2;
    // determine first-line words by top
    let minTop = Infinity;
    charElements.forEach((charRow) => {
      charRow.forEach((charEl) => {
        const rect = charEl.getBoundingClientRect();
        if (rect.top < minTop) minTop = rect.top;
      });
    });
    // gather first-line word indexes and their bounds
    const firstLineWords = [];
    charElements.forEach((charRow, wi) => {
      // take first char bounding for left and last char for right
      const first = charRow[0];
      const last  = charRow[charRow.length-1];
      if (!first || !last) return;
      const r0 = first.getBoundingClientRect();
      if (r0.top <= minTop + 1) {
        const r1 = last.getBoundingClientRect();
        firstLineWords.push({ wi, left: r0.left, right: r1.right });
      }
    });
    // determine how many first-line words lie completely in left half
    let skipUpToIndex = -1;
    firstLineWords.sort((a,b)=>a.left-b.left).forEach(w => {
      if (w.right <= midX) skipUpToIndex = w.wi;
    });
    charElements.forEach((charRow, wi) => {
      charRow.forEach((charEl) => {
        if (!charEl.classList.contains('correct') && !charEl.classList.contains('wrong')) {
          const rect = charEl.getBoundingClientRect();
          // if this char belongs to a skipped word, ignore it
          if (wi <= skipUpToIndex) return;
          allChars.push({ charEl, x: rect.left });
        }
      });
    });

    if (allChars.length === 0) return;

    const minX = Math.min(...allChars.map(c => c.x));
    const maxX = Math.max(...allChars.map(c => c.x));
    const xRange = Math.max(maxX - minX, 1);
    const waveDuration = 1100;

    allChars.forEach(({ charEl, x }) => {
      if (Math.random() < 0.62) {
        const waveDelay = ((x - minX) / xRange) * waveDuration;
        const jitter = (Math.random() - 0.5) * 60;
        _slotChar(charEl, _randChar(), Math.max(0, waveDelay + jitter));
      }
    });
  }

  runWave();
  scrambleInterval = setInterval(runWave, 2200);
}

function stopScrambler() {
  if (scrambleInterval) { clearInterval(scrambleInterval); scrambleInterval = null; }
  // Restore real characters and reset inline styles so doc1 CSS takes over
  charElements.forEach((charRow, wi) => {
    const word = words[wi] || '';
    charRow.forEach((charEl, ci) => {
      if (!charEl.classList.contains('correct') && !charEl.classList.contains('wrong')) {
        charEl.textContent = word[ci] || '';
        charEl.style.opacity = '';
        charEl.style.color   = '';
        charEl.classList.remove('scrambling');
      }
    });
  });
}

function renderWords() {
  while (wordsDisplay.firstChild) wordsDisplay.removeChild(wordsDisplay.firstChild);

  wordsInner = document.createElement('div');
  wordsInner.id = 'words-inner';
  wordsDisplay.appendChild(wordsInner);
  wordsInner.appendChild(cursorBeam);

  wordElements = []; charElements = [];
  words.forEach((word, wi) => {
    const wordEl = document.createElement('span');
    wordEl.className = 'word';
    const charEls = [];
    word.split('').forEach((ch, ci) => {
      const charEl = document.createElement('span');
      charEl.className = 'char scrambling';
      // Start as a random char — scrambler takes over immediately
      charEl.textContent = SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      // Use doc1's original resting opacity/color
      charEl.style.opacity = '0.75';
      charEl.style.color   = 'rgba(175,175,175,0.55)';
      wordEl.appendChild(charEl);
      charEls.push(charEl);
    });
    wordsInner.appendChild(wordEl);
    wordElements.push(wordEl);
    charElements.push(charEls);
  });
}

function autoScrollToWord(index) {
  if (!wordsInner || index >= wordElements.length) return;
  const wordEl = wordElements[index];
  const containerRect = wordsDisplay.getBoundingClientRect();
  const wordRect = wordEl.getBoundingClientRect();
  const currentY = parseFloat(wordsInner.style.transform.replace('translateY(','').replace(')','').replace('px','') || 0);
  const wordTop = wordRect.top - containerRect.top - currentY;
  const targetY = wordTop - containerRect.height * 0.18;
  if (targetY > 0) {
    wordsInner.style.transform = `translateY(-${targetY}px)`;
  }
}

function spawnSpark(x, y) {
  const spark = document.createElement('div');
  spark.className = 'cursor-spark';
  spark.style.left = x + 'px';
  spark.style.top  = y + 'px';
  (wordsInner || wordsDisplay).appendChild(spark);
  setTimeout(() => spark.remove(), 520);
}

function moveCursor() {
  if (currentWordIndex >= words.length) { cursorBeam.style.display = 'none'; return; }
  const ref = wordsInner || wordsDisplay;
  const cRect = ref.getBoundingClientRect();
  let left, top, height;
  if (currentCharIndex === 0) {
    const first = charElements[currentWordIndex]?.[0];
    if (!first) return;
    const r = first.getBoundingClientRect();
    left = r.left - cRect.left - 2;
    top  = r.top  - cRect.top  + r.height * 0.1;
    height = r.height * 0.78;
  } else {
    const prev = charElements[currentWordIndex]?.[Math.min(currentCharIndex-1, words[currentWordIndex].length-1)];
    if (!prev) return;
    const r = prev.getBoundingClientRect();
    left = r.right - cRect.left;
    top  = r.top   - cRect.top  + r.height * 0.1;
    height = r.height * 0.78;
  }
  cursorBeam.style.display = 'block';
  cursorBeam.style.left   = left + 'px';
  cursorBeam.style.top    = top  + 'px';
  cursorBeam.style.height = height + 'px';
  // if (started && !finished) spawnSpark(left + 1, top + height * 0.5);
}

function animateCountUp(el, target, duration, suffix = '') {
  const str = String(target) + suffix;
  el.textContent = '';
  el.style.display = 'inline-block';

  str.split('').forEach((ch, i) => {
    const span = document.createElement('span');
    span.className = 'digit-drop';
    span.style.animationDelay = (i * 110) + 'ms';
    if (/\d/.test(ch)) {
      const digitVal = parseInt(ch);
      span.dataset.target = ch;
      span.textContent = String((digitVal + 7) % 10);
      let ticks = 0;
      const totalTicks = 7 + digitVal;
      const tickInterval = Math.max(30, (duration * 0.55) / totalTicks);
      setTimeout(() => {
        const iv = setInterval(() => {
          ticks++;
          const cur = parseInt(span.textContent);
          span.textContent = String((cur + 1) % 10);
          if (ticks >= totalTicks) {
            clearInterval(iv);
            span.textContent = ch;
          }
        }, tickInterval);
      }, i * 110);
    } else {
      span.textContent = ch;
    }
    el.appendChild(span);
  });
}

function showInlineResults() {
  const wpm = Math.round((correctChars / 5) / (selectedTime / 60));
  const acc = totalTyped > 0 ? Math.round((correctChars / totalTyped) * 100) : 0;

  statsPanel.innerHTML = `
    <div class="stat animate-in">
      <span class="stat-value big result-wpm"></span>
      <span class="stat-label">WPM</span>
    </div>
    <div class="stat animate-in">
      <span class="stat-value big result-acc"></span>
      <span class="stat-label">Accuracy</span>
    </div>
    <div class="stat animate-in">
      <span class="stat-value result-chars"></span>
      <span class="stat-label">Characters</span>
    </div>
    <div class="stat animate-in">
      <span class="stat-value result-errors"></span>
      <span class="stat-label">Errors</span>
    </div>
  `;
  statsPanel.classList.replace('during-test', 'show-results');

  setTimeout(() => animateCountUp(document.querySelector('.result-wpm'),   wpm,        900),       80);
  setTimeout(() => animateCountUp(document.querySelector('.result-acc'),   acc,        900, '%'),  280);
  setTimeout(() => animateCountUp(document.querySelector('.result-chars'), totalTyped, 700),       480);
  setTimeout(() => animateCountUp(document.querySelector('.result-errors'),totalErrors,700),       650);
}

function restoreStatsPanel() {
  statsPanel.innerHTML = `
    <div class="stat">
      <span id="time-display" style="display:inline-flex;align-items:center;gap:6px;"></span>
      <span class="stat-label">Time Left</span>
    </div>
    <div class="stat" id="quote-cell">
      <span class="stat-quote" id="live-quote"></span>
    </div>
  `;
  if (statsPanel.classList.contains('show-results'))
    statsPanel.classList.replace('show-results', 'during-test');
}

const ARC_R = 30;
const ARC_C = 2 * Math.PI * ARC_R;
let _arcTotal = 30;

function renderArcTimer(container, seconds) {
  const fraction = Math.max(0, seconds / _arcTotal);
  const offset   = ARC_C * (1 - fraction);
  const label    = seconds >= 60
    ? Math.floor(seconds/60) + ':' + String(seconds%60).padStart(2,'0')
    : String(seconds);

  let prog = container.querySelector('.arc-progress');
  let num  = container.querySelector('.arc-number');
  if (!prog) {
    container.innerHTML = `
      <svg class="arc-svg" viewBox="0 0 72 72">
        <circle class="arc-track"    cx="36" cy="36" r="${ARC_R}"/>
        <circle class="arc-progress" cx="36" cy="36" r="${ARC_R}"
          stroke-dasharray="${ARC_C}"
          stroke-dashoffset="${offset}"/>
      </svg>
      <div class="arc-number">${label}</div>`;
  } else {
    prog.setAttribute('stroke-dashoffset', offset);
    num.textContent = label;
  }
}

function initArcTimer(container, total) {
  _arcTotal = total;
  container.innerHTML = '';
  renderArcTimer(container, total);
}

function startTyping() {
  if (started) return;
  started = true;
  stopScrambler();
  stopChallengeRotation();
  clickPrompt.classList.add('hidden');
  wordsDisplay.classList.add('active-typing');
  document.getElementById('words-area').classList.add('typing-glow');
  mainCard.classList.add('focused');

  setQuoteText("Let's go - show what you've got.");
  lastQuoteUpdate = Date.now();

  timerBar.style.transition = 'none';
  timerBar.style.transform  = 'scaleX(1)';
  requestAnimationFrame(() => requestAnimationFrame(() => {
    timerBar.style.transition = `transform ${selectedTime}s linear`;
    timerBar.style.transform  = 'scaleX(0)';
  }));

  timer = setInterval(() => {
    timeLeft--;
    const td = document.getElementById('time-display');
    if (td) {
      renderArcTimer(td, timeLeft);
      if (timeLeft <= 10) td.classList.add('urgent');
      else td.classList.remove('urgent');
    }
    updateLiveQuote();
    if (timeLeft <= 0) { clearInterval(timer); endTest(); }
  }, 1000);
}

function endTest() {
  finished = true;
  hiddenInput.blur();
  cursorBeam.style.display = 'none';
  mainCard.classList.remove('focused');
  wordsDisplay.classList.remove('active-typing');
  document.getElementById('words-area').classList.remove('typing-glow');
  showInlineResults();
}

function commitWord(typedInput) {
  const typed = typedInput.trim();
  const currentWord = words[currentWordIndex];
  for (let i = currentCharIndex; i < currentWord.length; i++)
    charElements[currentWordIndex][i]?.classList.add('wrong');
  const compareLen = Math.max(typed.length, currentWord.length);
  for (let i = 0; i < compareLen; i++) {
    totalTyped++;
    if (i < typed.length && i < currentWord.length && typed[i] === currentWord[i]) correctChars++;
    else totalErrors++;
  }
  if (typed !== currentWord) {
    const wEl = wordElements[currentWordIndex];

  }
  currentWordIndex++; currentCharIndex = 0; hiddenInput.value = '';
  if (typed === words[currentWordIndex - 1]) {
    const prevEl = wordElements[currentWordIndex - 1];
    if (prevEl) {
      prevEl.classList.add('committed');
      setTimeout(() => prevEl.classList.remove('committed'), 420);
      spawnFloatParticle(prevEl);
    }
  }
  if (currentWordIndex >= words.length) { endTest(); return; }
  autoScrollToWord(currentWordIndex);
  updateLiveQuote(true);
}

hiddenInput.addEventListener('input', () => {
  if (finished) return;
  const inputVal = hiddenInput.value;
  const currentWord = words[currentWordIndex];

  if (inputVal.endsWith(' ')) {
    if (inputVal.trim() === '') { hiddenInput.value = ''; return; }
    commitWord(inputVal);
  } else {
    currentCharIndex = inputVal.length;
    charElements[currentWordIndex]?.forEach((charEl, i) => {
      const wasWrong = charEl.classList.contains('wrong');
      charEl.classList.remove('correct', 'wrong');
      if (i < inputVal.length) {
        if (inputVal[i] === currentWord[i]) {
          charEl.classList.add('correct');
        } else {
          if (!wasWrong) void charEl.offsetWidth;
          charEl.classList.add('wrong');
        }
      }
    });
    updateLiveQuote();
  }
  moveCursor();
  clearTimeout(cursorBlinkTimeout);
  cursorBeam.classList.remove('cursor-blink');
  cursorBlinkTimeout = setTimeout(() => {
    cursorBeam.classList.add('cursor-blink');
  }, 70);
});

hiddenInput.addEventListener('keydown', e => {
  if (e.key === 'Backspace' && hiddenInput.value === '') e.preventDefault();
});

// ── KEY TO START: first keypress starts the test but does NOT type into the box ──
document.addEventListener('keydown', e => {
  if (e.key === 'Tab') { e.preventDefault(); generateWords(); resetTest(); return; }

  if (!started && !finished) {
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      hiddenInput.focus();
      startTyping();
    }
  }
});

document.getElementById('words-area').addEventListener('click', () => {
  if (!finished) { hiddenInput.focus(); }
});

hiddenInput.addEventListener('blur', () => {
  if (!started && !finished) mainCard.classList.remove('focused');
});

function resetTest() {
  clearInterval(timer);
  stopChallengeRotation();
  stopScrambler();
  if (typewriterTimer) { clearTimeout(typewriterTimer); typewriterTimer = null; }
  started = finished = false;
  currentWordIndex = currentCharIndex = 0;
  totalTyped = totalErrors = correctChars = 0;
  lastQuoteUpdate = 0; lastTier = ''; lastLiveIdx = -1;
  timeLeft = selectedTime;

  timerBar.style.transition = 'none';
  timerBar.style.transform  = 'scaleX(1)';
  hiddenInput.value = '';
  clickPrompt.classList.remove('hidden');
  cursorBeam.style.display = 'none';
  mainCard.classList.remove('focused');
  wordsDisplay.classList.remove('active-typing');
  document.getElementById('words-area').classList.remove('typing-glow');
  if (wordsInner) wordsInner.style.transform = 'translateY(0)';

  restoreStatsPanel();
  requestAnimationFrame(() => {
    const td = document.getElementById('time-display');
    if (td) initArcTimer(td, selectedTime);
  });
  renderWords();
  startScrambler();
  startChallengeRotation();
  requestAnimationFrame(moveCursor);
  requestAnimationFrame(() => positionPill(document.querySelector('.duration-option.active')));
  requestAnimationFrame(() => positionModePill(document.querySelector('.mode-option.active')));
}

document.querySelectorAll('.btn, .duration-option, .mode-option').forEach(btn => {
  btn.style.position = 'relative';
  btn.style.overflow = 'hidden';
  btn.addEventListener('click', e => {
    const r = document.createElement('span');
    r.className = 'btn-ripple';
    const rect = btn.getBoundingClientRect();
    r.style.left = (e.clientX - rect.left) + 'px';
    r.style.top  = (e.clientY - rect.top)  + 'px';
    btn.appendChild(r);
    setTimeout(() => r.remove(), 650);
  });
});

function spawnFloatParticle(wordEl) {
  const r = wordEl.getBoundingClientRect();
  const ref = wordsInner || wordsDisplay;
  const cr = ref.getBoundingClientRect();
  const p = document.createElement('div');
  p.className = 'float-particle';
  p.textContent = '+';
  p.style.left = (r.left - cr.left + r.width / 2) + 'px';
  p.style.top  = (r.top  - cr.top)  + 'px';
  ref.appendChild(p);
  setTimeout(() => p.remove(), 800);
}

document.getElementById('restart-btn').addEventListener('click', (e) => {
  const btn = document.getElementById('restart-btn');
  btn.classList.remove('firing');
  void btn.offsetWidth;
  btn.classList.add('firing');
  setTimeout(() => btn.classList.remove('firing'), 580);

  const rect = btn.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const sparkCount = 14;
  for (let i = 0; i < sparkCount; i++) {
    const spark = document.createElement('div');
    spark.className = 'rb-spark' + (i % 4 === 0 ? ' big' : '');
    const angle = (i / sparkCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.6;
    const dist  = 28 + Math.random() * 38;
    spark.style.left = cx + 'px';
    spark.style.top  = cy + 'px';
    spark.style.setProperty('--sx', Math.cos(angle) * dist + 'px');
    spark.style.setProperty('--sy', Math.sin(angle) * dist + 'px');
    spark.style.animationDuration = (0.45 + Math.random() * 0.25) + 's';
    spark.style.animationDelay    = (Math.random() * 0.06) + 's';
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 800);
  }

  generateWords(); resetTest();
});

function positionPill(activeBtn) {
  const pill  = document.getElementById('duration-pill');
  const track = document.getElementById('duration-track');
  if (!pill || !track || !activeBtn) return;
  const trackRect = track.getBoundingClientRect();
  const btnRect   = activeBtn.getBoundingClientRect();
  pill.style.left  = (btnRect.left - trackRect.left - 3) + 'px';
  pill.style.width = btnRect.width + 'px';
}

document.querySelectorAll('.duration-option').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.duration-option').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    positionPill(btn);
    selectedTime = parseInt(btn.dataset.time);
    generateWords(selectedTime >= 60 ? 180 : 100);
    resetTest();
  });
});

requestAnimationFrame(() => {
  positionPill(document.querySelector('.duration-option.active'));
});
window.addEventListener('resize', () => {
  positionPill(document.querySelector('.duration-option.active'));
});

window.addEventListener('resize', moveCursor);

function positionModePill(activeBtn) {
  const pill  = document.getElementById('mode-pill');
  const track = document.getElementById('mode-track');
  if (!pill || !track || !activeBtn) return;
  const trackRect = track.getBoundingClientRect();
  const btnRect   = activeBtn.getBoundingClientRect();
  pill.style.left  = (btnRect.left - trackRect.left - 3) + 'px';
  pill.style.width = btnRect.width + 'px';
}

document.querySelectorAll('.mode-option').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mode-option').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    positionModePill(btn);
    selectedMode = btn.dataset.mode;
    generateWords(selectedTime >= 60 ? 180 : 100);
    resetTest();
  });
});

requestAnimationFrame(() => {
  positionModePill(document.querySelector('.mode-option.active'));
});
window.addEventListener('resize', () => {
  positionModePill(document.querySelector('.mode-option.active'));
});

generateWords();
resetTest();

// ─── BACKGROUND CANVAS ANIMATION ───────────────────────────────────────────
(function() {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let W, H;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const ORB_COUNT = 6;
  const orbs = Array.from({ length: ORB_COUNT }, (_, i) => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: 120 + Math.random() * 200,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    opacity: 0.03 + Math.random() * 0.04,
    phase: Math.random() * Math.PI * 2,
    speed: 0.0008 + Math.random() * 0.001,
  }));

  const PARTICLE_COUNT = 55;
  const particles = Array.from({ length: PARTICLE_COUNT }, () => makeParticle());

  function makeParticle() {
    return {
      x: Math.random() * (W || window.innerWidth),
      y: Math.random() * (H || window.innerHeight),
      size: 0.6 + Math.random() * 1.6,
      vx: (Math.random() - 0.5) * 0.5,
      vy: -0.15 - Math.random() * 0.45,
      opacity: 0.08 + Math.random() * 0.22,
      life: Math.random(),
      decay: 0.0015 + Math.random() * 0.003,
    };
  }

  const rings = [];
  function spawnRing() {
    rings.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: 0,
      maxR: 180 + Math.random() * 220,
      opacity: 0.12,
      speed: 0.6 + Math.random() * 0.7,
    });
  }
  setInterval(spawnRing, 2200);
  spawnRing();

  function drawConstellation() {
    const maxDist = 90;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < maxDist) {
          const alpha = (1 - d / maxDist) * 0.06;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(245,197,66,${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  const SPARKLE_COUNT = 70;

  function makeStar() {
    return {
      x:       Math.random() * (W || window.innerWidth),
      y:       Math.random() * (H || window.innerHeight),
      size:    0.8 + Math.random() * 2.2,
      points:  Math.random() < 0.5 ? 4 : 6,
      rot:     Math.random() * Math.PI * 2,
      rotSpeed:(Math.random() - 0.5) * 0.04,
      vx:      (Math.random() - 0.5) * 0.3,
      vy:      -0.08 - Math.random() * 0.25,
      opacity: 0,
      maxOp:   0.18 + Math.random() * 0.22,
      phase:   Math.random() * Math.PI * 2,
      twinkleSpeed: 0.025 + Math.random() * 0.04,
      born:    0,
      lifespan: 180 + Math.random() * 300,
      age:     Math.floor(Math.random() * 300),
    };
  }

  const sparkles = Array.from({ length: SPARKLE_COUNT }, makeStar);

  function drawStar(cx, cy, pts, outer, inner, rot) {
    ctx.beginPath();
    for (let i = 0; i < pts * 2; i++) {
      const r = i % 2 === 0 ? outer : inner;
      const angle = rot + (i * Math.PI) / pts;
      i === 0 ? ctx.moveTo(cx + r * Math.cos(angle), cy + r * Math.sin(angle))
              : ctx.lineTo(cx + r * Math.cos(angle), cy + r * Math.sin(angle));
    }
    ctx.closePath();
  }

  function drawSparkles() {
    sparkles.forEach((s, idx) => {
      s.age++;
      s.rot += s.rotSpeed;
      s.x   += s.vx;
      s.y   += s.vy;
      s.phase += s.twinkleSpeed;

      const halfLife = s.lifespan * 0.5;
      if (s.age < halfLife * 0.3) {
        s.opacity = s.maxOp * (s.age / (halfLife * 0.3));
      } else if (s.age > s.lifespan * 0.7) {
        s.opacity = s.maxOp * (1 - (s.age - s.lifespan * 0.7) / (s.lifespan * 0.3));
      } else {
        s.opacity = s.maxOp * (0.6 + 0.4 * Math.sin(s.phase));
      }

      if (s.age > s.lifespan || s.y < -20) {
        sparkles[idx] = makeStar();
        sparkles[idx].y = H + 10;
        sparkles[idx].age = 0;
        return;
      }

      const a = Math.max(0, s.opacity);
      if (a < 0.005) return;

      const outer = s.size;
      const inner = s.size * 0.38;
      drawStar(s.x, s.y, s.points, outer, inner, s.rot);

      const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, outer * 1.2);
      grad.addColorStop(0,   `rgba(255,248,214,${a})`);
      grad.addColorStop(0.5, `rgba(245,197,66,${a * 0.55})`);
      grad.addColorStop(1,   `rgba(245,197,66,0)`);
      ctx.fillStyle = grad;
      ctx.fill();

      if (s.size > 1.6) {
        ctx.save();
        ctx.globalAlpha = a * 0.35;
        ctx.strokeStyle = `rgba(255,248,214,${a * 0.7})`;
        ctx.lineWidth = 0.4;
        const arm = s.size * 2.0;
        ctx.beginPath();
        ctx.moveTo(s.x - arm, s.y); ctx.lineTo(s.x + arm, s.y);
        ctx.moveTo(s.x, s.y - arm); ctx.lineTo(s.x, s.y + arm);
        ctx.stroke();
        ctx.restore();
      }
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    orbs.forEach(o => {
      o.phase += o.speed;
      const pulse = Math.sin(o.phase) * 0.012;
      o.x += o.vx;
      o.y += o.vy;
      if (o.x < -o.r) o.x = W + o.r;
      if (o.x > W + o.r) o.x = -o.r;
      if (o.y < -o.r) o.y = H + o.r;
      if (o.y > H + o.r) o.y = -o.r;
      const grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
      grad.addColorStop(0,   `rgba(245,197,66,${o.opacity + pulse})`);
      grad.addColorStop(0.5, `rgba(245,197,66,${(o.opacity + pulse) * 0.4})`);
      grad.addColorStop(1,   `rgba(245,197,66,0)`);
      ctx.beginPath();
      ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    });

    drawConstellation();

    particles.forEach((p, idx) => {
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;
      if (p.life <= 0 || p.y < -10) {
        particles[idx] = makeParticle();
        particles[idx].y = H + 5;
        return;
      }
      const a = p.opacity * p.life;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(245,197,66,${a})`;
      ctx.fill();
    });

    drawSparkles();

    for (let i = rings.length - 1; i >= 0; i--) {
      const ring = rings[i];
      ring.r += ring.speed;
      ring.opacity = 0.12 * (1 - ring.r / ring.maxR);
      if (ring.r >= ring.maxR) { rings.splice(i, 1); continue; }
      ctx.beginPath();
      ctx.arc(ring.x, ring.y, ring.r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(245,197,66,${ring.opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    requestAnimationFrame(draw);
  }

  draw();
})();