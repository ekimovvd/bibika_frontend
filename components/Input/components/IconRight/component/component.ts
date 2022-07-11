import { Component, Vue, Prop } from "nuxt-property-decorator";

import { COMPONENT_NAME } from "./attributes";

@Component({
  name: COMPONENT_NAME,
})
export default class InputIconRight extends Vue {
  @Prop({
    type: String,
    default: "",
  })
  icon!: String;
}
