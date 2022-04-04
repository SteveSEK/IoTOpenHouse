---
title: "Cat M1 HTTP 예제"
categories:
  - cat m1
tags:
  - 우리넷
  - 외장형 모뎀
  - http
---


### Cat M1 HTTP 예제


``` ruby
AT*WHTTP=1,GET,reqbin.com/echo
*WHTTP:HTTPS,GET,reqbin.com/echo,0,,,,,0,0,0,10

OK
AT*WHTTP=3
OK
*WHTTPR:START
<html><head><title>ReqBin Echo</title><meta name="description" content="ReqBin Echo Interface"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="shortcut icon" href="/static/favicon.ico"><style>body {font-size: 1.5rem;} l
i {margin: 0.3rem;} </style></head><body> <h1>ReqBin Echo</h1> <p>Simple echo interface for HTTP methods.</p> <ul> <li>https://reqbin.com/echo/get/json</li> <li>https://reqbin.com/echo/post/json</li> <li>https://reqbin.com/echo/head/json</li> <li>https://
reqbin.com/echo/get/xml</li> <li>https://reqbin.com/echo/post/xml</li> <li>https://reqbin.com/echo/post/form</li> </ul></body></html>
*WHTTPR:COMPLETED



AT*WHTTP=1,POST,reqbin.com/echo/post/json
*WHTTP:HTTPS,POST,reqbin.com/echo/post/json,0,,,,,0,0,0,10

OK
AT*WHTTP=3
OK
*WHTTPR:START
{"success":"true"}
*WHTTPR:COMPLETED



AT*WHTTP=1,POST,www.google.com
*WHTTP:HTTPS,POST,www.google.com,0,,,,,0,0,0,10

OK
AT*WHTTP=3
OK
*WHTTPR:START
<!DOCTYPE html>
<html lang=en>
  <meta charset=utf-8>
  <meta name=viewport content="initial-scale=1, minimum-scale=1, width=device-width">
  <title>Error 411 (Length Required)!!1</title>
  <style>
    *{margin:0;padding:0}html,code{font:15px/22px arial,sans-serif}html{background:#fff;color:#222;padding:15px}body{margin:7% auto 0;max-width:390px;min-height:180px;padding:30px 0 15px}* > body{background:url(//www.google.com/images/errors/robot.png) 10
0% 5px no-repeat;padding-right:205px}p{margin:11px 0 22px;overflow:hidden}ins{color:#777;text-decoration:none}a img{border:0}@media screen and (max-width:772px){body{background:none;margin-top:0;max-width:none;padding-right:0}}#logo{background:url(//www.g
oogle.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png) no-repeat;margin-left:-5px}@media only screen and (min-resolution:192dpi){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat 0
% 0%/100% 100%;-moz-border-image:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) 0}}@media only screen and (-webkit-min-device-pixel-ratio:2){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_
color_150x54dp.png) no-repeat;-webkit-background-size:100% 100%}}#logo{display:inline-block;height:54px;width:150px}
  </style>
  <a href=//www.google.com/><span id=logo aria-label=Google></span></a>
  <p><b>411.</b> <ins>That’s an error.</ins>
  <p>POST requests require a <code>Content-length</code> header.  <ins>That’s all we know.</ins>
*WHTTPR:COMPLETED
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/woorinet-http-example.jpg){: .align-center}

