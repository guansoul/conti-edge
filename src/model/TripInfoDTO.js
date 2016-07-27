(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ObjectError', 'model/TripInfo', 'model/TripPositionSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ObjectError'), require('./TripInfo'), require('./TripPositionSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.TripInfoDTO = factory(root.ContiEdge.ApiClient, root.ContiEdge.ObjectError, root.ContiEdge.TripInfo, root.ContiEdge.TripPositionSummary);
  }
}(this, function(ApiClient, ObjectError, TripInfo, TripPositionSummary) {
  'use strict';




  /**
   * The TripInfoDTO model module.
   * @module model/TripInfoDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>TripInfoDTO</code>.
   * @alias module:model/TripInfoDTO
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>TripInfoDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TripInfoDTO} obj Optional instance to populate.
   * @return {module:model/TripInfoDTO} The populated <code>TripInfoDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

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
      if (data.hasOwnProperty('tripInfo')) {
        obj['tripInfo'] = TripInfo.constructFromObject(data['tripInfo']);
      }
      if (data.hasOwnProperty('tripPositionSummaryList')) {
        obj['tripPositionSummaryList'] = ApiClient.convertToType(data['tripPositionSummaryList'], [TripPositionSummary]);
      }
    }
    return obj;
  }

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
   * @member {module:model/TripInfo} tripInfo
   */
  exports.prototype['tripInfo'] = undefined;
  /**
   * @member {Array.<module:model/TripPositionSummary>} tripPositionSummaryList
   */
  exports.prototype['tripPositionSummaryList'] = undefined;




  return exports;
}));


