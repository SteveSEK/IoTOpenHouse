---
title: "Cat.M1 사진 전송"
categories:
  - cat m1
tags:
  - 라즈베리파이
  - 우리넷
  - 사진
  - RNDIS
  - USB
---


LTE Cat.M1의 경우 Sigfox, LoRa, NB-IoT 보다 최대 전송 속도가 비교적 높기 때문에 실시간 트래킹 서비스 또는 사진 전송와 같은 중용량 및 실시간 응용에 사용하기 적합하다.  
아래 예제에서는 [우리넷](http://www.woori-net.com) 의 Cat.M1 외장형 모뎀을 이용하여 사진 전송이 가능한지 확인하고 속도를 검증해보도록 하겠다. 

​
### 하드웨어 설정 - ​WD-N400S 외장형 모뎀 설정

우리넷의 Cat.M1 외장형 모뎀을 사용하기 위한 방법은 두 가지 방법이 있다.    
* UART 인터페이스를 통해 AT 커맨드로 외장형 모뎀을 제어하는 방법
* RNDIS(Remote NDIS) 모드로 사용하는 방법

단, AT 커맨드를 이용하는 경우 UART 인터페이스(Baud Rate: 115200)를 사용하므로 Cat.M1 최대 전송 속도인 375kbps를 사용할 수 없으며, RNDIS 모드를 사용하면 Cat.M1 최대 전송 속도를 사용할 수 있다. 외장형 모뎀을 RNDIS 모드로 사용하기 위해서는 AT 커맨드로 ‘RNDISMODE=1’을 설정 후 재시작해야 한다. 

``` c
AT$$SWVER
$$SWVER: S130XX.037, Jul 24 2018 18:37:48

OK
AT*RNDISMODE=1
OK
```

### 하드웨어 설정 - 라즈베리파이와 카메라
Cat M1 외장형 모뎀 설정이 끝나면, 아래와 같이 라즈베리파이, 카메라, Cat M1 외장형 모뎀 등을 연결한다.
![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/rpi-cat-m1-modem.png){: .align-center}


### 동작 동영상

사진을 찍고 전송하는 동작 영상은 [Youtube 동영상](https://www.youtube.com/watch?v=xJbm8BLaym0)을 참고하면 된다.

### LTE Cat.M1 속도 

총 50번 테스트를 진행하였으며, 평균 데이터 전송률은 **298.37bps** 이었습니다. 통신사에서 공표한 Cat.M1 최고 전송 속도의 80~90% 수준에 육박하는 것을 확인할 수 있었다.

​