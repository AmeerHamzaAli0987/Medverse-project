// ============================================================
//  MDCAT MCQ Bank — mcqs.js
// ============================================================

const mcqs = [
  // ── BIOLOGY (8) ──────────────────────────────────────────
  {
    id: 1,
    subject: 'biology',
    question: 'The powerhouse of the cell is the:',
    options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi apparatus'],
    correct: 1,
    explanation: "Mitochondria produce ATP through cellular respiration, earning the title 'powerhouse of the cell'."
  },
  {
    id: 2,
    subject: 'biology',
    question: 'Which blood group is known as the universal donor?',
    options: ['A', 'B', 'AB', 'O'],
    correct: 3,
    explanation: 'Blood group O negative is the universal donor as it lacks A, B, and Rh antigens.'
  },
  {
    id: 3,
    subject: 'biology',
    question: 'DNA replication occurs during which phase of the cell cycle?',
    options: ['G1 phase', 'S phase', 'G2 phase', 'M phase'],
    correct: 1,
    explanation: 'DNA synthesis (replication) occurs during the S (Synthesis) phase of interphase.'
  },
  {
    id: 4,
    subject: 'biology',
    question: 'The functional unit of the kidney is called:',
    options: ['Neuron', 'Nephron', 'Alveolus', 'Villus'],
    correct: 1,
    explanation: 'The nephron is the structural and functional unit of the kidney responsible for filtration.'
  },
  {
    id: 5,
    subject: 'biology',
    question: 'Photosynthesis takes place in:',
    options: ['Mitochondria', 'Nucleus', 'Chloroplast', 'Ribosome'],
    correct: 2,
    explanation: 'Chloroplasts contain chlorophyll and are the site of photosynthesis in plant cells.'
  },
  {
    id: 6,
    subject: 'biology',
    question: 'Which enzyme is responsible for unwinding the DNA double helix during replication?',
    options: ['DNA polymerase', 'Ligase', 'Helicase', 'Primase'],
    correct: 2,
    explanation: 'Helicase breaks hydrogen bonds between base pairs to unwind the double helix.'
  },
  {
    id: 7,
    subject: 'biology',
    question: 'The process by which plants lose water through leaves is called:',
    options: ['Osmosis', 'Transpiration', 'Respiration', 'Diffusion'],
    correct: 1,
    explanation: 'Transpiration is the evaporation of water from plant surfaces, mainly through stomata.'
  },
  {
    id: 8,
    subject: 'biology',
    question: 'Which part of the brain controls balance and coordination?',
    options: ['Cerebrum', 'Cerebellum', 'Medulla', 'Hypothalamus'],
    correct: 1,
    explanation: 'The cerebellum coordinates voluntary movements and maintains balance and posture.'
  },

  // ── CHEMISTRY (8) ────────────────────────────────────────
  {
    id: 9,
    subject: 'chemistry',
    question: 'The pH of a neutral solution at 25°C is:',
    options: ['0', '7', '14', '1'],
    correct: 1,
    explanation: 'At 25°C, pure water has equal H⁺ and OH⁻ concentrations, giving pH = 7 (neutral).'
  },
  {
    id: 10,
    subject: 'chemistry',
    question: 'Which of the following is an example of a noble gas?',
    options: ['Nitrogen', 'Oxygen', 'Argon', 'Chlorine'],
    correct: 2,
    explanation: 'Argon (Ar) is a noble gas in Group 18 with a complete outer electron shell.'
  },
  {
    id: 11,
    subject: 'chemistry',
    question: 'The number of moles in 18 g of water (H₂O) is:',
    options: ['0.5', '1', '2', '18'],
    correct: 1,
    explanation: 'Molar mass of H₂O = 18 g/mol. So 18 g ÷ 18 g/mol = 1 mole.'
  },
  {
    id: 12,
    subject: 'chemistry',
    question: 'Which type of bond is formed by sharing of electrons?',
    options: ['Ionic bond', 'Covalent bond', 'Hydrogen bond', 'Metallic bond'],
    correct: 1,
    explanation: 'Covalent bonds form when atoms share electron pairs to achieve stable configurations.'
  },
  {
    id: 13,
    subject: 'chemistry',
    question: 'The oxidation state of oxygen in H₂O₂ is:',
    options: ['-2', '-1', '0', '+1'],
    correct: 1,
    explanation: 'In hydrogen peroxide (H₂O₂), oxygen has an oxidation state of -1, not the usual -2.'
  },
  {
    id: 14,
    subject: 'chemistry',
    question: 'Which gas is produced when zinc reacts with dilute HCl?',
    options: ['Oxygen', 'Carbon dioxide', 'Hydrogen', 'Chlorine'],
    correct: 2,
    explanation: 'Zn + 2HCl → ZnCl₂ + H₂↑. Hydrogen gas is released in this displacement reaction.'
  },
  {
    id: 15,
    subject: 'chemistry',
    question: "Avogadro's number is approximately:",
    options: ['6.02 × 10²¹', '6.02 × 10²³', '6.02 × 10²⁵', '3.01 × 10²³'],
    correct: 1,
    explanation: "Avogadro's number (6.022 × 10²³) represents the number of particles in one mole of substance."
  },
  {
    id: 16,
    subject: 'chemistry',
    question: 'The IUPAC name of CH₃–CH₂–OH is:',
    options: ['Methanol', 'Ethanol', 'Propanol', 'Butanol'],
    correct: 1,
    explanation: 'CH₃–CH₂–OH has 2 carbon atoms with an –OH group, making it Ethanol (Ethan-1-ol).'
  },

  // ── PHYSICS (8) ──────────────────────────────────────────
  {
    id: 17,
    subject: 'physics',
    question: 'The SI unit of electric current is:',
    options: ['Volt', 'Ohm', 'Ampere', 'Watt'],
    correct: 2,
    explanation: 'The Ampere (A) is the SI base unit of electric current, defined by the flow of charge.'
  },
  {
    id: 18,
    subject: 'physics',
    question: 'Which law states that force equals mass times acceleration?',
    options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", 'Law of Gravitation'],
    correct: 1,
    explanation: "Newton's Second Law: F = ma. Force equals the product of mass and acceleration."
  },
  {
    id: 19,
    subject: 'physics',
    question: 'The speed of light in vacuum is approximately:',
    options: ['3 × 10⁶ m/s', '3 × 10⁸ m/s', '3 × 10¹⁰ m/s', '3 × 10⁴ m/s'],
    correct: 1,
    explanation: 'The speed of light in vacuum (c) is approximately 3 × 10⁸ m/s (299,792,458 m/s).'
  },
  {
    id: 20,
    subject: 'physics',
    question: 'Which type of wave does not require a medium to travel?',
    options: ['Sound wave', 'Water wave', 'Electromagnetic wave', 'Seismic wave'],
    correct: 2,
    explanation: 'Electromagnetic waves (light, radio, X-rays) can travel through vacuum without a medium.'
  },
  {
    id: 21,
    subject: 'physics',
    question: 'The unit of electrical resistance is:',
    options: ['Ampere', 'Volt', 'Ohm', 'Farad'],
    correct: 2,
    explanation: 'The Ohm (Ω) is the SI unit of electrical resistance, defined by Ohm\'s Law: R = V/I.'
  },
  {
    id: 22,
    subject: 'physics',
    question: 'Kinetic energy of an object is given by:',
    options: ['mgh', 'mv', '(1/2)mv²', 'Fd'],
    correct: 2,
    explanation: 'Kinetic energy KE = ½mv², where m is mass and v is velocity of the object.'
  },
  {
    id: 23,
    subject: 'physics',
    question: 'Which phenomenon explains the bending of light around obstacles?',
    options: ['Reflection', 'Refraction', 'Diffraction', 'Dispersion'],
    correct: 2,
    explanation: 'Diffraction is the bending of waves around obstacles or through openings.'
  },
  {
    id: 24,
    subject: 'physics',
    question: 'The half-life of a radioactive substance is the time taken for:',
    options: ['All atoms to decay', 'Half the atoms to decay', 'One atom to decay', 'The activity to double'],
    correct: 1,
    explanation: 'Half-life is the time for half the radioactive nuclei in a sample to undergo decay.'
  },

  // ── ENGLISH (6) ──────────────────────────────────────────
  {
    id: 25,
    subject: 'english',
    question: "Choose the correct synonym of 'Benevolent':",
    options: ['Cruel', 'Kind', 'Angry', 'Lazy'],
    correct: 1,
    explanation: "Benevolent means well-meaning and kindly. Its synonym is 'kind' or 'generous'."
  },
  {
    id: 26,
    subject: 'english',
    question: "The antonym of 'Verbose' is:",
    options: ['Talkative', 'Wordy', 'Concise', 'Fluent'],
    correct: 2,
    explanation: "Verbose means using more words than needed. Its antonym is 'concise' (brief and clear)."
  },
  {
    id: 27,
    subject: 'english',
    question: "Choose the correct meaning of 'Ephemeral':",
    options: ['Permanent', 'Lasting a short time', 'Very large', 'Extremely bright'],
    correct: 1,
    explanation: 'Ephemeral means lasting for a very short time, transitory or short-lived.'
  },
  {
    id: 28,
    subject: 'english',
    question: 'Identify the correct sentence:',
    options: [
      "She don't know the answer",
      "She doesn't knows the answer",
      "She doesn't know the answer",
      "She not know the answer"
    ],
    correct: 2,
    explanation: "With third person singular (she), use 'doesn't' + base verb: 'She doesn't know'."
  },
  {
    id: 29,
    subject: 'english',
    question: "The synonym of 'Ameliorate' is:",
    options: ['Worsen', 'Improve', 'Ignore', 'Destroy'],
    correct: 1,
    explanation: "Ameliorate means to make something bad better. Its synonym is 'improve' or 'enhance'."
  },
  {
    id: 30,
    subject: 'english',
    question: "Choose the antonym of 'Loquacious':",
    options: ['Talkative', 'Garrulous', 'Taciturn', 'Verbose'],
    correct: 2,
    explanation: "Loquacious means very talkative. Its antonym is 'taciturn' (reserved, saying little)."
  }
];

// ── State ────────────────────────────────────────────────────
let score = 0;
let answered = 0;
let currentFilter = 'all';

// ── Subject tag colours ──────────────────────────────────────
const subjectMeta = {
  biology:   { label: 'Biology',   color: 'rgba(34,197,94,0.15)',   border: 'rgba(34,197,94,0.35)',   text: '#4ade80' },
  chemistry: { label: 'Chemistry', color: 'rgba(56,189,248,0.15)',  border: 'rgba(56,189,248,0.35)',  text: '#38bdf8' },
  physics:   { label: 'Physics',   color: 'rgba(139,92,246,0.15)',  border: 'rgba(139,92,246,0.35)',  text: '#a78bfa' },
  english:   { label: 'English',   color: 'rgba(245,158,11,0.15)',  border: 'rgba(245,158,11,0.35)',  text: '#fbbf24' }
};

// ── Render ───────────────────────────────────────────────────
function renderMCQs(filter) {
  currentFilter = filter || 'all';
  const grid = document.getElementById('mcq-grid');
  if (!grid) return;

  const filtered = currentFilter === 'all'
    ? mcqs
    : mcqs.filter(q => q.subject === currentFilter);

  grid.innerHTML = '';
  score = 0;
  answered = 0;

  filtered.forEach((q, idx) => {
    const meta = subjectMeta[q.subject];
    const card = document.createElement('div');
    card.className = 'mcq-card';
    card.dataset.id = q.id;

    card.innerHTML = `
      <div class="mcq-card-top">
        <span class="mcq-num">Q${idx + 1}</span>
        <span class="mcq-subject-tag" style="
          background:${meta.color};
          border:1px solid ${meta.border};
          color:${meta.text};
          padding:2px 10px;
          border-radius:6px;
          font-size:0.68rem;
          font-weight:700;
          letter-spacing:0.06em;
          text-transform:uppercase;
        ">${meta.label}</span>
      </div>
      <p class="mcq-question">${q.question}</p>
      <div class="mcq-options">
        ${q.options.map((opt, i) => `
          <button
            class="mcq-option"
            data-index="${i}"
            onclick="handleAnswer(this, ${q.id}, ${i})"
          >${opt}</button>
        `).join('')}
      </div>
      <div class="mcq-explanation" id="exp-${q.id}">${q.explanation}</div>
    `;

    grid.appendChild(card);
  });

  updateScoreBar(filtered.length);
}

// ── Handle answer click ──────────────────────────────────────
function handleAnswer(btn, questionId, selectedIndex) {
  const q = mcqs.find(m => m.id === questionId);
  if (!q) return;

  const card = btn.closest('.mcq-card');
  const allOptions = card.querySelectorAll('.mcq-option');
  const explanation = document.getElementById('exp-' + questionId);

  // Disable all options in this card
  allOptions.forEach(opt => {
    opt.disabled = true;
  });

  // Mark correct answer green
  allOptions[q.correct].classList.add('correct');

  // Mark selected wrong answer red (if wrong)
  if (selectedIndex === q.correct) {
    score++;
  } else {
    btn.classList.add('wrong');
  }

  // Show explanation
  if (explanation) {
    explanation.classList.add('show');
  }

  answered++;
  updateScoreBar();
}

// ── Update score display ─────────────────────────────────────
function updateScoreBar(total) {
  const scoreEl = document.getElementById('score-display');
  const totalEl = document.getElementById('total-display');
  if (scoreEl) scoreEl.textContent = score;
  if (totalEl) {
    if (total !== undefined) {
      totalEl.textContent = total;
    } else {
      totalEl.textContent = answered;
    }
  }
}

// ── Reset all ────────────────────────────────────────────────
function resetAll() {
  renderMCQs(currentFilter);
}

// ── Expose globals for inline onclick ───────────────────────
window.handleAnswer = handleAnswer;
window.resetAll = resetAll;

// ── Filter buttons ───────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Initial render
  renderMCQs('all');

  // Wire up filter buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMCQs(btn.dataset.subject);
    });
  });
});
