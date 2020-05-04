let playlist = [{
  author: "Madonna",
  song: "Frozen"
}, {
  author: "Lisa Nilsson",
  song: "Himlen runt hörnet"
}, {
  author: "Ebba Grön",
  song: "Die Mauer"
}, {
  author: "Laleh",
  song: "Some Die Young"
}, {
  author: "Adele",
  song: "Hello"
}, {
  author: "Dolly Parton",
  song: "Jolene"
}];


var html = "<ol>";
for (var i = 0; i < playlist.length; i++) {
  html += "<li>" + playlist[i].author + ", " + playlist[i].song + "</li>";
}

html += "</ol>";
document.getElementById("list").innerHTML = html;