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
    root.ContiEdge.RepairItem = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RepairItem model module.
   * @module model/RepairItem
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>RepairItem</code>.
   * @alias module:model/RepairItem
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>RepairItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RepairItem} obj Optional instance to populate.
   * @return {module:model/RepairItem} The populated <code>RepairItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('faultCode')) {
        obj['faultCode'] = ApiClient.convertToType(data['faultCode'], 'String');
      }
      if (data.hasOwnProperty('repairDesc')) {
        obj['repairDesc'] = ApiClient.convertToType(data['repairDesc'], 'String');
      }
      if (data.hasOwnProperty('repairName')) {
        obj['repairName'] = ApiClient.convertToType(data['repairName'], 'String');
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
   * @member {String} faultCode
   */
  exports.prototype['faultCode'] = undefined;
  /**
   * @member {String} repairDesc
   */
  exports.prototype['repairDesc'] = undefined;
  /**
   * @member {String} repairName
   */
  exports.prototype['repairName'] = undefined;
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


