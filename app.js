const elements = document.querySelectorAll('.btn');
const btnh1 = document.querySelector('.btnH1')
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
