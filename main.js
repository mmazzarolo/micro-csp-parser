const inputTextarea = document.querySelector('#input-textarea');
const inputUsePlainText = document.querySelector('#input-use-plain-text');
const inputButton = document.querySelector('#input-button');
const output = document.querySelector('#output');

inputButton.addEventListener('click', parseContentSecurityPolicy);

function parseContentSecurityPolicy () {
  const items = input.value.split(';').filter(item => !!item).map(item => item.trim()).map(item => ({
    name: item.substr(0, item.indexOf(' ')),
    values: item.substr(item.indexOf(' ') + 1, item.length).split(' ') 
  }))
  if (inputUsePlainText.checked) {
    output.innerHTML = items.map(item => 
      `<b>${item.name}</b><br /><code>${item.values.join(' ')}</code><br />`
      ).join('<br />')
  } else {
    output.innerHTML = items.map(item => 
      `<b>${item.name}</b><br /><ul>${item.values.map((x) => `<li><code>${x}</code></li>`).join('')}</ul>`
    ).join('<br />')
  }
  window.items = items;
}
