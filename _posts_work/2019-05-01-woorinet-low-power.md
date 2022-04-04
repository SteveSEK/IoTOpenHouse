---
title: "우리넷 Cat M1 모듈 저전력 정보"
categories:
  - cat m1
tags:
  - 우리넷 
  - 저전력
---


### 우리넷 모듈 소모 전류 정보 

| 동작 상태                                | 소모 전류 |
| -----                                    | -------- |
| 정상적 데이터 전송                        | 80 mA    |
| 데이터 전송없이 Idle 상태                 | 2 m A    |
| AT+CFUN=0 (LTE Detach & Low Power mode)  | 0.8 mA   |




### 유블럭스 GNSS

이미지   
![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/iotlogo.png)
![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/iotlogo.png){: .align-center}

### 펌웨어 버전 확인 방법
AT Command '사용 포트로 (UART1) 연결하여 다음과 같은 명령어를 실행하면 됩니다.   
**AT$$SWVER**

Scaffolding out a site with the `jekyll new` command requires you to modify a few files that it creates.
Edit `_config.yml`. Then:



### 펌웨어 다운로드
* S430.XX.020.01_TD3S.zip: [Download](https://www.dropbox.com/s/ge63n741i3gvjkc/S430XX.020.01_TD3S.zip?dl=0, "020 Download")
* S430.XX.023.01_TD3S.zip: [Download](https://www.dropbox.com/s/30q0nd04jqup95x/S430XX.023.01_TD3S.zip?dl=0, "023 Downloda")

### 펌웨어 업데이트
1. Qualcomm Driver 설치 후, DP/DM 연결(UART연결이 아닌 USB RNDIS 연결, Interface B/D 사용시 Modem_USB Port 연결)
2. 펌웨어 프로그램 다운로드 및 압축해제

### 인용문

>The Remote Network Driver Interface Specification (RNDIS) is a Microsoft proprietary protocol used mostly on top of USB.[1] It provides a virtual Ethernet link to most versions of the Windows, Linux, and FreeBSD operating systems. Multiple revisions of a partial RNDIS specification are available from Microsoft, but Windows implementations have been observed to issue requests not included in that specification, and to have undocumented constraints.[2]   
>>The Remote Network Driver Interface Specification (RNDIS) is a Microsoft proprietary protocol used mostly on top of USB.
>>>The Remote Network Driver Interface Specification (RNDIS) is a Microsoft proprietary protocol used mostly on top of USB.
> <cite><a href="https://en.wikipedia.org/wiki/RNDIS">RNDIS Wikipedia</a></cite>   

## Tables

| Employee         | Salary |                                                              |
| --------         | ------ | ------------------------------------------------------------ |
| [John Doe](#)    | $1     | Because that's all Steve Jobs needed for a salary.           |
| [Jane Doe](#)    | $100K  | For all the blogging she does.                               |

| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|-----------------------------|
| cell1   | cell2   | cell3   |

### Button
[Default Button](#){: .btn}
[Primary Button](#){: .btn .btn--primary}
[Success Button](#){: .btn .btn--success}
[Warning Button](#){: .btn .btn--warning}
[Danger Button](#){: .btn .btn--danger}
[Info Button](#){: .btn .btn--info}
[Inverse Button](#){: .btn .btn--inverse}
[Light Outline Button](#){: .btn .btn--light-outline}

### Notices

**Watch out!** This paragraph of text has been [emphasized](#button) with the `{: .notice}` class.
{: .notice}
**Watch out!** This paragraph of text has been [emphasized](#tables) with the `{: .notice--primary}` class.
{: .notice--primary}
**Watch out!** This paragraph of text has been [emphasized](#) with the `{: .notice--info}` class.
{: .notice--info}
**Watch out!** This paragraph of text has been [emphasized](#) with the `{: .notice--warning}` class.
{: .notice--warning}
**Watch out!** This paragraph of text has been [emphasized](#) with the `{: .notice--success}` class.
{: .notice--success}
**Watch out!** This paragraph of text has been [emphasized](#) with the `{: .notice--danger}` class.
{: .notice--danger}

--- 
--- 
--- 

## Unordered Lists (Nested)

  * List item one 
      * List item one 
          * List item one
          * List item two


``` ruby
// Serial 통신 확인
AT
OK
```