const elements = document.querySelectorAll('.btn');

elements.forEach(element => {
  element.addEventListener('click', () => {
    let command = element.dataset['element'];

    document.execCommand(command, false, null);
  });
});