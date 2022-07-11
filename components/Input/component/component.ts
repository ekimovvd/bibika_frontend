import { Component, Vue, Prop } from "nuxt-property-decorator";

import { COMPONENT_NAME } from "./attributes";
import { PaddingInterface } from "./interfaces";

import InputIconLeft from "../components/IconLeft/component/component";
import InputIconRight from "../components/IconRight/component/component";

@Component({
  name: COMPONENT_NAME,
  components: {
    InputIconLeft,
    InputIconRight,
  },
})
export default class Input extends Vue {
  vModel: String = "";

  @Prop({
    type: String,
    required: true,
  })
  placeholder!: String;
  @Prop({
    type: String,
    required: true,
  })
  value!: String;
  @Prop({
    type: String,
    default: "",
  })
  iconLeft!: String;
  @Prop({
    type: String,
    default: "",
  })
  iconRight!: String;

  get getPadding(): PaddingInterface {
    if (this.iconLeft) {
      return {
        padding: "10px 10px 10px 35px",
      };
    }
    if (this.iconRight) {
      return {
        padding: "10px 35px 10px 10px",
      };
    }
    return {
      padding: "10px 10px",
    };
  }

  handleInput() {
    this.$emit("handleInput", this.vModel);
  }
}
