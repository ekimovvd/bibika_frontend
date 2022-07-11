import { Component, Vue } from "nuxt-property-decorator";
import { COMPONENT_NAME, TITLE, DESCRIPTION } from "./attributes";

@Component({
  name: COMPONENT_NAME,
})
export default class HomeHeader extends Vue {
  TITLE: String = TITLE;
  DESCRIPTION: String = DESCRIPTION;
}
