---
title: "Cellular Network Attach Problem"
categories:  
  - cat m1  
tags:
  - LTE
  - Attach  
---

## Cellular Network Attach 관련 AT Command

``` 
// Check SIM
AT+CPIN?

// Check the signal strength.
AT+CSQ

// Return the current state of the network registration : Attach/Detach
AT+CREG?

// Check what network is the device on
AT+COPS?

// Returns / scans the list of available operators.
AT+COPS=?

// Attaches/detaches from the packet domain service.
AT+CGATT=1/0

// Return the current state of packet domain service
AT+CGATT?
AT+CGATT=1/0

// PDP context parameter values for a PDP context identified by connection identifier;
AT+CGDCONT?
AT+CGDCONT=1,"IPV4V6"

// Activate/Deactivate a PDP context
AT+CGACT?

// Get the assigned IP Address
AT+CGPADDR=1

// Serial 통신 확인
AT
OK
```
