(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/OrderDetailDTO', 'model/AvailableTimeDTO', 'model/MaintenanceContainerDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OrderDetailDTO'), require('../model/AvailableTimeDTO'), require('../model/MaintenanceContainerDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.MaintenancecontrollerApi = factory(root.ContiEdge.ApiClient, root.ContiEdge.OrderDetailDTO, root.ContiEdge.AvailableTimeDTO, root.ContiEdge.MaintenanceContainerDTO);
  }
}(this, function(ApiClient, OrderDetailDTO, AvailableTimeDTO, MaintenanceContainerDTO) {
  'use strict';

  /**
   * Maintenancecontroller service.
   * @module api/MaintenancecontrollerApi
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new MaintenancecontrollerApi. 
   * @alias module:api/MaintenancecontrollerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the allBeautyServiceListUsingGET operation.
     * @callback module:api/MaintenancecontrollerApi~allBeautyServiceListUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderDetailDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * allBeautyServiceList
     * @param {String} vehicleGuid vehicleGuid
     * @param {module:api/MaintenancecontrollerApi~allBeautyServiceListUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrderDetailDTO}
     */
    this.allBeautyServiceListUsingGET = function(vehicleGuid, callback) {
      var postBody = null;

      // verify the required parameter 'vehicleGuid' is set
      if (vehicleGuid == undefined || vehicleGuid == null) {
        throw "Missing the required parameter 'vehicleGuid' when calling allBeautyServiceListUsingGET";
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
      var returnType = OrderDetailDTO;

      return this.apiClient.callApi(
        '/api/allBeautyServiceList', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the allTireServiceListUsingGET operation.
     * @callback module:api/MaintenancecontrollerApi~allTireServiceListUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderDetailDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * allTireServiceList
     * @param {String} vehicleGuid vehicleGuid
     * @param {module:api/MaintenancecontrollerApi~allTireServiceListUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrderDetailDTO}
     */
    this.allTireServiceListUsingGET = function(vehicleGuid, callback) {
      var postBody = null;

      // verify the required parameter 'vehicleGuid' is set
      if (vehicleGuid == undefined || vehicleGuid == null) {
        throw "Missing the required parameter 'vehicleGuid' when calling allTireServiceListUsingGET";
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
      var returnType = OrderDetailDTO;

      return this.apiClient.callApi(
        '/api/allTireServiceList', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllMaitenanceListUsingGET operation.
     * @callback module:api/MaintenancecontrollerApi~getAllMaitenanceListUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderDetailDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAllMaitenanceList
     * @param {String} vehicleGuid vehicleGuid
     * @param {module:api/MaintenancecontrollerApi~getAllMaitenanceListUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrderDetailDTO}
     */
    this.getAllMaitenanceListUsingGET = function(vehicleGuid, callback) {
      var postBody = null;

      // verify the required parameter 'vehicleGuid' is set
      if (vehicleGuid == undefined || vehicleGuid == null) {
        throw "Missing the required parameter 'vehicleGuid' when calling getAllMaitenanceListUsingGET";
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
      var returnType = OrderDetailDTO;

      return this.apiClient.callApi(
        '/api/allMaitenanceList', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllOtherServiceListUsingGET operation.
     * @callback module:api/MaintenancecontrollerApi~getAllOtherServiceListUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderDetailDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAllOtherServiceList
     * @param {String} vehicleGuid vehicleGuid
     * @param {module:api/MaintenancecontrollerApi~getAllOtherServiceListUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrderDetailDTO}
     */
    this.getAllOtherServiceListUsingGET = function(vehicleGuid, callback) {
      var postBody = null;

      // verify the required parameter 'vehicleGuid' is set
      if (vehicleGuid == undefined || vehicleGuid == null) {
        throw "Missing the required parameter 'vehicleGuid' when calling getAllOtherServiceListUsingGET";
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
      var returnType = OrderDetailDTO;

      return this.apiClient.callApi(
        '/api/allOtherServiceList', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllRepairListUsingGET operation.
     * @callback module:api/MaintenancecontrollerApi~getAllRepairListUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderDetailDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAllRepairList
     * @param {String} vehicleGuid vehicleGuid
     * @param {module:api/MaintenancecontrollerApi~getAllRepairListUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrderDetailDTO}
     */
    this.getAllRepairListUsingGET = function(vehicleGuid, callback) {
      var postBody = null;

      // verify the required parameter 'vehicleGuid' is set
      if (vehicleGuid == undefined || vehicleGuid == null) {
        throw "Missing the required parameter 'vehicleGuid' when calling getAllRepairListUsingGET";
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
      var returnType = OrderDetailDTO;

      return this.apiClient.callApi(
        '/api/allRepairList', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAvailableTimeUsingGET operation.
     * @callback module:api/MaintenancecontrollerApi~getAvailableTimeUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AvailableTimeDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAvailableTime
     * @param {String} _date date
     * @param {module:api/MaintenancecontrollerApi~getAvailableTimeUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AvailableTimeDTO}
     */
    this.getAvailableTimeUsingGET = function(_date, callback) {
      var postBody = null;

      // verify the required parameter '_date' is set
      if (_date == undefined || _date == null) {
        throw "Missing the required parameter '_date' when calling getAvailableTimeUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'date': _date
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AvailableTimeDTO;

      return this.apiClient.callApi(
        '/api/availableTime_bak', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMaintenanceListInWholeVehicleLifeUsingGET operation.
     * @callback module:api/MaintenancecontrollerApi~getMaintenanceListInWholeVehicleLifeUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MaintenanceContainerDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getMaintenanceListInWholeVehicleLife
     * @param {String} vehicleGuid vehicleGuid
     * @param {module:api/MaintenancecontrollerApi~getMaintenanceListInWholeVehicleLifeUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/MaintenanceContainerDTO}
     */
    this.getMaintenanceListInWholeVehicleLifeUsingGET = function(vehicleGuid, callback) {
      var postBody = null;

      // verify the required parameter 'vehicleGuid' is set
      if (vehicleGuid == undefined || vehicleGuid == null) {
        throw "Missing the required parameter 'vehicleGuid' when calling getMaintenanceListInWholeVehicleLifeUsingGET";
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
      var returnType = MaintenanceContainerDTO;

      return this.apiClient.callApi(
        '/api/maintenanceListInWholeVehicleLife', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRecommendedServiceUsingGET operation.
     * @callback module:api/MaintenancecontrollerApi~getRecommendedServiceUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderDetailDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getRecommendedService
     * @param {String} vehicleGuid vehicleGuid
     * @param {module:api/MaintenancecontrollerApi~getRecommendedServiceUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrderDetailDTO}
     */
    this.getRecommendedServiceUsingGET = function(vehicleGuid, callback) {
      var postBody = null;

      // verify the required parameter 'vehicleGuid' is set
      if (vehicleGuid == undefined || vehicleGuid == null) {
        throw "Missing the required parameter 'vehicleGuid' when calling getRecommendedServiceUsingGET";
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
      var returnType = OrderDetailDTO;

      return this.apiClient.callApi(
        '/api/recommendedService', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
