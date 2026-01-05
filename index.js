import "./styles/main.scss";
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import { CONTACTS, SOCIAL_LINKS, PROJECTS, FORM_ACTION } from './constants';


document.body.classList.remove('hidden');

// Apply constants to links
function applyLinks() {
  // Contact links
  const emailLink = document.querySelector('[data-link="email"]');
  const phoneLink = document.querySelector('[data-link="phone"]');
  
  if (emailLink) emailLink.href = `mailto:${CONTACTS.email}`;
  if (phoneLink) phoneLink.href = `tel:${CONTACTS.phone}`;
  
  // Social links
  const linkedinLink = document.querySelector('[data-link="linkedin"]');
  const githubLink = document.querySelector('[data-link="github"]');
  const telegramLink = document.querySelector('[data-link="telegram"]');
  const whatsappLink = document.querySelector('[data-link="whatsapp"]');
  
  if (linkedinLink) linkedinLink.href = SOCIAL_LINKS.linkedin;
  if (githubLink) githubLink.href = SOCIAL_LINKS.github;
  if (telegramLink) telegramLink.href = SOCIAL_LINKS.telegram;
  if (whatsappLink) whatsappLink.href = SOCIAL_LINKS.whatsapp;
  
  // Project links
  const weatherLink = document.querySelector('[data-link="weather"]');
  const chatLink = document.querySelector('[data-link="chat"]');
  const ticTacToeLink = document.querySelector('[data-link="ticTacToe"]');
  const bugKillerLink = document.querySelector('[data-link="bugKiller"]');
  
  if (weatherLink) weatherLink.href = PROJECTS.weather;
  if (chatLink) chatLink.href = PROJECTS.chat;
  if (ticTacToeLink) ticTacToeLink.href = PROJECTS.ticTacToe;
  if (bugKillerLink) bugKillerLink.href = PROJECTS.bugKiller;
  
  // Form action
  const form = document.getElementById("my-form");
  if (form) form.action = FORM_ACTION;
}

applyLinks();

let form = document.getElementById("my-form");


console.log('Hey gotch ya!');

if(form != null){
    form.addEventListener("submit", handleSubmit)
    async function handleSubmit(event) {
        event.preventDefault();
        var status = document.getElementById("my-form-status");
        var data = new FormData(event.target);
        fetch(event.target.action, {
          method: form.method,
          body: data,
          headers: {
              'Accept': 'application/json'
          }
        }).then(response => {
          if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset()
          } else {
            response.json().then(data => {
              if (Object.hasOwn(data, 'errors')) {
                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
              } else {
                status.innerHTML = "Oops! There was a problem submitting your form"
              }
            })
          }
        }).catch(error => {
          status.innerHTML = "Oops! There was a problem submitting your form"
        });
      }
  }