mdc.dialog.MDCDialog.attachTo(document.getElementById('photo-feed-mdc-dialog'));

var dialog = new mdc.dialog.MDCDialog(document.getElementById('photo-feed-mdc-dialog'));

fetch("https://api.instagram.com/v1/users/self/media/recent/?access_token=***REMOVED***")
  .then(function(resp) {
    return resp.json();
  })
  .then(function(json) {
    var data = json.data.slice(0, 12),
        photoFeed = document.getElementById("photo-feed");

    data.forEach(function(imgData) {
      var thumb = document.createElement("a");

      thumb.href = imgData.link;

      thumb.dataset["fullSizeImg"] = imgData.images
        .standard_resolution
        .url;

      thumb.classList.add("mdc-layout-grid__cell", "photo-feed__thumb");

      thumb.style.backgroundImage = "url(" +
        imgData.images.low_resolution.url +
      ")";

      thumb.innerHTML = "&nbsp;";

      thumb.addEventListener('click', function (evt) {
        evt.preventDefault();

        dialog.lastFocusedTarget = evt.target;

        var fullSize = document.createElement("img");
        fullSize.src = evt.target.dataset.fullSizeImg;

        document.querySelector(".mdc-dialog__body img")
          .replaceWith(fullSize);

        dialog.show();
      })

      photoFeed.append(thumb);
    });
  });
