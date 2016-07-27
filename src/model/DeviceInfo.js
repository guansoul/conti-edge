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
    root.ContiEdge.DeviceInfo = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeviceInfo model module.
   * @module model/DeviceInfo
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>DeviceInfo</code>.
   * @alias module:model/DeviceInfo
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>DeviceInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceInfo} obj Optional instance to populate.
   * @return {module:model/DeviceInfo} The populated <code>DeviceInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('activationTime')) {
        obj['activationTime'] = ApiClient.convertToType(data['activationTime'], 'Integer');
      }
      if (data.hasOwnProperty('createUser')) {
        obj['createUser'] = ApiClient.convertToType(data['createUser'], 'String');
      }
      if (data.hasOwnProperty('deviceId')) {
        obj['deviceId'] = ApiClient.convertToType(data['deviceId'], 'String');
      }
      if (data.hasOwnProperty('deviceSubType')) {
        obj['deviceSubType'] = ApiClient.convertToType(data['deviceSubType'], 'String');
      }
      if (data.hasOwnProperty('deviceType')) {
        obj['deviceType'] = ApiClient.convertToType(data['deviceType'], 'String');
      }
      if (data.hasOwnProperty('firmwareVersion')) {
        obj['firmwareVersion'] = ApiClient.convertToType(data['firmwareVersion'], 'String');
      }
      if (data.hasOwnProperty('hardwareVersion')) {
        obj['hardwareVersion'] = ApiClient.convertToType(data['hardwareVersion'], 'String');
      }
      if (data.hasOwnProperty('imei')) {
        obj['imei'] = ApiClient.convertToType(data['imei'], 'String');
      }
      if (data.hasOwnProperty('modifyUser')) {
        obj['modifyUser'] = ApiClient.convertToType(data['modifyUser'], 'String');
      }
      if (data.hasOwnProperty('simIccid')) {
        obj['simIccid'] = ApiClient.convertToType(data['simIccid'], 'String');
      }
      if (data.hasOwnProperty('simPhoneNumber')) {
        obj['simPhoneNumber'] = ApiClient.convertToType(data['simPhoneNumber'], 'String');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} activationTime
   */
  exports.prototype['activationTime'] = undefined;
  /**
   * @member {String} createUser
   */
  exports.prototype['createUser'] = undefined;
  /**
   * @member {String} deviceId
   */
  exports.prototype['deviceId'] = undefined;
  /**
   * @member {String} deviceSubType
   */
  exports.prototype['deviceSubType'] = undefined;
  /**
   * @member {String} deviceType
   */
  exports.prototype['deviceType'] = undefined;
  /**
   * @member {String} firmwareVersion
   */
  exports.prototype['firmwareVersion'] = undefined;
  /**
   * @member {String} hardwareVersion
   */
  exports.prototype['hardwareVersion'] = undefined;
  /**
   * @member {String} imei
   */
  exports.prototype['imei'] = undefined;
  /**
   * @member {String} modifyUser
   */
  exports.prototype['modifyUser'] = undefined;
  /**
   * @member {String} simIccid
   */
  exports.prototype['simIccid'] = undefined;
  /**
   * @member {String} simPhoneNumber
   */
  exports.prototype['simPhoneNumber'] = undefined;
  /**
   * @member {Integer} uid
   */
  exports.prototype['uid'] = undefined;




  return exports;
}));


