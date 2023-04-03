import axios from "axios";
import {computed, ref} from "vue";
import {LocalStorage} from "quasar";
import {usePage} from '@inertiajs/vue3'
import {useCommonState} from "./useCommonState";

const user = computed(() => usePage()?.props?.app)
// const apiUrl = user.value.api_url;
console.log(user.value)
const apiUrl = 'api';


export function useCommonAction() {


    const {
        data,
        formData,
        detailData,
        storeName,
        formModal,
        formRef,
        pagination,
        filters,
        query,
        loading,
        columns,
        submittingAndNew,
        errors,
        urlForFetchPaged,
        stateUrl
    } = useCommonState();

    const fetchData = () => {
        data.value = [];
        return new Promise((resolve, reject) => {

            const params = {
                page: pagination.value.page,
                rowsPerPage: pagination.value.rowsPerPage,
                sortBy: pagination.value.sortBy,
                descending: pagination.value.descending,
                query: query.value,
                filters: JSON.stringify(this.filters)
            };
            axios({
                    method: "get",
                    url: `${apiUrl}/${stateUrl.value}`,
                    params: params,
                    headers: {
                        'Authorization': `Bearer ${LocalStorage.getItem('access_token')}`
                    }
                }
            ).then((response) => {
                data.value = response.data.data;
                pagination.value.totalNumber = response.data.total;
                loading.value = false;
                resolve(response);
            }).catch((error) => {
                console.log(error);
                reject(error);
            });
        });
    }


    const fetchPageByUrl = (url) => {

        data.value = [];

        return new Promise((resolve, reject) => {
            const params = {
                page: pagination.value.page,
                rowsPerPage: pagination.value.rowsPerPage,
                sortBy: pagination.value.sortBy,
                descending: pagination.value.descending,
                query: query.value,
                filters: JSON.stringify(this.filters)
            };
            axios({
                    method: "get",
                    url: `${apiUrl}/${url}`,
                    params: params,
                }
            ).then((response) => {
                data.value = response.data.data;
                pagination.value.totalNumber = response.data.total;
                resolve(response);
            }).catch((error) => {
                console.log(error);
                reject(error);
            });
        });
    }
    const createData = () => {
        return new Promise((resolve, reject) => {
            axios({
                method: "post",
                url: `${apiUrl}/${stateUrl.value}`,
                data: formData.value,
            }).then((response) => {
                formModal.value = false;
                formData.value = {};
                fetchData();
                resolve(response);
            }).catch((error) => {
                console.log(error);
                reject(error);
            });
        })

    }
    const deleteData = (row) => {
        if (!row.id) return false;
        return new Promise((resolve, reject) => {
            axios({
                method: "delete",
                url: `${apiUrl}/${stateUrl.value}/${row.id}`,

            }).then((response) => {
                fetchData();
                resolve(response);
            }).catch((error) => {
                console.log(error);
                reject(error);
            });
        });
    }
    const editData = (row) => {
        formData.value = row;
        formModal.value = true;
    }


    const updateData = () => {
        return new Promise((resolve, reject) => {
            axios({
                method: "put",
                url: `${apiUrl}/${stateUrl.value}/${formData.value.id}`,
                data: formData.value,
            }).then((response) => {
                formModal.value = false;
                formData.value = {};
                fetchData();
                resolve(response);
            }).catch((error) => {
                console.log(error);
                reject(error);
            });
        })
    }


    const onRequest = (props) => {
        pagination.value = props?.pagination;
        if (urlForFetchPaged.value) {
            return fetchPageByUrl(urlForFetchPaged.value);
        } else {
            return fetchData();
        }
    }

    return {

        fetchData,
        fetchPageByUrl,
        createData,
        deleteData,
        editData,
        updateData,
        onRequest,
    }
}



