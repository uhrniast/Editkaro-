// Contact Form
document.getElementById('contact-form')?.addEventListener('submit', e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  fetch('YOUR_GOOGLE_SCRIPT_URL', {
    method: 'POST',
    body: JSON.stringify(data)
  }).then(res => alert('Message sent!'));
});

// Subscribe Form
document.getElementById('subscribe-form')?.addEventListener('submit', e => {
  e.preventDefault();
  const email = e.target.email.value;
  fetch('YOUR_GOOGLE_SCRIPT_URL', {
    method: 'POST',
    body: JSON.stringify({ email })
  }).then(res => alert('Subscribed successfully!'));
});
