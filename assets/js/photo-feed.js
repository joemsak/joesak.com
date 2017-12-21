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
          captionHTML += "<p class='img-caption'>" +
                           evt.target.dataset.caption +
                         "</p>";

        if (evt.target.dataset.location != "")
          captionHTML += "<p class='img-location'>" +
                           evt.target.dataset.location +
                         "</p>";

        var caption = document.createElement("div");
        caption.classList.add("caption");
        caption.innerHTML = captionHTML;

        var img = document.createElement("img");
        img.src = evt.target.dataset.fullSizeImg;

        var fullSize = document.createElement("div");
        fullSize.append(img);

        if (captionHTML != "")
          fullSize.append(caption);

        document.querySelector("#lightbox > div").replaceWith(fullSize);

        lightbox.open();
      })

      photoFeed.append(thumb);
    });
  });

var lightbox = {
  lightboxShade: document.getElementById("lightbox-shade"),
  lightboxContainer: document.getElementById("lightbox"),

  open: function() {
    this.lightboxShade.classList.add("showing");
    this.lightboxContainer.classList.add("showing");
  },

  close: function() {
    this.lightboxShade.classList.remove("showing");
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
