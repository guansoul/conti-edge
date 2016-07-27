(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InsuranceCompanyInfoDTO', 'model/InsuranceCompanyDTO', 'model/BaseResult', 'model/InsuranceCompanyRequestDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InsuranceCompanyInfoDTO'), require('../model/InsuranceCompanyDTO'), require('../model/BaseResult'), require('../model/InsuranceCompanyRequestDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.InsurancecompanycontrollerApi = factory(root.ContiEdge.ApiClient, root.ContiEdge.InsuranceCompanyInfoDTO, root.ContiEdge.InsuranceCompanyDTO, root.ContiEdge.BaseResult, root.ContiEdge.InsuranceCompanyRequestDTO);
  }
}(this, function(ApiClient, InsuranceCompanyInfoDTO, InsuranceCompanyDTO, BaseResult, InsuranceCompanyRequestDTO) {
  'use strict';

  /**
   * Insurancecompanycontroller service.
   * @module api/InsurancecompanycontrollerApi
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new InsurancecompanycontrollerApi. 
   * @alias module:api/InsurancecompanycontrollerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the insuranceCompanyInfoUsingGET operation.
     * @callback module:api/InsurancecompanycontrollerApi~insuranceCompanyInfoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InsuranceCompanyInfoDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get one insurance company info,to default company the flag is 1 
     * @param {Object} opts Optional parameters
     * @param {String} opts.vehicleGuid vehicleGuid is optional
     * @param {Integer} opts.insuranceCompanyId insuranceCompanyId is required
     * @param {module:api/InsurancecompanycontrollerApi~insuranceCompanyInfoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InsuranceCompanyInfoDTO}
     */
    this.insuranceCompanyInfoUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'vehicleGuid': opts['vehicleGuid'],
        'insuranceCompanyId': opts['insuranceCompanyId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InsuranceCompanyInfoDTO;

      return this.apiClient.callApi(
        '/api/insuranceCompanyInfo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listInsuranceCompanyUsingGET operation.
     * @callback module:api/InsurancecompanycontrollerApi~listInsuranceCompanyUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InsuranceCompanyDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get all insurance company ,default company is the first
     * @param {Object} opts Optional parameters
     * @param {String} opts.vehicleGuid vehicleGuid is optional
     * @param {module:api/InsurancecompanycontrollerApi~listInsuranceCompanyUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InsuranceCompanyDTO}
     */
    this.listInsuranceCompanyUsingGET = function(opts, callback) {
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
      var returnType = InsuranceCompanyDTO;

      return this.apiClient.callApi(
        '/api/insuranceCompanyList', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setDefaultInsuranceCompanyUsingPOST operation.
     * @callback module:api/InsurancecompanycontrollerApi~setDefaultInsuranceCompanyUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * clear default company and set default company
     * @param {Object} opts Optional parameters
     * @param {module:model/InsuranceCompanyRequestDTO} opts.body vehicleGuid is required
     * @param {module:api/InsurancecompanycontrollerApi~setDefaultInsuranceCompanyUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BaseResult}
     */
    this.setDefaultInsuranceCompanyUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];


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
        '/api/setDefaultInsuranceCompany', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
