// Read data from uploaded files
function async getData(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText)
  };
  xhr.open('GET', url, true);
  xhr.send();
};

const btn = document.querySelector('button');

btn.addEventListener('click', async () => {

  var READ = await getData("../data/data.txt",
    data => { 
      navigator.clipboard.writeText(JSON.parse(data));
      console.log('DATA = ',JSON.parse(data)); 
    }).then() => {
      btn.innerHTML = `<button onclick="window.open('${data}');">Click to Install Shortcut</button>`;
});
        
function install() { 
  getData("../data/link.txt",
    data => { 
      console.log('LINK = ',data); 
      btn.innerHTML = `<button onclick="window.open('${data}');">Click to Install Shortcut</button>`
  });
};

function copy() { 
  getData("../data/data.txt",
    data => { 
      navigator.clipboard.writeText(JSON.parse(data));
      console.log('DATA = ',JSON.parse(data)); 
  });
};


