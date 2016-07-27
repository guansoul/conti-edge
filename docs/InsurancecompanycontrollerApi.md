# ContiEdge.InsurancecompanycontrollerApi

All URIs are relative to *https://54.223.64.159:8083/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**insuranceCompanyInfoUsingGET**](InsurancecompanycontrollerApi.md#insuranceCompanyInfoUsingGET) | **GET** /api/insuranceCompanyInfo | get one insurance company info,to default company the flag is 1 
[**listInsuranceCompanyUsingGET**](InsurancecompanycontrollerApi.md#listInsuranceCompanyUsingGET) | **GET** /api/insuranceCompanyList | get all insurance company ,default company is the first
[**setDefaultInsuranceCompanyUsingPOST**](InsurancecompanycontrollerApi.md#setDefaultInsuranceCompanyUsingPOST) | **POST** /api/setDefaultInsuranceCompany | clear default company and set default company


<a name="insuranceCompanyInfoUsingGET"></a>
# **insuranceCompanyInfoUsingGET**
> InsuranceCompanyInfoDTO insuranceCompanyInfoUsingGET(opts)

get one insurance company info,to default company the flag is 1 

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.InsurancecompanycontrollerApi();

var opts = { 
  'vehicleGuid': "vehicleGuid_example", // String | vehicleGuid is optional
  'insuranceCompanyId': 789 // Integer | insuranceCompanyId is required
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.insuranceCompanyInfoUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vehicleGuid** | **String**| vehicleGuid is optional | [optional] 
 **insuranceCompanyId** | **Integer**| insuranceCompanyId is required | [optional] 

### Return type

[**InsuranceCompanyInfoDTO**](InsuranceCompanyInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listInsuranceCompanyUsingGET"></a>
# **listInsuranceCompanyUsingGET**
> InsuranceCompanyDTO listInsuranceCompanyUsingGET(opts)

get all insurance company ,default company is the first

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.InsurancecompanycontrollerApi();

var opts = { 
  'vehicleGuid': "vehicleGuid_example" // String | vehicleGuid is optional
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listInsuranceCompanyUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vehicleGuid** | **String**| vehicleGuid is optional | [optional] 

### Return type

[**InsuranceCompanyDTO**](InsuranceCompanyDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setDefaultInsuranceCompanyUsingPOST"></a>
# **setDefaultInsuranceCompanyUsingPOST**
> BaseResult setDefaultInsuranceCompanyUsingPOST(opts)

clear default company and set default company

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.InsurancecompanycontrollerApi();

var opts = { 
  'body': new ContiEdge.InsuranceCompanyRequestDTO() // InsuranceCompanyRequestDTO | vehicleGuid is required
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setDefaultInsuranceCompanyUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InsuranceCompanyRequestDTO**](InsuranceCompanyRequestDTO.md)| vehicleGuid is required | [optional] 

### Return type

[**BaseResult**](BaseResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

