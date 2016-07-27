(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/VehicleInfoDTO', 'model/DeviceInfoRequestDTO', 'model/ClientIdDTO', 'model/BaseResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/VehicleInfoDTO'), require('../model/DeviceInfoRequestDTO'), require('../model/ClientIdDTO'), require('../model/BaseResult'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.DevicecontrollerApi = factory(root.ContiEdge.ApiClient, root.ContiEdge.VehicleInfoDTO, root.ContiEdge.DeviceInfoRequestDTO, root.ContiEdge.ClientIdDTO, root.ContiEdge.BaseResult);
  }
}(this, function(ApiClient, VehicleInfoDTO, DeviceInfoRequestDTO, ClientIdDTO, BaseResult) {
  'use strict';

  /**
   * Devicecontroller service.
   * @module api/DevicecontrollerApi
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new DevicecontrollerApi. 
   * @alias module:api/DevicecontrollerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the activeDeviceUsingGET operation.
     * @callback module:api/DevicecontrollerApi~activeDeviceUsingGETCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * activeDevice
     * @param {String} imei imei
     * @param {module:api/DevicecontrollerApi~activeDeviceUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.activeDeviceUsingGET = function(imei, callback) {
      var postBody = null;

      // verify the required parameter 'imei' is set
      if (imei == undefined || imei == null) {
        throw "Missing the required parameter 'imei' when calling activeDeviceUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'imei': imei
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/activeDevice', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the bindDeviceUsingPOST operation.
     * @callback module:api/DevicecontrollerApi~bindDeviceUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VehicleInfoDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * bindDevice
     * @param {module:model/DeviceInfoRequestDTO} deviceInfo deviceInfo
     * @param {module:api/DevicecontrollerApi~bindDeviceUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/VehicleInfoDTO}
     */
    this.bindDeviceUsingPOST = function(deviceInfo, callback) {
      var postBody = deviceInfo;

      // verify the required parameter 'deviceInfo' is set
      if (deviceInfo == undefined || deviceInfo == null) {
        throw "Missing the required parameter 'deviceInfo' when calling bindDeviceUsingPOST";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = VehicleInfoDTO;

      return this.apiClient.callApi(
        '/api/bindDevice', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the bindSuccessUsingGET operation.
     * @callback module:api/DevicecontrollerApi~bindSuccessUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VehicleInfoDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * bindSuccess
     * @param {String} imei imei
     * @param {module:api/DevicecontrollerApi~bindSuccessUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/VehicleInfoDTO}
     */
    this.bindSuccessUsingGET = function(imei, callback) {
      var postBody = null;

      // verify the required parameter 'imei' is set
      if (imei == undefined || imei == null) {
        throw "Missing the required parameter 'imei' when calling bindSuccessUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'imei': imei
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = VehicleInfoDTO;

      return this.apiClient.callApi(
        '/api/bindSuccess', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deviceBindingCheckUsingGET operation.
     * @callback module:api/DevicecontrollerApi~deviceBindingCheckUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VehicleInfoDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deviceBindingCheck
     * @param {String} imei imei
     * @param {module:api/DevicecontrollerApi~deviceBindingCheckUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/VehicleInfoDTO}
     */
    this.deviceBindingCheckUsingGET = function(imei, callback) {
      var postBody = null;

      // verify the required parameter 'imei' is set
      if (imei == undefined || imei == null) {
        throw "Missing the required parameter 'imei' when calling deviceBindingCheckUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'imei': imei
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = VehicleInfoDTO;

      return this.apiClient.callApi(
        '/api/deviceBindingCheck', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getClientIdUsingGET operation.
     * @callback module:api/DevicecontrollerApi~getClientIdUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClientIdDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getClientId
     * @param {String} deviceId deviceId
     * @param {module:api/DevicecontrollerApi~getClientIdUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ClientIdDTO}
     */
    this.getClientIdUsingGET = function(deviceId, callback) {
      var postBody = null;

      // verify the required parameter 'deviceId' is set
      if (deviceId == undefined || deviceId == null) {
        throw "Missing the required parameter 'deviceId' when calling getClientIdUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'deviceId': deviceId
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ClientIdDTO;

      return this.apiClient.callApi(
        '/api/getClientId', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the unbindDeviceUsingPOST operation.
     * @callback module:api/DevicecontrollerApi~unbindDeviceUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * unbind device from vehicle and clear all device data except uid
     * @param {Object} opts Optional parameters
     * @param {module:model/DeviceInfoRequestDTO} opts.deviceInfoRequestDTO vehicleGuid is required
     * @param {module:api/DevicecontrollerApi~unbindDeviceUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BaseResult}
     */
    this.unbindDeviceUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['deviceInfoRequestDTO'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BaseResult;

      return this.apiClient.callApi(
        '/api/unbindDevice', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
