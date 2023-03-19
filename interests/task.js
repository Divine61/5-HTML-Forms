const checkboxGroup = document.querySelectorAll(`.interests_active`);

(function() {
  checkboxGroup.forEach(checkbox => {
    const interestCheckbox = checkbox.closest(`.interest`).querySelector(`.interest__check`);
    interestCheckbox.onchange = choiceAll;
  })
}())

function choiceAll() {
  const interest = this.closest(`.interest`).querySelectorAll(`.interest__check`);
  this.checked ? searchChecked(interest, true) : searchChecked(interest, false);
}

function searchChecked(checkboxes, isCheck) {
  checkboxes.forEach(checkbox => {checkbox.checked = isCheck})
}