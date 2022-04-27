---
title: "Cat M1 AWS IoT 예제(BG96)"
categories:
  - cat m1
tags:
  - BG96
  - Quectel
  - AWS
---


### Cat M1 AWS IoT 예제(BG96)

## AWS IoT에서 사물 생성하기
![image](https://user-images.githubusercontent.com/2126804/165430395-f3bb0cb2-0b0e-45b3-bba9-b55e561f92c7.png)
![image](https://user-images.githubusercontent.com/2126804/165430439-59c5e51b-a219-47af-9b20-cc6d6061d0ec.png)
![image](https://user-images.githubusercontent.com/2126804/165430459-b488aa20-18bb-4a65-b366-1b81374293cb.png)



## 디바이스 - 인증서 파일 저장하기

이제부터 Cat M1 모듈을 AWS IoT에 연결하는 과정을 설명합니다.
먼저, 이전 단계([2. AWS - 인증서 및 보안 정책 생성])에서 다운로드 받은 인증서 파일들을 Cat M1 모듈에 저장하는 과정입니다.

```
// Cat M1 모듈의 모든 파일 리스트 지우기
AT+QFDEL="*"

OK

// Cat M1 모듈의 파일 리스트 확인하기
AT+QFLST

OK

// 루트 CA 인증서를 Cat M1 모듈 파일에 업로드
AT+QFUPL="AmazonRootCA1.pem",1188,100
CONNECT
+QFUPL: 1188,2d13

OK

// 사물에 대한 인증서를 Cat M1 모듈 파일에 업로드
AT+QFUPL="YourCertificate.pem.crt",1220,100
CONNECT
+QFUPL: 1220,7317

OK

// 프라이빗 키를 Cat M1 모듈 파일에 업로드
AT+QFUPL="YourPrivate.pem.key",1675,100
CONNECT
+QFUPL: 1675,372

OK
```

## 디바이스 - AWS IoT에 접속하기

이제, 디바이스가 AWS IoT에 접속하는 과정을 설명하도록 하겠습니다.

이전 단계(4. 디바이스 - 인증서 파일 저장하기)에서 Cat M1 모듈에 저장된 인증서 파일을 SSL 접속에 등록시키고, 여러가지 SSL 옵션을 설정합니다. 그리고, 엔드포인트 주소로 접속하여, AWS IoT에 접속합니다.
자세한 AT Command 명령어에 대한 설명은 해당 가이드 문서를 확인하시거나 매뉴얼을 확인하시기 바랍니다.

```
// SSL : 루트 CA 인증서 경로 설정
AT+QSSLCFG="cacert",2,"AmazonRootCA1.pem"

OK

// SSL : 클라이언트 인증서 경로 설정
AT+QSSLCFG="clientcert",2,"YourCertificate.pem.crt"

OK

// SSL : 클라이언트 프라이빗 키  경로 설정
AT+QSSLCFG="clientkey",2,"YourPrivate.pem.key"

OK

// Manage server and client authentication if requested by the remote server
AT+QSSLCFG="seclevel",2,2

OK

// TLS 1.1
AT+QSSLCFG="sslversion",2,4

OK

// Ciphersuite : TLS_RSA_WITH_AES_256_CBC_SHA
AT+QSSLCFG="ciphersuite",1,0x0035

OK

// Ignore validity check for certification
AT+QSSLCFG="ignorelocaltime",1
+QSSLCFG: "ignorelocaltime",1,1

OK

// MQTT 접속을 SSL로 설정
AT+QMTCFG="SSL",0,1,2

OK

// 엔드 포인트 주소 설정
AT+QMTOPEN=0,"a3uz5t2azg1xdz-ats.iot.ap-northeast-2.amazonaws.com",8883

OK

+QMTOPEN: 0,0

// AWS IoT에 접속
AT+QMTCONN=0,"WIZnet_IoTShield_CatM1"

OK

+QMTCONN: 0,0,0
```

## 6. 디바이스 - 데이터 게시

이제, 디바이스에서 AWS IoT로 데이터를 보내보도록 하겠습니다.

디바이스 섀도우 서비스는 디바이스가 섀도우 상태 정보를 가져오거나 업데이트하거나 삭제할 수 있도록 예약된 MQTT 토픽를 사용합니다.
이러한 토픽의 이름은 $aws/things/thingName/shadow로 시작합니다. 디바이스 섀도우를 업데이트하려면 $aws/things/thingName/shadow/update 토픽으로 상태 문서를 게시합니다. 상태 문서는 JSON 문서 포맷으로 전송이 됩니다.

사물의 상태를 업데이트하려는 클라이언트는 다음과 같은 JSON 요청 상태 문서를 전송합니다.

```
{
    "state" : {
        "desired" : {
            "temp" : "20"
            "led" : "on",
         }
     }
}
```

섀도우를 업데이트하는 디바이스는 다음과 같은 JSON 요청 상태 문서를 전송합니다.

```
{
    "state" : {
        "reported" : {
            "temp" : "25"
            "led" : "off",
         }
     }
}
```

이제, 디바이스(Cat M1 모듈)가 AWS IoT에게 데이터를 보내보도록 하겠습니다.

```
// AWS IoT에 데이터 Publish하기
AT+QMTPUB=0,1,1,0,"$aws/things/WIZnet_IoTShield_CatM1/shadow/update"
> {"state":{"reported":{"Temp":"29","Color":"Red"}}}

OK

+QMTPUB: 0,1,0
```

AWS IoT에서 해당 사물의 섀도우를 선택하면, 디바이스가 보낸 상태가 바로 적용되는 것을 확인하실 수 있습니다.

![image](https://user-images.githubusercontent.com/2126804/165430238-261d6e1f-6b94-43c0-b28c-6657394cf2e5.png)

![image](https://user-images.githubusercontent.com/2126804/165430833-b1c36f35-85a1-44ed-a1a9-dda8fa195fad.png)

## 디바이스 - 데이터 구독

AWS IoT에서 디바이스에게 데이터를 전송하는 과정을 테스트 해보도록 하겠습니다.
먼저, 이번에는 디바이스가 $aws/things/WIZnet_IoTShield_CatM1/shadow/update/accepted를 구독하도록 하겠습니다.

```
// AWS IoT로부터 데이터 Subscribe하기
AT+QMTSUB=0,1,"$aws/things/WIZnet_IoTShield_CatM1/shadow/update/accepted",1

OK

+QMTSUB: 0,1,0,1
```

아래는 사물의 섀도우에서 "Color"를 "White"로 업데이트해 보도록 하겠습니다. 그럼, AWS IoT는 사물에게 업데이트된 정보를 전달하게 됩니다. 이를 위해서, 아래 화면에서 처럼, [섀도우], [편집]을 선택하여, 섀도우 상태를 아래와 같이 편집하고 [저장]을 선택합니다.

![image](https://user-images.githubusercontent.com/2126804/165430278-d07dee6a-dca0-4c7e-a138-184b67fea6ca.png)

이 때, AWS IoT는 사물에게 이 데이터를 전달하게 되고, 디바이스에서는 아래와 같은 메시지를 받게 됩니다.
```
+QMTSUB: 0,1,0,1

+QMTRECV: 0,1,"$aws/things/WIZnet_IoTShield_CatM1/shadow/update/accepted","{"state":{"reported":{"Temp":"29","Color":"Red"},"desired":{"Color":"White"}},"metadata":{"reported":{"Temp":{"timestamp":1553325144},"Color":{"timestamp":1553325144}},"desired":{"Color":{"timestamp":1553325144}}},"version":5,"timestamp":1553325144}"
```

이 데이터를 가독성 있게 정렬하면 아래와 같습니다. 즉, AWS IoT 섀도우 화면에서 수정한 내용이 그대로 적용되는 것을 확인하실 수 있습니다.

```
{ 
  "state":{
    "reported":{
      "Temp":"29",
      "Color":"Red"
    },
    "desired":{
      "Color":"White"
    }
  },
  .......................
```

## 디바이스 - AWS IoT 접속 해제하기

만약 AWS IoT와 연결을 해제하려고 한다면, AT+QMTDISC 명령어를 사용하면 됩니다.

```
AT+QMTDISC=0
OK

+QMTDISC: 0,0
```

## 디바이스 - AT 명령어 전체 로그

아래 그림은 이번 AWS IoT 테스트에 사용된 디바이스의 전체 로그입니다.

```
AT+QFDEL="*"

OK

AT+QFLST

OK

AT+QFUPL="AmazonRootCA1.pem",1188,100
CONNECT
+QFUPL: 1188,2d13

OK

AT+QFUPL="YourCertificate.pem.crt",1220,100
CONNECT
+QFUPL: 1220,7317

OK

AT+QFUPL="YourPrivate.pem.key",1675,100
CONNECT
+QFUPL: 1675,372

OK

AT+QSSLCFG="cacert",2,"AmazonRootCA1.pem"

OK

AT+QSSLCFG="clientcert",2,"YourCertificate.pem.crt"

OK

AT+QSSLCFG="clientkey",2,"YourPrivate.pem.key"

OK

AT+QSSLCFG="seclevel",2,2

OK

AT+QSSLCFG="sslversion",2,4

OK

AT+QSSLCFG="ciphersuite",1,0x0035

OK

AT+QSSLCFG="ignorelocaltime",1
+QSSLCFG: "ignorelocaltime",1,1

OK

AT+QMTCFG="SSL",0,1,2

OK

AT+QMTOPEN=0,"a3uz5t2azg1xdz-ats.iot.ap-northeast-2.amazonaws.com",8883

OK

+QMTOPEN: 0,0

AT+QMTCONN=0,"WIZnet_IoTShield_CatM1"

OK

+QMTCONN: 0,0,0

AT+QMTPUB=0,1,1,0,"$aws/things/WIZnet_IoTShield_CatM1/shadow/update"
> {"state":{"reported":{"Temp":"29","Color":"Red"}}}

OK

+QMTPUB: 0,1,0

AT+QMTSUB=0,1,"$aws/things/WIZnet_IoTShield_CatM1/shadow/update/accepted",1

OK

+QMTSUB: 0,1,0,1

+QMTRECV: 0,1,"$aws/things/WIZnet_IoTShield_CatM1/shadow/update/accepted","{"state":{"reported":{"Temp":"29","Color":"Red"},"desired":{"Color":"White"}},"metadata":{"reported":{"Temp":{"timestamp":1553325144},"Color":{"timestamp":1553325144}},"desired":{"Color":{"timestamp":1553325144}}},"version":5,"timestamp":1553325144}"

AT+QMTDISC=0

OK

+QMTDISC: 0,0

```


