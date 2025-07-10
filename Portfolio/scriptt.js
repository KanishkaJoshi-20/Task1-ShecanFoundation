const toggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check localStorage for theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggle.textContent = '☀️ Light Mode';
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  toggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
