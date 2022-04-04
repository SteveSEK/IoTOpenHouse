---
title: "IoT 디바이스 인증서 업데이트"
categories:
  - cat m1
tags:
  - 인증서 만료
  - root ca
  - azure
  - aws
---


### IoT 디바이스의 인증서 만료 문제

##### Root CA 인증서 만료 문제  
>Expiring root certificates will cause devices like smart TVs and refrigerators to fail in the next few years, security researcher Scott Helme has warned.   
>Secure internet connections depend on the server presenting a valid certificate to the client, the most common problem being that the server certificate is out of date, easily fixed by the server admin.
>In order to validate the certificate, though, the client must have a trusted root certificate from the issuing authority, and this, says Helme, is a problem for devices that never get updated.    
> <cite><a href="https://www.theregister.com/2020/06/10/iot_trouble_root_certificates_expire/">An Internet of Trouble lies ahead as root certificates begin to expire en masse, warns security researcher</a></cite>   
>

##### 디바이스 인증서 로테이션
위에 언급된 Root CA 인증서 만료 문제 외에도, IoT 디바이스의 인증서를 업데이트해야 하는 상항도 발생할 수 있다.


### AWS IoT Deice Defender : 인증서 만료 감지
AWS IoT Core의 AWS IoT Device Defender에서는 계정 및 디바이스와 관련된 설정 및 정책에서 보안 조치가 구현되어 있는지 확인하고 있다. 이 기능 중에는 CA 및 디바이스의 인증서에 대한 해지 여부, 인증서 만료 여부, 활성화 상태, 손상 상태 등을 검사하고, 감지하는 기능을 제공하고 있다. 아래는 인증서 만료에 대한 기능에 대한 설명이다.

>A CA certificate is expiring within 30 days or has expired.   
>This check appears as CA_CERTIFICATE_EXPIRING_CHECK in the CLI and API.   
> <cite><a href="https://docs.aws.amazon.com/iot/latest/developerguide/audit-chk-ca-cert-approaching-expiration.html
">CA certificate expiring</a></cite>   

>A device certificate is expiring within 30 days or has expired.   
>This check appears as DEVICE_CERTIFICATE_EXPIRING_CHECK in the CLI and API.   
> <cite><a href="https://docs.aws.amazon.com/iot/latest/developerguide/audit-chk-device-cert-approaching-expiration.html
">Device certificate expiring</a></cite>   


### Azure Sphere Security Service : 인증서 관리를 포함한 토탈 IoT 보안 솔루션 제공
마이크로소프트는 인증서 유효성 검사는 물론이고, [Azure Sphere](https://docs.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere)라고 하는 IoT 토탈 보안 솔루션도 제공하고 있다. 이를 통해서, 인증서 업데이트를 포함한 모든 보안 서비스들을 제공받을 수 있다.
>Every Azure Sphere device relies on the Trusted Root store, which is part of the Azure Sphere OS. The Trusted Root store contains a list of root certificates that are used to validate the identity of the Azure Sphere Security Service when the device connects for device authentication and attestation (DAA), over-the-air (OTA) update, or error reporting. These certificates are provided with the OS.   
>When daily attestation succeeds, the device receives two certificates: an update certificate and a customer certificate. The update certificate enables the device to connect to the Azure Sphere Update Service to get software updates and to upload error reports; it is not accessible to applications or through the command line. The customer certificate, sometimes called the DAA certificate, can be used by applications to connect to third-party services such wolfSSL that use transport layer security (TLS). This certificate is valid for 24 hours. Applications can retrieve it programmatically by calling the DeviceAuth_GetCertificatePath function.   
>Devices that connect to Azure-based services such as Azure IoT Hub, Azure IoT Central, and Azure IoT Edge must present their Azure Sphere tenant CA certificate to authenticate their Azure Sphere tenant. The azsphere ca-certificate download command in the CLI returns the tenant CA certificate for such uses.    
> <cite><a href="https://docs.microsoft.com/en-us/azure-sphere/deployment/certificate-use-with-azure-sphere
">Certificate use with Azure Sphere</a></cite>   


### 해결책
IoT 디바이스의 인증서 만료 문제대 대한 가장 간단한 방법은 인증서 만료 기간을 수십년 이상으로 설정하는 방법이 있고, 클라우드와의 C2D 메시지 등을 이용해서, 인증서 페이로드 데이터를 디바이스에게 전송하는 방법도 있다.

>"...There is no hard-rule to set the maximum expiration of your self-signed X509 certificate deployed to Azure IoT Hub. Nevertheless even if the certificate is long-lived, you need to account that it can expire and there needs to be a way to update the certificate on the device..."    
> "...I have created a test root CA cert with a validity of 100 years and uploaded it to IoTHub..."    
> <cite><a href="https://docs.microsoft.com/en-us/answers/questions/438891/maximum-root-ca-expiration.html
">Maximum ROOT_CA Expiration</a></cite>   


당연한 결론이겠지만, IoT 디바이스의 인증서 관리에 대한 가장 좋은 방법은 디바이스의 주기적인 업데이트를 지원하는 일인 것 같다.
>The best solution to this issue is ‘Updates’. There must be updated one way or the other. Being a software/device builder who works around public key infrastructure for secure communication, you need to consider the fact that not updating your Root CA will have a huge impact on your service. Even if you are working with legacy clients, your choice of CA will have a vast influence on them.    
> <cite><a href="https://www.ssl2buy.com/wiki/expired-root-certificates-main-reason-to-weaken-iot-devices
">Expired Root Certificates: The Main Reason to Weaken IoT Devices</a></cite>   
