# ContiEdge.MaintenancecontrollerApi

All URIs are relative to *https://54.223.64.159:8083/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allBeautyServiceListUsingGET**](MaintenancecontrollerApi.md#allBeautyServiceListUsingGET) | **GET** /api/allBeautyServiceList | allBeautyServiceList
[**allTireServiceListUsingGET**](MaintenancecontrollerApi.md#allTireServiceListUsingGET) | **GET** /api/allTireServiceList | allTireServiceList
[**getAllMaitenanceListUsingGET**](MaintenancecontrollerApi.md#getAllMaitenanceListUsingGET) | **GET** /api/allMaitenanceList | getAllMaitenanceList
[**getAllOtherServiceListUsingGET**](MaintenancecontrollerApi.md#getAllOtherServiceListUsingGET) | **GET** /api/allOtherServiceList | getAllOtherServiceList
[**getAllRepairListUsingGET**](MaintenancecontrollerApi.md#getAllRepairListUsingGET) | **GET** /api/allRepairList | getAllRepairList
[**getAvailableTimeUsingGET**](MaintenancecontrollerApi.md#getAvailableTimeUsingGET) | **GET** /api/availableTime_bak | getAvailableTime
[**getMaintenanceListInWholeVehicleLifeUsingGET**](MaintenancecontrollerApi.md#getMaintenanceListInWholeVehicleLifeUsingGET) | **GET** /api/maintenanceListInWholeVehicleLife | getMaintenanceListInWholeVehicleLife
[**getRecommendedServiceUsingGET**](MaintenancecontrollerApi.md#getRecommendedServiceUsingGET) | **GET** /api/recommendedService | getRecommendedService


<a name="allBeautyServiceListUsingGET"></a>
# **allBeautyServiceListUsingGET**
> OrderDetailDTO allBeautyServiceListUsingGET(vehicleGuid)

allBeautyServiceList

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.MaintenancecontrollerApi();

var vehicleGuid = "vehicleGuid_example"; // String | vehicleGuid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.allBeautyServiceListUsingGET(vehicleGuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vehicleGuid** | **String**| vehicleGuid | 

### Return type

[**OrderDetailDTO**](OrderDetailDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allTireServiceListUsingGET"></a>
# **allTireServiceListUsingGET**
> OrderDetailDTO allTireServiceListUsingGET(vehicleGuid)

allTireServiceList

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.MaintenancecontrollerApi();

var vehicleGuid = "vehicleGuid_example"; // String | vehicleGuid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.allTireServiceListUsingGET(vehicleGuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vehicleGuid** | **String**| vehicleGuid | 

### Return type

[**OrderDetailDTO**](OrderDetailDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllMaitenanceListUsingGET"></a>
# **getAllMaitenanceListUsingGET**
> OrderDetailDTO getAllMaitenanceListUsingGET(vehicleGuid)

getAllMaitenanceList

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.MaintenancecontrollerApi();

var vehicleGuid = "vehicleGuid_example"; // String | vehicleGuid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllMaitenanceListUsingGET(vehicleGuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vehicleGuid** | **String**| vehicleGuid | 

### Return type

[**OrderDetailDTO**](OrderDetailDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllOtherServiceListUsingGET"></a>
# **getAllOtherServiceListUsingGET**
> OrderDetailDTO getAllOtherServiceListUsingGET(vehicleGuid)

getAllOtherServiceList

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.MaintenancecontrollerApi();

var vehicleGuid = "vehicleGuid_example"; // String | vehicleGuid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllOtherServiceListUsingGET(vehicleGuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vehicleGuid** | **String**| vehicleGuid | 

### Return type

[**OrderDetailDTO**](OrderDetailDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllRepairListUsingGET"></a>
# **getAllRepairListUsingGET**
> OrderDetailDTO getAllRepairListUsingGET(vehicleGuid)

getAllRepairList

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.MaintenancecontrollerApi();

var vehicleGuid = "vehicleGuid_example"; // String | vehicleGuid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllRepairListUsingGET(vehicleGuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vehicleGuid** | **String**| vehicleGuid | 

### Return type

[**OrderDetailDTO**](OrderDetailDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAvailableTimeUsingGET"></a>
# **getAvailableTimeUsingGET**
> AvailableTimeDTO getAvailableTimeUsingGET(_date)

getAvailableTime

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.MaintenancecontrollerApi();

var _date = "_date_example"; // String | date


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAvailableTimeUsingGET(_date, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_date** | **String**| date | 

### Return type

[**AvailableTimeDTO**](AvailableTimeDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMaintenanceListInWholeVehicleLifeUsingGET"></a>
# **getMaintenanceListInWholeVehicleLifeUsingGET**
> MaintenanceContainerDTO getMaintenanceListInWholeVehicleLifeUsingGET(vehicleGuid)

getMaintenanceListInWholeVehicleLife

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.MaintenancecontrollerApi();

var vehicleGuid = "vehicleGuid_example"; // String | vehicleGuid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMaintenanceListInWholeVehicleLifeUsingGET(vehicleGuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vehicleGuid** | **String**| vehicleGuid | 

### Return type

[**MaintenanceContainerDTO**](MaintenanceContainerDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRecommendedServiceUsingGET"></a>
# **getRecommendedServiceUsingGET**
> OrderDetailDTO getRecommendedServiceUsingGET(vehicleGuid)

getRecommendedService

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.MaintenancecontrollerApi();

var vehicleGuid = "vehicleGuid_example"; // String | vehicleGuid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRecommendedServiceUsingGET(vehicleGuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vehicleGuid** | **String**| vehicleGuid | 

### Return type

[**OrderDetailDTO**](OrderDetailDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

