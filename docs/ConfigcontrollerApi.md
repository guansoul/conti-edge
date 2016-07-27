# ContiEdge.ConfigcontrollerApi

All URIs are relative to *https://54.223.64.159:8083/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getVehicleVoltageInfoUsingGET**](ConfigcontrollerApi.md#getVehicleVoltageInfoUsingGET) | **GET** /api/getVehicleVoltageThreshold | getVehicleVoltageInfo


<a name="getVehicleVoltageInfoUsingGET"></a>
# **getVehicleVoltageInfoUsingGET**
> VehicleVoltageThresholdDTO getVehicleVoltageInfoUsingGET(vehicleGuid)

getVehicleVoltageInfo

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.ConfigcontrollerApi();

var vehicleGuid = "vehicleGuid_example"; // String | vehicleGuid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVehicleVoltageInfoUsingGET(vehicleGuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vehicleGuid** | **String**| vehicleGuid | 

### Return type

[**VehicleVoltageThresholdDTO**](VehicleVoltageThresholdDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

