(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ObjectError', 'model/VehicleBrandItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ObjectError'), require('./VehicleBrandItem'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.VehicleBrandDTO = factory(root.ContiEdge.ApiClient, root.ContiEdge.ObjectError, root.ContiEdge.VehicleBrandItem);
  }
}(this, function(ApiClient, ObjectError, VehicleBrandItem) {
  'use strict';




  /**
   * The VehicleBrandDTO model module.
   * @module model/VehicleBrandDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>VehicleBrandDTO</code>.
   * @alias module:model/VehicleBrandDTO
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>VehicleBrandDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VehicleBrandDTO} obj Optional instance to populate.
   * @return {module:model/VehicleBrandDTO} The populated <code>VehicleBrandDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allError')) {
        obj['allError'] = ApiClient.convertToType(data['allError'], [ObjectError]);
      }
      if (data.hasOwnProperty('brandList')) {
        obj['brandList'] = ApiClient.convertToType(data['brandList'], [VehicleBrandItem]);
      }
      if (data.hasOwnProperty('forwardURL')) {
        obj['forwardURL'] = ApiClient.convertToType(data['forwardURL'], 'String');
      }
      if (data.hasOwnProperty('hotBrandList')) {
        obj['hotBrandList'] = ApiClient.convertToType(data['hotBrandList'], [VehicleBrandItem]);
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
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ObjectError>} allError
   */
  exports.prototype['allError'] = undefined;
  /**
   * @member {Array.<module:model/VehicleBrandItem>} brandList
   */
  exports.prototype['brandList'] = undefined;
  /**
   * @member {String} forwardURL
   */
  exports.prototype['forwardURL'] = undefined;
  /**
   * @member {Array.<module:model/VehicleBrandItem>} hotBrandList
   */
  exports.prototype['hotBrandList'] = undefined;
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




  return exports;
}));


