// Performance tiers based on WPM and Accuracy
const TIER_MESSAGES = {
  perfect: {
    tier: "Perfect Performance",
    color: "#f5c542",
    messages: [
      "Zero typos, zero chill, absolute unhinged behavior ??",
      "You are NOT normal. Perfect accuracy is legendary.",
      "Ate. Left no crumbs. Not a single one. Slay.",
      "This is giving god-tier and I am not okay ???"
    ]
  },
  veryFastGood: {
    tier: "Exceptional Speed",
    color: "#ffd966",
    messages: [
      "Are you human? Be so fr with me rn ??",
      "This is illegal in multiple countries no cap",
      "The FBI just opened a tab on you bestie ??",
      "You type like rent is due in 5 minutes fr"
    ]
  },
  fastGood: {
    tier: "Elite Performance",
    color: "#f5c542",
    messages: [
      "Bestie you're actually cooking and I'm shook ????",
      "No cap this is elite behavior fr fr",
      "The words are literally scared of you rn",
      "You just unlocked main character typing arc ?"
    ]
  },
  mediumGood: {
    tier: "Strong Performance",
    color: "#f5c542",
    messages: [
      "Okay wait you're actually built different rn ?",
      "No cap this is lowkey impressive fr",
      "The glow-up is REAL and I'm obsessed",
      "Certified keyboard menace and we love to see it ??"
    ]
  },
  mediumOkay: {
    tier: "Solid Performance",
    color: "#ffd966",
    messages: [
      "This is giving 9-to-5 office keyboard warrior era",
      "You're literally one energy drink away from cooking",
      "The potential is there and we see it bestie",
      "Solidly fine. Keep practicing!"
    ]
  },
  mediumPoor: {
    tier: "Development Zone",
    color: "#f97316",
    messages: [
      "Fast fingers, chaotic energy. Very unhinged bestie.",
      "The speed is there but accuracy said nah ??",
      "Going full send but the keyboard said no lmao",
      "Speedrunning errors is not the move fr fr"
    ]
  },
  slowOkay: {
    tier: "Warming Up",
    color: "#ffd966",
    messages: [
      "It's giving effort. We respect the grind.",
      "Lowkey warming up or lowkey napping? ??",
      "Not bad not good. Solidly mid-tier era fr.",
      "You're on the journey, keep going!"
    ]
  },
  slowPoor: {
    tier: "Getting Started",
    color: "#f97316",
    messages: [
      "Bestie... are you okay? ??",
      "This ain't it and we both know it fr",
      "The keyboard is not the problem just saying ??",
      "Keep practicing, you've got this!"
    ]
  }
};

function getPerformanceTier(wpm, acc) {
  if (acc === 100 && wpm >= 60) return 'perfect';
  if (wpm >= 85 && acc >= 85) return 'veryFastGood';
  if (wpm >= 60 && acc >= 78) return 'fastGood';
  if (wpm >= 38 && acc >= 78) return 'mediumGood';
  if (wpm >= 35 && acc >= 62) return 'mediumOkay';
  if (wpm >= 30 && acc < 62) return 'mediumPoor';
  if (wpm >= 12 && acc >= 65) return 'slowOkay';
  return 'slowPoor';
}

function formatTime(date) {
  if (!date) return '—';
  const d = new Date(date);
  return d.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

function loadAndDisplayReport() {
  // Retrieve results from localStorage
  const results = JSON.parse(localStorage.getItem('testResults') || '{}');
  
  if (!results.wpm) {
    document.body.innerHTML = '<div style="padding: 40px; text-align: center; color: #e8e8e8;"><h2>No test results found.</h2><p><a href="index.html" style="color: #f5c542;">Start a new test →</a></p></div>';
    return;
  }

  const { wpm, acc, totalTyped, totalErrors, selectedTime, selectedMode, timestamp, performanceData } = results;

  // Calculate derived values
  const wordsTyped = Math.floor((totalTyped) / 5);
  const correctChars = totalTyped - totalErrors;
  const errorRate = totalTyped > 0 ? Math.round((totalErrors / totalTyped) * 100) : 0;
  
  // Get performance tier
  const tier = getPerformanceTier(wpm, acc);
  const tierInfo = TIER_MESSAGES[tier];
  const tierMessage = tierInfo.messages[Math.floor(Math.random() * tierInfo.messages.length)];

  // Update main stats
  document.getElementById('wpm-value').textContent = wpm;
  document.getElementById('acc-value').textContent = acc + '%';
  document.getElementById('chars-value').textContent = totalTyped;
  document.getElementById('errors-value').textContent = totalErrors;

  // Update large stats (new side-by-side layout)
  document.getElementById('wpm-value-large').textContent = wpm;
  document.getElementById('acc-value-large').textContent = acc + '%';
  document.getElementById('errors-value-large').textContent = totalErrors;

  // Update tier section
  document.getElementById('tier-title').textContent = tierInfo.tier;
  document.getElementById('tier-message').textContent = tierMessage;
  document.getElementById('tier-section').style.borderColor = tierInfo.color;

  // Update details
  const modeDisplay = {
    'normal': 'Lowercase',
    'caps': 'Gradual Caps',
    'punct': 'Punctuation+'
  };
  document.getElementById('duration-value').textContent = selectedTime + 's';
  document.getElementById('words-typed').textContent = wordsTyped;
  document.getElementById('correct-chars').textContent = correctChars;
  document.getElementById('error-rate').textContent = errorRate + '%';
  document.getElementById('mode-value').textContent = modeDisplay[selectedMode] || selectedMode;
  document.getElementById('timestamp-value').textContent = formatTime(timestamp);

  // Update progress bars
  const accPercent = acc;
  const wpmPercent = Math.min(100, (wpm / 120) * 100);
  
  document.getElementById('acc-progress').style.width = accPercent + '%';
  document.getElementById('acc-percent').textContent = accPercent + '%';
  document.getElementById('wpm-progress').style.width = wpmPercent + '%';
  document.getElementById('wpm-percent').textContent = wpm + ' WPM';

  // Create performance chart
  createPerformanceChart(performanceData, selectedTime);
}

function createPerformanceChart(performanceData, selectedTime) {
  const ctx = document.getElementById('performanceChart').getContext('2d');
  
  // Generate sample data if not available
  let chartData = performanceData || generateSamplePerformanceData(selectedTime);
  
  // Prepare chart dataset
  const labels = chartData.map((_, i) => `${Math.round((i / chartData.length) * selectedTime)}s`);
  const wpmValues = chartData.map(d => d.wpm);
  const accValues = chartData.map(d => d.acc);

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Words Per Minute (WPM)',
          data: wpmValues,
          borderColor: '#ff8c00',
          backgroundColor: 'rgba(255, 140, 0, 0.15)',
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: '#ff8c00',
          pointBorderColor: '#1a1a1a',
          pointBorderWidth: 2,
          yAxisID: 'y'
        },
        {
          label: 'Accuracy (%)',
          data: accValues,
          borderColor: '#00d9ff',
          backgroundColor: 'rgba(0, 217, 255, 0.15)',
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: '#00d9ff',
          pointBorderColor: '#1a1a1a',
          pointBorderWidth: 2,
          yAxisID: 'y1'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: '#e8e8e8',
            font: { family: "'IBM Plex Mono', monospace", size: 12 },
            padding: 20,
            usePointStyle: true
          }
        },
        tooltip: {
          backgroundColor: 'rgba(15, 15, 15, 0.95)',
          titleColor: '#f5c542',
          bodyColor: '#e8e8e8',
          borderColor: '#1e1e1e',
          borderWidth: 1,
          padding: 12,
          titleFont: { size: 12, weight: 'bold' },
          bodyFont: { size: 11 },
          callbacks: {
            afterLabel: (context) => {
              if (context.datasetIndex === 0) return 'WPM';
              return '%';
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(30, 30, 30, 0.5)', drawBorder: false },
          ticks: { color: '#3a3a3a', font: { family: "'IBM Plex Mono', monospace", size: 10 } }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          grid: { color: 'rgba(30, 30, 30, 0.5)', drawBorder: false },
          ticks: { color: '#3a3a3a', font: { family: "'IBM Plex Mono', monospace", size: 10 } },
          title: { display: true, text: 'WPM', color: '#ff8c00', font: { size: 12, weight: 'bold' } }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          grid: { drawOnChartArea: false },
          ticks: { color: '#3a3a3a', font: { family: "'IBM Plex Mono', monospace", size: 10 } },
          title: { display: true, text: 'Accuracy (%)', color: '#00d9ff', font: { size: 12, weight: 'bold' } }
        }
      }
    }
  });
}

function generateSamplePerformanceData(duration) {
  const data = [];
  const points = Math.min(duration, 30); // Max 30 data points
  
  for (let i = 0; i < points; i++) {
    const progress = i / points;
    const wpm = Math.round(50 + Math.sin(progress * Math.PI * 2) * 15 + Math.random() * 10);
    const acc = Math.round(92 + Math.sin(progress * Math.PI) * 8 + Math.random() * 5);
    data.push({ wpm: Math.max(0, wpm), acc: Math.min(100, Math.max(0, acc)) });
  }
  
  return data;
}

function downloadReport() {
  const results = JSON.parse(localStorage.getItem('testResults') || '{}');
  
  if (!results.wpm) {
    alert('No test results to download');
    return;
  }

  const { wpm, acc, totalTyped, totalErrors, selectedTime, selectedMode, timestamp } = results;
  const tier = getPerformanceTier(wpm, acc);
  
  const report = `
STROKE TEST — PERFORMANCE REPORT
═════════════════════════════════════════════════════════════════

TEST DATE & TIME: ${formatTime(timestamp)}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
KEY METRICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Words Per Minute (WPM):     ${wpm}
Accuracy:                    ${acc}%
Characters Typed:            ${totalTyped}
Errors:                      ${totalErrors}
Test Duration:               ${selectedTime} seconds

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PERFORMANCE DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mode:                        ${selectedMode}
Words Typed:                 ${Math.floor(totalTyped / 5)}
Correct Characters:          ${totalTyped - totalErrors}
Error Rate:                  ${totalTyped > 0 ? Math.round((totalErrors / totalTyped) * 100) : 0}%
Performance Tier:            ${TIER_MESSAGES[tier].tier}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Generated by STROKE TEST
https://stroke-test.vercel.app
`;

  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(report));
  element.setAttribute('download', `stroke-test-report-${Date.now()}.txt`);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

// Load background canvas animation from script.js
function initBackgroundAnimation() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });

  // Simplified background animation
  const orbs = Array.from({ length: 4 }, (_, i) => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: 120 + Math.random() * 200,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
    opacity: 0.02 + Math.random() * 0.03,
  }));

  function draw() {
    ctx.clearRect(0, 0, W, H);
    orbs.forEach(o => {
      o.x += o.vx;
      o.y += o.vy;
      if (o.x < -o.r) o.x = W + o.r;
      if (o.x > W + o.r) o.x = -o.r;
      if (o.y < -o.r) o.y = H + o.r;
      if (o.y > H + o.r) o.y = -o.r;
      
      const grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
      grad.addColorStop(0, `rgba(245, 197, 66, ${o.opacity * 0.4})`);
      grad.addColorStop(1, 'rgba(245, 197, 66, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(o.x - o.r, o.y - o.r, o.r * 2, o.r * 2);
    });
    requestAnimationFrame(draw);
  }
  draw();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  loadAndDisplayReport();
  initBackgroundAnimation();
});
