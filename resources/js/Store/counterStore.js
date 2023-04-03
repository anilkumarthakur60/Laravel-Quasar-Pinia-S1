import { defineStore } from "pinia";
import { useCrudComposable } from "./common_cruds/useCrudComposable";

export const useCounterStore = defineStore("counter", () => {
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
        fetchData,
        fetchPageByUrl,
        createData,
        deleteData,
        editData,
        updateData,
        onRequest,
    } = useCrudComposable();

    return {
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

        fetchData,
        fetchPageByUrl,
        createData,
        deleteData,
        editData,
        updateData,
        onRequest,
    };
});
