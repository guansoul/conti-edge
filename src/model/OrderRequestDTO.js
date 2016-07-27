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
    root.ContiEdge.OrderRequestDTO = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OrderRequestDTO model module.
   * @module model/OrderRequestDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>OrderRequestDTO</code>.
   * @alias module:model/OrderRequestDTO
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>OrderRequestDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderRequestDTO} obj Optional instance to populate.
   * @return {module:model/OrderRequestDTO} The populated <code>OrderRequestDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('beautyItemList')) {
        obj['beautyItemList'] = ApiClient.convertToType(data['beautyItemList'], ['Integer']);
      }
      if (data.hasOwnProperty('bookEndTimeLong')) {
        obj['bookEndTimeLong'] = ApiClient.convertToType(data['bookEndTimeLong'], 'Integer');
      }
      if (data.hasOwnProperty('bookStartTimeLong')) {
        obj['bookStartTimeLong'] = ApiClient.convertToType(data['bookStartTimeLong'], 'Integer');
      }
      if (data.hasOwnProperty('maintenanceItemList')) {
        obj['maintenanceItemList'] = ApiClient.convertToType(data['maintenanceItemList'], ['Integer']);
      }
      if (data.hasOwnProperty('otherItemList')) {
        obj['otherItemList'] = ApiClient.convertToType(data['otherItemList'], ['Integer']);
      }
      if (data.hasOwnProperty('repairItemList')) {
        obj['repairItemList'] = ApiClient.convertToType(data['repairItemList'], ['Integer']);
      }
      if (data.hasOwnProperty('shopId')) {
        obj['shopId'] = ApiClient.convertToType(data['shopId'], 'Integer');
      }
      if (data.hasOwnProperty('tireItemList')) {
        obj['tireItemList'] = ApiClient.convertToType(data['tireItemList'], ['Integer']);
      }
      if (data.hasOwnProperty('vehicleGuid')) {
        obj['vehicleGuid'] = ApiClient.convertToType(data['vehicleGuid'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<Integer>} beautyItemList
   */
  exports.prototype['beautyItemList'] = undefined;
  /**
   * @member {Integer} bookEndTimeLong
   */
  exports.prototype['bookEndTimeLong'] = undefined;
  /**
   * @member {Integer} bookStartTimeLong
   */
  exports.prototype['bookStartTimeLong'] = undefined;
  /**
   * @member {Array.<Integer>} maintenanceItemList
   */
  exports.prototype['maintenanceItemList'] = undefined;
  /**
   * @member {Array.<Integer>} otherItemList
   */
  exports.prototype['otherItemList'] = undefined;
  /**
   * @member {Array.<Integer>} repairItemList
   */
  exports.prototype['repairItemList'] = undefined;
  /**
   * @member {Integer} shopId
   */
  exports.prototype['shopId'] = undefined;
  /**
   * @member {Array.<Integer>} tireItemList
   */
  exports.prototype['tireItemList'] = undefined;
  /**
   * @member {String} vehicleGuid
   */
  exports.prototype['vehicleGuid'] = undefined;




  return exports;
}));


