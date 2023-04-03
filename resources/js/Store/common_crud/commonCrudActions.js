import axios from "axios";
import {computed, ref} from "vue";
import {LocalStorage} from "quasar";
import { usePage } from '@inertiajs/vue3'

const user = computed(() => usePage()?.props?.app)
// const apiUrl = user.value.api_url;
console.log(user.value)
const apiUrl = 'askljaks';


export const commonCrudActions = {


  defaultFetchData() {
    this.data = [];
    return new Promise((resolve, reject) => {

      const paramss = {
        page: this.pagination.page,
        rowsPerPage: this.pagination.rowsPerPage,
        sortBy: this.pagination.sortBy,
        descending: this.pagination.descending,
        query: this.query,
        filters: JSON.stringify(this.filters)
      };
      axios({
          method: "get",
          url: `${apiUrl}/${this.stateUrl}`,
          params: paramss,
          headers: {
            'Authorization': `Bearer ${LocalStorage.getItem('access_token')}`
          }
        }
      ).then((response) => {
        this.data = response.data.data;
        this.pagination.totalNumber = response.data.total;
        resolve(response);
      }).catch((error) => {
        console.log(error);
        reject(error);
      });
    });
  },


  fetchPageByUrl(url) {

    this.data = [];

    return new Promise((resolve, reject) => {
      const paramss = {
        page: this.pagination.page,
        rowsPerPage: this.pagination.rowsPerPage,
        sortBy: this.pagination.sortBy,
        descending: this.pagination.descending,
        query: this.query,
        filters: JSON.stringify(this.filters)
      };
      axios({
          method: "get",
          url: `${apiUrl}/${url}`,
          params: paramss,
        }
      ).then((response) => {
        this.data = response.data.data;
        this.pagination.totalNumber = response.data.total;
        resolve(response);
      }).catch((error) => {
        console.log(error);
        reject(error);
      });
    });
  },
  createData() {
    return new Promise((resolve, reject) => {
      axios({
        method: "post",
        url: `${apiUrl}/${this.stateUrl}`,
        data: this.formData,
      }).then((response) => {
        this.formModal = false;
        this.formData = {};
        this.defaultFetchData();
        resolve(response);
      }).catch((error) => {
        console.log(error);
        reject(error);
      });
    })

  },
  deleteData(row) {
    if (!row.id) return false;
    return new Promise((resolve, reject) => {
      axios({
        method: "delete",
        url: `${apiUrl}/${this.stateUrl}/${row.id}`,

      }).then((response) => {
        this.defaultFetchData();
        resolve(response);
      }).catch((error) => {
        console.log(error);
        reject(error);
      });
    });
  },
  editData(row) {
    this.formData = row;
    this.formModal = true;
  },


  updateData() {
    return new Promise((resolve, reject) => {
      axios({
        method: "put",
        url: `${apiUrl}/${this.stateUrl}/${this.formData.id}`,
        data: this.formData,
      }).then((response) => {
        this.formModal = false;
        this.formData = {};
        this.defaultFetchData();
        resolve(response);
      }).catch((error) => {
        console.log(error);
        reject(error);
      });
    })
  },


  onRequest(props) {
    this.pagination = props?.pagination;
    if (this.urlForFetchPaged) {
      return this.fetchPageByUrl(this.urlForFetchPaged);
    } else {
      return this.defaultFetchData();
    }
  }


}
