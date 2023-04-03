import {useCommonState} from "./useCommonState";
import {useCommonGetters} from "./useCommonGetters";
import {useCommonAction} from "./useCommonAction";

export function useCrudComposable() {


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
    } = useCommonState()
    const {} = useCommonGetters()
    const {

        fetchData,
        fetchPageByUrl,
        createData,
        deleteData,
        editData,
        updateData,
        onRequest,
    } = useCommonAction()


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
    }

}