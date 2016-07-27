# ContiEdge.FencescontrollerApi

All URIs are relative to *https://54.223.64.159:8083/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**closeFencesUsingGET**](FencescontrollerApi.md#closeFencesUsingGET) | **GET** /api/closeFences | closeFences
[**getFencesUsingGET**](FencescontrollerApi.md#getFencesUsingGET) | **GET** /api/getFences | getFences
[**positionInfoUsingGET**](FencescontrollerApi.md#positionInfoUsingGET) | **GET** /api/positionInfo | positionInfo
[**saveFencesUsingPOST**](FencescontrollerApi.md#saveFencesUsingPOST) | **POST** /api/saveFences | saveFences


<a name="closeFencesUsingGET"></a>
# **closeFencesUsingGET**
> BaseResult closeFencesUsingGET(vehicleGuid)

closeFences

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.FencescontrollerApi();

var vehicleGuid = "vehicleGuid_example"; // String | vehicleGuid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.closeFencesUsingGET(vehicleGuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vehicleGuid** | **String**| vehicleGuid | 

### Return type

[**BaseResult**](BaseResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFencesUsingGET"></a>
# **getFencesUsingGET**
> FencesRequestDTO getFencesUsingGET(vehicleGuid)

getFences

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.FencescontrollerApi();

var vehicleGuid = "vehicleGuid_example"; // String | vehicleGuid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFencesUsingGET(vehicleGuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vehicleGuid** | **String**| vehicleGuid | 

### Return type

[**FencesRequestDTO**](FencesRequestDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="positionInfoUsingGET"></a>
# **positionInfoUsingGET**
> VehiclePositionDTO positionInfoUsingGET(vehicleGuid)

positionInfo

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.FencescontrollerApi();

var vehicleGuid = "vehicleGuid_example"; // String | vehicleGuid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.positionInfoUsingGET(vehicleGuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vehicleGuid** | **String**| vehicleGuid | 

### Return type

[**VehiclePositionDTO**](VehiclePositionDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveFencesUsingPOST"></a>
# **saveFencesUsingPOST**
> BaseResult saveFencesUsingPOST(body)

saveFences

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.FencescontrollerApi();

var body = new ContiEdge.FencesRequestDTO(); // FencesRequestDTO | body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveFencesUsingPOST(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FencesRequestDTO**](FencesRequestDTO.md)| body | 

### Return type

[**BaseResult**](BaseResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

