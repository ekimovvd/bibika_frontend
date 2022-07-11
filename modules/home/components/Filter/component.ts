import { Component, Vue } from "nuxt-property-decorator";

import { COMPONENT_NAME } from "./attributes";

import HomeSelect from "../Select/component";
import HomeResult from "../Result/component";
import HomeTabs from "../Tabs/component";

@Component({
  name: COMPONENT_NAME,
  components: {
    HomeSelect,
    HomeResult,
    HomeTabs,
  },
})
export default class HomeFillter extends Vue {}
