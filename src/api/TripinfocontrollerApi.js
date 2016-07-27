(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TripInfoListDTO', 'model/TripCountListDTO', 'model/TripInfoDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TripInfoListDTO'), require('../model/TripCountListDTO'), require('../model/TripInfoDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.TripinfocontrollerApi = factory(root.ContiEdge.ApiClient, root.ContiEdge.TripInfoListDTO, root.ContiEdge.TripCountListDTO, root.ContiEdge.TripInfoDTO);
  }
}(this, function(ApiClient, TripInfoListDTO, TripCountListDTO, TripInfoDTO) {
  'use strict';

  /**
   * Tripinfocontroller service.
   * @module api/TripinfocontrollerApi
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new TripinfocontrollerApi. 
   * @alias module:api/TripinfocontrollerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the dailyTripUsingGET operation.
     * @callback module:api/TripinfocontrollerApi~dailyTripUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TripInfoListDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * dailyTrip
     * @param {Integer} _date date
     * @param {String} vehicleGuid vehicleGuid
     * @param {module:api/TripinfocontrollerApi~dailyTripUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TripInfoListDTO}
     */
    this.dailyTripUsingGET = function(_date, vehicleGuid, callback) {
      var postBody = null;

      // verify the required parameter '_date' is set
      if (_date == undefined || _date == null) {
        throw "Missing the required parameter '_date' when calling dailyTripUsingGET";
      }

      // verify the required parameter 'vehicleGuid' is set
      if (vehicleGuid == undefined || vehicleGuid == null) {
        throw "Missing the required parameter 'vehicleGuid' when calling dailyTripUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'date': _date,
        'vehicleGuid': vehicleGuid
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TripInfoListDTO;

      return this.apiClient.callApi(
        '/api/dailyTrip', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findVehicleTripCountByYearAndMonthUsingGET operation.
     * @callback module:api/TripinfocontrollerApi~findVehicleTripCountByYearAndMonthUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TripCountListDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get trip count list by date
     * @param {Object} opts Optional parameters
     * @param {String} opts.vehicleGuid vehicleGuid is required
     * @param {module:api/TripinfocontrollerApi~findVehicleTripCountByYearAndMonthUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TripCountListDTO}
     */
    this.findVehicleTripCountByYearAndMonthUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'vehicleGuid': opts['vehicleGuid']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TripCountListDTO;

      return this.apiClient.callApi(
        '/api/tripCount', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the tripUsingGET operation.
     * @callback module:api/TripinfocontrollerApi~tripUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TripInfoDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * trip
     * @param {String} tripGuid tripGuid
     * @param {module:api/TripinfocontrollerApi~tripUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TripInfoDTO}
     */
    this.tripUsingGET = function(tripGuid, callback) {
      var postBody = null;

      // verify the required parameter 'tripGuid' is set
      if (tripGuid == undefined || tripGuid == null) {
        throw "Missing the required parameter 'tripGuid' when calling tripUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'tripGuid': tripGuid
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TripInfoDTO;

      return this.apiClient.callApi(
        '/api/trip', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
