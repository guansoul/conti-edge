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
    root.ContiEdge.ObjectError = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ObjectError model module.
   * @module model/ObjectError
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>ObjectError</code>.
   * @alias module:model/ObjectError
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ObjectError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ObjectError} obj Optional instance to populate.
   * @return {module:model/ObjectError} The populated <code>ObjectError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('arguments')) {
        obj['arguments'] = ApiClient.convertToType(data['arguments'], [Object]);
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('codes')) {
        obj['codes'] = ApiClient.convertToType(data['codes'], ['String']);
      }
      if (data.hasOwnProperty('defaultMessage')) {
        obj['defaultMessage'] = ApiClient.convertToType(data['defaultMessage'], 'String');
      }
      if (data.hasOwnProperty('objectName')) {
        obj['objectName'] = ApiClient.convertToType(data['objectName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<Object>} arguments
   */
  exports.prototype['arguments'] = undefined;
  /**
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {Array.<String>} codes
   */
  exports.prototype['codes'] = undefined;
  /**
   * @member {String} defaultMessage
   */
  exports.prototype['defaultMessage'] = undefined;
  /**
   * @member {String} objectName
   */
  exports.prototype['objectName'] = undefined;




  return exports;
}));


