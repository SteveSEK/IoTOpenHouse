---
title: "우리넷 모뎀 FW 업그레이드"
categories:
  - cat m1
tags:
  - 우리넷
---


### 펌웨어 버전 확인 방법
AT Command 사용포트로 (UART1) 연결하여 다음과 같은 명령어를 실행하면 됩니다.
**AT$$SWVER**


### 펌웨어 다운로드
* S430.XX.020.01_TD3S.zip: [Download](https://www.dropbox.com/s/ge63n741i3gvjkc/S430XX.020.01_TD3S.zip?dl=0, "020 Download")
* S430.XX.023.01_TD3S.zip: [Download](https://www.dropbox.com/s/30q0nd04jqup95x/S430XX.023.01_TD3S.zip?dl=0, "023 Downloda")


### 환경설정
* Windows 10 (64-bit)
* Qualcomm Driver:  [Download](https://www.dropbox.com/s/37x1xx9wdbmr0r8/qud.win.1.1_installer_10052.9.zip?dl=0, "Qualcomm Driver")


### 펌웨어 업데이트
1. Qualcomm Driver 설치 후, DP/DM 연결(UART연결이 아닌 USB RNDIS 연결, Interface B/D 사용시 Modem_USB Port 연결)
2. 펌웨어 프로그램 다운로드 및 압축해제
3. WD-N400S 연결된 상태에서 exe 파일 (S430.XX.XXX.01_TD3S.exe) 실행
4. 펌웨어 업데이트 후, 버전 확인

