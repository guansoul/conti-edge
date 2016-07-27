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
    root.ContiEdge.DeviceInfoRequestDTO = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeviceInfoRequestDTO model module.
   * @module model/DeviceInfoRequestDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>DeviceInfoRequestDTO</code>.
   * @alias module:model/DeviceInfoRequestDTO
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>DeviceInfoRequestDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceInfoRequestDTO} obj Optional instance to populate.
   * @return {module:model/DeviceInfoRequestDTO} The populated <code>DeviceInfoRequestDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('imei')) {
        obj['imei'] = ApiClient.convertToType(data['imei'], 'String');
      }
      if (data.hasOwnProperty('vehicleGuid')) {
        obj['vehicleGuid'] = ApiClient.convertToType(data['vehicleGuid'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} imei
   */
  exports.prototype['imei'] = undefined;
  /**
   * @member {String} vehicleGuid
   */
  exports.prototype['vehicleGuid'] = undefined;




  return exports;
}));


