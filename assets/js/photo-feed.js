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

    setNext: function(link) {
      var nextLink = this.lightboxContainer
                         .querySelector(".lightbox-img .next");

      nextLink.dataset["idx"] = link.dataset.idx;
      nextLink.dataset["fullSizeImg"] = link.dataset.fullSizeImg;
      nextLink.dataset["caption"] = link.dataset.caption;
      nextLink.dataset["location"] = link.dataset.location;
    },

    setPrev: function(link) {
      var prevLink = this.lightboxContainer
                         .querySelector(".lightbox-img .prev");

      prevLink.dataset["idx"] = link.dataset.idx;
      prevLink.dataset["fullSizeImg"] = link.dataset.fullSizeImg;
      prevLink.dataset["caption"] = link.dataset.caption;
      prevLink.dataset["location"] = link.dataset.location;
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

      data.forEach(function(imgData, idx) {
        var thumb = createThumbnail(imgData, idx);

        photoFeed.append(thumb);

        thumb.addEventListener('click', function (evt) {
          evt.preventDefault();
          displayInLightbox(evt.target);
          setNavigationData(evt.target);
        });
      });
    });

  function createThumbnail(imgData, idx) {
    var thumb = document.createElement("a");

    thumb.href = imgData.link;

    thumb.dataset["idx"] = idx;

    thumb.dataset["fullSizeImg"] = imgData.images
      .standard_resolution
      .url;

    thumb.dataset["caption"] = (imgData.caption || {}).text ||
      "Photography by Joe Sak";

    thumb.dataset["location"] = (imgData.location || {}).name ||
      "instagram.com/sakjosep";

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

  function setNavigationData(link) {
    var links = document.querySelectorAll("#photo-feed a"),
        idx = parseInt(link.dataset.idx),
        lastIdx = links.length - 1,
        nextIdx = idx + 1,
        prevIdx = idx - 1;

    if (idx == lastIdx)
      nextIdx = 0;

    if (idx == 0)
      prevIdx = lastIdx;

    lightbox.setPrev(links[prevIdx]);
    lightbox.setNext(links[nextIdx]);
  }

  Array.prototype.forEach.call(
    document.getElementsByClassName("lightbox-close"),
    function(el) {
      el.addEventListener("click", function(e) {
        e.preventDefault();

        if (e.target.classList.contains("lightbox-nav")) {
          return;
        } else {
          lightbox.close();
        }
      });
    }
  );

  Array.prototype.forEach.call(
    document.getElementsByClassName("lightbox-nav"),
    function(el) {
      el.addEventListener("click", function(e) {
        e.preventDefault();
        displayInLightbox(e.target);
        setNavigationData(e.target);
      });
    }
  );
})();
