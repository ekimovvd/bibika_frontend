import { Component, Vue } from "nuxt-property-decorator";

import { COMPONENT_NAME } from "./attributes";

import NavbarLogo from "../components/Logo/component";
import NavbarButtons from "../components/Buttons/component";

@Component({
  name: COMPONENT_NAME,
  components: {
    NavbarLogo,
    NavbarButtons,
  },
})
export default class Navbar extends Vue {}
