const chatWidget = document.querySelector(`.chat-widget`);
const botResponses = [
  `Не сейчас`,
  `Погоди`,
  `Уйди с глаз моих`,
  `Ты смешной`,
  `ахахах`,
  `Да что ты говоришь, напугал`,
  `Обратись лучше... никогда тебя устроит?`,
]

chatWidget.addEventListener(`click`, () => {
  chatWidget.classList.add(`chat-widget_active`);
  inpitMessage();
});

function inpitMessage() {
  let messages = document.querySelector( '.chat-widget__messages' );
  document.addEventListener(`keydown`, button => {
    const inputMessage = document.querySelector(`.chat-widget__input`);
    inputMessage.value = inputMessage.value.trim();
    if (button.key.charCodeAt() === 69 && inputMessage.value) {
      messages.innerHTML += `<div class="message message_client">
        <div class="message__time">${new Date().toLocaleTimeString().slice(0,-3)}</div>
        <div class="message__text">${inputMessage.value}</div>
      </div>
      <div class="message">
        <div class="message__time">${new Date().toLocaleTimeString().slice(0,-3)}</div>
        <div class="message__text">${botResponses[Math.floor(Math.random() * botResponses.length)]}</div>
      </div>`;
      inputMessage.value = ``;
   }
  })
}
