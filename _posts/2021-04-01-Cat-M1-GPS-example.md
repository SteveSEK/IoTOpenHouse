---
title: "Cat.M1 GPS 사용 예제"
categories:
  - cat m1
tags:
  - GPS
  - 우리넷
  - 유블럭스
---


LTE Cat M1용의 칩셋과 모듈들은 대부분 GPS/GLONASS 기능을 지원하고 있다.   


### Qualcomm MDM9206
> Location : Satellite Systems Support: Beidou, Galileo, GLONASS, GPS   
> <cite><a href="https://www.qualcomm.com/products/qualcomm-9206-lte-modem">MDM9206</a></cite>   

### Altair ALT1250
> Assisted GPS and GLONASS navigation systems are supported  
> <cite><a href="https://www.altair-semi.com/products/alt1250/">ALT1250</a></cite>   

### 우리넷 모뎀 GPS Example
``` c
// Serial 통신 확인
AT
OK

// S/W Version 확인 (2019년 12월 1일 이후 버전인지 확인)
AT$$SWVER
$$SWVER: S430XX.020.01, Mar 24 2021 10:20:01

OK

// GPS 기능 출력 인터페이스 설정
AT$$GPSCONF=1,0,1000,252,1,6,0,0
$$GPSCONF:1,0,1000,252,1,6,0,0

OK

// GPS 기능 활성화
AT$$GPS
OK
$$GPS,,,,,,,,V,2,255,255,-28,0,0-0,0-0,0-0,0-0
$$GPS,,,,,,,,V,2,255,255,-28,0,0-0,0-0,0-0,0-0
$$GPS,,,,,,,,V,2,255,255,-49,16,10,-44,194-42,193-42,12-42
$$GPS,,,,,,,,V,2,255,255,-49,16,10,-44,194-42,193-42,12-42
$$GPS,,,,,,,,V,2,255,255,-49,16,10,-44,194-42,193-42,12-42
..............................
..............................

//GPS 기능 비활성화
AT$$GPSSTOP
OK
```

### 유블럭스 GNSS

이에 반해, 유블럭스 같은 모듈은 Qualcomm MDM920x를 사용하고 있지만, 별도의 GNSS 모듈을 사용하도록 가이드하고 있다.
![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/ublox-sara-gnss.jpg){: .align-center}
