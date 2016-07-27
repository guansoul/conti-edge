# ContiEdge.DevicecontrollerApi

All URIs are relative to *https://54.223.64.159:8083/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activeDeviceUsingGET**](DevicecontrollerApi.md#activeDeviceUsingGET) | **GET** /api/activeDevice | activeDevice
[**bindDeviceUsingPOST**](DevicecontrollerApi.md#bindDeviceUsingPOST) | **POST** /api/bindDevice | bindDevice
[**bindSuccessUsingGET**](DevicecontrollerApi.md#bindSuccessUsingGET) | **GET** /api/bindSuccess | bindSuccess
[**deviceBindingCheckUsingGET**](DevicecontrollerApi.md#deviceBindingCheckUsingGET) | **GET** /api/deviceBindingCheck | deviceBindingCheck
[**getClientIdUsingGET**](DevicecontrollerApi.md#getClientIdUsingGET) | **GET** /api/getClientId | getClientId
[**unbindDeviceUsingPOST**](DevicecontrollerApi.md#unbindDeviceUsingPOST) | **POST** /api/unbindDevice | unbind device from vehicle and clear all device data except uid


<a name="activeDeviceUsingGET"></a>
# **activeDeviceUsingGET**
> activeDeviceUsingGET(imei)

activeDevice

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.DevicecontrollerApi();

var imei = "imei_example"; // String | imei


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.activeDeviceUsingGET(imei, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imei** | **String**| imei | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bindDeviceUsingPOST"></a>
# **bindDeviceUsingPOST**
> VehicleInfoDTO bindDeviceUsingPOST(deviceInfo)

bindDevice

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.DevicecontrollerApi();

var deviceInfo = new ContiEdge.DeviceInfoRequestDTO(); // DeviceInfoRequestDTO | deviceInfo


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bindDeviceUsingPOST(deviceInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceInfo** | [**DeviceInfoRequestDTO**](DeviceInfoRequestDTO.md)| deviceInfo | 

### Return type

[**VehicleInfoDTO**](VehicleInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bindSuccessUsingGET"></a>
# **bindSuccessUsingGET**
> VehicleInfoDTO bindSuccessUsingGET(imei)

bindSuccess

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.DevicecontrollerApi();

var imei = "imei_example"; // String | imei


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bindSuccessUsingGET(imei, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imei** | **String**| imei | 

### Return type

[**VehicleInfoDTO**](VehicleInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deviceBindingCheckUsingGET"></a>
# **deviceBindingCheckUsingGET**
> VehicleInfoDTO deviceBindingCheckUsingGET(imei)

deviceBindingCheck

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.DevicecontrollerApi();

var imei = "imei_example"; // String | imei


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deviceBindingCheckUsingGET(imei, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imei** | **String**| imei | 

### Return type

[**VehicleInfoDTO**](VehicleInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getClientIdUsingGET"></a>
# **getClientIdUsingGET**
> ClientIdDTO getClientIdUsingGET(deviceId)

getClientId

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.DevicecontrollerApi();

var deviceId = "deviceId_example"; // String | deviceId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getClientIdUsingGET(deviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 

### Return type

[**ClientIdDTO**](ClientIdDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="unbindDeviceUsingPOST"></a>
# **unbindDeviceUsingPOST**
> BaseResult unbindDeviceUsingPOST(opts)

unbind device from vehicle and clear all device data except uid

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.DevicecontrollerApi();

var opts = { 
  'deviceInfoRequestDTO': new ContiEdge.DeviceInfoRequestDTO() // DeviceInfoRequestDTO | vehicleGuid is required
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.unbindDeviceUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceInfoRequestDTO** | [**DeviceInfoRequestDTO**](DeviceInfoRequestDTO.md)| vehicleGuid is required | [optional] 

### Return type

[**BaseResult**](BaseResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

