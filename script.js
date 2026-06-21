

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
  "a wellstructured argument requires evidence logic and honest reflection",
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
  "The caf� was warm, dimly lit, and always smelled of fresh coffee.",
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
  "The old saying goes: \"Measure twice, cut once\" � advice he always ignored.",
  "She left a voicemail that said: \"Call me back. It's not urgent; it is, though.\"",
  "The choices narrowed to two: stay and fight, or leave and never explain.",
  "\"You were right,\" he finally admitted; it took him three years to say it.",
  "The file was labeled: \"Final_v3_REAL_final / do not edit.\"",
  "She smiled and said, \"Of course,\" but her eyes were asking a different question.",
  "The error log showed one warning: \"Unexpected input; process terminated.\"",
  "Why rush? The deadline passed; the damage was done; the lesson was free.",
  "He underlined two words: \"never again\" � then underlined them a second time.",
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
    const words = sentence.split(' ');
    words.forEach((w) => {
      if (result.length < target) {
        const wordWithSpace = w + ' ';
        result.push(wordWithSpace);
      }
    });
    sentenceIdx++;
    if (sentenceIdx > 0 && sentenceIdx % shuffled.length === 0) {
      shuffled.sort(() => Math.random() - 0.5);
    }
  }
  return result;
}

/* ═══════════════════════════════════════════════════════
   WPM GRAPH - Real-time Performance Visualization
═══════════════════════════════════════════════════════ */

window.graphCanvas = null;
window.graphCtx = null;
window.graphData = []; // Array of {time, wpm} points
window.graphStartTime = 0;
window.graphMaxWPM = 50; // Dynamic max Y-axis value
window.graphTimeWindow = 0; // Will be set to selectedTime
window.graphAnimationFrame = null;
window.graphLastRenderTime = 0; // For smooth animation between frames
let graphLastUpdateTime = 0; // Track last time we updated graph for continuity

function initGraph() {
  window.graphCanvas = document.getElementById('wpm-graph-canvas');
  if (!window.graphCanvas) return;
  
  window.graphCtx = window.graphCanvas.getContext('2d');
  window.graphData = [];
  window.graphMaxWPM = 50; // Start with reasonable min scale
  window.graphStartTime = Date.now();
  window.graphTimeWindow = window.selectedTime; // Use global selectedTime
  window.graphLastRenderTime = Date.now();
  graphLastUpdateTime = 0; // Reset update time tracker
  
  // Set canvas size to match container, scaled for high-DPI screens
  const container = document.getElementById('wpm-graph-container');
  if (container) {
    const dpr = window.devicePixelRatio || 1;
    const logicalW = container.clientWidth;
    const logicalH = container.clientHeight;
    window.graphCanvas.width = logicalW * dpr;
    window.graphCanvas.height = logicalH * dpr;
    window.graphCanvas.style.width = logicalW + 'px';
    window.graphCanvas.style.height = logicalH + 'px';
    window.graphCtx.scale(dpr, dpr);
    window.graphDPR = dpr;
    window.graphLogicalW = logicalW;
    window.graphLogicalH = logicalH;
  }
  
  // Draw initial state
  renderGraph();
  
  // Start continuous animation loop for smooth rendering
  startGraphAnimation();
}

function renderGraph() {
  if (!window.graphCtx || !window.graphCanvas) return;
  
  const w = window.graphLogicalW || window.graphCanvas.width;
  const h = window.graphLogicalH || window.graphCanvas.height;
  const margin = 12;
  const graphW = w - margin * 2;
  const graphH = h - margin * 2;
  
  // Clear canvas with dark background
  window.graphCtx.fillStyle = 'rgba(26, 26, 26, 1)';
  window.graphCtx.clearRect(0, 0, w, h);
  window.graphCtx.fillRect(0, 0, w, h);
  
  // Draw background (subtle)
  window.graphCtx.fillStyle = 'rgba(245, 197, 66, 0.03)';
  window.graphCtx.fillRect(margin, margin, graphW, graphH);
  
  // Draw grid lines (faint)
  window.graphCtx.strokeStyle = 'rgba(245, 197, 66, 0.12)';
  window.graphCtx.lineWidth = 0.8;
  
  // Vertical grid lines (time)
  const timeSteps = 4;
  for (let i = 0; i <= timeSteps; i++) {
    const x = margin + (graphW / timeSteps) * i;
    window.graphCtx.beginPath();
    window.graphCtx.moveTo(x, margin);
    window.graphCtx.lineTo(x, h - margin);
    window.graphCtx.stroke();
  }
  
  // Horizontal grid lines (WPM)
  const wpmSteps = 4;
  for (let i = 0; i <= wpmSteps; i++) {
    const y = (h - margin) - (graphH / wpmSteps) * i;
    window.graphCtx.beginPath();
    window.graphCtx.moveTo(margin, y);
    window.graphCtx.lineTo(w - margin, y);
    window.graphCtx.stroke();
  }
  
  // Draw axes
  window.graphCtx.strokeStyle = 'rgba(245, 197, 66, 0.4)';
  window.graphCtx.lineWidth = 2;
  // X-axis (bottom)
  window.graphCtx.beginPath();
  window.graphCtx.moveTo(margin, h - margin);
  window.graphCtx.lineTo(w - margin, h - margin);
  window.graphCtx.stroke();
  // Y-axis (left)
  window.graphCtx.beginPath();
  window.graphCtx.moveTo(margin, margin);
  window.graphCtx.lineTo(margin, h - margin);
  window.graphCtx.stroke();
  
  // If no data, just show dot at origin
  if (window.graphData.length === 0) {
    window.graphCtx.fillStyle = '#f5c542';
    window.graphCtx.beginPath();
    window.graphCtx.arc(margin, h - margin, 3.5, 0, Math.PI * 2);
    window.graphCtx.fill();
    return;
  }
  
  // Dynamic Y-axis scaling
  const stableData = window.graphData.filter(p => p.time >= 3);
  
  if (stableData.length >= 2) {
    // After 3 seconds: scale based on actual stable typing speed
    const maxWpmInData = Math.max(...stableData.map(p => p.wpm));
    // 25% headroom, round up to nearest 10, minimum of 20
    window.graphMaxWPM = Math.max(20, Math.ceil(maxWpmInData * 1.25 / 10) * 10);
  }
  // Before 3 seconds: keep default of 50 (set in initGraph) — ignore early spikes entirely
  
  // Calculate ALL points in pixel space
  const allPoints = window.graphData.map(point => {
    const px = margin + (point.time / window.graphTimeWindow) * graphW;
    const py = (h - margin) - (Math.min(point.wpm, window.graphMaxWPM) / window.graphMaxWPM) * graphH;
    return { px, py, wpm: point.wpm };
  });
  
  // Time-based downsampling — sample at fixed intervals so existing points never shift
  const interval = Math.max(0.15, window.graphTimeWindow / 200);
  let points = [];
  let dataIdx = 0;
  const lastTime = window.graphData[window.graphData.length - 1].time;
  
  for (let t = 0; t <= lastTime; t += interval) {
    while (dataIdx < window.graphData.length - 1 && window.graphData[dataIdx + 1].time <= t) {
      dataIdx++;
    }
    points.push(allPoints[dataIdx]);
  }
  // Always include the very latest point for real-time responsiveness
  const latestPoint = allPoints[allPoints.length - 1];
  if (points.length === 0 || points[points.length - 1] !== latestPoint) {
    points.push(latestPoint);
  }
  
  // Catmull-Rom spline helper — draws smooth cubic curves through all points
  const tension = 0.15;
  function drawSpline(ctx, pts) {
    ctx.moveTo(pts[0].px, pts[0].py);
    if (pts.length === 2) {
      ctx.lineTo(pts[1].px, pts[1].py);
      return;
    }
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[Math.max(i - 1, 0)];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[Math.min(i + 2, pts.length - 1)];
      const cp1x = p1.px + (p2.px - p0.px) * tension;
      const cp1y = p1.py + (p2.py - p0.py) * tension;
      const cp2x = p2.px - (p3.px - p1.px) * tension;
      const cp2y = p2.py - (p3.py - p1.py) * tension;
      ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.px, p2.py);
    }
  }
  
  // Draw gradient fill under the curve
  if (points.length > 1) {
    const gradient = window.graphCtx.createLinearGradient(0, margin, 0, h - margin);
    gradient.addColorStop(0, 'rgba(245, 197, 66, 0.35)');
    gradient.addColorStop(0.5, 'rgba(245, 197, 66, 0.12)');
    gradient.addColorStop(1, 'rgba(245, 197, 66, 0.02)');
    
    window.graphCtx.fillStyle = gradient;
    window.graphCtx.beginPath();
    drawSpline(window.graphCtx, points);
    window.graphCtx.lineTo(points[points.length - 1].px, h - margin);
    window.graphCtx.lineTo(points[0].px, h - margin);
    window.graphCtx.closePath();
    window.graphCtx.fill();
  }
  
  // Draw main curve line
  if (points.length > 0) {
    window.graphCtx.strokeStyle = '#f5c542';
    window.graphCtx.lineWidth = 3.5;
    window.graphCtx.lineCap = 'round';
    window.graphCtx.lineJoin = 'round';
    window.graphCtx.beginPath();
    drawSpline(window.graphCtx, points);
    window.graphCtx.stroke();
    
    // Draw final point larger
    const last = points[points.length - 1];
    window.graphCtx.fillStyle = '#ffd966';
    window.graphCtx.beginPath();
    window.graphCtx.arc(last.px, last.py, 4.5, 0, Math.PI * 2);
    window.graphCtx.fill();
    window.graphCtx.strokeStyle = '#f5c542';
    window.graphCtx.lineWidth = 2.5;
    window.graphCtx.stroke();
  }
}

function updateGraphPointImmediate() {
  if (!window.started || window.finished) return;
  
  // Use actual elapsed time from test start
  const nowMs = Date.now();
  const elapsedMs = nowMs - window.graphStartTime;
  const elapsed = Math.max(elapsedMs / 1000, 0.1); // Convert to seconds, minimum 0.1s
  
  // Count correct characters in the current in-progress word
  let inProgressCorrect = 0;
  if (currentWordIndex < words.length) {
    const inputVal = hiddenInput.value;
    const currentWord = words[currentWordIndex];
    const cleanWord = currentWord.toLowerCase().replace(/[^\w\s]/g, '');
    for (let i = 0; i < inputVal.length && i < cleanWord.length; i++) {
      if (inputVal[i].toLowerCase() === cleanWord[i]) {
        inProgressCorrect++;
      }
    }
  }
  
  // Calculate cumulative average WPM including in-progress correct chars
  const totalCorrect = window.correctChars + inProgressCorrect;
  const avgWpm = elapsed > 0 ? Math.round((totalCorrect / 5) / (elapsed / 60)) : 0;
  
  // Add current data point instantly
  if (window.graphData.length === 0) {
    window.graphData.push({
      time: elapsed,
      wpm: avgWpm,
      correctCharsCount: totalCorrect
    });
  } else {
    const lastPoint = window.graphData[window.graphData.length - 1];
    // Update instantly when time or WPM changes
    if (Math.abs(elapsed - lastPoint.time) > 0.001 || avgWpm !== lastPoint.wpm) {
      window.graphData.push({
        time: elapsed,
        wpm: Math.max(0, avgWpm),
        correctCharsCount: totalCorrect
      });
    }
  }
}


function startGraphAnimation() {
  // Continuous smooth animation loop running at 60fps
  function animationLoop() {
    if (window.started && !window.finished) {
      // Update graph data continuously at 60fps for perfect sync and smoothness
      updateGraphPointImmediate();
      renderGraph();
      window.graphAnimationFrame = requestAnimationFrame(animationLoop);
    } else if (window.finished && window.graphData.length > 0) {
      // Final render when test ends
      renderGraph();
    }
  }
  
  window.graphAnimationFrame = requestAnimationFrame(animationLoop);
}

function stopGraphAnimation() {
  if (window.graphAnimationFrame) {
    cancelAnimationFrame(window.graphAnimationFrame);
    window.graphAnimationFrame = null;
  }
}

function clearGraph() {
  window.graphData = [];
  window.graphMaxWPM = 50;
  if (window.graphAnimationFrame) {
    cancelAnimationFrame(window.graphAnimationFrame);
    window.graphAnimationFrame = null;
  }
  if (window.graphCtx && window.graphCanvas) {
    const cw = window.graphLogicalW || window.graphCanvas.width;
    const ch = window.graphLogicalH || window.graphCanvas.height;
    window.graphCtx.fillStyle = 'rgba(26, 26, 26, 1)';
    window.graphCtx.clearRect(0, 0, cw, ch);
    window.graphCtx.fillRect(0, 0, cw, ch);
  }
}

window.selectedTime = 30;
window.timeLeft = 30;
let timer = null;
window.started = false;
window.finished = false;
let currentWordIndex = 0, currentCharIndex = 0;
let totalTyped = 0, totalErrors = 0;
let committedCorrectChars = 0; // Track correct chars from committed words
window.correctChars = 0;
let words = [], wordElements = [], charElements = [];
let performanceHistory = [];

const wordsDisplay = document.getElementById('words-display');
const hiddenInput  = document.getElementById('hidden-input');
const timerBar     = document.getElementById('timer-bar');
const timerBarWrap = document.getElementById('timer-bar-wrap');
const cursorBeam   = document.getElementById('cursor-beam');
const statsPanel   = document.getElementById('stats-panel');
const mainCard     = document.getElementById('main-card');

function generateWords(count = 100) { words = buildWordList(count); }

let wordsInner = null;

// -- PRE-GAME CHAR SCRAMBLER -------------------------------------------------
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
    let maxFirstLineIndex = -1;
    firstLineWords.sort((a,b)=>a.left-b.left).forEach(w => {
      maxFirstLineIndex = Math.max(maxFirstLineIndex, w.wi);
      if (w.right <= midX) skipUpToIndex = w.wi;
    });
    // Skip all first-line words by using the max index
    skipUpToIndex = maxFirstLineIndex;
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
    // Clean word: remove punctuation for display
    const cleanWord = word.toLowerCase().replace(/[^\w\s]/g, '');
    
    const wordEl = document.createElement('span');
    wordEl.className = 'word';
    const charEls = [];
    cleanWord.split('').forEach((ch, ci) => {
      const charEl = document.createElement('span');
      charEl.className = 'char scrambling';
      // Start as a random char
      charEl.textContent = SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      // Use original resting opacity/color
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
  // DISABLED: Spark animation removed
  return;
  const spark = document.createElement('div');
  spark.className = 'cursor-spark';
  spark.style.left = x + 'px';
  spark.style.top  = y + 'px';
  (wordsInner || wordsDisplay).appendChild(spark);
  setTimeout(() => spark.remove(), 520);
}

let cursorUpdatePending = false;

function updateCursorPosition() {
  if (currentWordIndex >= words.length || !started || finished) { 
    cursorBeam.style.display = 'none'; 
    cursorUpdatePending = false;
    return; 
  }
  
  const ref = wordsInner || wordsDisplay;
  if (!ref || !ref.parentElement) { 
    cursorBeam.style.display = 'none'; 
    cursorUpdatePending = false;
    return; 
  }
  
  try {
    // Get fresh reference to current word's char elements
    if (!charElements[currentWordIndex] || charElements[currentWordIndex].length === 0) {
      cursorUpdatePending = false;
      return;
    }
    
    const containerRect = ref.getBoundingClientRect();
    if (!containerRect) { 
      cursorUpdatePending = false;
      return; 
    }
    
    // Determine which character element to use for positioning
    let charElement = null;
    let isFirstChar = false;
    let useWordElement = false;
    
    if (currentCharIndex === 0) {
      charElement = charElements[currentWordIndex][0];
      isFirstChar = true;
    } else if (currentCharIndex >= charElements[currentWordIndex].length) {
      // When past all characters (e.g., space), use word element for positioning
      charElement = charElements[currentWordIndex][charElements[currentWordIndex].length - 1];
      useWordElement = true;
      isFirstChar = false;
    } else {
      charElement = charElements[currentWordIndex][currentCharIndex - 1];
      isFirstChar = false;
    }
    
    if (!charElement || !charElement.parentElement) {
      cursorUpdatePending = false;
      return;
    }
    
    // For space character, get bounding from word element instead
    let charRect = charElement.getBoundingClientRect();
    if (useWordElement && wordElements[currentWordIndex]) {
      charRect = wordElements[currentWordIndex].getBoundingClientRect();
    }
    
    if (!charRect) { 
      cursorUpdatePending = false;
      return; 
    }
    
    // Calculate cursor position
    let left, top, height;
    
    // Fallback dimensions for invisible characters like space
    const charWidth = charRect.width > 0 ? charRect.width : 8;
    const charHeight = charRect.height > 0 ? charRect.height : 18;
    
    if (isFirstChar) {
      left = charRect.left - containerRect.left - 2;
    } else if (useWordElement) {
      // Position at end of word element
      left = charRect.right - containerRect.left - 2;
    } else {
      // Position after the character
      left = charRect.left - containerRect.left + charWidth;
    }
    
    top = charRect.top - containerRect.top + charHeight * 0.1;
    height = Math.max(charHeight * 0.78, 8);
    
    // Validate all values
    if (!isFinite(left) || !isFinite(top) || !isFinite(height)) {
      cursorUpdatePending = false;
      return;
    }
    
    // SHOW cursor if we made it this far with valid data
    cursorBeam.style.display = 'block';
    cursorBeam.style.height = height + 'px';
    cursorBeam.style.transform = `translate(${left}px, ${top}px)`;
    
  } catch (e) {
    console.error('Cursor update error:', e);
  }
  
  cursorUpdatePending = false;
}

function moveCursor() {
  // Debounce cursor updates - only one update per frame
  if (!cursorUpdatePending) {
    cursorUpdatePending = true;
    requestAnimationFrame(updateCursorPosition);
  }
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
      <div id="wpm-graph-container" class="wpm-graph-container">
        <canvas id="wpm-graph-canvas"></canvas>
      </div>
    </div>
  `;
  if (statsPanel.classList.contains('show-results'))
    statsPanel.classList.replace('show-results', 'during-test');
  
  // Re-initialize the graph after DOM update
  setTimeout(() => initGraph(), 0);
}

let _arcTotal = 30;

// 3×5 pixel-block digit segments (each digit = 5 rows × 3 cols of 0/1)
const DIGIT_MAP = [
  [[1,1,1],[1,0,1],[1,0,1],[1,0,1],[1,1,1]], // 0
  [[0,1,0],[1,1,0],[0,1,0],[0,1,0],[1,1,1]], // 1
  [[1,1,1],[0,0,1],[1,1,1],[1,0,0],[1,1,1]], // 2
  [[1,1,1],[0,0,1],[1,1,1],[0,0,1],[1,1,1]], // 3
  [[1,0,1],[1,0,1],[1,1,1],[0,0,1],[0,0,1]], // 4
  [[1,1,1],[1,0,0],[1,1,1],[0,0,1],[1,1,1]], // 5
  [[1,1,1],[1,0,0],[1,1,1],[1,0,1],[1,1,1]], // 6
  [[1,1,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1]], // 7
  [[1,1,1],[1,0,1],[1,1,1],[1,0,1],[1,1,1]], // 8
  [[1,1,1],[1,0,1],[1,1,1],[0,0,1],[1,1,1]], // 9
];

function buildDigit(d) {
  const grid = DIGIT_MAP[d];
  const wrap = document.createElement('div');
  wrap.className = 'pxd-digit';
  grid.forEach(row => {
    row.forEach(on => {
      const cell = document.createElement('div');
      cell.className = 'pxd-cell' + (on ? ' on' : '');
      wrap.appendChild(cell);
    });
  });
  return wrap;
}

function renderPixelTimer(container, seconds) {
  let label;
  if (seconds >= 60) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    label = String(mins) + ':' + String(secs).padStart(2,'0');
  } else {
    label = String(seconds);
  }

  const existing = container.querySelectorAll('.pxd-digit, .pxd-colon');
  const chars = label.split('');

  if (existing.length === chars.length) {
    // Update existing cells in-place
    const digits = container.querySelectorAll('.pxd-digit');
    let di = 0;
    chars.forEach(ch => {
      if (ch === ':') return;
      const d = parseInt(ch);
      const cells = digits[di].querySelectorAll('.pxd-cell');
      DIGIT_MAP[d].flat().forEach((on, i) => {
        cells[i].className = 'pxd-cell' + (on ? ' on' : '');
      });
      di++;
    });
  } else {
    container.innerHTML = '';
    chars.forEach(ch => {
      if (ch === ':') {
        const col = document.createElement('div');
        col.className = 'pxd-colon';
        col.innerHTML = '<div class="pxd-dot"></div><div class="pxd-dot"></div>';
        container.appendChild(col);
      } else {
        container.appendChild(buildDigit(parseInt(ch)));
      }
    });
  }
}

function initArcTimer(container, total) {
  _arcTotal = total;
  container.innerHTML = '';
  renderPixelTimer(container, total);
}

function renderArcTimer(container, seconds) {
  renderPixelTimer(container, seconds);
}

function startTyping() {
  if (window.started) return;
  window.started = true;
  stopScrambler();
  wordsDisplay.classList.add('active-typing');
  document.getElementById('words-area').classList.add('typing-glow');
  mainCard.classList.add('focused');

  initGraph();

  timerBar.style.transition = 'none';
  timerBar.style.transform  = 'scaleX(1)';
  requestAnimationFrame(() => requestAnimationFrame(() => {
    timerBar.style.transition = `transform ${selectedTime}s linear`;
    timerBar.style.transform  = 'scaleX(0)';
  }));

  performanceHistory = [];
  timer = setInterval(() => {
    timeLeft--;
    const td = document.getElementById('time-display');
    if (td) {
      renderArcTimer(td, timeLeft);
      if (timeLeft <= 10) td.classList.add('urgent');
      else td.classList.remove('urgent');
    }
    
    // Track performance every second
    if (totalTyped > 0) {
      const elapsed = Math.max(selectedTime - timeLeft, 1);
      const wpm = Math.round((correctChars / 5) / (elapsed / 60));
      const acc = totalTyped > 0 ? Math.round((correctChars / totalTyped) * 100) : 100;
      performanceHistory.push({ wpm: Math.max(0, wpm), acc: Math.min(100, acc) });
    }
    
    if (timeLeft <= 0) { clearInterval(timer); endTest(); }
  }, 1000);
}

function endTest() {
  window.finished = true;
  hiddenInput.blur();
  cursorBeam.style.display = 'none';
  mainCard.classList.remove('focused');
  wordsDisplay.classList.remove('active-typing');
  document.getElementById('words-area').classList.remove('typing-glow');
  
  // Calculate final results
  const wpm = Math.round((correctChars / 5) / (selectedTime / 60));
  const acc = totalTyped > 0 ? Math.round((correctChars / totalTyped) * 100) : 0;
  
  // Save results to localStorage
  const testResults = {
    wpm: wpm,
    acc: acc,
    totalTyped: totalTyped,
    totalErrors: totalErrors,
    correctChars: correctChars,
    selectedTime: selectedTime,
    selectedMode: selectedMode,
    timestamp: new Date().toISOString(),
    performanceData: performanceHistory
  };
  
  localStorage.setItem('testResults', JSON.stringify(testResults));
  
  // Redirect immediately to report page without showing results on index
  window.location.href = 'report.html';
}

function commitWord(typedInput) {
  const typed = typedInput.toLowerCase();
  const currentWord = words[currentWordIndex];
  const cleanWord = currentWord.toLowerCase().replace(/[^\w\s]/g, '');
  
  // Mark remaining untyped characters as wrong
  for (let i = typed.length; i < cleanWord.length; i++)
    charElements[currentWordIndex][i]?.classList.add('wrong');
  
  // Track total typed and errors for final stats
  const compareLen = Math.max(typed.length, cleanWord.length);
  let correctInThisWord = 0;
  for (let i = 0; i < compareLen; i++) {
    totalTyped++;
    if (i < typed.length && i < cleanWord.length && typed[i] === cleanWord[i]) {
      correctInThisWord++;
    } else {
      totalErrors++;
    }
  }
  
  // Update committed correct chars for graph calculation
  committedCorrectChars += correctInThisWord;
  
  if (typed !== cleanWord) {
    const wEl = wordElements[currentWordIndex];

  }
  currentWordIndex++; currentCharIndex = 0; hiddenInput.value = '';
  if (typed === cleanWord) {
    const prevEl = wordElements[currentWordIndex - 1];
    if (prevEl) {
      prevEl.classList.add('committed');
      setTimeout(() => prevEl.classList.remove('committed'), 420);
      spawnFloatParticle(prevEl);
    }
  }
  if (currentWordIndex >= words.length) { endTest(); return; }
  autoScrollToWord(currentWordIndex);
  moveCursor();
}

let lastInputLength = 0; // Track previous input length for backspace detection
let skipBackspaceDetection = false; // Flag to prevent false backspace detection after commit

hiddenInput.addEventListener('input', () => {
  if (window.finished) return;
  let inputVal = hiddenInput.value;
  const currentWord = words[currentWordIndex];
  
  // Clean word: remove punctuation and convert to lowercase for comparison
  const cleanWord = currentWord.toLowerCase().replace(/[^\w\s]/g, '');

  skipBackspaceDetection = false; // Reset flag
  lastInputLength = inputVal.length; // Update for next time

  // Track actual input length for cursor position (now includes spaces)
  currentCharIndex = inputVal.length;
  
  // Show visual feedback for all typed characters
  charElements[currentWordIndex]?.forEach((charEl, i) => {
    // ALWAYS remove both classes first for clean state
    charEl.classList.remove('correct', 'wrong');
    charEl.style.opacity = '';
    charEl.style.color = '';
    
    if (i < inputVal.length) {
      // Apply styling for each typed character
      if (inputVal[i].toLowerCase() === cleanWord[i]) {
        charEl.classList.add('correct');
      } else {
        void charEl.offsetWidth; // Trigger reflow for color transition
        charEl.classList.add('wrong');
      }
    }
  });
  
  // Update window.correctChars in real-time for accurate graph WPM
  // Count: correct chars from completed words + correct chars in current word being typed
  let realtimeCorrectChars = committedCorrectChars; // Start with correct chars from previous committed words
  
  // Add correct chars in current word being typed
  for (let i = 0; i < Math.min(inputVal.length, cleanWord.length); i++) {
    if (inputVal[i].toLowerCase() === cleanWord[i]) {
      realtimeCorrectChars++;
    }
  }
  
  window.correctChars = realtimeCorrectChars;
  
  // Update graph on every keystroke for real-time sync
  updateGraphPointImmediate();
  
  // Update cursor position ONCE per input event (debounced)
  moveCursor();
  clearTimeout(cursorBlinkTimeout);
  // ANIMATION DISABLED - Do not add cursor-blink class
  // cursorBeam.classList.remove('cursor-blink');
  // cursorBlinkTimeout = setTimeout(() => {
  //   cursorBeam.classList.add('cursor-blink');
  // }, 500);
});

hiddenInput.addEventListener('keydown', e => {
  if (window.finished) return;

  const currentWord = words[currentWordIndex];
  const cleanWord = currentWord.toLowerCase().replace(/[^\w\s]/g, '');

  // Handle Backspace: always delete one character at a time
  if (e.key === 'Backspace') {
    e.preventDefault();
    const currentInput = hiddenInput.value;
    
    if (currentInput.length === 0) {
      // When input is empty, move to previous word
      if (currentWordIndex > 0) {
        // Move to previous word
        currentWordIndex--;
        const prevWord = words[currentWordIndex];
        const cleanWord = prevWord.toLowerCase().replace(/[^\w\s]/g, '');
        // Set to word with last character already deleted (one backspace removes one char)
        hiddenInput.value = cleanWord.slice(0, -1);
        currentCharIndex = hiddenInput.value.length;
        // Trigger input event to restore visual styling
        hiddenInput.dispatchEvent(new Event('input', { bubbles: true }));
      } else {
        // Already at first word, just ensure cursor at start
        currentCharIndex = 0;
      }
    } else {
      // Delete single character from input
      hiddenInput.value = currentInput.slice(0, -1);
      // Trigger input event to update UI
      hiddenInput.dispatchEvent(new Event('input', { bubbles: true }));
    }
    return;
  }

  // Handle Space: commit the word instead of typing space
  if (e.key === ' ') {
    e.preventDefault();
    const currentInput = hiddenInput.value;
    if (currentInput.length > 0) {
      // Commit the word without adding space
      commitWord(currentInput);
    }
    return;
  }

  // Prevent typing characters beyond the word length
  const currentInput = hiddenInput.value;
  if (currentInput.length >= cleanWord.length && e.key.length === 1 && !e.ctrlKey && !e.altKey) {
    e.preventDefault();
    return;
  }
});

// -- KEY TO START: first keypress starts the test but does NOT type into the box --
document.addEventListener('keydown', e => {
  if (e.key === 'Tab') { e.preventDefault(); generateWords(); resetTest(); return; }
  
  // Alt+Backspace to go to previous word (advanced feature)
  if (e.key === 'Backspace' && e.altKey && window.started && !window.finished && currentWordIndex > 0) {
    e.preventDefault();
    currentWordIndex--;
    currentCharIndex = 0;
    hiddenInput.value = '';
    charElements[currentWordIndex]?.forEach((charEl) => {
      charEl.classList.remove('correct', 'wrong');
    });
    autoScrollToWord(currentWordIndex);
    moveCursor();
    hiddenInput.focus();
    return;
  }

  if (!window.started && !window.finished) {
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      hiddenInput.focus();
      // Add the first character to input and start typing
      hiddenInput.value = e.key;
      startTyping();
      // Trigger input event to process the first character
      hiddenInput.dispatchEvent(new Event('input', { bubbles: true }));
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
  stopScrambler();
  clearGraph();
  window.started = window.finished = false;
  currentWordIndex = currentCharIndex = 0;
  totalTyped = totalErrors = 0;
  committedCorrectChars = 0;
  window.correctChars = 0;
  performanceHistory = [];
  window.timeLeft = window.selectedTime;

  timerBar.style.transition = 'none';
  timerBar.style.transform  = 'scaleX(1)';
  hiddenInput.value = '';
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
    window.selectedTime = parseInt(btn.dataset.time);
    generateWords(window.selectedTime >= 60 ? 180 : 100);
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

// ============================================================================
// SCREEN SAVER - Shows when inactive for 12 seconds (only when test not running)
// ============================================================================
let screensaverTimeout = null;
let screensaverActive = false;
let screensaverUpdateInterval = null;

function hideScreensaver(e) {
  if (!screensaverActive) return;
  screensaverActive = false;
  
  const overlay = document.getElementById('screensaver-overlay');
  if (overlay) {
    overlay.classList.add('hiding');
    
    setTimeout(() => {
      overlay.classList.remove('active', 'hiding');
    }, 500);
  }
  
  // Remove all event listeners
  document.removeEventListener('keydown', hideScreensaver);
  document.removeEventListener('keypress', hideScreensaver);
  document.removeEventListener('keyup', hideScreensaver);
  document.removeEventListener('mousedown', hideScreensaver);
  
  // Restart inactivity timer
  resetScreensaverTimer();
}

function updateScreensaverTime() {
  const clockContainer = document.getElementById('screensaver-clock');
  const dateContainer = document.getElementById('screensaver-date');
  if (!clockContainer) return;
  
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeStr = hours + ':' + minutes + ':' + seconds;
  
  // Update date
  if (dateContainer) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    dateContainer.textContent = `${date} ${month} ${year}`;
  }
  
  // Clear previous content
  clockContainer.innerHTML = '';
  
  // For each character in timeStr, create pixel-block digit
  for (let i = 0; i < timeStr.length; i++) {
    const char = timeStr[i];
    
    if (char === ':') {
      // Create colon separator
      const colonDiv = document.createElement('div');
      colonDiv.className = 'screensaver-clock-colon';
      colonDiv.appendChild(document.createElement('div')); // top dot
      colonDiv.appendChild(document.createElement('div')); // bottom dot
      colonDiv.querySelectorAll('div').forEach(dot => {
        dot.className = 'screensaver-clock-dot';
      });
      clockContainer.appendChild(colonDiv);
    } else {
      // Create digit grid
      const digitNum = parseInt(char);
      const digitGrid = DIGIT_MAP[digitNum];
      const digitDiv = document.createElement('div');
      
      digitGrid.forEach(row => {
        row.forEach(on => {
          const cell = document.createElement('div');
          cell.className = 'screensaver-clock-cell' + (on ? ' on' : '');
          digitDiv.appendChild(cell);
        });
      });
      
      clockContainer.appendChild(digitDiv);
    }
  }
}

function showScreensaver() {
  if (window.started) return; // Don't show if test is running
  screensaverActive = true;
  
  const overlay = document.getElementById('screensaver-overlay');
  if (overlay) {
    overlay.classList.add('active');
    updateScreensaverTime();
    
    // Update time every 1 second
    if (screensaverUpdateInterval) clearInterval(screensaverUpdateInterval);
    screensaverUpdateInterval = setInterval(() => {
      if (screensaverActive) {
        updateScreensaverTime();
      }
    }, 1000);
  }
  
  // Add event listeners to hide on any key press or mouse click
  document.addEventListener('keydown', hideScreensaver);
  document.addEventListener('keypress', hideScreensaver);
  document.addEventListener('keyup', hideScreensaver);
  document.addEventListener('mousedown', hideScreensaver);
  
  // CURSOR ANIMATION DISABLED - mousemove effect removed
}

function resetScreensaverTimer() {
  if (window.started) return; // Don't set timer if test is running
  
  if (screensaverTimeout) clearTimeout(screensaverTimeout);
  if (screensaverUpdateInterval) clearInterval(screensaverUpdateInterval);
  
  screensaverTimeout = setTimeout(() => {
    if (!window.started) {
      showScreensaver();
    }
  }, 12000); // 12 seconds
}

// Track activity to reset screensaver timer (only keyboard and mouseclick, not mousemove)
document.addEventListener('keydown', () => {
  if (screensaverActive) return;
  resetScreensaverTimer();
});
document.addEventListener('mousedown', () => {
  if (screensaverActive) return;
  resetScreensaverTimer();
});

// Clear screensaver when test starts
const originalStartTyping = window.startTyping;
window.startTyping = function() {
  hideScreensaver();
  if (screensaverTimeout) clearTimeout(screensaverTimeout);
  if (screensaverUpdateInterval) clearInterval(screensaverUpdateInterval);
  originalStartTyping.apply(this, arguments);
};

// Reset screensaver when test ends
const originalResetTest = resetTest;
resetTest = function() {
  hideScreensaver();
  originalResetTest.apply(this, arguments);
  resetScreensaverTimer();
};

// Initialize screensaver timer on page load
resetScreensaverTimer();

// --- BACKGROUND CANVAS - DISABLED (only grid background is shown via CSS) ---
(function() {
  const canvas = document.getElementById('bg-canvas');
  if (canvas) {
    canvas.style.display = 'none';
  }
})();
