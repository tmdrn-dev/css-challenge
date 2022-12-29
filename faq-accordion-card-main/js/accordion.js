function ExpandAccordionBody(accordionHeader) {
  const accordionItem = accordionHeader.parent();
  if (accordionItem.has("collapsed")) {
    accordionItem.toggleClass("collapsed");
  }
}

$(".icon-arrow-down").on("click", function (event) {
  const accordionHeader = $(event.target).parent();
  ExpandAccordionBody(accordionHeader);
  event.stopPropagation();
});

$(".accordion-header").on("click", function (event) {
  const accordionHeader = $(event.target);
  ExpandAccordionBody(accordionHeader);
});
