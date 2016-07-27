# ContiEdge.UsercontrollerApi

All URIs are relative to *https://54.223.64.159:8083/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCodeForUpdatePhoneNumberUsingGET**](UsercontrollerApi.md#getCodeForUpdatePhoneNumberUsingGET) | **GET** /api/getCodeForUpdatePhoneNumber | getCodeForUpdatePhoneNumber
[**getCodeUsingGET**](UsercontrollerApi.md#getCodeUsingGET) | **GET** /api/getCode | getCode
[**needCaptchaUsingGET**](UsercontrollerApi.md#needCaptchaUsingGET) | **GET** /api/needCaptcha | needCaptcha
[**refreshCaptchaUsingGET**](UsercontrollerApi.md#refreshCaptchaUsingGET) | **GET** /api/refreshCaptcha | refreshCaptcha
[**updateDeviceTokenUsingGET**](UsercontrollerApi.md#updateDeviceTokenUsingGET) | **GET** /api/updateDeviceToken | updateDeviceToken
[**updatePhoneNumberUsingPOST**](UsercontrollerApi.md#updatePhoneNumberUsingPOST) | **POST** /api/updatePhoneNumber | updatePhoneNumber
[**uploadAvatarUsingPOST**](UsercontrollerApi.md#uploadAvatarUsingPOST) | **POST** /api/uploadAvatar | uploadAvatar
[**userInfoUsingGET**](UsercontrollerApi.md#userInfoUsingGET) | **GET** /api/userInfo | userInfo
[**userInfoUsingPOST**](UsercontrollerApi.md#userInfoUsingPOST) | **POST** /api/userInfo | userInfo


<a name="getCodeForUpdatePhoneNumberUsingGET"></a>
# **getCodeForUpdatePhoneNumberUsingGET**
> BaseResult getCodeForUpdatePhoneNumberUsingGET(phoneNo)

getCodeForUpdatePhoneNumber

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.UsercontrollerApi();

var phoneNo = "phoneNo_example"; // String | phoneNo


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCodeForUpdatePhoneNumberUsingGET(phoneNo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneNo** | **String**| phoneNo | 

### Return type

[**BaseResult**](BaseResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getCodeUsingGET"></a>
# **getCodeUsingGET**
> BaseResult getCodeUsingGET(phoneNo, opts)

getCode

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.UsercontrollerApi();

var phoneNo = "phoneNo_example"; // String | phoneNo

var opts = { 
  'captcha': "captcha_example" // String | captcha
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCodeUsingGET(phoneNo, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneNo** | **String**| phoneNo | 
 **captcha** | **String**| captcha | [optional] 

### Return type

[**BaseResult**](BaseResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="needCaptchaUsingGET"></a>
# **needCaptchaUsingGET**
> BaseResult needCaptchaUsingGET()

needCaptcha

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.UsercontrollerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.needCaptchaUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BaseResult**](BaseResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="refreshCaptchaUsingGET"></a>
# **refreshCaptchaUsingGET**
> refreshCaptchaUsingGET()

refreshCaptcha

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.UsercontrollerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.refreshCaptchaUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateDeviceTokenUsingGET"></a>
# **updateDeviceTokenUsingGET**
> BaseResult updateDeviceTokenUsingGET(token)

updateDeviceToken

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.UsercontrollerApi();

var token = "token_example"; // String | token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDeviceTokenUsingGET(token, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| token | 

### Return type

[**BaseResult**](BaseResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatePhoneNumberUsingPOST"></a>
# **updatePhoneNumberUsingPOST**
> BaseResult updatePhoneNumberUsingPOST(stringDto)

updatePhoneNumber

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.UsercontrollerApi();

var stringDto = new ContiEdge.SingleStringRequestDTO(); // SingleStringRequestDTO | stringDto


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePhoneNumberUsingPOST(stringDto, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stringDto** | [**SingleStringRequestDTO**](SingleStringRequestDTO.md)| stringDto | 

### Return type

[**BaseResult**](BaseResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="uploadAvatarUsingPOST"></a>
# **uploadAvatarUsingPOST**
> UploadAvatarDTO uploadAvatarUsingPOST(body)

uploadAvatar

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.UsercontrollerApi();

var body = new ContiEdge.SingleStringRequestDTO(); // SingleStringRequestDTO | body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadAvatarUsingPOST(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SingleStringRequestDTO**](SingleStringRequestDTO.md)| body | 

### Return type

[**UploadAvatarDTO**](UploadAvatarDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="userInfoUsingGET"></a>
# **userInfoUsingGET**
> UserInfoDTO userInfoUsingGET()

userInfo

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.UsercontrollerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userInfoUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserInfoDTO**](UserInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userInfoUsingPOST"></a>
# **userInfoUsingPOST**
> BaseResult userInfoUsingPOST(body)

userInfo

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.UsercontrollerApi();

var body = new ContiEdge.UserInfoRequestDTO(); // UserInfoRequestDTO | body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userInfoUsingPOST(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserInfoRequestDTO**](UserInfoRequestDTO.md)| body | 

### Return type

[**BaseResult**](BaseResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

