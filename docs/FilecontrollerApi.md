# ContiEdge.FilecontrollerApi

All URIs are relative to *https://54.223.64.159:8083/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pullUsingDELETE**](FilecontrollerApi.md#pullUsingDELETE) | **DELETE** /api/fs/{fid} | pull
[**pullUsingGET**](FilecontrollerApi.md#pullUsingGET) | **GET** /api/fs/{fid} | pull
[**pullUsingOPTIONS**](FilecontrollerApi.md#pullUsingOPTIONS) | **OPTIONS** /api/fs/{fid} | pull
[**pullUsingPATCH**](FilecontrollerApi.md#pullUsingPATCH) | **PATCH** /api/fs/{fid} | pull
[**pullUsingPOST**](FilecontrollerApi.md#pullUsingPOST) | **POST** /api/fs/{fid} | pull
[**pullUsingPUT**](FilecontrollerApi.md#pullUsingPUT) | **PUT** /api/fs/{fid} | pull


<a name="pullUsingDELETE"></a>
# **pullUsingDELETE**
> pullUsingDELETE(fid)

pull

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.FilecontrollerApi();

var fid = "fid_example"; // String | fileID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.pullUsingDELETE(fid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fid** | **String**| fileID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="pullUsingGET"></a>
# **pullUsingGET**
> pullUsingGET(fid)

pull

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.FilecontrollerApi();

var fid = "fid_example"; // String | fileID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.pullUsingGET(fid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fid** | **String**| fileID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="pullUsingOPTIONS"></a>
# **pullUsingOPTIONS**
> pullUsingOPTIONS(fid)

pull

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.FilecontrollerApi();

var fid = "fid_example"; // String | fileID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.pullUsingOPTIONS(fid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fid** | **String**| fileID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="pullUsingPATCH"></a>
# **pullUsingPATCH**
> pullUsingPATCH(fid)

pull

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.FilecontrollerApi();

var fid = "fid_example"; // String | fileID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.pullUsingPATCH(fid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fid** | **String**| fileID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="pullUsingPOST"></a>
# **pullUsingPOST**
> pullUsingPOST(fid)

pull

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.FilecontrollerApi();

var fid = "fid_example"; // String | fileID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.pullUsingPOST(fid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fid** | **String**| fileID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="pullUsingPUT"></a>
# **pullUsingPUT**
> pullUsingPUT(fid)

pull

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.FilecontrollerApi();

var fid = "fid_example"; // String | fileID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.pullUsingPUT(fid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fid** | **String**| fileID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

