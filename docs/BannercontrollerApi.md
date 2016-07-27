# ContiEdge.BannercontrollerApi

All URIs are relative to *https://54.223.64.159:8083/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBannerUsingGET**](BannercontrollerApi.md#getBannerUsingGET) | **GET** /api/banner/getBanner | getBanner
[**getLaunchAdvertisingPageUsingGET**](BannercontrollerApi.md#getLaunchAdvertisingPageUsingGET) | **GET** /api/banner/launchAdvertisingPage | getLaunchAdvertisingPage


<a name="getBannerUsingGET"></a>
# **getBannerUsingGET**
> BannerDTO getBannerUsingGET()

getBanner

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.BannercontrollerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBannerUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BannerDTO**](BannerDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getLaunchAdvertisingPageUsingGET"></a>
# **getLaunchAdvertisingPageUsingGET**
> LaunchAdvertisingPageDTO getLaunchAdvertisingPageUsingGET()

getLaunchAdvertisingPage

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.BannercontrollerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLaunchAdvertisingPageUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**LaunchAdvertisingPageDTO**](LaunchAdvertisingPageDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

