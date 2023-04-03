<template>
    <div class="">
        <div class="q-pa-md">
          <div class="q-gutter-y-md">
            <q-card>
              <q-tabs
                  v-model="tab"
                  dense
                  class="text-grey"
                  active-color="primary"
                  indicator-color="primary"
                  align="justify"
                  narrow-indicator
              >
                <q-tab name="mails" label="Mails"/>
                <q-tab name="alarms" label="Alarms"/>
                <q-tab name="movies" label="Movies"/>
              </q-tabs>

              <q-separator/>

              <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="mails">
                  <div class="text-h6">Mails</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>

                <q-tab-panel name="alarms">
                  <div class="text-h6">Alarms</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>

                <q-tab-panel name="movies">
                  <div class="text-h6">Movies</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>
              </q-tab-panels>
            </q-card>


          </div>
        </div>
    </div>
</template>


<script setup>

import {ref} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import {useCounterStore} from "../Store/counterStore";
import {usePage} from "@inertiajs/vue3";
const tab = ref('mails');
import {storeToRefs} from "pinia";




const {defaultFetchData, editData, createData, updateData, deleteData} = useCounterStore()
const {data, formData, stateName, method, formRef, formModal, filters} = storeToRefs(useCounterStore())

</script>
