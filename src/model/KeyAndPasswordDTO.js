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
    root.ContiEdge.KeyAndPasswordDTO = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The KeyAndPasswordDTO model module.
   * @module model/KeyAndPasswordDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>KeyAndPasswordDTO</code>.
   * @alias module:model/KeyAndPasswordDTO
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>KeyAndPasswordDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KeyAndPasswordDTO} obj Optional instance to populate.
   * @return {module:model/KeyAndPasswordDTO} The populated <code>KeyAndPasswordDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('newPassword')) {
        obj['newPassword'] = ApiClient.convertToType(data['newPassword'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * @member {String} newPassword
   */
  exports.prototype['newPassword'] = undefined;




  return exports;
}));


