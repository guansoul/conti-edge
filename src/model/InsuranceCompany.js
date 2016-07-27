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
    root.ContiEdge.InsuranceCompany = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InsuranceCompany model module.
   * @module model/InsuranceCompany
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>InsuranceCompany</code>.
   * @alias module:model/InsuranceCompany
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>InsuranceCompany</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InsuranceCompany} obj Optional instance to populate.
   * @return {module:model/InsuranceCompany} The populated <code>InsuranceCompany</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('defaultFlag')) {
        obj['defaultFlag'] = ApiClient.convertToType(data['defaultFlag'], 'Integer');
      }
      if (data.hasOwnProperty('logo')) {
        obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('sequence')) {
        obj['sequence'] = ApiClient.convertToType(data['sequence'], 'Integer');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} defaultFlag
   */
  exports.prototype['defaultFlag'] = undefined;
  /**
   * @member {String} logo
   */
  exports.prototype['logo'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * @member {Integer} sequence
   */
  exports.prototype['sequence'] = undefined;
  /**
   * @member {Integer} uid
   */
  exports.prototype['uid'] = undefined;




  return exports;
}));


