(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BaseResult', 'model/OrderNoAndTimeDTO', 'model/OrderRequestDTO', 'model/OrderDetailDTO', 'model/OrderListDTO', 'model/OrderRemindingDTO', 'model/OrderCommentRequestDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BaseResult'), require('../model/OrderNoAndTimeDTO'), require('../model/OrderRequestDTO'), require('../model/OrderDetailDTO'), require('../model/OrderListDTO'), require('../model/OrderRemindingDTO'), require('../model/OrderCommentRequestDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.OrderscontrollerApi = factory(root.ContiEdge.ApiClient, root.ContiEdge.BaseResult, root.ContiEdge.OrderNoAndTimeDTO, root.ContiEdge.OrderRequestDTO, root.ContiEdge.OrderDetailDTO, root.ContiEdge.OrderListDTO, root.ContiEdge.OrderRemindingDTO, root.ContiEdge.OrderCommentRequestDTO);
  }
}(this, function(ApiClient, BaseResult, OrderNoAndTimeDTO, OrderRequestDTO, OrderDetailDTO, OrderListDTO, OrderRemindingDTO, OrderCommentRequestDTO) {
  'use strict';

  /**
   * Orderscontroller service.
   * @module api/OrderscontrollerApi
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new OrderscontrollerApi. 
   * @alias module:api/OrderscontrollerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the cancelOrderUsingPOST operation.
     * @callback module:api/OrderscontrollerApi~cancelOrderUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * cancelOrder
     * @param {module:model/OrderNoAndTimeDTO} orderNo orderNo
     * @param {module:api/OrderscontrollerApi~cancelOrderUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BaseResult}
     */
    this.cancelOrderUsingPOST = function(orderNo, callback) {
      var postBody = orderNo;

      // verify the required parameter 'orderNo' is set
      if (orderNo == undefined || orderNo == null) {
        throw "Missing the required parameter 'orderNo' when calling cancelOrderUsingPOST";
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
        '/api/cancelOrder', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createOrderUsingPOST operation.
     * @callback module:api/OrderscontrollerApi~createOrderUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderDetailDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createOrder
     * @param {module:model/OrderRequestDTO} body body
     * @param {module:api/OrderscontrollerApi~createOrderUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrderDetailDTO}
     */
    this.createOrderUsingPOST = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling createOrderUsingPOST";
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
      var returnType = OrderDetailDTO;

      return this.apiClient.callApi(
        '/api/order', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderHistoryListUsingGET operation.
     * @callback module:api/OrderscontrollerApi~getOrderHistoryListUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderListDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getOrderHistoryList
     * @param {module:api/OrderscontrollerApi~getOrderHistoryListUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrderListDTO}
     */
    this.getOrderHistoryListUsingGET = function(callback) {
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
      var returnType = OrderListDTO;

      return this.apiClient.callApi(
        '/api/orderHistory', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderRemindingUsingGET operation.
     * @callback module:api/OrderscontrollerApi~getOrderRemindingUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderRemindingDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getOrderReminding
     * @param {String} vehicleGuid vehicleGuid
     * @param {module:api/OrderscontrollerApi~getOrderRemindingUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrderRemindingDTO}
     */
    this.getOrderRemindingUsingGET = function(vehicleGuid, callback) {
      var postBody = null;

      // verify the required parameter 'vehicleGuid' is set
      if (vehicleGuid == undefined || vehicleGuid == null) {
        throw "Missing the required parameter 'vehicleGuid' when calling getOrderRemindingUsingGET";
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
      var returnType = OrderRemindingDTO;

      return this.apiClient.callApi(
        '/api/orderReminding', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the orderCommentUsingPOST operation.
     * @callback module:api/OrderscontrollerApi~orderCommentUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * orderComment
     * @param {module:model/OrderCommentRequestDTO} body body
     * @param {module:api/OrderscontrollerApi~orderCommentUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BaseResult}
     */
    this.orderCommentUsingPOST = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling orderCommentUsingPOST";
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
        '/api/orderComment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the orderDetailUsingGET operation.
     * @callback module:api/OrderscontrollerApi~orderDetailUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderDetailDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * orderDetail
     * @param {String} orderNo orderNo
     * @param {module:api/OrderscontrollerApi~orderDetailUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrderDetailDTO}
     */
    this.orderDetailUsingGET = function(orderNo, callback) {
      var postBody = null;

      // verify the required parameter 'orderNo' is set
      if (orderNo == undefined || orderNo == null) {
        throw "Missing the required parameter 'orderNo' when calling orderDetailUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'orderNo': orderNo
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
        '/api/orderDetail', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
