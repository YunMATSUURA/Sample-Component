"use strict";

export function InitializeView(indexDiv) {
  const elements = document.querySelectorAll("body *");
  for (let element of elements) {
    if (element.class === "page-contents") {
      element.remove();
    }
  }
}
