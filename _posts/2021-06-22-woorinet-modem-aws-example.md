---
title: "Cat M1 AWS IoT 예제"
categories:
  - cat m1
tags:
  - 우리넷
  - 외장형 모뎀
  - AWS
---


### Cat M1 AWS IoT 예제

``` ruby
AT*WFPUSH=/data/cacerts-aws.crt,LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURRVENDQWltZ0F3SUJBZ0lUQm15Zno1bS9qQW81NHZCNGlrUG1salpieWpBTkJna3Foa2lHOXcwQkFRc0YKQURBNU1Rc3dDUVlEVlFRR0V3SlZVekV....................................................................................0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0=
OK
AT*WFPUSH=/data/clientcerts-aws.crt,LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURXVENDQWtHZ0F3SUJBZ0lVYlFpVzdQRmFzWXZWbFFLeG9yMGNLVCttWVBJd0RRWUpLb1pJaHZjTkFRRUwKQlFBd1RURkxNRWtHQTFVRUN3eENRVzF...................................................................................pRW82RGJEU2VBSW9KYVp4UEtCVU9jRDcrUXlyaGgKLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQ==
OK
AT*WFPUSH=/data/clientkey-aws.key,LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFcFFJQkFBS0NBUUVBc0h1b1lHYVA3SXMvR0J2Q3B5Y2dyWEp6Y08zditONmUyYzhzZG9xbFFxL2NnRWNoCjI3eFJWRXYzT1Q2cS84cVlXZnB....................................................................................RqT0NDUEdVLzhFblMrS244ZG1RPQotLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQ==
OK

AT*WMQTCFG=cacerts,/data/cacerts-aws.crt
*WMQTCFG:cacerts,/data/cacerts-aws.crt


OK
AT*WMQTCFG=clientcerts,/data/clientcerts-aws.crt
*WMQTCFG:clientcerts,/data/clientcerts-aws.crt


OK
AT*WMQTCFG=clientkey,/data/clientkey-aws.key
*WMQTCFG:clientkey,/data/clientkey-aws.key


OK
AT*WMQTCFG=endpoint,ssl://a3uz5t2azg1xdz-ats.iot.ap-northeast-2.amazonaws.com
*WMQTCFG:endpoint,ssl://a3uz5t2azg1xdz-ats.iot.ap-northeast-2.amazonaws.com


OK
AT*WMQTCFG=clientname,clientid-testid
*WMQTCFG:clientname,clientid-testid


OK
AT*WMQTCFG=username,
*WMQTCFG:username,


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
*WMQTCFG:endpoint,ssl://a3uz5t2azg1xdz-ats.iot.ap-northeast-2.amazonaws.com
*WMQTCFG:clientname,clientid-testid
*WMQTCFG:port,8883
*WMQTCFG:keepalive,300
*WMQTCFG:cleansession,1
*WMQTCFG:username,
*WMQTCFG:password,
*WMQTCFG:cacerts,/data/cacerts-aws.crt
*WMQTCFG:clientcerts,/data/clientcerts-aws.crt
*WMQTCFG:clientkey,/data/clientkey-aws.key
*WMQTCFG:clientkeypasswd,
*WMQTCFG:selfsigned,1
*WMQTCFG:servercertauth,0


OK
AT*WMQTCON
OK
*WMQTCON:1
*WMQTCON:2


AT*WMQTPUB=testtopic/tx,"{ "Temp" : 23 }"
OK
*WMQTPUB:1
AT*WMQTPUB=testtopic/tx,"{ "Temp" : 21 }"
OK
*WMQTPUB:2
AT*WMQTPUB=testtopic/tx,"{ "Temp" : 26 }"
OK
*WMQTPUB:3


AT*WMQTDIS
OK
*WMQTDIS:0


```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/woorinet-aws-example-1.jpg){: .align-center}
![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/woorinet-aws-example-2.jpg){: .align-center}
![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/woorinet-aws-example-3.jpg){: .align-center}

