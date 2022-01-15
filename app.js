const elements = document.querySelectorAll('.btn');

elements.forEach(element => {
  element.addEventListener('click', () => {
    let command = element.dataset['element'];

    if (command == 'createLink') {
      let url = prompt('Enter link', 'http://')
      document.execCommand(command, false, url);
    }
    else {
      document.execCommand(command, false, null);
    }
  });
});