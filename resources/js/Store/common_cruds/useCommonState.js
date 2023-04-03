import {ref} from 'vue'

export function useCommonState() {

    const data = ref([])
    const formData = ref({})
    const detailData = ref({})
    const storeName = ref("posts")
    const formModal = ref(false)
    const formRef = ref(null)
    const pagination = ref({
        sortBy: 'id',
        descending: true,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 10,
        totalNumber: 0,
    })
    const filters = ref({})
    const query = ref(null)
    const loading = ref(false)
    const columns = ref("id,name")
    const submittingAndNew = ref(false)
    const errors = ref([])
    const urlForFetchPaged = ref(null)
    const stateUrl = ref("users")


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
        stateUrl
    }
}

