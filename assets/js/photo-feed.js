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

      thumb.dataset["caption"] = (imgData.caption || {}).text || "";
      thumb.dataset["location"] = (imgData.location || {}).name || "";

      thumb.classList.add("mdc-layout-grid__cell", "photo-feed__thumb");

      thumb.style.backgroundImage = "url(" +
        imgData.images.low_resolution.url +
      ")";

      thumb.innerHTML = "&nbsp;";

      thumb.addEventListener('click', function (evt) {
        evt.preventDefault();

        var captionHTML = "";
        if (evt.target.dataset.caption != "")
          captionHTML += evt.target.dataset.caption;

        if (evt.target.dataset.location != "") {
          if (captionHTML != "")
            captionHTML += " | ";
          captionHTML += evt.target.dataset.location;
        }

        var caption = document.createElement("div");

        if (captionHTML != "") {
          caption.classList.add("caption");
          caption.innerHTML = captionHTML;
        }

        var img = document.createElement("img");
        img.src = evt.target.dataset.fullSizeImg;

        document.querySelector("#lightbox .lightbox-header div")
          .replaceWith(caption);

        document.querySelector("#lightbox .lightbox-img img")
          .replaceWith(img);

        lightbox.open();
      });

      photoFeed.append(thumb);
    });
  });

var lightbox = {
  lightboxContainer: document.getElementById("lightbox"),

  open: function() {
    this.lightboxContainer.classList.add("showing");
  },

  close: function() {
    this.lightboxContainer.classList.remove("showing");
  },
};

Array.prototype.forEach.call(
  document.getElementsByClassName("lightbox-close"),
  function(el) {
    el.addEventListener("click", function(e) {
      e.preventDefault();
      lightbox.close();
    });
  }
);
