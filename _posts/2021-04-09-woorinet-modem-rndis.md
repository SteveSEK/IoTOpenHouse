---
title: "RNDIS"
categories:
  - cat m1
tags:
  - 라즈베리파이
  - 우리넷
  - RNDIS
  - USB
---


### RNDIS

>The Remote Network Driver Interface Specification (RNDIS) is a Microsoft proprietary protocol used mostly on top of USB.[1] It provides a virtual Ethernet link to most versions of the Windows, Linux, and FreeBSD operating systems. Multiple revisions of a partial RNDIS specification are available from Microsoft, but Windows implementations have been observed to issue requests not included in that specification, and to have undocumented constraints.[2]   
>The protocol is tightly coupled to Microsoft's programming interfaces and models, most notably the Network Driver Interface Specification (NDIS), which are alien to operating systems other than Windows. This complicates implementing RNDIS on non-Microsoft operating systems,[citation needed] but Linux,[3] FreeBSD,[4] NetBSD[5] and OpenBSD[6] implement RNDIS natively.   
> <cite><a href="https://en.wikipedia.org/wiki/RNDIS">RNDIS Wikipedia</a></cite>   

### Windows RNDIS Diagram 
>![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/remote-ndis-architecture.png){: .align-center}
> <cite><a href="https://docs.microsoft.com/en-us/windows-hardware/drivers/network/overview-of-remote-ndis--rndis-">Microsoft Overview of Remote NDIS (RNDIS)</a></cite>   



### 우리넷 Cat M1 모듈 RNDIS 설정 방법

``` c
AT$$SWVER
$$SWVER: S130XX.037, Jul 24 2018 18:37:48

OK
AT*RNDISMODE=1
OK
```

### Windows에 RNDIS 추가된 모습
![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/windows-rndis-test-1.jpg)


### Windows RNDIS 통신 테스트 
![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/windows-rndis-test-2.jpg)


