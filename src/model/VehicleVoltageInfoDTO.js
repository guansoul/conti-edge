(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ObjectError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ObjectError'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.VehicleVoltageInfoDTO = factory(root.ContiEdge.ApiClient, root.ContiEdge.ObjectError);
  }
}(this, function(ApiClient, ObjectError) {
  'use strict';




  /**
   * The VehicleVoltageInfoDTO model module.
   * @module model/VehicleVoltageInfoDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>VehicleVoltageInfoDTO</code>.
   * @alias module:model/VehicleVoltageInfoDTO
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>VehicleVoltageInfoDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VehicleVoltageInfoDTO} obj Optional instance to populate.
   * @return {module:model/VehicleVoltageInfoDTO} The populated <code>VehicleVoltageInfoDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('alarmLevel')) {
        obj['alarmLevel'] = ApiClient.convertToType(data['alarmLevel'], 'Integer');
      }
      if (data.hasOwnProperty('allError')) {
        obj['allError'] = ApiClient.convertToType(data['allError'], [ObjectError]);
      }
      if (data.hasOwnProperty('forwardURL')) {
        obj['forwardURL'] = ApiClient.convertToType(data['forwardURL'], 'String');
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
      if (data.hasOwnProperty('voltage')) {
        obj['voltage'] = ApiClient.convertToType(data['voltage'], 'Integer');
      }
      if (data.hasOwnProperty('voltageThreshold')) {
        obj['voltageThreshold'] = ApiClient.convertToType(data['voltageThreshold'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} alarmLevel
   */
  exports.prototype['alarmLevel'] = undefined;
  /**
   * @member {Array.<module:model/ObjectError>} allError
   */
  exports.prototype['allError'] = undefined;
  /**
   * @member {String} forwardURL
   */
  exports.prototype['forwardURL'] = undefined;
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
   * @member {Integer} voltage
   */
  exports.prototype['voltage'] = undefined;
  /**
   * @member {Number} voltageThreshold
   */
  exports.prototype['voltageThreshold'] = undefined;




  return exports;
}));


