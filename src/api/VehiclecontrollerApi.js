(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SingleStringRequestDTO', 'model/BaseResult', 'model/VehicleInfoRequestDTO', 'model/ObdCodeDescListDTO', 'model/VehicleVoltageInfoDTO', 'model/VehicleBrandDTO', 'model/DisplacementDTO', 'model/VehicleInfoDTO', 'model/VehicleModelDTO', 'model/FactoryModelDTO', 'model/VehicleModelRequestDTO', 'model/ModelYearDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/SingleStringRequestDTO'), require('../model/BaseResult'), require('../model/VehicleInfoRequestDTO'), require('../model/ObdCodeDescListDTO'), require('../model/VehicleVoltageInfoDTO'), require('../model/VehicleBrandDTO'), require('../model/DisplacementDTO'), require('../model/VehicleInfoDTO'), require('../model/VehicleModelDTO'), require('../model/FactoryModelDTO'), require('../model/VehicleModelRequestDTO'), require('../model/ModelYearDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.VehiclecontrollerApi = factory(root.ContiEdge.ApiClient, root.ContiEdge.SingleStringRequestDTO, root.ContiEdge.BaseResult, root.ContiEdge.VehicleInfoRequestDTO, root.ContiEdge.ObdCodeDescListDTO, root.ContiEdge.VehicleVoltageInfoDTO, root.ContiEdge.VehicleBrandDTO, root.ContiEdge.DisplacementDTO, root.ContiEdge.VehicleInfoDTO, root.ContiEdge.VehicleModelDTO, root.ContiEdge.FactoryModelDTO, root.ContiEdge.VehicleModelRequestDTO, root.ContiEdge.ModelYearDTO);
  }
}(this, function(ApiClient, SingleStringRequestDTO, BaseResult, VehicleInfoRequestDTO, ObdCodeDescListDTO, VehicleVoltageInfoDTO, VehicleBrandDTO, DisplacementDTO, VehicleInfoDTO, VehicleModelDTO, FactoryModelDTO, VehicleModelRequestDTO, ModelYearDTO) {
  'use strict';

  /**
   * Vehiclecontroller service.
   * @module api/VehiclecontrollerApi
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new VehiclecontrollerApi. 
   * @alias module:api/VehiclecontrollerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the activeDeviceUsingPOST operation.
     * @callback module:api/VehiclecontrollerApi~activeDeviceUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * activeDevice
     * @param {module:model/SingleStringRequestDTO} imei imei
     * @param {module:api/VehiclecontrollerApi~activeDeviceUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BaseResult}
     */
    this.activeDeviceUsingPOST = function(imei, callback) {
      var postBody = imei;

      // verify the required parameter 'imei' is set
      if (imei == undefined || imei == null) {
        throw "Missing the required parameter 'imei' when calling activeDeviceUsingPOST";
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
        '/api/activeDevice', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the defaultShopUsingPOST operation.
     * @callback module:api/VehiclecontrollerApi~defaultShopUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * defaultShop
     * @param {module:model/VehicleInfoRequestDTO} body body
     * @param {module:api/VehiclecontrollerApi~defaultShopUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BaseResult}
     */
    this.defaultShopUsingPOST = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling defaultShopUsingPOST";
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
        '/api/defaultShop', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findObdCodeDescListUsingGET operation.
     * @callback module:api/VehiclecontrollerApi~findObdCodeDescListUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ObdCodeDescListDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * findObdCodeDescList
     * @param {String} vehicleGuid vehicleGuid
     * @param {module:api/VehiclecontrollerApi~findObdCodeDescListUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ObdCodeDescListDTO}
     */
    this.findObdCodeDescListUsingGET = function(vehicleGuid, callback) {
      var postBody = null;

      // verify the required parameter 'vehicleGuid' is set
      if (vehicleGuid == undefined || vehicleGuid == null) {
        throw "Missing the required parameter 'vehicleGuid' when calling findObdCodeDescListUsingGET";
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
      var returnType = ObdCodeDescListDTO;

      return this.apiClient.callApi(
        '/api/findObdCodeDescList', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getVehicleVoltageInfoUsingGET operation.
     * @callback module:api/VehiclecontrollerApi~getVehicleVoltageInfoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VehicleVoltageInfoDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getVehicleVoltageInfo
     * @param {String} vehicleGuid vehicleGuid
     * @param {module:api/VehiclecontrollerApi~getVehicleVoltageInfoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/VehicleVoltageInfoDTO}
     */
    this.getVehicleVoltageInfoUsingGET = function(vehicleGuid, callback) {
      var postBody = null;

      // verify the required parameter 'vehicleGuid' is set
      if (vehicleGuid == undefined || vehicleGuid == null) {
        throw "Missing the required parameter 'vehicleGuid' when calling getVehicleVoltageInfoUsingGET";
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
      var returnType = VehicleVoltageInfoDTO;

      return this.apiClient.callApi(
        '/api/getVehicleVoltageInfo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the recordOffUsingPOST operation.
     * @callback module:api/VehiclecontrollerApi~recordOffUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * recordOff
     * @param {module:model/SingleStringRequestDTO} vehicleGuid vehicleGuid
     * @param {module:api/VehiclecontrollerApi~recordOffUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BaseResult}
     */
    this.recordOffUsingPOST = function(vehicleGuid, callback) {
      var postBody = vehicleGuid;

      // verify the required parameter 'vehicleGuid' is set
      if (vehicleGuid == undefined || vehicleGuid == null) {
        throw "Missing the required parameter 'vehicleGuid' when calling recordOffUsingPOST";
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
        '/api/recordOff', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the recordOnUsingPOST operation.
     * @callback module:api/VehiclecontrollerApi~recordOnUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * recordOn
     * @param {module:model/SingleStringRequestDTO} vehicleGuid vehicleGuid
     * @param {module:api/VehiclecontrollerApi~recordOnUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BaseResult}
     */
    this.recordOnUsingPOST = function(vehicleGuid, callback) {
      var postBody = vehicleGuid;

      // verify the required parameter 'vehicleGuid' is set
      if (vehicleGuid == undefined || vehicleGuid == null) {
        throw "Missing the required parameter 'vehicleGuid' when calling recordOnUsingPOST";
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
        '/api/recordOn', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the vehicleBrandListUsingGET operation.
     * @callback module:api/VehiclecontrollerApi~vehicleBrandListUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VehicleBrandDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * vehicleBrandList
     * @param {module:api/VehiclecontrollerApi~vehicleBrandListUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/VehicleBrandDTO}
     */
    this.vehicleBrandListUsingGET = function(callback) {
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
      var returnType = VehicleBrandDTO;

      return this.apiClient.callApi(
        '/api/vehicleBrandList', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the vehicleDisplacementListUsingGET operation.
     * @callback module:api/VehiclecontrollerApi~vehicleDisplacementListUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DisplacementDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * vehicleDisplacementList
     * @param {Integer} modelId modelId
     * @param {module:api/VehiclecontrollerApi~vehicleDisplacementListUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DisplacementDTO}
     */
    this.vehicleDisplacementListUsingGET = function(modelId, callback) {
      var postBody = null;

      // verify the required parameter 'modelId' is set
      if (modelId == undefined || modelId == null) {
        throw "Missing the required parameter 'modelId' when calling vehicleDisplacementListUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'modelId': modelId
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DisplacementDTO;

      return this.apiClient.callApi(
        '/api/vehicleDisplacementList', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the vehicleInfoUsingGET operation.
     * @callback module:api/VehiclecontrollerApi~vehicleInfoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VehicleInfoDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * vehicleInfo
     * @param {String} vehicleGuid vehicleGuid
     * @param {module:api/VehiclecontrollerApi~vehicleInfoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/VehicleInfoDTO}
     */
    this.vehicleInfoUsingGET = function(vehicleGuid, callback) {
      var postBody = null;

      // verify the required parameter 'vehicleGuid' is set
      if (vehicleGuid == undefined || vehicleGuid == null) {
        throw "Missing the required parameter 'vehicleGuid' when calling vehicleInfoUsingGET";
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
      var returnType = VehicleInfoDTO;

      return this.apiClient.callApi(
        '/api/vehicleInfo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the vehicleInfoUsingPOST operation.
     * @callback module:api/VehiclecontrollerApi~vehicleInfoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VehicleInfoDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * vehicleInfo
     * @param {module:model/VehicleInfoRequestDTO} body body
     * @param {module:api/VehiclecontrollerApi~vehicleInfoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/VehicleInfoDTO}
     */
    this.vehicleInfoUsingPOST = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling vehicleInfoUsingPOST";
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
      var returnType = VehicleInfoDTO;

      return this.apiClient.callApi(
        '/api/vehicleInfo', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the vehicleModelListBakUsingGET operation.
     * @callback module:api/VehiclecontrollerApi~vehicleModelListBakUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VehicleModelDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * vehicleModelList_bak
     * @param {Integer} brandId brandId
     * @param {module:api/VehiclecontrollerApi~vehicleModelListBakUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/VehicleModelDTO}
     */
    this.vehicleModelListBakUsingGET = function(brandId, callback) {
      var postBody = null;

      // verify the required parameter 'brandId' is set
      if (brandId == undefined || brandId == null) {
        throw "Missing the required parameter 'brandId' when calling vehicleModelListBakUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'brandId': brandId
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = VehicleModelDTO;

      return this.apiClient.callApi(
        '/api/vehicleModelList_bak', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the vehicleModelListUsingGET operation.
     * @callback module:api/VehiclecontrollerApi~vehicleModelListUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FactoryModelDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * vehicleModelList
     * @param {Integer} brandId brandId
     * @param {module:api/VehiclecontrollerApi~vehicleModelListUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FactoryModelDTO}
     */
    this.vehicleModelListUsingGET = function(brandId, callback) {
      var postBody = null;

      // verify the required parameter 'brandId' is set
      if (brandId == undefined || brandId == null) {
        throw "Missing the required parameter 'brandId' when calling vehicleModelListUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'brandId': brandId
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FactoryModelDTO;

      return this.apiClient.callApi(
        '/api/vehicleModelList', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the vehicleModelUsingPOST operation.
     * @callback module:api/VehiclecontrollerApi~vehicleModelUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VehicleModelDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * vehicleModel
     * @param {module:model/VehicleModelRequestDTO} body body
     * @param {module:api/VehiclecontrollerApi~vehicleModelUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/VehicleModelDTO}
     */
    this.vehicleModelUsingPOST = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling vehicleModelUsingPOST";
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
      var returnType = VehicleModelDTO;

      return this.apiClient.callApi(
        '/api/vehicleModel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the vehicleModelYearListUsingGET operation.
     * @callback module:api/VehiclecontrollerApi~vehicleModelYearListUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelYearDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * vehicleModelYearList
     * @param {Integer} modelId modelId
     * @param {module:api/VehiclecontrollerApi~vehicleModelYearListUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ModelYearDTO}
     */
    this.vehicleModelYearListUsingGET = function(modelId, callback) {
      var postBody = null;

      // verify the required parameter 'modelId' is set
      if (modelId == undefined || modelId == null) {
        throw "Missing the required parameter 'modelId' when calling vehicleModelYearListUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'modelId': modelId
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelYearDTO;

      return this.apiClient.callApi(
        '/api/vehicleModelYearList', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
