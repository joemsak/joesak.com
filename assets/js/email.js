(function() {
  var link = document.querySelector(".email"),
      emailReversed = "moc.kaseoj@eoj";
  link.href="mailto:" + emailReversed.split("").reverse().join("");
})();
