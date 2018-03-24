# 单向认证

单向认证用于 MQTT TLS/SSL 通信加密，由客户端验证服务器合法性。

单向认证适用于认证方式为 **Token** 的设备，需要使用 **actorcloud** 根证书 + 设备**编码信息**进行认证。


### 证书下载

- 任意证书详情页中，点击**下载证书**后解压文件，**root_ca.crt** 即为 **actorcloud** 根证书。

![](/images/certs_download.png)



### 代码示例

- Python MQTT 客户端单向认证连接

```python
# --coding: utf-8--

import ssl
import paho.mqtt.client as mqtt
import json

# 设备需要在 actorcloud 平台注册
client_id = '10C61F1A1F40'
username = '10C61F1A1F40'
password = 'ce07c199187811e8a12b525440546606'
HOST = 'actorcloud.io'
PORT = 8883


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
# 单向认证仍需要用户名密码
client.username_pw_set(username, password)
# 设置 PROT 为 8883 并设置根证书路径
client.tls_set(ca_certs='./root_ca.crt', certfile=None, keyfile=None, cert_reqs=ssl.CERT_REQUIRED,
    tls_version=ssl.PROTOCOL_TLS, ciphers=None)
client.on_connect = on_connect
client.on_message = on_message

client.connect(HOST, PORT)

client.loop_forever()
```