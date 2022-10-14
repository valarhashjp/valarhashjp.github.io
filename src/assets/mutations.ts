import { Store } from "../types";

const mutations = {
  SET_ACTIVE_RESOURCES(state: Store, active: number) {
    state.activeResources = active;
  },
  SET_DETAILED_ID(state: Store, active: number) {
    state.deatiledId = active;
  },
};
export default mutations;
