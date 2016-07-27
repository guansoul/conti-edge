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
    root.ContiEdge.VehicleInfoRequestDTO = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VehicleInfoRequestDTO model module.
   * @module model/VehicleInfoRequestDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>VehicleInfoRequestDTO</code>.
   * @alias module:model/VehicleInfoRequestDTO
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>VehicleInfoRequestDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VehicleInfoRequestDTO} obj Optional instance to populate.
   * @return {module:model/VehicleInfoRequestDTO} The populated <code>VehicleInfoRequestDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('displacement')) {
        obj['displacement'] = ApiClient.convertToType(data['displacement'], 'String');
      }
      if (data.hasOwnProperty('engineNumber')) {
        obj['engineNumber'] = ApiClient.convertToType(data['engineNumber'], 'String');
      }
      if (data.hasOwnProperty('milage')) {
        obj['milage'] = ApiClient.convertToType(data['milage'], 'Integer');
      }
      if (data.hasOwnProperty('modelYear')) {
        obj['modelYear'] = ApiClient.convertToType(data['modelYear'], 'String');
      }
      if (data.hasOwnProperty('plateNo')) {
        obj['plateNo'] = ApiClient.convertToType(data['plateNo'], 'String');
      }
      if (data.hasOwnProperty('recordSwitch')) {
        obj['recordSwitch'] = ApiClient.convertToType(data['recordSwitch'], 'String');
      }
      if (data.hasOwnProperty('shopId')) {
        obj['shopId'] = ApiClient.convertToType(data['shopId'], 'Integer');
      }
      if (data.hasOwnProperty('vehicleGuid')) {
        obj['vehicleGuid'] = ApiClient.convertToType(data['vehicleGuid'], 'String');
      }
      if (data.hasOwnProperty('vehicleModelUid')) {
        obj['vehicleModelUid'] = ApiClient.convertToType(data['vehicleModelUid'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {String} displacement
   */
  exports.prototype['displacement'] = undefined;
  /**
   * @member {String} engineNumber
   */
  exports.prototype['engineNumber'] = undefined;
  /**
   * @member {Integer} milage
   */
  exports.prototype['milage'] = undefined;
  /**
   * @member {String} modelYear
   */
  exports.prototype['modelYear'] = undefined;
  /**
   * @member {String} plateNo
   */
  exports.prototype['plateNo'] = undefined;
  /**
   * @member {String} recordSwitch
   */
  exports.prototype['recordSwitch'] = undefined;
  /**
   * @member {Integer} shopId
   */
  exports.prototype['shopId'] = undefined;
  /**
   * @member {String} vehicleGuid
   */
  exports.prototype['vehicleGuid'] = undefined;
  /**
   * @member {Integer} vehicleModelUid
   */
  exports.prototype['vehicleModelUid'] = undefined;




  return exports;
}));


