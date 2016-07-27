(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.FilecontrollerApi = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Filecontroller service.
   * @module api/FilecontrollerApi
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new FilecontrollerApi. 
   * @alias module:api/FilecontrollerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the pullUsingDELETE operation.
     * @callback module:api/FilecontrollerApi~pullUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * pull
     * @param {String} fid fileID
     * @param {module:api/FilecontrollerApi~pullUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.pullUsingDELETE = function(fid, callback) {
      var postBody = null;

      // verify the required parameter 'fid' is set
      if (fid == undefined || fid == null) {
        throw "Missing the required parameter 'fid' when calling pullUsingDELETE";
      }


      var pathParams = {
        'fid': fid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/fs/{fid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pullUsingGET operation.
     * @callback module:api/FilecontrollerApi~pullUsingGETCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * pull
     * @param {String} fid fileID
     * @param {module:api/FilecontrollerApi~pullUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.pullUsingGET = function(fid, callback) {
      var postBody = null;

      // verify the required parameter 'fid' is set
      if (fid == undefined || fid == null) {
        throw "Missing the required parameter 'fid' when calling pullUsingGET";
      }


      var pathParams = {
        'fid': fid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/fs/{fid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pullUsingOPTIONS operation.
     * @callback module:api/FilecontrollerApi~pullUsingOPTIONSCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * pull
     * @param {String} fid fileID
     * @param {module:api/FilecontrollerApi~pullUsingOPTIONSCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.pullUsingOPTIONS = function(fid, callback) {
      var postBody = null;

      // verify the required parameter 'fid' is set
      if (fid == undefined || fid == null) {
        throw "Missing the required parameter 'fid' when calling pullUsingOPTIONS";
      }


      var pathParams = {
        'fid': fid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/fs/{fid}', 'OPTIONS',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pullUsingPATCH operation.
     * @callback module:api/FilecontrollerApi~pullUsingPATCHCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * pull
     * @param {String} fid fileID
     * @param {module:api/FilecontrollerApi~pullUsingPATCHCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.pullUsingPATCH = function(fid, callback) {
      var postBody = null;

      // verify the required parameter 'fid' is set
      if (fid == undefined || fid == null) {
        throw "Missing the required parameter 'fid' when calling pullUsingPATCH";
      }


      var pathParams = {
        'fid': fid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/fs/{fid}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pullUsingPOST operation.
     * @callback module:api/FilecontrollerApi~pullUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * pull
     * @param {String} fid fileID
     * @param {module:api/FilecontrollerApi~pullUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.pullUsingPOST = function(fid, callback) {
      var postBody = null;

      // verify the required parameter 'fid' is set
      if (fid == undefined || fid == null) {
        throw "Missing the required parameter 'fid' when calling pullUsingPOST";
      }


      var pathParams = {
        'fid': fid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/fs/{fid}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pullUsingPUT operation.
     * @callback module:api/FilecontrollerApi~pullUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * pull
     * @param {String} fid fileID
     * @param {module:api/FilecontrollerApi~pullUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.pullUsingPUT = function(fid, callback) {
      var postBody = null;

      // verify the required parameter 'fid' is set
      if (fid == undefined || fid == null) {
        throw "Missing the required parameter 'fid' when calling pullUsingPUT";
      }


      var pathParams = {
        'fid': fid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/fs/{fid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
