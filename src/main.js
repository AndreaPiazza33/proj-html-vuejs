//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import { createApp } from "vue";
import App from "./App.vue";

/*FontAwesome*/
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faSquareFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCartShopping,
  faAngleDown,
  faMagnifyingGlass,
  faDownload,
  faArrowRightLong,
  faCirclePlus,
  faCircleMinus,
  faCheck,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCircleUser,
  faFileLines,
  faUser,
} from "@fortawesome/free-regular-svg-icons";

library.add(
  faCircleUser,
  faCartShopping,
  faAngleDown,
  faMagnifyingGlass,
  faDownload,
  faArrowRightLong,
  faCirclePlus,
  faCircleMinus,
  faFileLines,
  faUser,
  faCheck,
  faLocationDot,
  faSquareFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
