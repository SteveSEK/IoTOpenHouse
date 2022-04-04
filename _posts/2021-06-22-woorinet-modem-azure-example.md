---
title: "Cat M1 Azure IoT 예제"
categories:
  - cat m1
tags:
  - 우리넷
  - 외장형 모뎀
  - Azure
---


### Cat M1 Azure IoT 예제

``` ruby
AT*WFPUSH=/data/cacerts-azure.crt,LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURkekNDQWwrZ0F3SUJBZ0lFQWdBQXVUQU5CZ2txaGtpRzl3MEJBUVVGQURCYU1Rc3dDUVlEVlFRR0V3SkoKUlRFU01CQUdBMVVFQ2hNSlFtRnNkR2x0YjNKbE1STXdFUVlEVlFRTEV3cERlV0psY2xSeWRYTjBNU0l3SUFZRApWUVFERXhsQ1lXeDBhVzF2Y21VZ1EzbGlaWEpVY25WemRDQlNiMjkwTUI0WERUQXdNRFV4TWpFNE5EWXdNRm9YCkRUSTFNRFV4TW..................................................................................DdFBoU056a0UxYWt4ZWhpL29DcjAKRXBuM28wV0M0enhlOVoyZXRjaWVmQzdJcEo1T0NCUkxiZjF3YldzYVk3MWs1aCszenZEeW55NjdHN2Z5VUloegprc0xpNHhhTm1qSUNxNDRZM2VrUUVlNStOYXVRcno0d2xIclFNejJuWlEvMS9JNmVZczlIUkN3Qlhic2R0VExTClI5STRMdEQrZ2R3eWFoNjE3anpWL09lQkhSbkRKRUxxWXptcAotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0t
OK
AT*WFPUSH=/data/clientcerts-azure.crt,LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURoekNDQW0rZ0F3SUJBZ0lQQW9oMUpPeUNvTjJsOFRhc3lnUDZNQTBHQ1NxR1NJYjNEUUVCQ3dVQU1DVXgKSXpBaEJnTlZCQU1NR2xkSldtNWxkQ0JRYVdOdklGTjFZbTl5WkdsdVlYUmxJRU5CTUI0WERUSXlNRE15TkRJegpOVFl3TVZvWERUSXpNRE15TkRJek5UWXdNVm93WkRFTE1Ba0dBMVVFQmhNQ1FWVXhFekFSQmdOVkJBZ01DbE52CmJXVXRVM1JoZE..................................................................................
sU1phTGs2NnpRQ3JZTEI5RS83Q1cKQm9yMzNiRFphRGl0K1h2RmhBai9CN2Vua09BRDlRNU1RYnZwMmMxVHZ3YkhWTkI0MXFBbE5xL3NqMFg2UWxtNQpIdlE5b2d1dDJJdjVLZzRuNFRVSEZpMUU3NXBVSVNSdHNPSFNkdlRtb0VuSFhyY3Z5ck1MZVpzMWgyRllHWG1qCjIvL1ZiOTlIY0JnZ29UdE9IdUcrWnBUYXd1WlFsZVNHYzlxWjZnSlNZeXRhaENzbzBjQ2syejRpa1E9PQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0t
OK
AT*WFPUSH=/data/clientkey-azure.key,LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JSUV2Z0lCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktnd2dnU2tBZ0VBQW9JQkFRRFdrWGtzT2pycDZBRHUKb1BBaU5oalFRb1JIVVJmbU1QVXFLekRsWXlBcC96OVlVVjdpYVlydXZXdVB0dVl5V0owb0JFWTg4SjJSaWMrWApML0Z1WFF2eHlwNFBaK1ZNL1l3elZOWjM1clNGaVczeTFOWTFGRTFFZXd0amdSdkJVYkRqZlJ4TGgxdkUyenc3CldXeFpXZXVYY0..................................................................................4MUJFdEdGY0dKWQpIMFYweE5zVmRoSTF1UngyQU5YMGhCeDRyRUZabjFqMjA1QlRXT0dQbUxpekd1RmVySGl1dGlOMWVOQzh0TXpnCmp6YjBTTUpWT3dWL1B2ZUU0WU5JWnlpK3lXRjVHbUJiL1hSSmMrZlFVY0labEVEeElWWFNYRzNQZHpsODhUZkQKQ2tkeWdTQk1jNEROZzduQmY3ZFIwMWhBCi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS0=
OK
AT*WMQTCFG=cacerts,/data/cacerts-azure.crt
*WMQTCFG:cacerts,/data/cacerts-azure.crt


OK
AT*WMQTCFG=clientcerts,/data/clientcerts-azure.crt
*WMQTCFG:clientcerts,/data/clientcerts-azure.crt


OK
AT*WMQTCFG=clientkey,/data/clientkey-azure.key
*WMQTCFG:clientkey,/data/clientkey-azure.key


OK
AT*WMQTCFG=endpoint,ssl://WIZnetHub.azure-devices.net
*WMQTCFG:endpoint,ssl://WIZnetHub.azure-devices.net


OK
AT*WMQTCFG=clientname,wiznet_catm1_demo_01
*WMQTCFG:clientname,wiznet_catm1_demo_01


OK
AT*WMQTCFG=username,WIZnetHub.azure-devices.net/wiznet_catm1_demo_01/?api-version=2018-06-30
*WMQTCFG:username,WIZnetHub.azure-devices.net/wiznet_catm1_demo_01/?api-version=2018-06-30


OK
AT*WMQTCFG=password,
*WMQTCFG:password,


OK
AT*WMQTCFG=port,8883
*WMQTCFG:port,8883


OK
AT*WMQTCFG=selfsigned,1
*WMQTCFG:selfsigned,1


OK
AT*WMQTCFG=servercertauth,0
*WMQTCFG:servercertauth,0


OK
AT*WMQTCFG?
*WMQTCFG:endpoint,ssl://WIZnetHub.azure-devices.net
*WMQTCFG:clientname,wiznet_catm1_demo_01
*WMQTCFG:port,8883
*WMQTCFG:keepalive,300
*WMQTCFG:cleansession,1
*WMQTCFG:username,WIZnetHub.azure-devices.net/wiznet_catm1_demo_01/?api-version=2018-06-30
*WMQTCFG:password,
*WMQTCFG:cacerts,/data/cacerts-azure.crt
*WMQTCFG:clientcerts,/data/clientcerts-azure.crt
*WMQTCFG:clientkey,/data/clientkey-azure.key
*WMQTCFG:clientkeypasswd,
*WMQTCFG:selfsigned,1
*WMQTCFG:servercertauth,0


OK
AT*WMQTCON
OK
*WMQTCON:1
*WMQTCON:2
AT*WMQTPUB=devices/wiznet_catm1_demo_01/messages/events/,"{ "Temp" : 23 }"
OK
*WMQTPUB:1
AT*WMQTPUB=devices/wiznet_catm1_demo_01/messages/events/,"{ "Temp" : 21 }"
OK
*WMQTPUB:2
AT*WMQTPUB=devices/wiznet_catm1_demo_01/messages/events/,"{ "Temp" : 26 }"
OK
*WMQTPUB:3
AT*WMQTDIS
OK
*WMQTDIS:0

```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/woorinet-azure-example-1.jpg){: .align-center}
![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/woorinet-azure-example-2.jpg){: .align-center}
![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/woorinet-azure-example-3.jpg){: .align-center}

