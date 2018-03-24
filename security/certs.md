# 证书集成

**设备管理平台**支持使用 CA 证书自签名生成设备证书，账户下生成的设备证书支持与账户下任意设备绑定并配置其可用性，所选设备使用 TLS/SSL 安全连接时应当使用已绑定证书进行加密通信。

依次点击**设备管理** -> **安全管理** -> **证书** 可进行证书的管理。


### 证书创建

输入证书名称，选择证书可用性后创建证书。创建后请立即下载并妥善保管相关证书、密钥。

![](/images/certs_create.png)


### 绑定设备

设备使用 TLS/SSL 安全连接时应当使用已绑定证书进行加密通信，在证书详情页可以修改证书信息，管理绑定设备。

![](/images/certs_bind.png)


### 使用指南

在使用设备编号、设备密钥、连接用户名认证的基础上，平台还可以使用设备证书与服务器进行双向认证进一步保障通信安全性；

- 单向认证：使用端口 8883 进行 TLS/SSL 加密连接，客户端使用证书验证服务器连接合法性，[单向认证代码示例](../access/single.md)；

- 双向认证：使用端口 8884 进行 TLS/SSL 加密连接，客户端、服务器进行双向认证，[双向认证代码示例](../access/twice.md)；

- 双向认证设备需绑定并使用其匹配证书才能认证成功。


### 附：**actorcloud** 支持接入协议

**actorcloud 设备管理平台**支持多种接入协议，以下是对照信息：

| 名称  | 接入地址 | 使用说明 |
| ------- | ------- | ----|
| MQTT  | mqtt://actorcloud.io:1883 | 普通 MQTT 接入 |
| MQTT/SSL  | mqtts://actorcloud.io:8883 | SSL MQTT 接入（单向认证） |
| MQTT/SSL  | tls://actorcloud.io:8884 | SSL MQTT 接入 （双向认证）|
| CoAP  | coap://actorcloud.io:5683/mqtt | MQTT/CoAP 接入 |
| CoAP/DTLS  | coap://actorcloud.io:5684/mqtt | DTLS MQTT/CoAP 接入 |
| MQTT/WebSocket  | ws://actorcloud.io:8083/mqtt | MQTT/WebSocket 接入 |
| MQTT/WebSocket/SSL  | wss://actorcloud.io:8084/mqtt | SSL MQTT/WebSocket 接入 |