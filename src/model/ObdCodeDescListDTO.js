(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ObdCodeDesc', 'model/ObjectError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ObdCodeDesc'), require('./ObjectError'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.ObdCodeDescListDTO = factory(root.ContiEdge.ApiClient, root.ContiEdge.ObdCodeDesc, root.ContiEdge.ObjectError);
  }
}(this, function(ApiClient, ObdCodeDesc, ObjectError) {
  'use strict';




  /**
   * The ObdCodeDescListDTO model module.
   * @module model/ObdCodeDescListDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>ObdCodeDescListDTO</code>.
   * @alias module:model/ObdCodeDescListDTO
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>ObdCodeDescListDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ObdCodeDescListDTO} obj Optional instance to populate.
   * @return {module:model/ObdCodeDescListDTO} The populated <code>ObdCodeDescListDTO</code> instance.
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
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('messageCode')) {
        obj['messageCode'] = ApiClient.convertToType(data['messageCode'], 'String');
      }
      if (data.hasOwnProperty('obdCodeDescList')) {
        obj['obdCodeDescList'] = ApiClient.convertToType(data['obdCodeDescList'], [ObdCodeDesc]);
      }
      if (data.hasOwnProperty('resultCode')) {
        obj['resultCode'] = ApiClient.convertToType(data['resultCode'], 'Integer');
      }
      if (data.hasOwnProperty('unknownCodeCount')) {
        obj['unknownCodeCount'] = ApiClient.convertToType(data['unknownCodeCount'], 'Integer');
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
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {String} messageCode
   */
  exports.prototype['messageCode'] = undefined;
  /**
   * @member {Array.<module:model/ObdCodeDesc>} obdCodeDescList
   */
  exports.prototype['obdCodeDescList'] = undefined;
  /**
   * @member {Integer} resultCode
   */
  exports.prototype['resultCode'] = undefined;
  /**
   * @member {Integer} unknownCodeCount
   */
  exports.prototype['unknownCodeCount'] = undefined;




  return exports;
}));


