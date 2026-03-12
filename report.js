/* ═══════════════════════════════════════════════════════
   TIERS
═══════════════════════════════════════════════════════ */
const TIERS = {
  perfect:      { n:'Perfect',         q:'Zero typos. Pure, undistilled god mode.' },
  veryFastGood: { n:'Exceptional',     q:'Borderline illegal speed. The keyboard fears you.' },
  fastGood:     { n:'Elite',           q:'You are genuinely built different. Respect.' },
  mediumGood:   { n:'Strong',          q:'Solid, consistent, composed. You know what you\'re doing.' },
  mediumOkay:   { n:'Solid',           q:'One focused session away from elite territory.' },
  mediumPoor:   { n:'Developing',      q:'Speed is there. Let\'s get accuracy locked in.' },
  slowOkay:     { n:'Warming Up',      q:'Progress is progress. The grind always pays off.' },
  slowPoor:     { n:'Getting Started', q:'Every expert was once exactly where you are now.' }
};

function getTier(w, a) {
  if (a === 100 && w >= 60) return 'perfect';
  if (w >= 85 && a >= 85)  return 'veryFastGood';
  if (w >= 60 && a >= 78)  return 'fastGood';
  if (w >= 38 && a >= 78)  return 'mediumGood';
  if (w >= 35 && a >= 62)  return 'mediumOkay';
  if (w >= 30 && a <  62)  return 'mediumPoor';
  if (w >= 12 && a >= 65)  return 'slowOkay';
  return 'slowPoor';
}

/* ═══════════════════════════════════════════════════════
   LOAD DATA FROM localStorage  (saved by script.js)
═══════════════════════════════════════════════════════ */
let R;
try { R = JSON.parse(localStorage.getItem('testResults') || 'null'); } catch(e) {}

/* fallback demo data so the page always looks good */
if (!R || !R.wpm) R = {
  wpm: 82, acc: 95,
  totalTyped: 348, totalErrors: 9, correctChars: 339,
  selectedTime: 60, selectedMode: 'normal',
  timestamp: new Date().toISOString(),
  performanceData: null
};

const {
  wpm, acc,
  totalTyped, totalErrors, correctChars,
  selectedTime, selectedMode,
  timestamp, performanceData
} = R;

const raw    = Math.round((correctChars / 5) / (selectedTime / 60));
const words  = Math.floor(correctChars / 5);
const calcAcc = Math.round((correctChars / totalTyped) * 100);
const errorPercent = Math.round((totalErrors / totalTyped) * 100);
const modeMap = { normal:'Lowercase', caps:'Gradual Caps', punct:'Punctuation+' };
const T = TIERS[getTier(wpm, acc)];

/* ═══════════════════════════════════════════════════════
   FILL STATIC TEXT
═══════════════════════════════════════════════════════ */
if (document.getElementById('h-wpm-sub')) document.getElementById('h-wpm-sub').textContent = 'words per minute';
if (document.getElementById('h-acc-sub')) document.getElementById('h-acc-sub').textContent = correctChars + ' correct · ' + totalErrors + ' errors';

if (document.getElementById('h-raw')) document.getElementById('h-raw').textContent = raw;
if (document.getElementById('h-time')) document.getElementById('h-time').textContent = selectedTime + 's';
if (document.getElementById('h-words')) document.getElementById('h-words').textContent = words;
if (document.getElementById('h-err')) document.getElementById('h-err').textContent = totalErrors;

if (document.getElementById('t-nm')) document.getElementById('t-nm').textContent = T.n;
if (document.getElementById('t-qt')) document.getElementById('t-qt').textContent = T.q;

if (document.getElementById('d-correct')) document.getElementById('d-correct').textContent = correctChars;
if (document.getElementById('d-errors')) document.getElementById('d-errors').textContent  = totalErrors;

if (document.getElementById('ft-date')) document.getElementById('ft-date').textContent = new Date(timestamp).toLocaleString('en-US', {
  month:'short', day:'numeric', year:'numeric', hour:'2-digit', minute:'2-digit'
});

/* ═══════════════════════════════════════════════════════
   COUNT-UP ANIMATION
═══════════════════════════════════════════════════════ */
function countUp(el, to, dur, suffix, delay) {
  if (!el) return;
  setTimeout(() => {
    const t0 = performance.now();
    const isInt = Number.isInteger(to);
    (function step(now) {
      const p = Math.min((now - t0) / dur, 1);
      const e = 1 - Math.pow(1 - p, 4);
      el.textContent = (isInt ? Math.round(e * to) : (e * to).toFixed(1)) + suffix;
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }, delay);
}

countUp(document.getElementById('h-wpm'),  wpm, 950, '',  100);
countUp(document.getElementById('h-acc'),  acc, 950, '%', 140);
countUp(document.getElementById('rl-wpm'), wpm, 950, '',  100);
countUp(document.getElementById('rl-acc'), acc, 950, '%', 140);
countUp(document.getElementById('d-pct'),  acc, 950, '%', 200);

/* ═══════════════════════════════════════════════════════
   HERO PROGRESS BAR
═══════════════════════════════════════════════════════ */
setTimeout(() => {
  if (document.getElementById('bar-wpm')) document.getElementById('bar-wpm').style.width = Math.min(100, (wpm / 120) * 100) + '%';
  if (document.getElementById('bar-acc')) document.getElementById('bar-acc').style.width = acc + '%';
}, 280);

/* ═══════════════════════════════════════════════════════
   ARC RING (canvas)
═══════════════════════════════════════════════════════ */
function drawRing(id, pct, delay) {
  const cv = document.getElementById(id);
  if (!cv) return;
  const sz  = 54;
  const dpr = window.devicePixelRatio || 1;
  cv.width  = sz * dpr; cv.height = sz * dpr;
  cv.style.width = sz + 'px'; cv.style.height = sz + 'px';
  const cx = cv.getContext('2d');
  cx.scale(dpr, dpr);
  const c = sz / 2, r = sz / 2 - 4, lw = 4, sa = -Math.PI / 2;

  setTimeout(() => {
    const t0 = performance.now();
    (function anim(now) {
      const p    = Math.min((now - t0) / 950, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      cx.clearRect(0, 0, sz, sz);
      /* track */
      cx.beginPath(); cx.arc(c, c, r, 0, 2 * Math.PI);
      cx.strokeStyle = 'rgba(255,255,255,.06)'; cx.lineWidth = lw; cx.stroke();
      /* fill */
      if (ease * pct > 0) {
        cx.beginPath(); cx.arc(c, c, r, sa, sa + 2 * Math.PI * (ease * pct / 100));
        const g = cx.createLinearGradient(0, 0, sz, sz);
        g.addColorStop(0, '#f5c542'); g.addColorStop(1, 'rgba(255,220,100,.5)');
        cx.strokeStyle = g; cx.lineWidth = lw; cx.lineCap = 'round'; cx.stroke();
      }
      if (p < 1) requestAnimationFrame(anim);
    })(t0);
  }, delay);
}

drawRing('ring-wpm', Math.min(100, (wpm / 120) * 100), 100);
drawRing('ring-acc', acc, 140);

/* ═══════════════════════════════════════════════════════
   DONUT CHART (keystroke split)
═══════════════════════════════════════════════════════ */
if (document.getElementById('donutC')) new Chart(document.getElementById('donutC').getContext('2d'), {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [correctChars, totalErrors],
      backgroundColor: ['#f5c542', 'rgba(192,85,85,.65)'],
      borderColor:     ['rgba(245,197,66,.18)', 'rgba(192,85,85,.18)'],
      borderWidth: 1, hoverOffset: 5
    }]
  },
  options: {
    cutout: '74%',
    responsive: false,
    animation: { duration: 950, easing: 'easeInOutQuart' },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(6,6,6,.97)', bodyColor: '#777',
        borderColor: 'rgba(245,197,66,.12)', borderWidth: 1, padding: 8,
        bodyFont: { family: "'IBM Plex Mono',monospace", size: 10, weight: '700' },
        callbacks: { label: i => `  ${i.raw} chars` }
      }
    }
  }
});

/* ═══════════════════════════════════════════════════════
   LINE CHART DATA  (uses real performanceData if available)
═══════════════════════════════════════════════════════ */
function generateLineData(duration, finalWpm, finalAcc) {
  const pts = Math.max(22, Math.min(duration, 42));
  const wA = [], rA = [], acA = [], eA = [], lb = [];
  for (let i = 0; i < pts; i++) {
    const p = i / (pts - 1), t = Math.round(p * duration);
    lb.push(t);
    const base = finalWpm * (0.4 + p * 0.6);
    const wave = Math.sin(p*Math.PI*2.2)*finalWpm*.22
               + Math.sin(p*Math.PI*6.1)*finalWpm*.08
               + Math.cos(p*Math.PI*3.9)*finalWpm*.05
               + (Math.random() - .5) * finalWpm * .09;
    wA.push(Math.max(0, Math.round(base + wave)));
    rA.push(Math.max(0, Math.round(raw * (0.28 + p * 0.72) + (Math.random() - .5) * 4)));
    acA.push(Math.min(100, Math.max(60, Math.round(finalAcc * (0.75 + p * 0.25) + (Math.random() - .5) * 4))));
    eA.push(Math.random() < .14 ? Math.ceil(Math.random() * 2) : null);
  }
  return { lb, wA, rA, acA, eA };
}

let D;
if (performanceData && performanceData.length > 1) {
  D = {
    lb:  performanceData.map((_, i) => Math.round((i / performanceData.length) * selectedTime)),
    wA:  performanceData.map(d => d.wpm  || 0),
    rA:  performanceData.map(d => Math.round((d.wpm || 0) * .87)),
    acA: performanceData.map(d => d.acc  || acc),
    eA:  performanceData.map(() => Math.random() < .13 ? 1 : null)
  };
} else {
  D = generateLineData(selectedTime, wpm, acc);
}

const maxE = Math.max(...D.eA.filter(Boolean), 2);

/* error ✕ plugin */
const errPlugin = {
  id: 'errX',
  afterDatasetsDraw(chart) {
    const { ctx, scales: { x, yErr } } = chart;
    if (!yErr) return;
    D.eA.forEach((v, i) => {
      if (!v) return;
      const px = x.getPixelForValue(i), py = yErr.getPixelForValue(v);
      ctx.save();
      ctx.font = 'bold 10px monospace';
      ctx.fillStyle = 'rgba(192,85,85,.8)';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('✕', px, py);
      ctx.restore();
    });
  }
};

/* gradient fills */
function goldFill(c) {
  const g = c.chart.ctx.createLinearGradient(0, 0, 0, c.chart.height);
  g.addColorStop(0,   'rgba(245,197,66,.16)');
  g.addColorStop(.55, 'rgba(245,197,66,.04)');
  g.addColorStop(1,   'rgba(245,197,66,0)');
  return g;
}

function accFill(c) {
  const g = c.chart.ctx.createLinearGradient(0, 0, 0, c.chart.height);
  g.addColorStop(0, 'rgba(91,156,246,.1)');
  g.addColorStop(1, 'rgba(91,156,246,0)');
  return g;
}

if (document.getElementById('lineC')) new Chart(document.getElementById('lineC').getContext('2d'), {
  type: 'line',
  plugins: [errPlugin],
  data: {
    labels: D.lb,
    datasets: [
      {
        label: 'raw',
        data: D.rA,
        borderColor: 'rgba(138,96,48,.55)', borderWidth: 1.5,
        borderDash: [4, 6], backgroundColor: 'transparent',
        fill: false, tension: .44,
        pointRadius: 0, pointHoverRadius: 3,
        yAxisID: 'y', order: 3
      },
      {
        label: 'wpm',
        data: D.wA,
        borderColor: 'rgba(245,197,66,.85)', borderWidth: 2.2,
        backgroundColor: goldFill, fill: true, tension: .44,
        pointRadius: 0, pointHoverRadius: 5,
        pointHoverBackgroundColor: '#f5c542',
        pointHoverBorderColor: '#060606', pointHoverBorderWidth: 2,
        yAxisID: 'y', order: 2
      },
      {
        label: 'acc %',
        data: D.acA,
        borderColor: 'rgba(91,156,246,.7)', borderWidth: 1.8,
        backgroundColor: accFill, fill: true, tension: .44,
        pointRadius: 0, pointHoverRadius: 4,
        pointHoverBackgroundColor: '#5b9cf6',
        pointHoverBorderColor: '#060606', pointHoverBorderWidth: 2,
        yAxisID: 'yAcc', order: 1
      }
    ]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    animation: { duration: 1100, easing: 'easeInOutQuart' },
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(6,6,6,.97)',
        titleColor: 'rgba(245,197,66,.5)',
        bodyColor: '#666',
        borderColor: 'rgba(245,197,66,.15)', borderWidth: 1,
        padding: 11, caretSize: 4,
        titleFont: { family:"'IBM Plex Mono',monospace", size: 9, weight: '300' },
        bodyFont:  { family:"'IBM Plex Mono',monospace", size: 10, weight: '700' },
        callbacks: {
          title: i => i[0].label + 's',
          label: i => `  ${i.dataset.label}   ${i.raw}`,
          afterBody: i => {
            const e = D.eA[i[0].dataIndex];
            return e != null ? `  errors  ${e}` : '';
          }
        }
      }
    },
    scales: {
      x: {
        grid:  { color: 'rgba(255,255,255,.035)' },
        ticks: { color: '#686868', font: { family:"'IBM Plex Mono',monospace", size: 10 }, maxTicksLimit: 10, maxRotation: 0 },
        border: { color: 'transparent' }
      },
      y: {
        position: 'left',
        grid:  { color: 'rgba(255,255,255,.035)' },
        ticks: { color: '#686868', font: { family:"'IBM Plex Mono',monospace", size: 10 }, maxTicksLimit: 6 },
        border: { color: 'transparent' },
        title: { display: true, text: 'WPM', color: 'rgba(245,197,66,.45)', font: { family:"'IBM Plex Mono',monospace", size: 9 } },
        beginAtZero: true
      },
      yAcc: {
        position: 'right',
        grid: { drawOnChartArea: false },
        ticks: {
          color: 'rgba(91,156,246,.65)',
          font: { family:"'IBM Plex Mono',monospace", size: 10 },
          maxTicksLimit: 5,
          callback: v => v + '%'
        },
        border: { color: 'transparent' },
        title: { display: true, text: 'ACC %', color: 'rgba(91,156,246,.45)', font: { family:"'IBM Plex Mono',monospace", size: 9 } },
        min: 0, max: 100
      },
      yErr: {
        display: false,
        beginAtZero: true, max: maxE + 1
      }
    }
  }
});

/* ═══════════════════════════════════════════════════════
   HORIZONTAL BAR CHART (performance breakdown)
═══════════════════════════════════════════════════════ */
if (document.getElementById('barC')) new Chart(document.getElementById('barC').getContext('2d'), {
  type: 'bar',
  data: {
    labels: ['correct', 'errors', 'raw', 'wpm'],
    datasets: [{
      data: [correctChars, totalErrors, raw, wpm],
      backgroundColor: [
        'rgba(245,197,66,.6)',
        'rgba(192,85,85,.55)',
        'rgba(138,96,48,.45)',
        'rgba(245,197,66,.9)'
      ],
      borderRadius: 2, borderSkipped: false, borderWidth: 0, barThickness: 28
    }]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    indexAxis: 'y',
    animation: { duration: 900, easing: 'easeInOutQuart', delay: ctx => ctx.dataIndex * 75 },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(6,6,6,.97)', bodyColor: '#666',
        borderColor: 'rgba(245,197,66,.12)', borderWidth: 1, padding: 8,
        bodyFont: { family:"'IBM Plex Mono',monospace", size: 10, weight: '700' },
        callbacks: { label: i => `  ${i.raw}` }
      }
    },
    scales: {
      x: {
        grid:  { color: 'rgba(255,255,255,.035)' },
        ticks: { color: '#686868', font: { family:"'IBM Plex Mono',monospace", size: 10 } },
        border: { color: 'transparent' }
      },
      y: {
        grid:  { display: false },
        ticks: { color: '#686868', font: { family:"'IBM Plex Mono',monospace", size: 10 } },
        border: { color: 'transparent' },
        categoryPercentage: 0.35,
        barPercentage: 0.8
      }
    }
  }
});

/* ═══════════════════════════════════════════════════════
   STAGGER PAGE REVEAL
═══════════════════════════════════════════════════════ */
[...document.querySelectorAll('.pg > *')].forEach((el, i) => {
  setTimeout(() => el.classList.add('vis'), i * 60);
});

/* ═══════════════════════════════════════════════════════
   DOWNLOAD REPORT
═══════════════════════════════════════════════════════ */
function dl() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let yPos = 20;
  
  // Set background
  doc.setFillColor(6, 6, 6);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');
  
  // Title
  doc.setFont('Bebas Neue');
  doc.setFontSize(24);
  doc.setTextColor(245, 197, 66);
  doc.text('STROKE TEST', pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 8;
  doc.setFontSize(10);
  doc.setTextColor(136, 136, 136);
  doc.text('PERFORMANCE REPORT', pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 15;
  
  // WPM Box
  doc.setDrawColor(245, 197, 66);
  doc.setLineWidth(0.5);
  doc.rect(15, yPos, 80, 40);
  
  doc.setFontSize(9);
  doc.setTextColor(136, 136, 136);
  doc.text('WORDS PER MINUTE', 20, yPos + 5);
  
  doc.setFont('Bebas Neue');
  doc.setFontSize(20);
  doc.setTextColor(245, 197, 66);
  doc.text(wpm + ' WPM', 20, yPos + 20);
  
  doc.setFont('helvetica');
  doc.setFontSize(8);
  doc.setTextColor(102, 102, 102);
  doc.text('Raw: ' + raw, 20, yPos + 30);
  doc.text('Time: ' + selectedTime + 's', 20, yPos + 36);
  
  // Accuracy Box
  doc.setDrawColor(91, 156, 246);
  doc.setLineWidth(0.5);
  doc.rect(115, yPos, 80, 40);
  
  doc.setFontSize(9);
  doc.setTextColor(136, 136, 136);
  doc.text('ACCURACY', 120, yPos + 5);
  
  doc.setFont('Bebas Neue');
  doc.setFontSize(20);
  doc.setTextColor(91, 156, 246);
  doc.text(calcAcc + '% CORRECT', 120, yPos + 20);
  
  doc.setFont('helvetica');
  doc.setFontSize(8);
  doc.setTextColor(102, 102, 102);
  doc.text('Words: ' + words, 120, yPos + 30);
  doc.text('Errors: ' + totalErrors + ' (' + errorPercent + '%)', 120, yPos + 36);
  
  yPos += 50;
  
  // Breakdown Box
  doc.setDrawColor(51, 51, 51);
  doc.setLineWidth(0.5);
  doc.rect(15, yPos, 180, 35);
  
  doc.setFontSize(9);
  doc.setTextColor(136, 136, 136);
  doc.text('BREAKDOWN', 20, yPos + 5);
  
  doc.setFont('helvetica');
  doc.setFontSize(8);
  doc.setTextColor(102, 102, 102);
  doc.text('Correct:', 20, yPos + 15);
  doc.text('Total Typed:', 60, yPos + 15);
  doc.text('Mode:', 100, yPos + 15);
  doc.text('Tier:', 140, yPos + 15);
  
  doc.setTextColor(245, 197, 66);
  doc.text(correctChars, 20, yPos + 23);
  doc.text(totalTyped, 60, yPos + 23);
  doc.text(modeMap[selectedMode] || selectedMode, 100, yPos + 23);
  doc.text(T.n, 140, yPos + 23);
  
  yPos += 40;
  
  // Tier Quote
  doc.setDrawColor(51, 51, 51);
  doc.setLineWidth(0.5);
  doc.rect(15, yPos, 180, 30);
  
  doc.setFont('helvetica');
  doc.setFontSize(9);
  doc.setTextColor(91, 156, 246);
  doc.setFont('helvetica', 'italic');
  const quote = doc.splitTextToSize('"' + T.q + '"', 170);
  doc.text(quote, 20, yPos + 10);
  
  yPos += 35;
  
  // Footer
  doc.setFont('helvetica');
  doc.setFontSize(8);
  doc.setTextColor(102, 102, 102);
  doc.text(new Date(timestamp).toLocaleString(), pageWidth / 2, yPos, { align: 'center' });
  doc.text('stroketest — made by arqam', pageWidth / 2, yPos + 6, { align: 'center' });
  
  doc.save('stroketest-' + Date.now() + '.pdf');
}
