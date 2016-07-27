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
    root.ContiEdge.VehicleVoltageThresholdDTO = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VehicleVoltageThresholdDTO model module.
   * @module model/VehicleVoltageThresholdDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>VehicleVoltageThresholdDTO</code>.
   * @alias module:model/VehicleVoltageThresholdDTO
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>VehicleVoltageThresholdDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VehicleVoltageThresholdDTO} obj Optional instance to populate.
   * @return {module:model/VehicleVoltageThresholdDTO} The populated <code>VehicleVoltageThresholdDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('thresholdValue')) {
        obj['thresholdValue'] = ApiClient.convertToType(data['thresholdValue'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} thresholdValue
   */
  exports.prototype['thresholdValue'] = undefined;




  return exports;
}));


