(function() {
  var lightbox = {
    lightboxContainer: document.getElementById("lightbox"),

    open: function() {
      this.lightboxContainer.classList.add("showing");
    },

    close: function() {
      this.lightboxContainer.classList.remove("showing");
    },

    display: function(img, caption) {
      this._updateHeaderContent(caption);
      this._updateImgContent(img);
      this.open();
    },

    _updateHeaderContent: function(caption) {
      this.lightboxContainer
        .querySelector(".lightbox-header div")
        .replaceWith(caption);
    },

    _updateImgContent: function(img) {
      this.lightboxContainer
        .querySelector(".lightbox-img img")
        .replaceWith(img);
    },
  };

  fetch("https://api.instagram.com/v1/users/self/media/recent/?access_token=***REMOVED***")
    .then(function(resp) { return resp.json(); })
    .then(function(json) {
      var data = json.data.slice(0, 12),
          photoFeed = document.getElementById("photo-feed");

      data.forEach(function(imgData) {
        var thumb = createThumbnail(imgData);

        photoFeed.append(thumb);

        thumb.addEventListener('click', function (evt) {
          evt.preventDefault();
          displayInLightbox(evt.target);
        });
      });
    });

  function createThumbnail(imgData) {
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

    return thumb;
  }

  function displayInLightbox(imgLink) {
    var caption = createCaption(imgLink),
        img = createImage(imgLink);

    lightbox.display(img, caption);

    function createImage(link) {
      var img = document.createElement("img");
      img.src = link.dataset.fullSizeImg;
      return img;
    }

    function createCaption(link) {
      var captionHTML = "";

      if (link.dataset.caption != "")
        captionHTML += link.dataset.caption;

      if (link.dataset.location != "") {
        if (captionHTML != "")
          captionHTML += " | ";

        captionHTML += link.dataset.location;
      }

      var caption = document.createElement("div");

      if (captionHTML != "") {
        caption.classList.add("caption");
        caption.innerHTML = captionHTML;
      }

      return caption;
    }
  }

  Array.prototype.forEach.call(
    document.getElementsByClassName("lightbox-close"),
    function(el) {
      el.addEventListener("click", function(e) {
        e.preventDefault();
        lightbox.close();
      });
    }
  );
})();
