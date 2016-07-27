(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelVo', 'model/ObjectError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelVo'), require('./ObjectError'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.VehicleModelDTO = factory(root.ContiEdge.ApiClient, root.ContiEdge.ModelVo, root.ContiEdge.ObjectError);
  }
}(this, function(ApiClient, ModelVo, ObjectError) {
  'use strict';




  /**
   * The VehicleModelDTO model module.
   * @module model/VehicleModelDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>VehicleModelDTO</code>.
   * @alias module:model/VehicleModelDTO
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>VehicleModelDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VehicleModelDTO} obj Optional instance to populate.
   * @return {module:model/VehicleModelDTO} The populated <code>VehicleModelDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allError')) {
        obj['allError'] = ApiClient.convertToType(data['allError'], [ObjectError]);
      }
      if (data.hasOwnProperty('brandId')) {
        obj['brandId'] = ApiClient.convertToType(data['brandId'], 'Integer');
      }
      if (data.hasOwnProperty('brandName')) {
        obj['brandName'] = ApiClient.convertToType(data['brandName'], 'String');
      }
      if (data.hasOwnProperty('brandPicUrl')) {
        obj['brandPicUrl'] = ApiClient.convertToType(data['brandPicUrl'], 'String');
      }
      if (data.hasOwnProperty('forwardURL')) {
        obj['forwardURL'] = ApiClient.convertToType(data['forwardURL'], 'String');
      }
      if (data.hasOwnProperty('index')) {
        obj['index'] = ApiClient.convertToType(data['index'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('messageCode')) {
        obj['messageCode'] = ApiClient.convertToType(data['messageCode'], 'String');
      }
      if (data.hasOwnProperty('resultCode')) {
        obj['resultCode'] = ApiClient.convertToType(data['resultCode'], 'Integer');
      }
      if (data.hasOwnProperty('vehicleModelId')) {
        obj['vehicleModelId'] = ApiClient.convertToType(data['vehicleModelId'], 'Integer');
      }
      if (data.hasOwnProperty('vehicleModelList')) {
        obj['vehicleModelList'] = ApiClient.convertToType(data['vehicleModelList'], [ModelVo]);
      }
      if (data.hasOwnProperty('vehicleModelName')) {
        obj['vehicleModelName'] = ApiClient.convertToType(data['vehicleModelName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ObjectError>} allError
   */
  exports.prototype['allError'] = undefined;
  /**
   * @member {Integer} brandId
   */
  exports.prototype['brandId'] = undefined;
  /**
   * @member {String} brandName
   */
  exports.prototype['brandName'] = undefined;
  /**
   * @member {String} brandPicUrl
   */
  exports.prototype['brandPicUrl'] = undefined;
  /**
   * @member {String} forwardURL
   */
  exports.prototype['forwardURL'] = undefined;
  /**
   * @member {String} index
   */
  exports.prototype['index'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {String} messageCode
   */
  exports.prototype['messageCode'] = undefined;
  /**
   * @member {Integer} resultCode
   */
  exports.prototype['resultCode'] = undefined;
  /**
   * @member {Integer} vehicleModelId
   */
  exports.prototype['vehicleModelId'] = undefined;
  /**
   * @member {Array.<module:model/ModelVo>} vehicleModelList
   */
  exports.prototype['vehicleModelList'] = undefined;
  /**
   * @member {String} vehicleModelName
   */
  exports.prototype['vehicleModelName'] = undefined;




  return exports;
}));


