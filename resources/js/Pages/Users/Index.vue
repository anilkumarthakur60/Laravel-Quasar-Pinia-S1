<template>
    <div class="">
        <div class="q-pa-md">
          <div class="q-gutter-y-md">
            <q-card>
             <List/>
            </q-card>


          </div>
        </div>
    </div>
</template>


<script setup>

import {ref} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import {usePage} from "@inertiajs/vue3";
const tab = ref('mails');
import {storeToRefs} from "pinia";
import List from "../../Components/CRUD/List.vue";
import {useCounterStore} from "../../Store/counterStore";

</script>
