# 单向认证

单向认证用于 MQTT TLS/SSL 通信加密，由客户端验证服务器合法性。

单向认证适用于认证方式为 **Token** 的设备，需要使用 **actorcloud** 根证书 + 设备**编码信息**进行认证。


### 证书下载

- 任意证书详情页中，点击**下载证书**后解压文件，**root_ca.crt** 即为 **actorcloud** 根证书。

![](/images/certs_download.png)



### 代码示例

- Python MQTT 客户端单向认证连接
