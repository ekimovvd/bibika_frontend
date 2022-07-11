import { Component, Vue } from "nuxt-property-decorator";

import {
  COMPONENT_NAME,
  BUTTON_AUTH_PLACEHOLDER,
  BUTTON_AUTH_TYPE,
} from "./attributes";

import Button from "~/components/Button/component/component";

@Component({
  name: COMPONENT_NAME,
  components: {
    Button,
  },
})
export default class NavbarButtons extends Vue {
  BUTTON_AUTH_PLACEHOLDER: String = BUTTON_AUTH_PLACEHOLDER;
  BUTTON_AUTH_TYPE: String = BUTTON_AUTH_TYPE;
}
