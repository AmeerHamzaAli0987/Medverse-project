/* ═══════════════════════════════════════════
   MDCAT Preparation — Auth JavaScript
   localStorage-based Auth System
   ═══════════════════════════════════════════ */

// ═══ STORAGE KEYS ═══
const USERS_KEY = 'mdcat_users';
const CURRENT_KEY = 'mdcat_current_user';

// ═══ HELPERS ═══
function getUsers() {
  try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; }
  catch { return []; }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function setCurrentUser(user) {
  const safe = {
    email:    user.email,
    fullName: user.fullName,
    phone:    user.phone || '',
    joinedAt: user.joinedAt
  };
  localStorage.setItem(CURRENT_KEY, JSON.stringify(safe));
}

function getCurrentUser() {
  try {
    const raw = localStorage.getItem(CURRENT_KEY);
    if (!raw) return null;
    const u = JSON.parse(raw);
    return (u && u.email) ? u : null;
  } catch { return null; }
}

function findUser(email) {
  return getUsers().find(u => u.email.toLowerCase() === email.toLowerCase());
}

// ═══ TOAST NOTIFICATION ═══
function showToast(message, type = 'success') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i> ${message}`;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(40px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ═══ FIELD VALIDATION ═══
function showError(inputId, message) {
  const input = document.getElementById(inputId);
  const errorEl = document.getElementById(inputId + '-error');
  if (input) input.classList.add('error');
  if (errorEl) { errorEl.textContent = message; errorEl.classList.add('show'); }
}

function clearError(inputId) {
  const input = document.getElementById(inputId);
  const errorEl = document.getElementById(inputId + '-error');
  if (input) input.classList.remove('error');
  if (errorEl) errorEl.classList.remove('show');
}

function clearAllErrors(...ids) {
  ids.forEach(id => clearError(id));
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(pw) {
  return pw.length >= 6;
}

// ═══ PASSWORD TOGGLE ═══
document.querySelectorAll('.toggle-pw').forEach(btn => {
  btn.addEventListener('click', () => {
    const input = btn.previousElementSibling || btn.parentElement.querySelector('input');
    if (!input) return;
    const isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';
    btn.innerHTML = isHidden
      ? '<i class="fas fa-eye-slash"></i>'
      : '<i class="fas fa-eye"></i>';
  });
});

// ═══ REDIRECT IF ALREADY LOGGED IN ═══
if (getCurrentUser() && (window.location.pathname.includes('login') || window.location.pathname.includes('signup'))) {
  // Optionally redirect to index
  // window.location.href = 'index.html';
}

// ═══ SIGNUP FORM ═══
const signupForm = document.getElementById('signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const agree = document.getElementById('agree').checked;
    const btn = signupForm.querySelector('.btn-auth');

    clearAllErrors('fullName', 'email', 'phone', 'password', 'confirmPassword');
    let valid = true;

    if (!fullName || fullName.length < 2) { showError('fullName', 'Please enter your full name.'); valid = false; }
    if (!validateEmail(email)) { showError('email', 'Please enter a valid email address.'); valid = false; }
    if (phone && !/^[0-9+\-\s]{7,15}$/.test(phone)) { showError('phone', 'Please enter a valid phone number.'); valid = false; }
    if (!validatePassword(password)) { showError('password', 'Password must be at least 6 characters.'); valid = false; }
    if (password !== confirmPassword) { showError('confirmPassword', 'Passwords do not match.'); valid = false; }
    if (!agree) { showToast('Please agree to the Terms & Conditions.', 'error'); valid = false; }
    if (!valid) return;

    if (findUser(email)) {
      showError('email', 'This email is already registered. Please login.');
      return;
    }

    btn.disabled = true;
    btn.textContent = 'Creating Account...';

    setTimeout(() => {
      const users = getUsers();
      const newUser = { fullName, email, phone, password, joinedAt: new Date().toISOString() };
      users.push(newUser);
      saveUsers(users);
      setCurrentUser(newUser);
      showToast('Account created successfully! Redirecting...', 'success');
      const params = new URLSearchParams(window.location.search);
      const redirect = params.get('redirect') || 'index';
      setTimeout(() => { window.location.href = redirect + '.html'; }, 1500);
    }, 900);
  });
}

// ═══ LOGIN FORM ═══
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember') ? document.getElementById('remember').checked : false;
    const btn = loginForm.querySelector('.btn-auth');

    clearAllErrors('email', 'password');
    let valid = true;

    if (!validateEmail(email)) { showError('email', 'Please enter a valid email address.'); valid = false; }
    if (!password) { showError('password', 'Please enter your password.'); valid = false; }
    if (!valid) return;

    btn.disabled = true;
    btn.textContent = 'Logging in...';

    setTimeout(() => {
      const user = findUser(email);
      if (!user) {
        showError('email', 'No account found with this email.');
        btn.disabled = false;
        btn.textContent = 'Login';
        return;
      }
      if (user.password !== password) {
        showError('password', 'Incorrect password. Please try again.');
        btn.disabled = false;
        btn.textContent = 'Login';
        return;
      }
      setCurrentUser(user);
      if (remember) {
        localStorage.setItem('mdcat_remembered_email', email);
      } else {
        localStorage.removeItem('mdcat_remembered_email');
      }
      showToast(`Welcome back, ${user.fullName ? user.fullName.split(' ')[0] : 'Student'}!`, 'success');
      // Redirect back to courses if came from there, else index
      const params = new URLSearchParams(window.location.search);
      const redirect = params.get('redirect') || 'index';
      setTimeout(() => { window.location.href = redirect + '.html'; }, 1400);
    }, 800);
  });

  // Pre-fill remembered email
  const remembered = localStorage.getItem('mdcat_remembered_email');
  if (remembered) {
    const emailInput = document.getElementById('email');
    const rememberCheck = document.getElementById('remember');
    if (emailInput) emailInput.value = remembered;
    if (rememberCheck) rememberCheck.checked = true;
  }
}

// ═══ REAL-TIME INPUT VALIDATION ═══
['fullName', 'email', 'phone', 'password', 'confirmPassword'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('input', () => clearError(id));
});
