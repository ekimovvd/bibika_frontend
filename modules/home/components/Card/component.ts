import { Component, Vue, Prop } from "nuxt-property-decorator";

import { COMPONENT_NAME } from "./attributes";
import { CardInterface } from "./interfaces";

@Component({
  name: COMPONENT_NAME,
})
export default class HomeCard extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly card!: CardInterface;
}
