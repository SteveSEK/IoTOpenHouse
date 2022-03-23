---
title: "PDP Conext 초기화"
categories:
  - cat m1
tags:
  - pdp context
  - 개통 초기화
  - 글로벌심
---


### PDP Context
PDP(Packet Data Protocol)는 GPRS(General Packet Radio Service) 망과 통신을 위해 외부 패킷 데이터망이 사용하는 네트워크 프로토콜이다. 
IP가 GPRS에서 지원하는 PDP의 한 예이다. 
단말과 네트워크 사이의 패킷 데이타 전송이 가능하게 하는 연결이 이루어지는데, 여기에 사용되는 정보를 PDP Context라고 한다.
즉, 외부 Packet Data Network로의 연결을 위한 여러가지 종류 정보의 집합 이라고 할수 있다. 

보통 PDP를 Activation 하기 전에, 설정된 PDP 정보를 확인하거나 통신 사업자가 제공하는 정보를 입력해야 한다.

### SK 텔레콤 Cat M1 PDP 정보

``` ruby
AT+CGDCONT?
+CGDCONT: 1,"IPV4V6","","0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0",0,0,0,0
+CGDCONT: 2,"IPV4V6","lte-internet.sktelecom.com","0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0",0,0,0,0
```

### PDP Context 초기화 (SK 텔레콤 Cat M1)

유심이나 모듈이 개통 이력이 있는 경우나 초기 개통에서 문제가 발생하는 경우에, 아래 처럼 PDP Context 초기화하고 재부팅을 하면 정상 개통이 이루어질 수 있다.
``` ruby
AT+CGDCONT=1,”IPV4V6”
Ok

AT+CFUN=1,1
OK
```

### Null APN

일부 글로벌심의 경우에 설정해야 하는 APN이 정확하지 않다면, APN을 Null로 설정하고 재부팅을 하면 정상 동작하는 경우도 있다. (Hologram SIM & BG96)
``` ruby
AT+CGDCONT=1,”IP”,
Ok

AT+CFUN=1,1
OK
```

