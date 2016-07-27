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
    root.ContiEdge.VehicleInfo = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VehicleInfo model module.
   * @module model/VehicleInfo
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>VehicleInfo</code>.
   * @alias module:model/VehicleInfo
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>VehicleInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VehicleInfo} obj Optional instance to populate.
   * @return {module:model/VehicleInfo} The populated <code>VehicleInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bindDeviceId')) {
        obj['bindDeviceId'] = ApiClient.convertToType(data['bindDeviceId'], 'Integer');
      }
      if (data.hasOwnProperty('defaultShop')) {
        obj['defaultShop'] = ApiClient.convertToType(data['defaultShop'], 'Integer');
      }
      if (data.hasOwnProperty('displacement')) {
        obj['displacement'] = ApiClient.convertToType(data['displacement'], 'String');
      }
      if (data.hasOwnProperty('engineNumber')) {
        obj['engineNumber'] = ApiClient.convertToType(data['engineNumber'], 'String');
      }
      if (data.hasOwnProperty('insuranceCompanyId')) {
        obj['insuranceCompanyId'] = ApiClient.convertToType(data['insuranceCompanyId'], 'Integer');
      }
      if (data.hasOwnProperty('isBind')) {
        obj['isBind'] = ApiClient.convertToType(data['isBind'], 'String');
      }
      if (data.hasOwnProperty('modelYear')) {
        obj['modelYear'] = ApiClient.convertToType(data['modelYear'], 'String');
      }
      if (data.hasOwnProperty('plateNumber')) {
        obj['plateNumber'] = ApiClient.convertToType(data['plateNumber'], 'String');
      }
      if (data.hasOwnProperty('recordSwitch')) {
        obj['recordSwitch'] = ApiClient.convertToType(data['recordSwitch'], 'String');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'Integer');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'Integer');
      }
      if (data.hasOwnProperty('valid')) {
        obj['valid'] = ApiClient.convertToType(data['valid'], 'String');
      }
      if (data.hasOwnProperty('vehicleGuid')) {
        obj['vehicleGuid'] = ApiClient.convertToType(data['vehicleGuid'], 'String');
      }
      if (data.hasOwnProperty('vehicleModelUid')) {
        obj['vehicleModelUid'] = ApiClient.convertToType(data['vehicleModelUid'], 'Integer');
      }
      if (data.hasOwnProperty('vehicleType')) {
        obj['vehicleType'] = ApiClient.convertToType(data['vehicleType'], 'String');
      }
      if (data.hasOwnProperty('vin')) {
        obj['vin'] = ApiClient.convertToType(data['vin'], 'String');
      }
      if (data.hasOwnProperty('vinFromFlag')) {
        obj['vinFromFlag'] = ApiClient.convertToType(data['vinFromFlag'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} bindDeviceId
   */
  exports.prototype['bindDeviceId'] = undefined;
  /**
   * @member {Integer} defaultShop
   */
  exports.prototype['defaultShop'] = undefined;
  /**
   * @member {String} displacement
   */
  exports.prototype['displacement'] = undefined;
  /**
   * @member {String} engineNumber
   */
  exports.prototype['engineNumber'] = undefined;
  /**
   * @member {Integer} insuranceCompanyId
   */
  exports.prototype['insuranceCompanyId'] = undefined;
  /**
   * @member {String} isBind
   */
  exports.prototype['isBind'] = undefined;
  /**
   * @member {String} modelYear
   */
  exports.prototype['modelYear'] = undefined;
  /**
   * @member {String} plateNumber
   */
  exports.prototype['plateNumber'] = undefined;
  /**
   * @member {String} recordSwitch
   */
  exports.prototype['recordSwitch'] = undefined;
  /**
   * @member {Integer} uid
   */
  exports.prototype['uid'] = undefined;
  /**
   * @member {Integer} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * @member {String} valid
   */
  exports.prototype['valid'] = undefined;
  /**
   * @member {String} vehicleGuid
   */
  exports.prototype['vehicleGuid'] = undefined;
  /**
   * @member {Integer} vehicleModelUid
   */
  exports.prototype['vehicleModelUid'] = undefined;
  /**
   * @member {String} vehicleType
   */
  exports.prototype['vehicleType'] = undefined;
  /**
   * @member {String} vin
   */
  exports.prototype['vin'] = undefined;
  /**
   * @member {String} vinFromFlag
   */
  exports.prototype['vinFromFlag'] = undefined;




  return exports;
}));


