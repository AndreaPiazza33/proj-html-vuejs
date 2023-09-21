//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import { createApp } from "vue";
import App from "./App.vue";

/*FontAwesome*/
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCartShopping,
  faAngleDown,
  faMagnifyingGlass,
  faDownload,
  faArrowRightLong,
  faCirclePlus,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

library.add(
  faCircleUser,
  faCartShopping,
  faAngleDown,
  faMagnifyingGlass,
  faDownload,
  faArrowRightLong,
  faCirclePlus,
  faCircleMinus
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
