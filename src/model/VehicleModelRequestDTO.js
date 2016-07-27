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
    root.ContiEdge.VehicleModelRequestDTO = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VehicleModelRequestDTO model module.
   * @module model/VehicleModelRequestDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>VehicleModelRequestDTO</code>.
   * @alias module:model/VehicleModelRequestDTO
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>VehicleModelRequestDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VehicleModelRequestDTO} obj Optional instance to populate.
   * @return {module:model/VehicleModelRequestDTO} The populated <code>VehicleModelRequestDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('vehicleGuid')) {
        obj['vehicleGuid'] = ApiClient.convertToType(data['vehicleGuid'], 'String');
      }
      if (data.hasOwnProperty('vehicleModelId')) {
        obj['vehicleModelId'] = ApiClient.convertToType(data['vehicleModelId'], 'Integer');
      }
      if (data.hasOwnProperty('vin')) {
        obj['vin'] = ApiClient.convertToType(data['vin'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} vehicleGuid
   */
  exports.prototype['vehicleGuid'] = undefined;
  /**
   * @member {Integer} vehicleModelId
   */
  exports.prototype['vehicleModelId'] = undefined;
  /**
   * @member {String} vin
   */
  exports.prototype['vin'] = undefined;




  return exports;
}));


