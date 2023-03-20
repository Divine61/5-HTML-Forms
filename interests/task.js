const checkboxGroup = document.querySelectorAll(`.interests_active`);

(function() {
  checkboxGroup.forEach(checkbox => {
    const interestCheckbox = checkbox.closest(`.interest`).querySelector(`.interest__check`);
    interestCheckbox.onchange = choiceAll;
  })
}())

function choiceAll() {
  const interest = this.closest(`.interest`).querySelectorAll(`.interest__check`);
  interest.forEach(checkbox => {checkbox.checked = this.checked});
}