# ContiEdge.VehiclecontrollerApi

All URIs are relative to *https://54.223.64.159:8083/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activeDeviceUsingPOST**](VehiclecontrollerApi.md#activeDeviceUsingPOST) | **POST** /api/activeDevice | activeDevice
[**defaultShopUsingPOST**](VehiclecontrollerApi.md#defaultShopUsingPOST) | **POST** /api/defaultShop | defaultShop
[**findObdCodeDescListUsingGET**](VehiclecontrollerApi.md#findObdCodeDescListUsingGET) | **GET** /api/findObdCodeDescList | findObdCodeDescList
[**getVehicleVoltageInfoUsingGET**](VehiclecontrollerApi.md#getVehicleVoltageInfoUsingGET) | **GET** /api/getVehicleVoltageInfo | getVehicleVoltageInfo
[**recordOffUsingPOST**](VehiclecontrollerApi.md#recordOffUsingPOST) | **POST** /api/recordOff | recordOff
[**recordOnUsingPOST**](VehiclecontrollerApi.md#recordOnUsingPOST) | **POST** /api/recordOn | recordOn
[**vehicleBrandListUsingGET**](VehiclecontrollerApi.md#vehicleBrandListUsingGET) | **GET** /api/vehicleBrandList | vehicleBrandList
[**vehicleDisplacementListUsingGET**](VehiclecontrollerApi.md#vehicleDisplacementListUsingGET) | **GET** /api/vehicleDisplacementList | vehicleDisplacementList
[**vehicleInfoUsingGET**](VehiclecontrollerApi.md#vehicleInfoUsingGET) | **GET** /api/vehicleInfo | vehicleInfo
[**vehicleInfoUsingPOST**](VehiclecontrollerApi.md#vehicleInfoUsingPOST) | **POST** /api/vehicleInfo | vehicleInfo
[**vehicleModelListBakUsingGET**](VehiclecontrollerApi.md#vehicleModelListBakUsingGET) | **GET** /api/vehicleModelList_bak | vehicleModelList_bak
[**vehicleModelListUsingGET**](VehiclecontrollerApi.md#vehicleModelListUsingGET) | **GET** /api/vehicleModelList | vehicleModelList
[**vehicleModelUsingPOST**](VehiclecontrollerApi.md#vehicleModelUsingPOST) | **POST** /api/vehicleModel | vehicleModel
[**vehicleModelYearListUsingGET**](VehiclecontrollerApi.md#vehicleModelYearListUsingGET) | **GET** /api/vehicleModelYearList | vehicleModelYearList


<a name="activeDeviceUsingPOST"></a>
# **activeDeviceUsingPOST**
> BaseResult activeDeviceUsingPOST(imei)

activeDevice

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.VehiclecontrollerApi();

var imei = new ContiEdge.SingleStringRequestDTO(); // SingleStringRequestDTO | imei


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.activeDeviceUsingPOST(imei, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imei** | [**SingleStringRequestDTO**](SingleStringRequestDTO.md)| imei | 

### Return type

[**BaseResult**](BaseResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="defaultShopUsingPOST"></a>
# **defaultShopUsingPOST**
> BaseResult defaultShopUsingPOST(body)

defaultShop

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.VehiclecontrollerApi();

var body = new ContiEdge.VehicleInfoRequestDTO(); // VehicleInfoRequestDTO | body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.defaultShopUsingPOST(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**VehicleInfoRequestDTO**](VehicleInfoRequestDTO.md)| body | 

### Return type

[**BaseResult**](BaseResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="findObdCodeDescListUsingGET"></a>
# **findObdCodeDescListUsingGET**
> ObdCodeDescListDTO findObdCodeDescListUsingGET(vehicleGuid)

findObdCodeDescList

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.VehiclecontrollerApi();

var vehicleGuid = "vehicleGuid_example"; // String | vehicleGuid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findObdCodeDescListUsingGET(vehicleGuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vehicleGuid** | **String**| vehicleGuid | 

### Return type

[**ObdCodeDescListDTO**](ObdCodeDescListDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getVehicleVoltageInfoUsingGET"></a>
# **getVehicleVoltageInfoUsingGET**
> VehicleVoltageInfoDTO getVehicleVoltageInfoUsingGET(vehicleGuid)

getVehicleVoltageInfo

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.VehiclecontrollerApi();

var vehicleGuid = "vehicleGuid_example"; // String | vehicleGuid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVehicleVoltageInfoUsingGET(vehicleGuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vehicleGuid** | **String**| vehicleGuid | 

### Return type

[**VehicleVoltageInfoDTO**](VehicleVoltageInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="recordOffUsingPOST"></a>
# **recordOffUsingPOST**
> BaseResult recordOffUsingPOST(vehicleGuid)

recordOff

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.VehiclecontrollerApi();

var vehicleGuid = new ContiEdge.SingleStringRequestDTO(); // SingleStringRequestDTO | vehicleGuid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.recordOffUsingPOST(vehicleGuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vehicleGuid** | [**SingleStringRequestDTO**](SingleStringRequestDTO.md)| vehicleGuid | 

### Return type

[**BaseResult**](BaseResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="recordOnUsingPOST"></a>
# **recordOnUsingPOST**
> BaseResult recordOnUsingPOST(vehicleGuid)

recordOn

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.VehiclecontrollerApi();

var vehicleGuid = new ContiEdge.SingleStringRequestDTO(); // SingleStringRequestDTO | vehicleGuid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.recordOnUsingPOST(vehicleGuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vehicleGuid** | [**SingleStringRequestDTO**](SingleStringRequestDTO.md)| vehicleGuid | 

### Return type

[**BaseResult**](BaseResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vehicleBrandListUsingGET"></a>
# **vehicleBrandListUsingGET**
> VehicleBrandDTO vehicleBrandListUsingGET()

vehicleBrandList

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.VehiclecontrollerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vehicleBrandListUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**VehicleBrandDTO**](VehicleBrandDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vehicleDisplacementListUsingGET"></a>
# **vehicleDisplacementListUsingGET**
> DisplacementDTO vehicleDisplacementListUsingGET(modelId)

vehicleDisplacementList

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.VehiclecontrollerApi();

var modelId = 789; // Integer | modelId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vehicleDisplacementListUsingGET(modelId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **Integer**| modelId | 

### Return type

[**DisplacementDTO**](DisplacementDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vehicleInfoUsingGET"></a>
# **vehicleInfoUsingGET**
> VehicleInfoDTO vehicleInfoUsingGET(vehicleGuid)

vehicleInfo

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.VehiclecontrollerApi();

var vehicleGuid = "vehicleGuid_example"; // String | vehicleGuid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vehicleInfoUsingGET(vehicleGuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vehicleGuid** | **String**| vehicleGuid | 

### Return type

[**VehicleInfoDTO**](VehicleInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vehicleInfoUsingPOST"></a>
# **vehicleInfoUsingPOST**
> VehicleInfoDTO vehicleInfoUsingPOST(body)

vehicleInfo

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.VehiclecontrollerApi();

var body = new ContiEdge.VehicleInfoRequestDTO(); // VehicleInfoRequestDTO | body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vehicleInfoUsingPOST(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**VehicleInfoRequestDTO**](VehicleInfoRequestDTO.md)| body | 

### Return type

[**VehicleInfoDTO**](VehicleInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vehicleModelListBakUsingGET"></a>
# **vehicleModelListBakUsingGET**
> VehicleModelDTO vehicleModelListBakUsingGET(brandId)

vehicleModelList_bak

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.VehiclecontrollerApi();

var brandId = 789; // Integer | brandId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vehicleModelListBakUsingGET(brandId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | **Integer**| brandId | 

### Return type

[**VehicleModelDTO**](VehicleModelDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vehicleModelListUsingGET"></a>
# **vehicleModelListUsingGET**
> FactoryModelDTO vehicleModelListUsingGET(brandId)

vehicleModelList

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.VehiclecontrollerApi();

var brandId = 789; // Integer | brandId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vehicleModelListUsingGET(brandId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | **Integer**| brandId | 

### Return type

[**FactoryModelDTO**](FactoryModelDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vehicleModelUsingPOST"></a>
# **vehicleModelUsingPOST**
> VehicleModelDTO vehicleModelUsingPOST(body)

vehicleModel

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.VehiclecontrollerApi();

var body = new ContiEdge.VehicleModelRequestDTO(); // VehicleModelRequestDTO | body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vehicleModelUsingPOST(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**VehicleModelRequestDTO**](VehicleModelRequestDTO.md)| body | 

### Return type

[**VehicleModelDTO**](VehicleModelDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vehicleModelYearListUsingGET"></a>
# **vehicleModelYearListUsingGET**
> ModelYearDTO vehicleModelYearListUsingGET(modelId)

vehicleModelYearList

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.VehiclecontrollerApi();

var modelId = 789; // Integer | modelId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vehicleModelYearListUsingGET(modelId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **Integer**| modelId | 

### Return type

[**ModelYearDTO**](ModelYearDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

