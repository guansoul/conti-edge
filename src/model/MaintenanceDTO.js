(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/MaintenanceItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MaintenanceItem'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.MaintenanceDTO = factory(root.ContiEdge.ApiClient, root.ContiEdge.MaintenanceItem);
  }
}(this, function(ApiClient, MaintenanceItem) {
  'use strict';




  /**
   * The MaintenanceDTO model module.
   * @module model/MaintenanceDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>MaintenanceDTO</code>.
   * @alias module:model/MaintenanceDTO
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>MaintenanceDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MaintenanceDTO} obj Optional instance to populate.
   * @return {module:model/MaintenanceDTO} The populated <code>MaintenanceDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('distance')) {
        obj['distance'] = ApiClient.convertToType(data['distance'], 'Integer');
      }
      if (data.hasOwnProperty('maintenanceItemList')) {
        obj['maintenanceItemList'] = ApiClient.convertToType(data['maintenanceItemList'], [MaintenanceItem]);
      }
      if (data.hasOwnProperty('nextMaintenanceFlag')) {
        obj['nextMaintenanceFlag'] = ApiClient.convertToType(data['nextMaintenanceFlag'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} distance
   */
  exports.prototype['distance'] = undefined;
  /**
   * @member {Array.<module:model/MaintenanceItem>} maintenanceItemList
   */
  exports.prototype['maintenanceItemList'] = undefined;
  /**
   * @member {Integer} nextMaintenanceFlag
   */
  exports.prototype['nextMaintenanceFlag'] = undefined;




  return exports;
}));


