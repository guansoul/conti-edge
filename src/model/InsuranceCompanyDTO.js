(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InsuranceCompany', 'model/ObjectError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InsuranceCompany'), require('./ObjectError'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.InsuranceCompanyDTO = factory(root.ContiEdge.ApiClient, root.ContiEdge.InsuranceCompany, root.ContiEdge.ObjectError);
  }
}(this, function(ApiClient, InsuranceCompany, ObjectError) {
  'use strict';




  /**
   * The InsuranceCompanyDTO model module.
   * @module model/InsuranceCompanyDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>InsuranceCompanyDTO</code>.
   * @alias module:model/InsuranceCompanyDTO
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>InsuranceCompanyDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InsuranceCompanyDTO} obj Optional instance to populate.
   * @return {module:model/InsuranceCompanyDTO} The populated <code>InsuranceCompanyDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allError')) {
        obj['allError'] = ApiClient.convertToType(data['allError'], [ObjectError]);
      }
      if (data.hasOwnProperty('forwardURL')) {
        obj['forwardURL'] = ApiClient.convertToType(data['forwardURL'], 'String');
      }
      if (data.hasOwnProperty('list')) {
        obj['list'] = ApiClient.convertToType(data['list'], [InsuranceCompany]);
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('messageCode')) {
        obj['messageCode'] = ApiClient.convertToType(data['messageCode'], 'String');
      }
      if (data.hasOwnProperty('resultCode')) {
        obj['resultCode'] = ApiClient.convertToType(data['resultCode'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ObjectError>} allError
   */
  exports.prototype['allError'] = undefined;
  /**
   * @member {String} forwardURL
   */
  exports.prototype['forwardURL'] = undefined;
  /**
   * @member {Array.<module:model/InsuranceCompany>} list
   */
  exports.prototype['list'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {String} messageCode
   */
  exports.prototype['messageCode'] = undefined;
  /**
   * @member {Integer} resultCode
   */
  exports.prototype['resultCode'] = undefined;




  return exports;
}));


