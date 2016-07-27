# ContiEdge.ShopcontrollerApi

All URIs are relative to *https://54.223.64.159:8083/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBookScheduleFullUsingGET**](ShopcontrollerApi.md#getBookScheduleFullUsingGET) | **GET** /api/availableTimeFull | getBookScheduleFull
[**getBookScheduleUsingGET**](ShopcontrollerApi.md#getBookScheduleUsingGET) | **GET** /api/availableTime | getBookSchedule
[**recommandationShopUsingGET**](ShopcontrollerApi.md#recommandationShopUsingGET) | **GET** /api/recommandationShop | recommandationShop
[**shopDetailUsingGET**](ShopcontrollerApi.md#shopDetailUsingGET) | **GET** /api/shopDetail | shopDetail
[**shopListUsingGET**](ShopcontrollerApi.md#shopListUsingGET) | **GET** /api/shopList | shopList


<a name="getBookScheduleFullUsingGET"></a>
# **getBookScheduleFullUsingGET**
> AvailableDateAndTimeDTO getBookScheduleFullUsingGET(shopId)

getBookScheduleFull

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.ShopcontrollerApi();

var shopId = 789; // Integer | shopId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBookScheduleFullUsingGET(shopId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shopId** | **Integer**| shopId | 

### Return type

[**AvailableDateAndTimeDTO**](AvailableDateAndTimeDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBookScheduleUsingGET"></a>
# **getBookScheduleUsingGET**
> AvailableTimeDTO getBookScheduleUsingGET(shopId)

getBookSchedule

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.ShopcontrollerApi();

var shopId = 789; // Integer | shopId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBookScheduleUsingGET(shopId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shopId** | **Integer**| shopId | 

### Return type

[**AvailableTimeDTO**](AvailableTimeDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="recommandationShopUsingGET"></a>
# **recommandationShopUsingGET**
> ShopDetailDTO recommandationShopUsingGET(vehicleGuid, opts)

recommandationShop

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.ShopcontrollerApi();

var vehicleGuid = "vehicleGuid_example"; // String | vehicleGuid

var opts = { 
  'cityId': 789, // Integer | cityId
  'lat': 789, // Integer | lat
  'lon': 789 // Integer | lon
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.recommandationShopUsingGET(vehicleGuid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vehicleGuid** | **String**| vehicleGuid | 
 **cityId** | **Integer**| cityId | [optional] 
 **lat** | **Integer**| lat | [optional] 
 **lon** | **Integer**| lon | [optional] 

### Return type

[**ShopDetailDTO**](ShopDetailDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="shopDetailUsingGET"></a>
# **shopDetailUsingGET**
> ShopDetailDTO shopDetailUsingGET(shopId, opts)

shopDetail

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.ShopcontrollerApi();

var shopId = 789; // Integer | shopId

var opts = { 
  'lat': 789, // Integer | lat
  'lon': 789 // Integer | lon
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.shopDetailUsingGET(shopId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shopId** | **Integer**| shopId | 
 **lat** | **Integer**| lat | [optional] 
 **lon** | **Integer**| lon | [optional] 

### Return type

[**ShopDetailDTO**](ShopDetailDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="shopListUsingGET"></a>
# **shopListUsingGET**
> ShopListDTO shopListUsingGET(opts)

shopList

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.ShopcontrollerApi();

var opts = { 
  'vehicleGuid': "vehicleGuid_example", // String | vehicleGuid
  'cityId': 789, // Integer | cityId
  'lat': 789, // Integer | lat
  'lon': 789 // Integer | lon
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.shopListUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vehicleGuid** | **String**| vehicleGuid | [optional] 
 **cityId** | **Integer**| cityId | [optional] 
 **lat** | **Integer**| lat | [optional] 
 **lon** | **Integer**| lon | [optional] 

### Return type

[**ShopListDTO**](ShopListDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

