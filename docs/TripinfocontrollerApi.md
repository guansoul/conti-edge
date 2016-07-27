# ContiEdge.TripinfocontrollerApi

All URIs are relative to *https://54.223.64.159:8083/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dailyTripUsingGET**](TripinfocontrollerApi.md#dailyTripUsingGET) | **GET** /api/dailyTrip | dailyTrip
[**findVehicleTripCountByYearAndMonthUsingGET**](TripinfocontrollerApi.md#findVehicleTripCountByYearAndMonthUsingGET) | **GET** /api/tripCount | get trip count list by date
[**tripUsingGET**](TripinfocontrollerApi.md#tripUsingGET) | **GET** /api/trip | trip


<a name="dailyTripUsingGET"></a>
# **dailyTripUsingGET**
> TripInfoListDTO dailyTripUsingGET(_date, vehicleGuid)

dailyTrip

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.TripinfocontrollerApi();

var _date = 789; // Integer | date

var vehicleGuid = "vehicleGuid_example"; // String | vehicleGuid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dailyTripUsingGET(_date, vehicleGuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_date** | **Integer**| date | 
 **vehicleGuid** | **String**| vehicleGuid | 

### Return type

[**TripInfoListDTO**](TripInfoListDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="findVehicleTripCountByYearAndMonthUsingGET"></a>
# **findVehicleTripCountByYearAndMonthUsingGET**
> TripCountListDTO findVehicleTripCountByYearAndMonthUsingGET(opts)

get trip count list by date

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.TripinfocontrollerApi();

var opts = { 
  'vehicleGuid': "vehicleGuid_example" // String | vehicleGuid is required
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findVehicleTripCountByYearAndMonthUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vehicleGuid** | **String**| vehicleGuid is required | [optional] 

### Return type

[**TripCountListDTO**](TripCountListDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tripUsingGET"></a>
# **tripUsingGET**
> TripInfoDTO tripUsingGET(tripGuid)

trip

### Example
```javascript
var ContiEdge = require('conti-edge');

var apiInstance = new ContiEdge.TripinfocontrollerApi();

var tripGuid = "tripGuid_example"; // String | tripGuid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tripUsingGET(tripGuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tripGuid** | **String**| tripGuid | 

### Return type

[**TripInfoDTO**](TripInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

