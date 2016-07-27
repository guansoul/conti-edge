(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BaseResult', 'model/SingleStringRequestDTO', 'model/UploadAvatarDTO', 'model/UserInfoDTO', 'model/UserInfoRequestDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BaseResult'), require('../model/SingleStringRequestDTO'), require('../model/UploadAvatarDTO'), require('../model/UserInfoDTO'), require('../model/UserInfoRequestDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.UsercontrollerApi = factory(root.ContiEdge.ApiClient, root.ContiEdge.BaseResult, root.ContiEdge.SingleStringRequestDTO, root.ContiEdge.UploadAvatarDTO, root.ContiEdge.UserInfoDTO, root.ContiEdge.UserInfoRequestDTO);
  }
}(this, function(ApiClient, BaseResult, SingleStringRequestDTO, UploadAvatarDTO, UserInfoDTO, UserInfoRequestDTO) {
  'use strict';

  /**
   * Usercontroller service.
   * @module api/UsercontrollerApi
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new UsercontrollerApi. 
   * @alias module:api/UsercontrollerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCodeForUpdatePhoneNumberUsingGET operation.
     * @callback module:api/UsercontrollerApi~getCodeForUpdatePhoneNumberUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getCodeForUpdatePhoneNumber
     * @param {String} phoneNo phoneNo
     * @param {module:api/UsercontrollerApi~getCodeForUpdatePhoneNumberUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BaseResult}
     */
    this.getCodeForUpdatePhoneNumberUsingGET = function(phoneNo, callback) {
      var postBody = null;

      // verify the required parameter 'phoneNo' is set
      if (phoneNo == undefined || phoneNo == null) {
        throw "Missing the required parameter 'phoneNo' when calling getCodeForUpdatePhoneNumberUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'phoneNo': phoneNo
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = BaseResult;

      return this.apiClient.callApi(
        '/api/getCodeForUpdatePhoneNumber', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCodeUsingGET operation.
     * @callback module:api/UsercontrollerApi~getCodeUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getCode
     * @param {String} phoneNo phoneNo
     * @param {Object} opts Optional parameters
     * @param {String} opts.captcha captcha
     * @param {module:api/UsercontrollerApi~getCodeUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BaseResult}
     */
    this.getCodeUsingGET = function(phoneNo, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'phoneNo' is set
      if (phoneNo == undefined || phoneNo == null) {
        throw "Missing the required parameter 'phoneNo' when calling getCodeUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'phoneNo': phoneNo,
        'captcha': opts['captcha']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = BaseResult;

      return this.apiClient.callApi(
        '/api/getCode', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the needCaptchaUsingGET operation.
     * @callback module:api/UsercontrollerApi~needCaptchaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * needCaptcha
     * @param {module:api/UsercontrollerApi~needCaptchaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BaseResult}
     */
    this.needCaptchaUsingGET = function(callback) {
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
      var accepts = ['*/*'];
      var returnType = BaseResult;

      return this.apiClient.callApi(
        '/api/needCaptcha', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the refreshCaptchaUsingGET operation.
     * @callback module:api/UsercontrollerApi~refreshCaptchaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * refreshCaptcha
     * @param {module:api/UsercontrollerApi~refreshCaptchaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.refreshCaptchaUsingGET = function(callback) {
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
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/refreshCaptcha', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateDeviceTokenUsingGET operation.
     * @callback module:api/UsercontrollerApi~updateDeviceTokenUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateDeviceToken
     * @param {String} token token
     * @param {module:api/UsercontrollerApi~updateDeviceTokenUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BaseResult}
     */
    this.updateDeviceTokenUsingGET = function(token, callback) {
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling updateDeviceTokenUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'token': token
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
        '/api/updateDeviceToken', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePhoneNumberUsingPOST operation.
     * @callback module:api/UsercontrollerApi~updatePhoneNumberUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updatePhoneNumber
     * @param {module:model/SingleStringRequestDTO} stringDto stringDto
     * @param {module:api/UsercontrollerApi~updatePhoneNumberUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BaseResult}
     */
    this.updatePhoneNumberUsingPOST = function(stringDto, callback) {
      var postBody = stringDto;

      // verify the required parameter 'stringDto' is set
      if (stringDto == undefined || stringDto == null) {
        throw "Missing the required parameter 'stringDto' when calling updatePhoneNumberUsingPOST";
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
      var accepts = ['*/*'];
      var returnType = BaseResult;

      return this.apiClient.callApi(
        '/api/updatePhoneNumber', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadAvatarUsingPOST operation.
     * @callback module:api/UsercontrollerApi~uploadAvatarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UploadAvatarDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * uploadAvatar
     * @param {module:model/SingleStringRequestDTO} body body
     * @param {module:api/UsercontrollerApi~uploadAvatarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UploadAvatarDTO}
     */
    this.uploadAvatarUsingPOST = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling uploadAvatarUsingPOST";
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
      var accepts = ['*/*'];
      var returnType = UploadAvatarDTO;

      return this.apiClient.callApi(
        '/api/uploadAvatar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userInfoUsingGET operation.
     * @callback module:api/UsercontrollerApi~userInfoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserInfoDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * userInfo
     * @param {module:api/UsercontrollerApi~userInfoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UserInfoDTO}
     */
    this.userInfoUsingGET = function(callback) {
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
      var returnType = UserInfoDTO;

      return this.apiClient.callApi(
        '/api/userInfo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userInfoUsingPOST operation.
     * @callback module:api/UsercontrollerApi~userInfoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * userInfo
     * @param {module:model/UserInfoRequestDTO} body body
     * @param {module:api/UsercontrollerApi~userInfoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BaseResult}
     */
    this.userInfoUsingPOST = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling userInfoUsingPOST";
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
        '/api/userInfo', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
