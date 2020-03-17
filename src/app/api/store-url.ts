const StoreUrl = {
    // 查看仓库信心
    lookStore: '/api/v1/getInfoBypageAndSize/{page}/{size}',
    saveStore: '/api/v1/saveStore',
    timeSheet: '/api/v1/timesheetlistByPerId/{personId}',
    deleteStoreInfo: '/api/v1/deleteById/{id}/{perId}'
}

export default StoreUrl;