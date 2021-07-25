var params = function () {
  var query_string = {};
  var query = window.location.search.substring(1);
  console.log(query);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    	// If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
    	// If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]], decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
    	// If third or later entry with this name
    } else {
      query_string[pair[0]].push(pair[1]);
    }
  } 
    return query_string;
} ();

function init() {
  var url = params.url;
  if (url) {
    var fr = document.getElementById("frame");
    fr.src = url;
  }
  else {
    document.getElementById("content").innerHTML = "<div class='error'>No \"url\" parameter found.</div>"
  }
}

function back() {
  var url = params["x-success"];
  window.location = url;
}

function hide() {
  var url = params.url
  document.getElementById("content").innerHTML = "";
  window.location = url;
}