# ContiEdge.PromotioncontrollerApi

All URIs are relative to *https://54.223.64.159:8083/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPromotionUsingGET**](PromotioncontrollerApi.md#getPromotionUsingGET) | **GET** /api/promotion/getPromotion | getPromotion


<a name="getPromotionUsingGET"></a>
# **getPromotionUsingGET**
> PromotionDTO getPromotionUsingGET()

getPromotion

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.PromotioncontrollerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPromotionUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PromotionDTO**](PromotionDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

