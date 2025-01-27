"use strict";

import { InitializeView } from "../Common/initializeView.js";

export function createSettingsView(indexDiv) {
  async function createSettingsContents() {
    await InitializeView(indexDiv);

    const pageContents = document.createElement("p");
    pageContents.textContent = "This is Settings View.";
    pageContents.class = "page-contents";
    indexDiv.append(pageContents);
  }

  createSettingsContents();
}
