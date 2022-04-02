if ($request.url.indexOf('jp.livelog.nexon.com/client.all') != -1) {
    if($response.status!=200){
        $notification.post("验证通过", "", "");
        $done({status: 200, headers: $response.headers, body: ' {
    "appid": "com.nexon.mdnf",
    "tpatype": 110,
    "npsn": 17300000000389344,
    "timesync": true,
    "mid": "3F83CBA1-0C06-4F26-8AF8-ADD9F75823C1",
    "nexonsn": 34397584,
    "devicename": "iPhone13,2",
    "countryname": "KR",
    "appversion": "1.0.2",
    "currentstep": 4,
    "uuid": "FB8F74A9-15DF-41BA-93DC-9DABD7A87419",
    "sequenceno": 14,
    "version": "1.0.0",
    "carriername": "中国移动",
    "type": "Mobile_ApplicationFlow",
    "serviceid": "430011976",
    "uuid2": "00000000-0000-0000-0000-000000000000",
    "appversioncode": 100020,
    "sessionid": "N10357",
    "applocale": "ko_KR",
    "idfv": "E5708268-8D8D-44FB-B694-DD499D5BD19B",
    "ostype": "1",
    "ipaddress": "163.125.175.233",
    "osname": "iOS 15.4",
    "umk": "1:34397584",
    "adid": "00000000-0000-0000-0000-000000000000",
    "Mobile_ApplicationFlow": {
      "applicationflowtype": "onPause",
      "ostype": "I"
    },
    "createdate": "2022-04-01T19:27:39.382Z"
  }' })
    }else{
        $done({})
    }
}else{
    $done({})
}
