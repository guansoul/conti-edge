(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/VehicleVoltageThresholdDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/VehicleVoltageThresholdDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.ConfigcontrollerApi = factory(root.ContiEdge.ApiClient, root.ContiEdge.VehicleVoltageThresholdDTO);
  }
}(this, function(ApiClient, VehicleVoltageThresholdDTO) {
  'use strict';

  /**
   * Configcontroller service.
   * @module api/ConfigcontrollerApi
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new ConfigcontrollerApi. 
   * @alias module:api/ConfigcontrollerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getVehicleVoltageInfoUsingGET operation.
     * @callback module:api/ConfigcontrollerApi~getVehicleVoltageInfoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VehicleVoltageThresholdDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getVehicleVoltageInfo
     * @param {String} vehicleGuid vehicleGuid
     * @param {module:api/ConfigcontrollerApi~getVehicleVoltageInfoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/VehicleVoltageThresholdDTO}
     */
    this.getVehicleVoltageInfoUsingGET = function(vehicleGuid, callback) {
      var postBody = null;

      // verify the required parameter 'vehicleGuid' is set
      if (vehicleGuid == undefined || vehicleGuid == null) {
        throw "Missing the required parameter 'vehicleGuid' when calling getVehicleVoltageInfoUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'vehicleGuid': vehicleGuid
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = VehicleVoltageThresholdDTO;

      return this.apiClient.callApi(
        '/api/getVehicleVoltageThreshold', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
