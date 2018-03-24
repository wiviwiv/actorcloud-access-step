# 双向认证

双向认证用于 MQTT TLS/SSL 通信加密，由客户端验证服务器合法性。

双向认证适用于认证方式为**证书**的设备，需要使用 **actorcloud** 根证书 + 自签名证书，证书密钥进行认证。


### 证书下载

任意证书详情页中，点击**下载证书**后解压文件得到：

- **root_ca.crt** ： **actorcloud** 根证书；
- **证书名称.crt** ： 自签名证书；
- **证书名称.key** ：自签名证书密钥。

> 使用双向认证接入的设备无需用户名密码验证，且双向认证设备需绑定并使用其匹配证书才能认证成功。


![](/images/certs_files.png)


### 代码示例

- Python MQTT 客户端双向认证连接

```python
# --coding: utf-8--

import ssl
import paho.mqtt.client as mqtt
import json

# 设备需要在 actorcloud 平台注册且认证方式为 "证书"
client_id = '10C61F1A1F41'
username = '10C61F1A1F41'
password = '630a7f6b54d75e50a2e59b4baca722d4'
HOST = 'actorcloud.io'

# 双向认证端口
PORT = 8884


def on_connect(client, userdata, flags, rc):
    print('Connected with result code ' + str(rc))
    client.subscribe('/hello')
    client.publish('/hello', json.dumps({
        'cmd': 'reboot'
    }))


# 设备控制、分组控制及其他方式 publish 的消息统一在此处理
def on_message(client, userdata, msg):
    print('from {0} received {1}'.format(msg.topic, str(msg.payload)))
    # 其他处理逻辑
    pass

client = mqtt.Client(client_id=client_id)
# 设置 PROT 为 8883 并设置根证书、签名证书及密钥路径
client.tls_set(ca_certs='./root_ca.crt', certfile='./default.crt', keyfile='./default.key', cert_reqs=ssl.CERT_REQUIRED,
    tls_version=ssl.PROTOCOL_TLS, ciphers=None)
client.on_connect = on_connect
client.on_message = on_message

client.connect(HOST, PORT)

client.loop_forever()
```
