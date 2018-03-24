# --coding: utf-8--

import urllib2, base64

# 访问地址 认证信息
base_url = 'http://localhost:7000/api/v1'
app_id = 'erGNyh'
app_token = '177154ed13955fff9acbcf46bb637532'


request = urllib2.Request('%s/devices' % base_url)
print('%s/devices' % base_url)
auth = base64.b64encode('%s:%s' % (app_id, app_token))
request.add_header("Authorization", "Basic %s" % auth)   
result = urllib2.urlopen(request)

print(result.read())
