const shareBubble = $(".share-bubble");
const cotentProfileButton = $(".content-profile-button");
const iconShare = $(".icon-share");

cotentProfileButton.on("click", function (event) {
  let shareBubbleDisplay = shareBubble.css("display");
  console.log(shareBubbleDisplay);
  if (shareBubbleDisplay === "flex") {
    shareBubble.css("display", "none");
  } else {
    shareBubble.css("display", "flex");

    if ($(document).width() <= 500) {
      cotentProfileButton.css("background-color", "hsl(214, 17%, 51%)");
      iconShare.css("filter", "brightness(0) invert(1)");
    }
  }
  event.stopPropagation();
});

$("html").on("click", function (event) {
  shareBubble.css("display", "none");
  cotentProfileButton.css("background-color", "");
  iconShare.css("filter", "");
});
