const Mock = require('mockjs')

const Random = Mock.Random;

const routeData = function () {
  let route = [
    {
      "_id" : "5cce992319f1fda8b3a28e21",
      "path" : "home",
      "name" : "home",
      "meta" : { "icon" : "", "location" : "home", "isShow" : true, "label" : "首页" },
    },
    {
      "children" : [
        {
          "_id" : "menu-id-1-1",
          "path" : "commodity-order-list",
          "name" : "commodityOrderList",
          "meta" : {
            "icon" : "",
            "location" : "order/commodity-order-list",
            "label" : "预约订单",
            "isShow" : true
          },
          "parentId" : "menu-id-1"
        },
        {
          "_id" : "menu-id-1-2",
          "path" : "use-order-list",
          "name" : "useOrderList",
          "meta" : {
            "icon" : "",
            "location" : "order/use-order-list",
            "label" : "使用订单",
            "isShow" : true
          },
          "parentId" : "menu-id-1"
        }
      ],
      "_id" : "menu-id-1",
      "path" : "",
      "name" : "",
      "meta" : { "icon" : "", "location" : "", "isShow" : true, "isSubmenu" : true, "label" : "订单管理" },
      "created" : "2019-04-28T15:50:25.815Z",
    },
    {
      "children" : [
        {
          "_id" : "menu-id-2-1",
          "path" : "repairs-list",
          "name" : "repairsList",
          "meta" : {
            "icon" : "",
            "location" : "maintain/repairs-list",
            "label" : "报修",
            "isShow" : true
          },
          "parentId" : "menu-id-2",
        },
        {
          "_id" : "menu-id-2-2",
          "path" : "pending-list",
          "name" : "pendingList",
          "meta" : {
            "icon" : "",
            "location" : "maintain/pending-list",
            "label" : "待处理",
            "isShow" : true
          },
          "parentId" : "menu-id-2",
        },
        {
          "_id" : "menu-id-2-3",
          "path" : "maintain-list",
          "name" : "maintainList",
          "meta" : {
            "icon" : "",
            "location" : "maintain/maintain-list",
            "label" : "订单列表",
            "isShow" : true
          },
          "parentId" : "menu-id-2",
        }
      ],
      "_id" : "menu-id-2",
      "path" : "",
      "name" : "",
      "meta" : { "icon" : "", "location" : "", "isShow" : true, "isSubmenu" : true, "label" : "维修管理" },
      "created" : "2019-04-28T15:51:16.957Z",
    },
    {
      "_id" : "menu-id-4",
      "path" : "member-list",
      "name" : "memberList",
      "meta" : { "icon" : "", "location" : "member/member-list", "isShow" : true, "label" : "会员管理" },
    },
    {
      "children" : [
        {
          "_id" : "5cceacbaba552828a0601234",
          "path" : "work-admin",
          "name" : "workAdmin",
          "meta" : {
            "icon" : "",
            "location" : "system/work-admin",
            "label" : "工位管理",
            "isShow" : true
          },
          "parentId" : "menu-id-3-1"
        },
        {
          "children" : [],
          "_id" : "5ccfd0ea2ebc6e364800f1eb",
          "path" : "floor-admin",
          "name" : "floorAdmin",
          "meta" : { "icon" : "", "location" : "system/floor-admin", "label" : "楼层管理", "isShow" : true },
          "parentId" : "menu-id-3-2"
        },
        {
          "children" : [],
          "_id" : "5ccfd0ea2ebc6e364800f1eb",
          "path" : "system-details",
          "name" : "systemDetails",
          "meta" : { "icon" : "", "location" : "system/system-details", "label" : "系统参数", "isShow" : true },
          "parentId" : "menu-id-3-2"
        }
      ],
      "_id" : "menu-id-3",
      "path" : "",
      "name" : "",
      "meta" : { "icon" : "", "location" : "", "label" : "系统设置", "isShow" : true, "isSubmenu" : true }
    },
  ]
  return route
}

Mock.mock('/route/index', 'post', routeData)