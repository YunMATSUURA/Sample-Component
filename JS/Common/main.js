"use strict";

import { createHomeView } from "../Views/home.js";
import { createHeader } from "../Common/UIComponents/headerNav.js";

const indexDiv = document.getElementById("index-div");
createHeader(indexDiv);
createHomeView(indexDiv);
