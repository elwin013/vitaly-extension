export default function vitalyLoadIcon() {
  const div = document.createElement('div');
  div.onclick = function () {
    alert(
      "Hello from Vitaly! \nYou're on the " + window.location.host + '! Wohoo!'
    );
  };
  div.id = 'vitaly-icon-wrapper';

  const img = document.createElement('img');
  img.src = chrome.runtime.getURL('icon-128.png');
  img.alt = 'vitaly icon';
  div.appendChild(img);

  document.body.appendChild(div);
}
