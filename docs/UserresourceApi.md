# ContiEdge.UserresourceApi

All URIs are relative to *https://54.223.64.159:8083/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUserUsingPOST**](UserresourceApi.md#createUserUsingPOST) | **POST** /api/users | createUser
[**deleteUserUsingDELETE**](UserresourceApi.md#deleteUserUsingDELETE) | **DELETE** /api/users/{login} | deleteUser
[**getUserUsingGET**](UserresourceApi.md#getUserUsingGET) | **GET** /api/users/{login} | getUser
[**updateUserUsingPUT**](UserresourceApi.md#updateUserUsingPUT) | **PUT** /api/users | updateUser


<a name="createUserUsingPOST"></a>
# **createUserUsingPOST**
> Object createUserUsingPOST(managedUserDTO)

createUser

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.UserresourceApi();

var managedUserDTO = new ContiEdge.ManagedUserDTO(); // ManagedUserDTO | managedUserDTO


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUserUsingPOST(managedUserDTO, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managedUserDTO** | [**ManagedUserDTO**](ManagedUserDTO.md)| managedUserDTO | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserUsingDELETE"></a>
# **deleteUserUsingDELETE**
> deleteUserUsingDELETE(login)

deleteUser

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.UserresourceApi();

var login = "login_example"; // String | login


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUserUsingDELETE(login, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**| login | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserUsingGET"></a>
# **getUserUsingGET**
> ManagedUserDTO getUserUsingGET(login)

getUser

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.UserresourceApi();

var login = "login_example"; // String | login


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserUsingGET(login, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**| login | 

### Return type

[**ManagedUserDTO**](ManagedUserDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUserUsingPUT"></a>
# **updateUserUsingPUT**
> ManagedUserDTO updateUserUsingPUT(managedUserDTO)

updateUser

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.UserresourceApi();

var managedUserDTO = new ContiEdge.ManagedUserDTO(); // ManagedUserDTO | managedUserDTO


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateUserUsingPUT(managedUserDTO, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managedUserDTO** | [**ManagedUserDTO**](ManagedUserDTO.md)| managedUserDTO | 

### Return type

[**ManagedUserDTO**](ManagedUserDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

