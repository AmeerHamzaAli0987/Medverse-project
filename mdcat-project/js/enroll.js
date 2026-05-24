// ═══════════════════════════════════════════
//   Medverse — Enrollment System
//   Login required, multiple courses per user
// ═══════════════════════════════════════════

let currentCourse = {};

// ─── Open Modal ───────────────────────────
function openEnrollModal(title, price, subject, lessons, hours, students, img) {
  currentCourse = { title, price, subject, lessons, hours, students, img };

  const user = getLoggedInUser();

  // Not logged in → signup page
  if (!user) {
    window.location.href = 'signup.html?redirect=courses';
    return;
  }

  // Already enrolled check
  const list   = getMyEnrollments(user.email);
  const exists = list.some(e => e.title === title);
  if (exists) {
    showStep2('You are already enrolled in "' + title + '"! ✅');
    return;
  }

  // Fill modal
  document.getElementById('modalImg').src             = img;
  document.getElementById('modalTitle').textContent   = title;
  document.getElementById('modalPrice').textContent   = price;
  document.getElementById('modalLessons').textContent = lessons;
  document.getElementById('modalHours').textContent   = hours;
  document.getElementById('modalStudents').textContent = students;

  const tag = document.getElementById('modalTag');
  tag.textContent = subject;
  tag.className   = 'enroll-tag';
  const tagMap = {
    'Biology':'bio-tag','Chemistry':'chem-tag','Physics':'phy-tag',
    'English':'eng-tag','Logical Reasoning':'lr-tag','Bundle':'crash-tag'
  };
  if (tagMap[subject]) tag.classList.add(tagMap[subject]);

  showStep1();
}

// ─── Confirm Enrollment ───────────────────
function proceedEnroll() {
  const user = getLoggedInUser();

  // Double-check login
  if (!user) {
    closeEnrollModal();
    window.location.href = 'signup.html?redirect=courses';
    return;
  }

  const record = {
    userEmail:  user.email,
    userName:   user.name,
    title:      currentCourse.title,
    price:      currentCourse.price,
    subject:    currentCourse.subject,
    lessons:    currentCourse.lessons,
    hours:      currentCourse.hours,
    img:        currentCourse.img,
    enrolledAt: new Date().toISOString()
  };

  // Save per-user list  (key = medverse_enroll_user@email.com)
  const myList = getMyEnrollments(user.email);
  myList.push(record);
  localStorage.setItem('medverse_enroll_' + user.email, JSON.stringify(myList));

  // Save global list (all users combined)
  const allList = JSON.parse(localStorage.getItem('medverse_all_enrollments') || '[]');
  allList.push(record);
  localStorage.setItem('medverse_all_enrollments', JSON.stringify(allList));

  showStep2('Enrolled in "' + currentCourse.title + '"! Happy learning, ' + user.name + ' 🎉');
}

// ─── UI ───────────────────────────────────
function showStep1() {
  document.getElementById('enrollStep1').style.display = 'block';
  document.getElementById('enrollStep2').style.display = 'none';
  document.getElementById('enrollModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function showStep2(msg) {
  document.getElementById('enrollStep1').style.display = 'none';
  document.getElementById('enrollStep2').style.display = 'block';
  document.getElementById('enrollSuccessMsg').textContent = msg;
  document.getElementById('enrollModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeEnrollModal(e) {
  if (e && e.target !== document.getElementById('enrollModal')) return;
  document.getElementById('enrollModal').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeEnrollModal();
});

// ─── Storage Helpers ──────────────────────

// Get this user's enrollments
function getMyEnrollments(email) {
  try {
    const raw = localStorage.getItem('medverse_enroll_' + email);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

// Get logged-in user from auth session
function getLoggedInUser() {
  try {
    const raw = localStorage.getItem('mdcat_current_user');
    if (!raw) return null;
    const u = JSON.parse(raw);
    if (!u || !u.email) return null;
    return {
      email: u.email,
      name:  u.fullName || u.name || 'Student'
    };
  } catch { return null; }
}
