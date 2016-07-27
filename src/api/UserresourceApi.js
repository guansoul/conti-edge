(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ManagedUserDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ManagedUserDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.UserresourceApi = factory(root.ContiEdge.ApiClient, root.ContiEdge.ManagedUserDTO);
  }
}(this, function(ApiClient, ManagedUserDTO) {
  'use strict';

  /**
   * Userresource service.
   * @module api/UserresourceApi
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new UserresourceApi. 
   * @alias module:api/UserresourceApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createUserUsingPOST operation.
     * @callback module:api/UserresourceApi~createUserUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createUser
     * @param {module:model/ManagedUserDTO} managedUserDTO managedUserDTO
     * @param {module:api/UserresourceApi~createUserUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.createUserUsingPOST = function(managedUserDTO, callback) {
      var postBody = managedUserDTO;

      // verify the required parameter 'managedUserDTO' is set
      if (managedUserDTO == undefined || managedUserDTO == null) {
        throw "Missing the required parameter 'managedUserDTO' when calling createUserUsingPOST";
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
        '/api/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserUsingDELETE operation.
     * @callback module:api/UserresourceApi~deleteUserUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteUser
     * @param {String} login login
     * @param {module:api/UserresourceApi~deleteUserUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteUserUsingDELETE = function(login, callback) {
      var postBody = null;

      // verify the required parameter 'login' is set
      if (login == undefined || login == null) {
        throw "Missing the required parameter 'login' when calling deleteUserUsingDELETE";
      }


      var pathParams = {
        'login': login
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/users/{login}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserUsingGET operation.
     * @callback module:api/UserresourceApi~getUserUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ManagedUserDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getUser
     * @param {String} login login
     * @param {module:api/UserresourceApi~getUserUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ManagedUserDTO}
     */
    this.getUserUsingGET = function(login, callback) {
      var postBody = null;

      // verify the required parameter 'login' is set
      if (login == undefined || login == null) {
        throw "Missing the required parameter 'login' when calling getUserUsingGET";
      }


      var pathParams = {
        'login': login
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
      var returnType = ManagedUserDTO;

      return this.apiClient.callApi(
        '/api/users/{login}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUserUsingPUT operation.
     * @callback module:api/UserresourceApi~updateUserUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ManagedUserDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateUser
     * @param {module:model/ManagedUserDTO} managedUserDTO managedUserDTO
     * @param {module:api/UserresourceApi~updateUserUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ManagedUserDTO}
     */
    this.updateUserUsingPUT = function(managedUserDTO, callback) {
      var postBody = managedUserDTO;

      // verify the required parameter 'managedUserDTO' is set
      if (managedUserDTO == undefined || managedUserDTO == null) {
        throw "Missing the required parameter 'managedUserDTO' when calling updateUserUsingPUT";
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
      var returnType = ManagedUserDTO;

      return this.apiClient.callApi(
        '/api/users', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
