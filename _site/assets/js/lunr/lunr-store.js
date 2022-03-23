var store = [{
        "title": "Categories and Tags",
        "excerpt":"카테고리와 태그 모음 …………………………………………………………………………………………………………  ","categories": ["lora","cat m1","5g","misc"],
        "tags": ["모듈","인증","GPS","외장형 모뎀","Qualcomm"],
        "url": "/lora/cat%20m1/5g/misc/many-categories-and-tags/",
        "teaser": null
      },{
        "title": "Cat.M1 GPS 사용 예제",
        "excerpt":"LTE Cat M1용의 칩셋과 모듈들은 대부분 GPS/GLONASS 기능을 지원하고 있다.   Qualcomm MDM9206     Location : Satellite Systems Support: Beidou, Galileo, GLONASS, GPS   MDM9206    Altair ALT1250     Assisted GPS and GLONASS navigation systems are supported  ALT1250    우리넷 모뎀 GPS Example  // Serial 통신 확인 AT OK  // S/W Version 확인 (2019년 12월 1일 이후 버전인지 확인) AT$$SWVER $$SWVER: S430XX.020.01, Mar 24 2021 10:20:01  OK  // GPS 기능 출력 인터페이스 설정 AT$$GPSCONF=1,0,1000,252,1,6,0,0 $$GPSCONF:1,0,1000,252,1,6,0,0  OK  // GPS 기능 활성화 AT$$GPS OK $$GPS,,,,,,,,V,2,255,255,-28,0,0-0,0-0,0-0,0-0 $$GPS,,,,,,,,V,2,255,255,-28,0,0-0,0-0,0-0,0-0 $$GPS,,,,,,,,V,2,255,255,-49,16,10,-44,194-42,193-42,12-42 $$GPS,,,,,,,,V,2,255,255,-49,16,10,-44,194-42,193-42,12-42 $$GPS,,,,,,,,V,2,255,255,-49,16,10,-44,194-42,193-42,12-42 .............................. ..............................  //GPS 기능 비활성화 AT$$GPSSTOP OK   유블럭스 GNSS   이에 반해, 유블럭스 같은 모듈은 Qualcomm MDM920x를 사용하고 있지만, 별도의 GNSS 모듈을 사용하도록 가이드하고 있다.   ","categories": ["cat m1"],
        "tags": ["GPS","우리넷","유블럭스"],
        "url": "/cat%20m1/Cat-M1-GPS-example/",
        "teaser": null
      },{
        "title": "Cat.M1 사진 전송",
        "excerpt":"LTE Cat.M1의 경우 Sigfox, LoRa, NB-IoT 보다 최대 전송 속도가 비교적 높기 때문에 실시간 트래킹 서비스 또는 사진 전송와 같은 중용량 및 실시간 응용에 사용하기 적합하다.  아래 예제에서는 우리넷 의 Cat.M1 외장형 모뎀을 이용하여 사진 전송이 가능한지 확인하고 속도를 검증해보도록 하겠다.   ​  하드웨어 설정 - ​WD-N400S 외장형 모뎀 설정   우리넷의 Cat.M1 외장형 모뎀을 사용하기 위한 방법은 두 가지 방법이 있다.     UART 인터페이스를 통해 AT 커맨드로 외장형 모뎀을 제어하는 방법   RNDIS(Remote NDIS) 모드로 사용하는 방법   단, AT 커맨드를 이용하는 경우 UART 인터페이스(Baud Rate: 115200)를 사용하므로 Cat.M1 최대 전송 속도인 375kbps를 사용할 수 없으며, RNDIS 모드를 사용하면 Cat.M1 최대 전송 속도를 사용할 수 있다. 외장형 모뎀을 RNDIS 모드로 사용하기 위해서는 AT 커맨드로 ‘RNDISMODE=1’을 설정 후 재시작해야 한다.   AT$$SWVER $$SWVER: S130XX.037, Jul 24 2018 18:37:48  OK AT*RNDISMODE=1 OK   하드웨어 설정 - 라즈베리파이와 카메라  Cat M1 외장형 모뎀 설정이 끝나면, 아래와 같이 라즈베리파이, 카메라, Cat M1 외장형 모뎀 등을 연결한다.    동작 동영상   사진을 찍고 전송하는 동작 영상은 Youtube 동영상을 참고하면 된다.   LTE Cat.M1 속도   총 50번 테스트를 진행하였으며, 평균 데이터 전송률은 298.37bps 이었습니다. 통신사에서 공표한 Cat.M1 최고 전송 속도의 80~90% 수준에 육박하는 것을 확인할 수 있었다.   ​  ","categories": ["cat m1"],
        "tags": ["라즈베리파이","우리넷","사진","RNDIS","USB"],
        "url": "/cat%20m1/Cat-M1-send-photo/",
        "teaser": null
      },{
        "title": "우리넷 모뎀 FW 업그레이드",
        "excerpt":"펌웨어 버전 확인 방법  AT Command 사용포트로 (UART1) 연결하여 다음과 같은 명령어를 실행하면 됩니다. AT$$SWVER   펌웨어 다운로드     S430.XX.020.01_TD3S.zip: Download   S430.XX.023.01_TD3S.zip: Download   환경설정     Windows 10 (64-bit)   Qualcomm Driver:  Download   펌웨어 업데이트     Qualcomm Driver 설치 후, DP/DM 연결(UART연결이 아닌 USB RNDIS 연결, Interface B/D 사용시 Modem_USB Port 연결)   펌웨어 프로그램 다운로드 및 압축해제   WD-N400S 연결된 상태에서 exe 파일 (S430.XX.XXX.01_TD3S.exe) 실행   펌웨어 업데이트 후, 버전 확인   ","categories": ["cat m1"],
        "tags": ["우리넷"],
        "url": "/cat%20m1/woorinet-modem-fw-upgrade/",
        "teaser": null
      },{
        "title": "RNDIS",
        "excerpt":"RNDIS      The Remote Network Driver Interface Specification (RNDIS) is a Microsoft proprietary protocol used mostly on top of USB.[1] It provides a virtual Ethernet link to most versions of the Windows, Linux, and FreeBSD operating systems. Multiple revisions of a partial RNDIS specification are available from Microsoft, but Windows implementations have been observed to issue requests not included in that specification, and to have undocumented constraints.[2]   The protocol is tightly coupled to Microsoft’s programming interfaces and models, most notably the Network Driver Interface Specification (NDIS), which are alien to operating systems other than Windows. This complicates implementing RNDIS on non-Microsoft operating systems,[citation needed] but Linux,[3] FreeBSD,[4] NetBSD[5] and OpenBSD[6] implement RNDIS natively.   RNDIS Wikipedia    Windows RNDIS Diagram      Microsoft Overview of Remote NDIS (RNDIS)    우리넷 Cat M1 모듈 RNDIS 설정 방법   AT$$SWVER $$SWVER: S130XX.037, Jul 24 2018 18:37:48  OK AT*RNDISMODE=1 OK   Windows에 RNDIS 추가된 모습     Windows RNDIS 통신 테스트     ","categories": ["cat m1"],
        "tags": ["라즈베리파이","우리넷","RNDIS","USB"],
        "url": "/cat%20m1/woorinet-modem-rndis/",
        "teaser": null
      },{
        "title": "BG96 개통 로그",
        "excerpt":"BG96 개통 로그   RDY  +CFUN: 1  APP RDY  +CPIN: READY  +QUSIM: 1  +QIND: SMS DONE  +CPIN: READY  +QUSIM: 1  +QIND: SMS DONE AT+QCDS +QCDS: \"SRV\",\"CAT-M\",45012,2500,13B***,R13,3,368,2058,-74,-99,-7,3,128,0,0,0  OK AT+CNUM +CNUM: ,\"0122750****\",129  OK   ","categories": ["cat m1"],
        "tags": ["BG96","개통 로그"],
        "url": "/cat%20m1/bg96-open-sim-log/",
        "teaser": null
      },{
        "title": "PDP Conext 초기화",
        "excerpt":"PDP Context  PDP(Packet Data Protocol)는 GPRS(General Packet Radio Service) 망과 통신을 위해 외부 패킷 데이터망이 사용하는 네트워크 프로토콜이다.  IP가 GPRS에서 지원하는 PDP의 한 예이다.  단말과 네트워크 사이의 패킷 데이타 전송이 가능하게 하는 연결이 이루어지는데, 여기에 사용되는 정보를 PDP Context라고 한다. 즉, 외부 Packet Data Network로의 연결을 위한 여러가지 종류 정보의 집합 이라고 할수 있다.   보통 PDP를 Activation 하기 전에, 설정된 PDP 정보를 확인하거나 통신 사업자가 제공하는 정보를 입력해야 한다.   SK 텔레콤 Cat M1 PDP 정보   AT+CGDCONT? +CGDCONT: 1,\"IPV4V6\",\"\",\"0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\",0,0,0,0 +CGDCONT: 2,\"IPV4V6\",\"lte-internet.sktelecom.com\",\"0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\",0,0,0,0   PDP Context 초기화 (SK 텔레콤 Cat M1)   유심이나 모듈이 개통 이력이 있는 경우나 초기 개통에서 문제가 발생하는 경우에, 아래 처럼 PDP Context 초기화하고 재부팅을 하면 정상 개통이 이루어질 수 있다.  AT+CGDCONT=1,”IPV4V6” Ok  AT+CFUN=1,1 OK   Null APN   일부 글로벌심의 경우에 설정해야 하는 APN이 정확하지 않다면, APN을 Null로 설정하고 재부팅을 하면 정상 동작하는 경우도 있다. (Hologram SIM &amp; BG96)  AT+CGDCONT=1,”IP”, Ok  AT+CFUN=1,1 OK   ","categories": ["cat m1"],
        "tags": ["pdp context","개통 초기화","글로벌심"],
        "url": "/cat%20m1/pdp-context/",
        "teaser": null
      }]
