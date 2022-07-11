import { Component, Vue } from "nuxt-property-decorator";

import { COMPONENT_NAME, TITLE, AVATAR } from "./attributes";

@Component({
  name: COMPONENT_NAME,
})
export default class NavbarLogo extends Vue {
  TITLE: String = TITLE;
  AVATAR: String = AVATAR;

  handleAvatar(): void {
    console.log("Home");
  }
}
