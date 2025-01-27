"use strict";

import { createSettingsView } from "../../Views/Settings.js";

export function createHeader(indexDiv) {
  const headerElem = document.createElement("header");
  const navElem = document.createElement("nav");
  const ulElem = document.createElement("ul");
  const liElem = document.createElement("li");

  headerElem.class = "header-elements";
  navElem.class = "header-elements";
  ulElem.class = "header-elements";
  liElem.class = "header-elements";

  indexDiv.append(headerElem);
  headerElem.append(navElem);
  navElem.append(ulElem);
  ulElem.append(liElem);

  liElem.id = "first-ul-header";
  liElem.class = "header-ul";
  liElem.textContent = "Settings";
  liElem.addEventListener("click", showSettingsView);

  function showSettingsView() {
    createSettingsView(indexDiv);
  }
}
