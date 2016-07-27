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
    root.ContiEdge.SingleStringRequestDTO = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SingleStringRequestDTO model module.
   * @module model/SingleStringRequestDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>SingleStringRequestDTO</code>.
   * @alias module:model/SingleStringRequestDTO
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SingleStringRequestDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SingleStringRequestDTO} obj Optional instance to populate.
   * @return {module:model/SingleStringRequestDTO} The populated <code>SingleStringRequestDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} value
   */
  exports.prototype['value'] = undefined;




  return exports;
}));


