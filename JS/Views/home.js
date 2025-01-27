"use strict";

import { InitializeView } from "../Common/initializeView.js";

export function createHomeView(indexDiv) {
  async function createHomeContents() {
    await InitializeView(indexDiv);

    const pageContents = document.createElement("p");
    pageContents.textContent = "This is Home View.";
    pageContents.class = "page-contents";
    indexDiv.append(pageContents);
  }

  createHomeContents(indexDiv);
}
