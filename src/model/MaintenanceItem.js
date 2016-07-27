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
    root.ContiEdge.MaintenanceItem = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MaintenanceItem model module.
   * @module model/MaintenanceItem
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>MaintenanceItem</code>.
   * @alias module:model/MaintenanceItem
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>MaintenanceItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MaintenanceItem} obj Optional instance to populate.
   * @return {module:model/MaintenanceItem} The populated <code>MaintenanceItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('itemDesc')) {
        obj['itemDesc'] = ApiClient.convertToType(data['itemDesc'], 'String');
      }
      if (data.hasOwnProperty('itemDistance')) {
        obj['itemDistance'] = ApiClient.convertToType(data['itemDistance'], 'Integer');
      }
      if (data.hasOwnProperty('itemDuration')) {
        obj['itemDuration'] = ApiClient.convertToType(data['itemDuration'], 'Integer');
      }
      if (data.hasOwnProperty('itemId')) {
        obj['itemId'] = ApiClient.convertToType(data['itemId'], 'Integer');
      }
      if (data.hasOwnProperty('itemName')) {
        obj['itemName'] = ApiClient.convertToType(data['itemName'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'Integer');
      }
      if (data.hasOwnProperty('vehicleModelUid')) {
        obj['vehicleModelUid'] = ApiClient.convertToType(data['vehicleModelUid'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {String} itemDesc
   */
  exports.prototype['itemDesc'] = undefined;
  /**
   * @member {Integer} itemDistance
   */
  exports.prototype['itemDistance'] = undefined;
  /**
   * @member {Integer} itemDuration
   */
  exports.prototype['itemDuration'] = undefined;
  /**
   * @member {Integer} itemId
   */
  exports.prototype['itemId'] = undefined;
  /**
   * @member {String} itemName
   */
  exports.prototype['itemName'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Integer} uid
   */
  exports.prototype['uid'] = undefined;
  /**
   * @member {Integer} vehicleModelUid
   */
  exports.prototype['vehicleModelUid'] = undefined;




  return exports;
}));


