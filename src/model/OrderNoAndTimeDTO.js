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
    root.ContiEdge.OrderNoAndTimeDTO = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OrderNoAndTimeDTO model module.
   * @module model/OrderNoAndTimeDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>OrderNoAndTimeDTO</code>.
   * @alias module:model/OrderNoAndTimeDTO
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>OrderNoAndTimeDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderNoAndTimeDTO} obj Optional instance to populate.
   * @return {module:model/OrderNoAndTimeDTO} The populated <code>OrderNoAndTimeDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('lastModifiedDate')) {
        obj['lastModifiedDate'] = ApiClient.convertToType(data['lastModifiedDate'], 'Integer');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} lastModifiedDate
   */
  exports.prototype['lastModifiedDate'] = undefined;
  /**
   * @member {String} value
   */
  exports.prototype['value'] = undefined;




  return exports;
}));


