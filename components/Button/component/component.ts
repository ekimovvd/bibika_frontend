import { Component, Vue, Prop } from "nuxt-property-decorator";

import { COMPONENT_NAME } from "./attributes";

@Component({
  name: COMPONENT_NAME,
})
export default class Button extends Vue {
  @Prop({
    type: String,
    default: "",
  })
  readonly placeholder!: String;
  @Prop({
    type: String,
    default: "",
  })
  readonly type!: String;

  get getButtonClass(): String {
    return `button_${this.type}`;
  }
}
