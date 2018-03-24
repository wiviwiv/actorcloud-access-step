// 标题

const summary = [
  {
    title: '概览',
    path: 'README.md',
  },
  {
    title: '账户注册',
    path: 'introduction/account.md',
    child: [],
  },
  {
    title: '设备初始化',
    path: 'device/access.md',
    child: [
      {
        title: '创建产品',
        path: 'device/product.md',
      },
      {
        title: '创建设备',
        path: 'device/device.md',
      },
      {
        title: '分组管理',
        path: 'device/group.md',
      },
    ],
  },
  {
    title: '安全性与规则',
    path: 'security/security.md',
    child: [
      {
        title: '证书集成',
        path: 'security/certs.md',
      },
      {
        title: '设备策略',
        path: 'security/policies.md',
      },
    ],
  },
  {
    title: '接入测试',
    path: 'access/access.md',
    child: [
      {
        title: 'MQTT 客户端',
        path: 'access/mqtt.md',
      },
      {
        title: '单向认证',
        path: 'access/single.md',
      },
      {
        title: '双向认证',
        path: 'access/certs.md',
      },
    ],
  },
  {
    title: '设备控制',
    path: 'control/control.md',
    child: [
      {
        title: '代理订阅',
        path: 'control/proxy.md',
      },
      {
        title: '设备控制',
        path: 'control/device.md',
      },
      {
        title: '分组控制',
        path: 'control/group.md',
      },
    ],
  },
  {
    title: '日志与数据',
    path: 'data/data.md',
    child: [
      {
        title: '连接日志',
        path: 'data/connect.md',
      },
      {
        title: '上行消息',
        path: 'data/upstream.md',
      },
      {
        title: '下行消息',
        path: 'data/downstream.md',
      },
    ],
  },
  {
    title: 'REST API',
    path: 'rest/rest.md',
  },
]

module.exports = summary
