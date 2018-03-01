var DETAIL_IMAGE_SELECTOR = "[data-image-role='target']";
var DETAIL_TITLE_SELECTOR = "[data-image-role='title']";
var THUMBNAIL_LINK_SELECTOR = "[data-image-role='trigger']";
var centerImage = 0;

function setDetails(imgUrl, titleText, index) {
  "use strict";
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute("src", imgUrl);

  var DetailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  DetailTitle.textContent = titleText;
  centerImage = index;
}

function imageFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-url");
}

function imageFromThumbIndex(thumb) {
  return thumb.getAttribute("data-index");
}

function titleFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-title");
}

function setDetailsFromThumb(thumbnail) {
  "use strict";
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail), imageFromThumbIndex(thumbnail));
}

function addThumbClickHandler(thumb) {
  "use strict";
  thumb.addEventListener("click", function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray() {
  "use strict";
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function prevImage(thumb) {
  "use strict";
  if (thumb.index == 0) {
    centerImage = 4;
    setDetailsFromThumb(thumb[centerImage]);
  } else {
    centerImage = centerImage - 1;
    setDetailsFromThumb(thumb[centerImage]);
  }
}

function nextImage(thumb) {
  "use strict";
  if (centerImage == 4) {
    centerImage = 0;
    setDetailsFromThumb(thumb[centerImage]);
  }
  else {
    centerImage++;
    setDetailsFromThumb(thumb[centerImage]);
  }
}

function initiliazeEvents() {
  "use strict";
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  var prev = document.getElementById("prevI");
  var next = document.getElementById("nextI");

  prev.addEventListener("click", function() {
    prevImage(thumbnails);
  });
  next.addEventListener("click", function() {
    nextImage(thumbnails);
  });
}

initiliazeEvents();
