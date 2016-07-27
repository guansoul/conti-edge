(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AvailableDateAndTimeDTO', 'model/AvailableTimeDTO', 'model/ShopDetailDTO', 'model/ShopListDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AvailableDateAndTimeDTO'), require('../model/AvailableTimeDTO'), require('../model/ShopDetailDTO'), require('../model/ShopListDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.ShopcontrollerApi = factory(root.ContiEdge.ApiClient, root.ContiEdge.AvailableDateAndTimeDTO, root.ContiEdge.AvailableTimeDTO, root.ContiEdge.ShopDetailDTO, root.ContiEdge.ShopListDTO);
  }
}(this, function(ApiClient, AvailableDateAndTimeDTO, AvailableTimeDTO, ShopDetailDTO, ShopListDTO) {
  'use strict';

  /**
   * Shopcontroller service.
   * @module api/ShopcontrollerApi
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new ShopcontrollerApi. 
   * @alias module:api/ShopcontrollerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getBookScheduleFullUsingGET operation.
     * @callback module:api/ShopcontrollerApi~getBookScheduleFullUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AvailableDateAndTimeDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getBookScheduleFull
     * @param {Integer} shopId shopId
     * @param {module:api/ShopcontrollerApi~getBookScheduleFullUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AvailableDateAndTimeDTO}
     */
    this.getBookScheduleFullUsingGET = function(shopId, callback) {
      var postBody = null;

      // verify the required parameter 'shopId' is set
      if (shopId == undefined || shopId == null) {
        throw "Missing the required parameter 'shopId' when calling getBookScheduleFullUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'shopId': shopId
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AvailableDateAndTimeDTO;

      return this.apiClient.callApi(
        '/api/availableTimeFull', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBookScheduleUsingGET operation.
     * @callback module:api/ShopcontrollerApi~getBookScheduleUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AvailableTimeDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getBookSchedule
     * @param {Integer} shopId shopId
     * @param {module:api/ShopcontrollerApi~getBookScheduleUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AvailableTimeDTO}
     */
    this.getBookScheduleUsingGET = function(shopId, callback) {
      var postBody = null;

      // verify the required parameter 'shopId' is set
      if (shopId == undefined || shopId == null) {
        throw "Missing the required parameter 'shopId' when calling getBookScheduleUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'shopId': shopId
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
        '/api/availableTime', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the recommandationShopUsingGET operation.
     * @callback module:api/ShopcontrollerApi~recommandationShopUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShopDetailDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * recommandationShop
     * @param {String} vehicleGuid vehicleGuid
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.cityId cityId
     * @param {Integer} opts.lat lat
     * @param {Integer} opts.lon lon
     * @param {module:api/ShopcontrollerApi~recommandationShopUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ShopDetailDTO}
     */
    this.recommandationShopUsingGET = function(vehicleGuid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'vehicleGuid' is set
      if (vehicleGuid == undefined || vehicleGuid == null) {
        throw "Missing the required parameter 'vehicleGuid' when calling recommandationShopUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'vehicleGuid': vehicleGuid,
        'cityId': opts['cityId'],
        'lat': opts['lat'],
        'lon': opts['lon']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ShopDetailDTO;

      return this.apiClient.callApi(
        '/api/recommandationShop', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the shopDetailUsingGET operation.
     * @callback module:api/ShopcontrollerApi~shopDetailUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShopDetailDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * shopDetail
     * @param {Integer} shopId shopId
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.lat lat
     * @param {Integer} opts.lon lon
     * @param {module:api/ShopcontrollerApi~shopDetailUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ShopDetailDTO}
     */
    this.shopDetailUsingGET = function(shopId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'shopId' is set
      if (shopId == undefined || shopId == null) {
        throw "Missing the required parameter 'shopId' when calling shopDetailUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'shopId': shopId,
        'lat': opts['lat'],
        'lon': opts['lon']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ShopDetailDTO;

      return this.apiClient.callApi(
        '/api/shopDetail', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the shopListUsingGET operation.
     * @callback module:api/ShopcontrollerApi~shopListUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShopListDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * shopList
     * @param {Object} opts Optional parameters
     * @param {String} opts.vehicleGuid vehicleGuid
     * @param {Integer} opts.cityId cityId
     * @param {Integer} opts.lat lat
     * @param {Integer} opts.lon lon
     * @param {module:api/ShopcontrollerApi~shopListUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ShopListDTO}
     */
    this.shopListUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'vehicleGuid': opts['vehicleGuid'],
        'cityId': opts['cityId'],
        'lat': opts['lat'],
        'lon': opts['lon']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ShopListDTO;

      return this.apiClient.callApi(
        '/api/shopList', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
