(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/KeyAndPasswordDTO', 'model/UserDTO', 'model/PersistentToken'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/KeyAndPasswordDTO'), require('../model/UserDTO'), require('../model/PersistentToken'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.AccountresourceApi = factory(root.ContiEdge.ApiClient, root.ContiEdge.KeyAndPasswordDTO, root.ContiEdge.UserDTO, root.ContiEdge.PersistentToken);
  }
}(this, function(ApiClient, KeyAndPasswordDTO, UserDTO, PersistentToken) {
  'use strict';

  /**
   * Accountresource service.
   * @module api/AccountresourceApi
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new AccountresourceApi. 
   * @alias module:api/AccountresourceApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the activateAccountUsingGET operation.
     * @callback module:api/AccountresourceApi~activateAccountUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * activateAccount
     * @param {String} key key
     * @param {module:api/AccountresourceApi~activateAccountUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.activateAccountUsingGET = function(key, callback) {
      var postBody = null;

      // verify the required parameter 'key' is set
      if (key == undefined || key == null) {
        throw "Missing the required parameter 'key' when calling activateAccountUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'key': key
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/activate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the changePasswordUsingPOST operation.
     * @callback module:api/AccountresourceApi~changePasswordUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * changePassword
     * @param {String} password password
     * @param {module:api/AccountresourceApi~changePasswordUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.changePasswordUsingPOST = function(password, callback) {
      var postBody = password;

      // verify the required parameter 'password' is set
      if (password == undefined || password == null) {
        throw "Missing the required parameter 'password' when calling changePasswordUsingPOST";
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/account/change_password', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the finishPasswordResetUsingPOST operation.
     * @callback module:api/AccountresourceApi~finishPasswordResetUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * finishPasswordReset
     * @param {module:model/KeyAndPasswordDTO} keyAndPassword keyAndPassword
     * @param {module:api/AccountresourceApi~finishPasswordResetUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.finishPasswordResetUsingPOST = function(keyAndPassword, callback) {
      var postBody = keyAndPassword;

      // verify the required parameter 'keyAndPassword' is set
      if (keyAndPassword == undefined || keyAndPassword == null) {
        throw "Missing the required parameter 'keyAndPassword' when calling finishPasswordResetUsingPOST";
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/account/reset_password/finish', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAccountUsingGET operation.
     * @callback module:api/AccountresourceApi~getAccountUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAccount
     * @param {module:api/AccountresourceApi~getAccountUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UserDTO}
     */
    this.getAccountUsingGET = function(callback) {
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
      var returnType = UserDTO;

      return this.apiClient.callApi(
        '/api/account', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCurrentSessionsUsingGET operation.
     * @callback module:api/AccountresourceApi~getCurrentSessionsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PersistentToken>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getCurrentSessions
     * @param {module:api/AccountresourceApi~getCurrentSessionsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/PersistentToken>}
     */
    this.getCurrentSessionsUsingGET = function(callback) {
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
      var returnType = [PersistentToken];

      return this.apiClient.callApi(
        '/api/account/sessions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the invalidateSessionUsingDELETE operation.
     * @callback module:api/AccountresourceApi~invalidateSessionUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * invalidateSession
     * @param {String} series series
     * @param {module:api/AccountresourceApi~invalidateSessionUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.invalidateSessionUsingDELETE = function(series, callback) {
      var postBody = null;

      // verify the required parameter 'series' is set
      if (series == undefined || series == null) {
        throw "Missing the required parameter 'series' when calling invalidateSessionUsingDELETE";
      }


      var pathParams = {
        'series': series
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
        '/api/account/sessions/{series}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the isAuthenticatedUsingGET operation.
     * @callback module:api/AccountresourceApi~isAuthenticatedUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * isAuthenticated
     * @param {module:api/AccountresourceApi~isAuthenticatedUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.isAuthenticatedUsingGET = function(callback) {
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/authenticate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the registerAccountUsingPOST operation.
     * @callback module:api/AccountresourceApi~registerAccountUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * registerAccount
     * @param {module:model/UserDTO} userDTO userDTO
     * @param {module:api/AccountresourceApi~registerAccountUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.registerAccountUsingPOST = function(userDTO, callback) {
      var postBody = userDTO;

      // verify the required parameter 'userDTO' is set
      if (userDTO == undefined || userDTO == null) {
        throw "Missing the required parameter 'userDTO' when calling registerAccountUsingPOST";
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/register', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the requestPasswordResetUsingPOST operation.
     * @callback module:api/AccountresourceApi~requestPasswordResetUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * requestPasswordReset
     * @param {String} mail mail
     * @param {module:api/AccountresourceApi~requestPasswordResetUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.requestPasswordResetUsingPOST = function(mail, callback) {
      var postBody = mail;

      // verify the required parameter 'mail' is set
      if (mail == undefined || mail == null) {
        throw "Missing the required parameter 'mail' when calling requestPasswordResetUsingPOST";
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
      var accepts = ['text/plain'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/account/reset_password/init', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveAccountUsingPOST operation.
     * @callback module:api/AccountresourceApi~saveAccountUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * saveAccount
     * @param {module:model/UserDTO} userDTO userDTO
     * @param {module:api/AccountresourceApi~saveAccountUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.saveAccountUsingPOST = function(userDTO, callback) {
      var postBody = userDTO;

      // verify the required parameter 'userDTO' is set
      if (userDTO == undefined || userDTO == null) {
        throw "Missing the required parameter 'userDTO' when calling saveAccountUsingPOST";
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/account', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
