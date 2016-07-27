(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BaseResult', 'model/FencesRequestDTO', 'model/VehiclePositionDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BaseResult'), require('../model/FencesRequestDTO'), require('../model/VehiclePositionDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.FencescontrollerApi = factory(root.ContiEdge.ApiClient, root.ContiEdge.BaseResult, root.ContiEdge.FencesRequestDTO, root.ContiEdge.VehiclePositionDTO);
  }
}(this, function(ApiClient, BaseResult, FencesRequestDTO, VehiclePositionDTO) {
  'use strict';

  /**
   * Fencescontroller service.
   * @module api/FencescontrollerApi
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new FencescontrollerApi. 
   * @alias module:api/FencescontrollerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the closeFencesUsingGET operation.
     * @callback module:api/FencescontrollerApi~closeFencesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * closeFences
     * @param {String} vehicleGuid vehicleGuid
     * @param {module:api/FencescontrollerApi~closeFencesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BaseResult}
     */
    this.closeFencesUsingGET = function(vehicleGuid, callback) {
      var postBody = null;

      // verify the required parameter 'vehicleGuid' is set
      if (vehicleGuid == undefined || vehicleGuid == null) {
        throw "Missing the required parameter 'vehicleGuid' when calling closeFencesUsingGET";
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
      var returnType = BaseResult;

      return this.apiClient.callApi(
        '/api/closeFences', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFencesUsingGET operation.
     * @callback module:api/FencescontrollerApi~getFencesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FencesRequestDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getFences
     * @param {String} vehicleGuid vehicleGuid
     * @param {module:api/FencescontrollerApi~getFencesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FencesRequestDTO}
     */
    this.getFencesUsingGET = function(vehicleGuid, callback) {
      var postBody = null;

      // verify the required parameter 'vehicleGuid' is set
      if (vehicleGuid == undefined || vehicleGuid == null) {
        throw "Missing the required parameter 'vehicleGuid' when calling getFencesUsingGET";
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
      var returnType = FencesRequestDTO;

      return this.apiClient.callApi(
        '/api/getFences', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the positionInfoUsingGET operation.
     * @callback module:api/FencescontrollerApi~positionInfoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VehiclePositionDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * positionInfo
     * @param {String} vehicleGuid vehicleGuid
     * @param {module:api/FencescontrollerApi~positionInfoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/VehiclePositionDTO}
     */
    this.positionInfoUsingGET = function(vehicleGuid, callback) {
      var postBody = null;

      // verify the required parameter 'vehicleGuid' is set
      if (vehicleGuid == undefined || vehicleGuid == null) {
        throw "Missing the required parameter 'vehicleGuid' when calling positionInfoUsingGET";
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
      var returnType = VehiclePositionDTO;

      return this.apiClient.callApi(
        '/api/positionInfo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveFencesUsingPOST operation.
     * @callback module:api/FencescontrollerApi~saveFencesUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * saveFences
     * @param {module:model/FencesRequestDTO} body body
     * @param {module:api/FencescontrollerApi~saveFencesUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BaseResult}
     */
    this.saveFencesUsingPOST = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling saveFencesUsingPOST";
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
      var returnType = BaseResult;

      return this.apiClient.callApi(
        '/api/saveFences', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
