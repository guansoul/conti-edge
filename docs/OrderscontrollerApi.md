# ContiEdge.OrderscontrollerApi

All URIs are relative to *https://54.223.64.159:8083/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelOrderUsingPOST**](OrderscontrollerApi.md#cancelOrderUsingPOST) | **POST** /api/cancelOrder | cancelOrder
[**createOrderUsingPOST**](OrderscontrollerApi.md#createOrderUsingPOST) | **POST** /api/order | createOrder
[**getOrderHistoryListUsingGET**](OrderscontrollerApi.md#getOrderHistoryListUsingGET) | **GET** /api/orderHistory | getOrderHistoryList
[**getOrderRemindingUsingGET**](OrderscontrollerApi.md#getOrderRemindingUsingGET) | **GET** /api/orderReminding | getOrderReminding
[**orderCommentUsingPOST**](OrderscontrollerApi.md#orderCommentUsingPOST) | **POST** /api/orderComment | orderComment
[**orderDetailUsingGET**](OrderscontrollerApi.md#orderDetailUsingGET) | **GET** /api/orderDetail | orderDetail


<a name="cancelOrderUsingPOST"></a>
# **cancelOrderUsingPOST**
> BaseResult cancelOrderUsingPOST(orderNo)

cancelOrder

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.OrderscontrollerApi();

var orderNo = new ContiEdge.OrderNoAndTimeDTO(); // OrderNoAndTimeDTO | orderNo


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelOrderUsingPOST(orderNo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderNo** | [**OrderNoAndTimeDTO**](OrderNoAndTimeDTO.md)| orderNo | 

### Return type

[**BaseResult**](BaseResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createOrderUsingPOST"></a>
# **createOrderUsingPOST**
> OrderDetailDTO createOrderUsingPOST(body)

createOrder

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.OrderscontrollerApi();

var body = new ContiEdge.OrderRequestDTO(); // OrderRequestDTO | body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createOrderUsingPOST(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderRequestDTO**](OrderRequestDTO.md)| body | 

### Return type

[**OrderDetailDTO**](OrderDetailDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrderHistoryListUsingGET"></a>
# **getOrderHistoryListUsingGET**
> OrderListDTO getOrderHistoryListUsingGET()

getOrderHistoryList

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.OrderscontrollerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrderHistoryListUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**OrderListDTO**](OrderListDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrderRemindingUsingGET"></a>
# **getOrderRemindingUsingGET**
> OrderRemindingDTO getOrderRemindingUsingGET(vehicleGuid)

getOrderReminding

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.OrderscontrollerApi();

var vehicleGuid = "vehicleGuid_example"; // String | vehicleGuid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrderRemindingUsingGET(vehicleGuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vehicleGuid** | **String**| vehicleGuid | 

### Return type

[**OrderRemindingDTO**](OrderRemindingDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="orderCommentUsingPOST"></a>
# **orderCommentUsingPOST**
> BaseResult orderCommentUsingPOST(body)

orderComment

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.OrderscontrollerApi();

var body = new ContiEdge.OrderCommentRequestDTO(); // OrderCommentRequestDTO | body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderCommentUsingPOST(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderCommentRequestDTO**](OrderCommentRequestDTO.md)| body | 

### Return type

[**BaseResult**](BaseResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="orderDetailUsingGET"></a>
# **orderDetailUsingGET**
> OrderDetailDTO orderDetailUsingGET(orderNo)

orderDetail

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.OrderscontrollerApi();

var orderNo = "orderNo_example"; // String | orderNo


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderDetailUsingGET(orderNo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderNo** | **String**| orderNo | 

### Return type

[**OrderDetailDTO**](OrderDetailDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

