const RouterConfigName = {
    routers:[
        {
            typeName: '人员信息',
            path:'/person',
            key: 1,
            children: [
                {
                    typeName: '查看用户',
                    path:'/lookPerson',
                    key: 1-1,
                    choose: true
                }
            ]
        },
        {
            typeName: '仓库信息',
            path:'/store',
            key: 2,
            children: [
                {
                    typeName: '添加仓库',
                    path:'/addStore',
                    key: 2-1,
                    choose: false
                },
                {
                    typeName: '查看仓库信息',
                    path:'/lookStore',
                    key: 2-2,
                    choose: false
                }
            ]
        },
    ]
}

export default RouterConfigName;