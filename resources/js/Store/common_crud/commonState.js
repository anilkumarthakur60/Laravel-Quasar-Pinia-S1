export default  {

    data: [],
    formData: {},
    detailData: {},
    storeName: "posts",
    formModal: false,
    formRef: {},
    pagination: {
        sortBy: 'id',
        descending: true,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 10,
        totalNumber: 0,
        },
    filters: {},
    query: null,
    loading: false,
    columns: "id,name",
    submittingAndNew: false,
    errors: [],
    urlForFetchPaged: null,
}

