/* ═══════════════════════════════════════════
   MDCAT Test Engine — test.js
   ═══════════════════════════════════════════ */

// ── Test Definitions ─────────────────────────────────────────
const testConfigs = {
  'mock1': {
    name: 'MDCAT Full Mock Test — 01',
    duration: 40 * 60, // 40 mins demo (real = 210 mins)
    questions: 'full'
  },
  'mock2': {
    name: 'MDCAT Full Mock Test — 02',
    duration: 40 * 60,
    questions: 'full'
  },
  'cell-bio': {
    name: 'Cell Biology — Chapter Test',
    duration: 40 * 60,
    questions: 'biology'
  },
  'org-chem': {
    name: 'Organic Chemistry — Chapter Test',
    duration: 40 * 60,
    questions: 'chemistry'
  },
  'bio-full': {
    name: 'Biology Full Subject Test',
    duration: 50 * 60,
    questions: 'biology'
  }
};

// ── Question Bank ─────────────────────────────────────────────
const questionBank = [
  // BIOLOGY
  { id:1, subject:'biology', question:'The powerhouse of the cell is the:', options:['Nucleus','Mitochondria','Ribosome','Golgi apparatus'], correct:1, explanation:'Mitochondria produce ATP through cellular respiration.' },
  { id:2, subject:'biology', question:'Which blood group is known as the universal donor?', options:['A','B','AB','O'], correct:3, explanation:'Blood group O negative lacks A, B, and Rh antigens, making it the universal donor.' },
  { id:3, subject:'biology', question:'DNA replication occurs during which phase of the cell cycle?', options:['G1 phase','S phase','G2 phase','M phase'], correct:1, explanation:'DNA synthesis occurs during the S (Synthesis) phase of interphase.' },
  { id:4, subject:'biology', question:'The functional unit of the kidney is called:', options:['Neuron','Nephron','Alveolus','Villus'], correct:1, explanation:'The nephron is the structural and functional unit of the kidney.' },
  { id:5, subject:'biology', question:'Photosynthesis takes place in:', options:['Mitochondria','Nucleus','Chloroplast','Ribosome'], correct:2, explanation:'Chloroplasts contain chlorophyll and are the site of photosynthesis.' },
  { id:6, subject:'biology', question:'Which enzyme unwinds the DNA double helix during replication?', options:['DNA polymerase','Ligase','Helicase','Primase'], correct:2, explanation:'Helicase breaks hydrogen bonds between base pairs to unwind the helix.' },
  { id:7, subject:'biology', question:'The process by which plants lose water through leaves is called:', options:['Osmosis','Transpiration','Respiration','Diffusion'], correct:1, explanation:'Transpiration is evaporation of water from plant surfaces through stomata.' },
  { id:8, subject:'biology', question:'Which part of the brain controls balance and coordination?', options:['Cerebrum','Cerebellum','Medulla','Hypothalamus'], correct:1, explanation:'The cerebellum coordinates voluntary movements and maintains balance.' },
  { id:9, subject:'biology', question:'The process of cell division that produces gametes is called:', options:['Mitosis','Meiosis','Amitosis','Binary fission'], correct:1, explanation:'Meiosis produces haploid gametes (sperm and egg) through two divisions.' },
  { id:10, subject:'biology', question:'Which molecule carries genetic information from DNA to ribosomes?', options:['tRNA','rRNA','mRNA','snRNA'], correct:2, explanation:'mRNA (messenger RNA) carries the genetic code from DNA to ribosomes for protein synthesis.' },

  // CHEMISTRY
  { id:11, subject:'chemistry', question:'The pH of a neutral solution at 25°C is:', options:['0','7','14','1'], correct:1, explanation:'At 25°C, pure water has equal H⁺ and OH⁻ concentrations, giving pH = 7.' },
  { id:12, subject:'chemistry', question:'Which of the following is a noble gas?', options:['Nitrogen','Oxygen','Argon','Chlorine'], correct:2, explanation:'Argon (Ar) is a noble gas in Group 18 with a complete outer electron shell.' },
  { id:13, subject:'chemistry', question:'The number of moles in 18g of water (H₂O) is:', options:['0.5','1','2','18'], correct:1, explanation:'Molar mass of H₂O = 18 g/mol. So 18g ÷ 18 g/mol = 1 mole.' },
  { id:14, subject:'chemistry', question:'Which bond is formed by sharing of electrons?', options:['Ionic bond','Covalent bond','Hydrogen bond','Metallic bond'], correct:1, explanation:'Covalent bonds form when atoms share electron pairs.' },
  { id:15, subject:'chemistry', question:'The oxidation state of oxygen in H₂O₂ is:', options:['-2','-1','0','+1'], correct:1, explanation:'In hydrogen peroxide, oxygen has an oxidation state of -1.' },
  { id:16, subject:'chemistry', question:'Which gas is produced when zinc reacts with dilute HCl?', options:['Oxygen','Carbon dioxide','Hydrogen','Chlorine'], correct:2, explanation:'Zn + 2HCl → ZnCl₂ + H₂↑. Hydrogen gas is released.' },
  { id:17, subject:'chemistry', question:"Avogadro's number is approximately:", options:['6.02×10²¹','6.02×10²³','6.02×10²⁵','3.01×10²³'], correct:1, explanation:"Avogadro's number (6.022×10²³) is the number of particles in one mole." },
  { id:18, subject:'chemistry', question:'The IUPAC name of CH₃–CH₂–OH is:', options:['Methanol','Ethanol','Propanol','Butanol'], correct:1, explanation:'CH₃–CH₂–OH has 2 carbons with –OH group, making it Ethanol.' },
  { id:19, subject:'chemistry', question:'Which type of reaction involves the addition of hydrogen?', options:['Oxidation','Reduction','Substitution','Elimination'], correct:1, explanation:'Reduction involves gain of hydrogen (or loss of oxygen).' },
  { id:20, subject:'chemistry', question:'The atomic number of Carbon is:', options:['4','6','8','12'], correct:1, explanation:'Carbon has atomic number 6, meaning it has 6 protons in its nucleus.' },

  // PHYSICS
  { id:21, subject:'physics', question:'The SI unit of electric current is:', options:['Volt','Ohm','Ampere','Watt'], correct:2, explanation:'The Ampere (A) is the SI base unit of electric current.' },
  { id:22, subject:'physics', question:'Which law states F = ma?', options:["Newton's 1st Law","Newton's 2nd Law","Newton's 3rd Law",'Law of Gravitation'], correct:1, explanation:"Newton's Second Law: Force equals mass times acceleration." },
  { id:23, subject:'physics', question:'The speed of light in vacuum is approximately:', options:['3×10⁶ m/s','3×10⁸ m/s','3×10¹⁰ m/s','3×10⁴ m/s'], correct:1, explanation:'The speed of light (c) is approximately 3×10⁸ m/s.' },
  { id:24, subject:'physics', question:'Which wave does not require a medium to travel?', options:['Sound wave','Water wave','Electromagnetic wave','Seismic wave'], correct:2, explanation:'Electromagnetic waves can travel through vacuum without a medium.' },
  { id:25, subject:'physics', question:'The unit of electrical resistance is:', options:['Ampere','Volt','Ohm','Farad'], correct:2, explanation:'The Ohm (Ω) is the SI unit of electrical resistance.' },
  { id:26, subject:'physics', question:'Kinetic energy is given by:', options:['mgh','mv','½mv²','Fd'], correct:2, explanation:'Kinetic energy KE = ½mv², where m is mass and v is velocity.' },
  { id:27, subject:'physics', question:'Which phenomenon explains bending of light around obstacles?', options:['Reflection','Refraction','Diffraction','Dispersion'], correct:2, explanation:'Diffraction is the bending of waves around obstacles or through openings.' },
  { id:28, subject:'physics', question:'The half-life of a radioactive substance is:', options:['Time for all atoms to decay','Time for half atoms to decay','Time for one atom to decay','Time for activity to double'], correct:1, explanation:'Half-life is the time for half the radioactive nuclei to decay.' },
  { id:29, subject:'physics', question:'Which law relates pressure and volume of a gas at constant temperature?', options:["Charles' Law","Boyle's Law","Gay-Lussac's Law","Avogadro's Law"], correct:1, explanation:"Boyle's Law: PV = constant at constant temperature." },
  { id:30, subject:'physics', question:'The unit of power is:', options:['Joule','Newton','Watt','Pascal'], correct:2, explanation:'The Watt (W) is the SI unit of power, equal to 1 Joule per second.' },

  // ENGLISH
  { id:31, subject:'english', question:"Synonym of 'Benevolent':", options:['Cruel','Kind','Angry','Lazy'], correct:1, explanation:"Benevolent means well-meaning and kindly — synonym is 'kind'." },
  { id:32, subject:'english', question:"Antonym of 'Verbose':", options:['Talkative','Wordy','Concise','Fluent'], correct:2, explanation:"Verbose means using too many words. Antonym is 'concise'." },
  { id:33, subject:'english', question:"Meaning of 'Ephemeral':", options:['Permanent','Lasting a short time','Very large','Extremely bright'], correct:1, explanation:'Ephemeral means lasting for a very short time.' },
  { id:34, subject:'english', question:'Identify the correct sentence:', options:["She don't know","She doesn't knows","She doesn't know","She not know"], correct:2, explanation:"With third person singular, use 'doesn't' + base verb." },
  { id:35, subject:'english', question:"Synonym of 'Ameliorate':", options:['Worsen','Improve','Ignore','Destroy'], correct:1, explanation:"Ameliorate means to make better — synonym is 'improve'." },
  { id:36, subject:'english', question:"Antonym of 'Loquacious':", options:['Talkative','Garrulous','Taciturn','Verbose'], correct:2, explanation:"Loquacious means very talkative. Antonym is 'taciturn'." },
  { id:37, subject:'english', question:"Meaning of 'Ambiguous':", options:['Clear','Having two meanings','Definite','Simple'], correct:1, explanation:"Ambiguous means open to more than one interpretation." },
  { id:38, subject:'english', question:"Synonym of 'Diligent':", options:['Lazy','Careless','Hardworking','Slow'], correct:2, explanation:"Diligent means showing care and effort — synonym is 'hardworking'." }
];

// ── State ─────────────────────────────────────────────────────
let testQuestions = [];
let currentIndex = 0;
let answers = {};       // { questionId: selectedOptionIndex }
let timerInterval = null;
let timeLeft = 0;
let timeUsed = 0;
let testStartTime = null;
let testConfig = null;
let testSubmitted = false;

// ── Subject styling ───────────────────────────────────────────
const subjectStyle = {
  biology:   { bg:'rgba(34,197,94,0.12)',  border:'rgba(34,197,94,0.3)',  color:'#4ade80' },
  chemistry: { bg:'rgba(6,182,212,0.12)',  border:'rgba(6,182,212,0.3)',  color:'#67e8f9' },
  physics:   { bg:'rgba(139,92,246,0.12)', border:'rgba(139,92,246,0.3)', color:'#a78bfa' },
  english:   { bg:'rgba(245,158,11,0.12)', border:'rgba(245,158,11,0.3)', color:'#fbbf24' }
};
const letters = ['A','B','C','D'];

// ── Init ──────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const testId = params.get('test') || 'mock1';
  testConfig = testConfigs[testId] || testConfigs['mock1'];

  // Pick questions
  if (testConfig.questions === 'full') {
    testQuestions = shuffle([...questionBank]).slice(0, 20);
  } else {
    const filtered = questionBank.filter(q => q.subject === testConfig.questions);
    testQuestions = shuffle([...filtered]).slice(0, Math.min(filtered.length, 20));
  }

  // Set header
  document.getElementById('test-name').textContent = testConfig.name;
  document.title = testConfig.name + ' — MDCAT Preparation';

  // Init timer
  timeLeft = testConfig.duration;
  updateTimerDisplay();
  timerInterval = setInterval(tickTimer, 1000);
  testStartTime = Date.now();

  // Render palette
  renderPalette();
  // Show first question
  showQuestion(0);
});

// ── Timer ─────────────────────────────────────────────────────
function tickTimer() {
  if (testSubmitted) return;
  timeLeft--;
  timeUsed++;
  updateTimerDisplay();
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    submitTest();
  }
}

function updateTimerDisplay() {
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  document.getElementById('timer-display').textContent =
    String(mins).padStart(2,'0') + ':' + String(secs).padStart(2,'0');

  const timerEl = document.getElementById('timer');
  timerEl.classList.remove('warning','danger');
  if (timeLeft <= 60)       timerEl.classList.add('danger');
  else if (timeLeft <= 300) timerEl.classList.add('warning');
}

// ── Show Question ─────────────────────────────────────────────
function showQuestion(index) {
  currentIndex = index;
  const q = testQuestions[index];
  const total = testQuestions.length;
  const style = subjectStyle[q.subject] || subjectStyle.biology;

  // Header progress
  document.getElementById('progress-text').textContent = `Q ${index+1} / ${total}`;
  const pct = ((index+1) / total) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';

  // Question number & subject
  document.getElementById('q-num').textContent = `Question ${index+1} of ${total}`;
  const subTag = document.getElementById('q-subject');
  subTag.textContent = q.subject.charAt(0).toUpperCase() + q.subject.slice(1);
  subTag.style.cssText = `background:${style.bg};border:1px solid ${style.border};color:${style.color};padding:3px 12px;border-radius:6px;font-size:0.68rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;display:inline-block;`;

  // Question text
  document.getElementById('q-text').textContent = q.question;

  // Options
  const optContainer = document.getElementById('q-options');
  optContainer.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'test-option' + (answers[q.id] === i ? ' selected' : '');
    btn.innerHTML = `<span class="test-option-letter">${letters[i]}</span>${opt}`;
    btn.onclick = () => selectOption(q.id, i);
    optContainer.appendChild(btn);
  });

  // Nav buttons
  document.getElementById('prev-btn').disabled = index === 0;
  const nextBtn = document.getElementById('next-btn');
  if (index === total - 1) {
    nextBtn.innerHTML = '<i class="fas fa-check"></i> Finish';
    nextBtn.onclick = submitTest;
  } else {
    nextBtn.innerHTML = 'Next <i class="fas fa-chevron-right"></i>';
    nextBtn.onclick = nextQuestion;
  }

  // Update palette
  updatePalette();
}

// ── Select Option ─────────────────────────────────────────────
function selectOption(questionId, optionIndex) {
  answers[questionId] = optionIndex;
  // Re-render options with selection
  const q = testQuestions[currentIndex];
  const optContainer = document.getElementById('q-options');
  optContainer.querySelectorAll('.test-option').forEach((btn, i) => {
    btn.classList.toggle('selected', i === optionIndex);
    btn.querySelector('.test-option-letter').style.background = i === optionIndex ? 'var(--accent)' : '';
    btn.querySelector('.test-option-letter').style.color = i === optionIndex ? 'white' : '';
    btn.querySelector('.test-option-letter').style.borderColor = i === optionIndex ? 'var(--accent)' : '';
  });
  updatePalette();
  updateStats();
}

// ── Navigation ────────────────────────────────────────────────
function nextQuestion() {
  if (currentIndex < testQuestions.length - 1) showQuestion(currentIndex + 1);
}
function prevQuestion() {
  if (currentIndex > 0) showQuestion(currentIndex - 1);
}
window.nextQuestion = nextQuestion;
window.prevQuestion = prevQuestion;

// ── Palette ───────────────────────────────────────────────────
function renderPalette() {
  const palette = document.getElementById('test-palette');
  palette.innerHTML = '';
  testQuestions.forEach((q, i) => {
    const btn = document.createElement('button');
    btn.className = 'palette-btn';
    btn.textContent = i + 1;
    btn.onclick = () => showQuestion(i);
    palette.appendChild(btn);
  });
  updatePalette();
  updateStats();
}

function updatePalette() {
  const btns = document.querySelectorAll('.palette-btn');
  btns.forEach((btn, i) => {
    const q = testQuestions[i];
    btn.classList.remove('current','answered','skipped');
    if (i === currentIndex) btn.classList.add('current');
    else if (answers[q.id] !== undefined) btn.classList.add('answered');
  });
}

function updateStats() {
  const answered = Object.keys(answers).length;
  const total = testQuestions.length;
  document.getElementById('stat-answered').textContent = answered;
  document.getElementById('stat-skipped').textContent = 0;
  document.getElementById('stat-left').textContent = total - answered;
}

// ── Submit Test ───────────────────────────────────────────────
function submitTest() {
  if (testSubmitted) return;
  testSubmitted = true;
  clearInterval(timerInterval);

  const total = testQuestions.length;
  let correct = 0, wrong = 0, skipped = 0;

  testQuestions.forEach(q => {
    if (answers[q.id] === undefined) {
      skipped++;
    } else if (answers[q.id] === q.correct) {
      correct++;
    } else {
      wrong++;
    }
  });

  const pct = Math.round((correct / total) * 100);
  const elapsed = Math.floor((Date.now() - testStartTime) / 1000);
  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;

  // Result icon & message
  let icon = '😔', message = 'Keep practicing! Review your weak areas and try again.';
  if (pct >= 80) { icon = '🏆'; message = 'Excellent! Outstanding performance. You are well prepared for MDCAT!'; }
  else if (pct >= 60) { icon = '🎉'; message = 'Good job! Focus on your weak areas to improve further.'; }
  else if (pct >= 40) { icon = '📚'; message = 'Fair attempt. Revise the topics you got wrong and practice more.'; }

  document.getElementById('result-icon').textContent = icon;
  document.getElementById('result-title').textContent = pct >= 60 ? 'Great Work!' : 'Test Completed!';
  document.getElementById('result-score').textContent = `${correct}/${total}`;
  document.getElementById('result-percent').textContent = `${pct}% Score`;
  document.getElementById('res-correct').textContent = correct;
  document.getElementById('res-wrong').textContent = wrong;
  document.getElementById('res-skipped').textContent = skipped;
  document.getElementById('res-time').textContent = `${mins}:${String(secs).padStart(2,'0')}`;
  document.getElementById('result-message').textContent = message;

  document.getElementById('result-screen').style.display = 'flex';
}
window.submitTest = submitTest;

// ── Review Answers ────────────────────────────────────────────
function reviewAnswers() {
  document.getElementById('result-screen').style.display = 'none';
  const reviewList = document.getElementById('review-list');
  reviewList.innerHTML = '';

  testQuestions.forEach((q, idx) => {
    const userAns = answers[q.id];
    const isCorrect = userAns === q.correct;
    const isSkipped = userAns === undefined;
    const style = subjectStyle[q.subject] || subjectStyle.biology;

    const item = document.createElement('div');
    item.className = 'review-item';

    const badgeClass = isSkipped ? 'skipped' : isCorrect ? 'correct' : 'wrong';
    const badgeText = isSkipped ? 'Skipped' : isCorrect ? '✓ Correct' : '✗ Wrong';

    let optionsHtml = q.options.map((opt, i) => {
      let cls = '';
      if (i === q.correct) cls = 'correct';
      else if (i === userAns && !isCorrect) cls = 'wrong';
      const icon = i === q.correct ? '✓ ' : (i === userAns && !isCorrect ? '✗ ' : '');
      return `<div class="review-option ${cls}">${icon}${letters[i]}. ${opt}</div>`;
    }).join('');

    item.innerHTML = `
      <div class="review-item-top">
        <span class="review-q-num">Q${idx+1}</span>
        <span class="review-result-badge ${badgeClass}">${badgeText}</span>
        <span style="font-size:0.68rem;padding:2px 10px;border-radius:5px;background:${style.bg};color:${style.color};border:1px solid ${style.border};font-weight:700;letter-spacing:0.06em;text-transform:uppercase;">${q.subject}</span>
      </div>
      <div class="review-question">${q.question}</div>
      <div class="review-options">${optionsHtml}</div>
      <div class="review-explanation"><strong>Explanation:</strong> ${q.explanation}</div>
    `;
    reviewList.appendChild(item);
  });

  document.getElementById('review-screen').style.display = 'block';
}
window.reviewAnswers = reviewAnswers;

// ── Shuffle utility ───────────────────────────────────────────
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
