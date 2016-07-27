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
    root.ContiEdge.InsuranceCompanyRequestDTO = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InsuranceCompanyRequestDTO model module.
   * @module model/InsuranceCompanyRequestDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>InsuranceCompanyRequestDTO</code>.
   * @alias module:model/InsuranceCompanyRequestDTO
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InsuranceCompanyRequestDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InsuranceCompanyRequestDTO} obj Optional instance to populate.
   * @return {module:model/InsuranceCompanyRequestDTO} The populated <code>InsuranceCompanyRequestDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('insuranceCompanyId')) {
        obj['insuranceCompanyId'] = ApiClient.convertToType(data['insuranceCompanyId'], 'Integer');
      }
      if (data.hasOwnProperty('vehicleGuid')) {
        obj['vehicleGuid'] = ApiClient.convertToType(data['vehicleGuid'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} insuranceCompanyId
   */
  exports.prototype['insuranceCompanyId'] = undefined;
  /**
   * @member {String} vehicleGuid
   */
  exports.prototype['vehicleGuid'] = undefined;




  return exports;
}));


