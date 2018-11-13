document.addEventListener('HireMe:Ready', function () {
  var link = document.querySelector(".email"),
      emailReversed = "moc.kaseoj@krow";
  link.href="mailto:" + emailReversed.split("").reverse().join("");
}, false);
