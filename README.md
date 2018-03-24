*EMQ* actocloud 设备管理平台接入指南
----
***EMQ* 设备管理平台 actorcloud** （以下简称 **actorcloud**） 正式上线，访问 [https://www.actorcloud.io](https://www.actorcloud.io/) 可进行功能预览、开发测试。

**actorcloud** 是一个综合物联网设备管理平台，平台提供但不限于物联网设备的接入通信功能，同时具备完善的设备连接鉴权、消息存储管理、事件查看与派发，设备反向控制等功能。 用户可以通过 **actorcloud** 对接 ***EMQ X* 消息服务器**进行联网设备的运维管理。




### 注意事项

##### 接入原则

- 设备必须在平台[注册创建](device/device.md)，指定认证信息与接入方式；

- 设备接入方式需与其认证信息一致。


##### 设备编号问题

- 所有接入平台的设备需要录入平台中并且拥有全局唯一的设备编号（MQTT ClientId），请留意某些硬件产品出厂交付时使用了同样的设备编号避免接入失败。

- 某些场景下，您可以先创建设备，使用平台自动生成设备编号初始化设备以保证其唯一性，通过 REST API 可快速完成相关操作。

> 硬件设备中网卡 MAC 地址具有高度唯一性，可以使用其混合编码生成设备编号。




### 接入方式

尽管同一账户下任意接入方式中的设备消息是互通的，但是您需要依据产品需求选择合适的接入方式。

通常使用 SSL/TLS 在带来更高的安全性的同时会降低连接性能，一些设备性能受限只能运行更佳轻量级的 CoAP 客户端，而 WebSocket 被推荐用于浏览器上实时通信。


##### 附：**actorcloud** 支持接入协议

| 名称  | 接入地址 | 使用说明 |
| ------- | ------- | ----|
| MQTT  | actorcloud.io:1883 | 普通 MQTT 接入 |
| MQTT/SSL  | actorcloud.io:8883 | SSL MQTT 接入（单向认证） |
| MQTT/SSL  | actorcloud.io:8884 | SSL MQTT 接入 （双向认证）|
| CoAP  | actorcloud.io:5683/mqtt | MQTT/CoAP 接入 |
| CoAP/DTLS  | actorcloud.io:5684/mqtt | DTLS MQTT/CoAP 接入 |
| MQTT/WebSocket  | actorcloud.io:8083/mqtt | MQTT/WebSocket 接入 |
| MQTT/WebSocket/SSL  | actorcloud.io:8084/mqtt | SSL MQTT/WebSocket 接入 |


