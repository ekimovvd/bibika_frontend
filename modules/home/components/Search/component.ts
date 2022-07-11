import { Component, Vue } from "nuxt-property-decorator";

import {
  COMPONENT_NAME,
  INPUT_PLACEHOLDER,
  INPUT_ICON_LEFT,
} from "./attributes";

import Input from "~/components/Input/component/component";

@Component({
  name: COMPONENT_NAME,
  components: {
    Input,
  },
})
export default class HomeSearch extends Vue {
  INPUT_PLACEHOLDER: String = INPUT_PLACEHOLDER;
  INPUT_ICON_LEFT: String = INPUT_ICON_LEFT;

  searchValue: String = "";

  handleSearch(value: String): void {
    this.searchValue = value;
  }
}
