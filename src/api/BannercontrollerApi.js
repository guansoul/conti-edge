(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BannerDTO', 'model/LaunchAdvertisingPageDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BannerDTO'), require('../model/LaunchAdvertisingPageDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.BannercontrollerApi = factory(root.ContiEdge.ApiClient, root.ContiEdge.BannerDTO, root.ContiEdge.LaunchAdvertisingPageDTO);
  }
}(this, function(ApiClient, BannerDTO, LaunchAdvertisingPageDTO) {
  'use strict';

  /**
   * Bannercontroller service.
   * @module api/BannercontrollerApi
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new BannercontrollerApi. 
   * @alias module:api/BannercontrollerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getBannerUsingGET operation.
     * @callback module:api/BannercontrollerApi~getBannerUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BannerDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getBanner
     * @param {module:api/BannercontrollerApi~getBannerUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BannerDTO}
     */
    this.getBannerUsingGET = function(callback) {
      var postBody = null;


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
      var returnType = BannerDTO;

      return this.apiClient.callApi(
        '/api/banner/getBanner', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLaunchAdvertisingPageUsingGET operation.
     * @callback module:api/BannercontrollerApi~getLaunchAdvertisingPageUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LaunchAdvertisingPageDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getLaunchAdvertisingPage
     * @param {module:api/BannercontrollerApi~getLaunchAdvertisingPageUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LaunchAdvertisingPageDTO}
     */
    this.getLaunchAdvertisingPageUsingGET = function(callback) {
      var postBody = null;


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
      var returnType = LaunchAdvertisingPageDTO;

      return this.apiClient.callApi(
        '/api/banner/launchAdvertisingPage', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
