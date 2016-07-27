(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PromotionDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PromotionDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.PromotioncontrollerApi = factory(root.ContiEdge.ApiClient, root.ContiEdge.PromotionDTO);
  }
}(this, function(ApiClient, PromotionDTO) {
  'use strict';

  /**
   * Promotioncontroller service.
   * @module api/PromotioncontrollerApi
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new PromotioncontrollerApi. 
   * @alias module:api/PromotioncontrollerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getPromotionUsingGET operation.
     * @callback module:api/PromotioncontrollerApi~getPromotionUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PromotionDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getPromotion
     * @param {module:api/PromotioncontrollerApi~getPromotionUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PromotionDTO}
     */
    this.getPromotionUsingGET = function(callback) {
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
      var returnType = PromotionDTO;

      return this.apiClient.callApi(
        '/api/promotion/getPromotion', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
