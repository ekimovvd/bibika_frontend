import { Component, Vue } from "nuxt-property-decorator";

import { COMPONENT_NAME, TABS } from "./attributes";
import { TabsInterface } from "./interfaces";

import HomeTab from "../Tab/component";

@Component({
  name: COMPONENT_NAME,
  components: {
    HomeTab,
  },
})
export default class HomeTabs extends Vue {
  TABS: Array<TabsInterface> = TABS;
}
