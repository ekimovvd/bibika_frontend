import { Component, Vue, Prop } from "nuxt-property-decorator";

import { COMPONENT_NAME } from "./attributes";
import { TabInterface } from "./interfaces";

@Component({
  name: COMPONENT_NAME,
})
export default class HomeTab extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly tab!: TabInterface;
}
