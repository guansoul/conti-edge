# ContiEdge.AccountresourceApi

All URIs are relative to *https://54.223.64.159:8083/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateAccountUsingGET**](AccountresourceApi.md#activateAccountUsingGET) | **GET** /api/activate | activateAccount
[**changePasswordUsingPOST**](AccountresourceApi.md#changePasswordUsingPOST) | **POST** /api/account/change_password | changePassword
[**finishPasswordResetUsingPOST**](AccountresourceApi.md#finishPasswordResetUsingPOST) | **POST** /api/account/reset_password/finish | finishPasswordReset
[**getAccountUsingGET**](AccountresourceApi.md#getAccountUsingGET) | **GET** /api/account | getAccount
[**getCurrentSessionsUsingGET**](AccountresourceApi.md#getCurrentSessionsUsingGET) | **GET** /api/account/sessions | getCurrentSessions
[**invalidateSessionUsingDELETE**](AccountresourceApi.md#invalidateSessionUsingDELETE) | **DELETE** /api/account/sessions/{series} | invalidateSession
[**isAuthenticatedUsingGET**](AccountresourceApi.md#isAuthenticatedUsingGET) | **GET** /api/authenticate | isAuthenticated
[**registerAccountUsingPOST**](AccountresourceApi.md#registerAccountUsingPOST) | **POST** /api/register | registerAccount
[**requestPasswordResetUsingPOST**](AccountresourceApi.md#requestPasswordResetUsingPOST) | **POST** /api/account/reset_password/init | requestPasswordReset
[**saveAccountUsingPOST**](AccountresourceApi.md#saveAccountUsingPOST) | **POST** /api/account | saveAccount


<a name="activateAccountUsingGET"></a>
# **activateAccountUsingGET**
> &#39;String&#39; activateAccountUsingGET(key)

activateAccount

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.AccountresourceApi();

var key = "key_example"; // String | key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.activateAccountUsingGET(key, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| key | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="changePasswordUsingPOST"></a>
# **changePasswordUsingPOST**
> Object changePasswordUsingPOST(password)

changePassword

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.AccountresourceApi();

var password = "password_example"; // String | password


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.changePasswordUsingPOST(password, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **password** | **String**| password | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="finishPasswordResetUsingPOST"></a>
# **finishPasswordResetUsingPOST**
> &#39;String&#39; finishPasswordResetUsingPOST(keyAndPassword)

finishPasswordReset

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.AccountresourceApi();

var keyAndPassword = new ContiEdge.KeyAndPasswordDTO(); // KeyAndPasswordDTO | keyAndPassword


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.finishPasswordResetUsingPOST(keyAndPassword, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyAndPassword** | [**KeyAndPasswordDTO**](KeyAndPasswordDTO.md)| keyAndPassword | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAccountUsingGET"></a>
# **getAccountUsingGET**
> UserDTO getAccountUsingGET()

getAccount

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.AccountresourceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccountUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserDTO**](UserDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCurrentSessionsUsingGET"></a>
# **getCurrentSessionsUsingGET**
> [PersistentToken] getCurrentSessionsUsingGET()

getCurrentSessions

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.AccountresourceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCurrentSessionsUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[PersistentToken]**](PersistentToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="invalidateSessionUsingDELETE"></a>
# **invalidateSessionUsingDELETE**
> invalidateSessionUsingDELETE(series)

invalidateSession

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.AccountresourceApi();

var series = "series_example"; // String | series


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.invalidateSessionUsingDELETE(series, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **series** | **String**| series | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="isAuthenticatedUsingGET"></a>
# **isAuthenticatedUsingGET**
> &#39;String&#39; isAuthenticatedUsingGET()

isAuthenticated

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.AccountresourceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.isAuthenticatedUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registerAccountUsingPOST"></a>
# **registerAccountUsingPOST**
> Object registerAccountUsingPOST(userDTO)

registerAccount

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.AccountresourceApi();

var userDTO = new ContiEdge.UserDTO(); // UserDTO | userDTO


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registerAccountUsingPOST(userDTO, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userDTO** | [**UserDTO**](UserDTO.md)| userDTO | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="requestPasswordResetUsingPOST"></a>
# **requestPasswordResetUsingPOST**
> Object requestPasswordResetUsingPOST(mail)

requestPasswordReset

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.AccountresourceApi();

var mail = "mail_example"; // String | mail


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.requestPasswordResetUsingPOST(mail, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mail** | **String**| mail | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain

<a name="saveAccountUsingPOST"></a>
# **saveAccountUsingPOST**
> &#39;String&#39; saveAccountUsingPOST(userDTO)

saveAccount

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.AccountresourceApi();

var userDTO = new ContiEdge.UserDTO(); // UserDTO | userDTO


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveAccountUsingPOST(userDTO, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userDTO** | [**UserDTO**](UserDTO.md)| userDTO | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

