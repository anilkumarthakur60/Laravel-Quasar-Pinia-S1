import {defineStore} from 'pinia'
import commonState from "./common_crud/commonState";
import {commonCrudActions} from "./common_crud/commonCrudActions";
import {commonGetters} from "./common_crud/commonGetters";
import _ from "lodash";

export const useCounterStore = defineStore({

    namespace: true,
    id: 'counterStore',
    state: () => ({
        ..._.cloneDeep(commonState),
        stateUrl: "users",
    }),
    getters: {
        ...commonGetters
    },

    actions: {
        ...commonCrudActions,

    },
})
