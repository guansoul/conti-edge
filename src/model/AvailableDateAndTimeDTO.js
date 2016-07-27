(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AvailableDateAndTime', 'model/ObjectError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AvailableDateAndTime'), require('./ObjectError'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.AvailableDateAndTimeDTO = factory(root.ContiEdge.ApiClient, root.ContiEdge.AvailableDateAndTime, root.ContiEdge.ObjectError);
  }
}(this, function(ApiClient, AvailableDateAndTime, ObjectError) {
  'use strict';




  /**
   * The AvailableDateAndTimeDTO model module.
   * @module model/AvailableDateAndTimeDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>AvailableDateAndTimeDTO</code>.
   * @alias module:model/AvailableDateAndTimeDTO
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>AvailableDateAndTimeDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AvailableDateAndTimeDTO} obj Optional instance to populate.
   * @return {module:model/AvailableDateAndTimeDTO} The populated <code>AvailableDateAndTimeDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allError')) {
        obj['allError'] = ApiClient.convertToType(data['allError'], [ObjectError]);
      }
      if (data.hasOwnProperty('availableDateAndTimeList')) {
        obj['availableDateAndTimeList'] = ApiClient.convertToType(data['availableDateAndTimeList'], [AvailableDateAndTime]);
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
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ObjectError>} allError
   */
  exports.prototype['allError'] = undefined;
  /**
   * @member {Array.<module:model/AvailableDateAndTime>} availableDateAndTimeList
   */
  exports.prototype['availableDateAndTimeList'] = undefined;
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




  return exports;
}));


