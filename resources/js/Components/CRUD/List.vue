<template>
  <div class="q-pa-md">
    <q-table
        flat bordered
        ref="tableRef"
        title="Treats"
        :rows="data"
        :columns="columns"
        row-key="id"
        v-model:pagination="pagination"
        :loading="loading"
        :filter="filter"
        binary-state-sort
        @request="onRequest"
    >
      <template v-slot:top-right>
        <q-input borderless dense  debounce="400" v-model="filters.queryFilter" placeholder="Search"  @update:model-value="defaultFetchData">
          <template v-slot:append>
            <q-icon name="search"/>
          </template>
        </q-input>
      </template>

    </q-table>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import {useCounterStore} from "../../Store/counterStore";
import {storeToRefs} from "pinia";

const {defaultFetchData, editData, createData, updateData, deleteData,onRequest} = useCounterStore()
const {data, formData, stateName, method, formRef, formModal, filters,pagination,loading} = storeToRefs(useCounterStore())
onMounted(()=>{
  defaultFetchData()
})
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'email',
    required: true,
    label: 'Email',
    align: 'left',
    field: row => row.email,
    format: val => `${val}`,
    sortable: true
  },
]


const tableRef = ref()


</script>
