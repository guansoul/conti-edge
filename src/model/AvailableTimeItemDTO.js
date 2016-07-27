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
    root.ContiEdge.AvailableTimeItemDTO = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AvailableTimeItemDTO model module.
   * @module model/AvailableTimeItemDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>AvailableTimeItemDTO</code>.
   * @alias module:model/AvailableTimeItemDTO
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>AvailableTimeItemDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AvailableTimeItemDTO} obj Optional instance to populate.
   * @return {module:model/AvailableTimeItemDTO} The populated <code>AvailableTimeItemDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bookEndTime')) {
        obj['bookEndTime'] = ApiClient.convertToType(data['bookEndTime'], 'Integer');
      }
      if (data.hasOwnProperty('bookStartTime')) {
        obj['bookStartTime'] = ApiClient.convertToType(data['bookStartTime'], 'Integer');
      }
      if (data.hasOwnProperty('discount')) {
        obj['discount'] = ApiClient.convertToType(data['discount'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} bookEndTime
   */
  exports.prototype['bookEndTime'] = undefined;
  /**
   * @member {Integer} bookStartTime
   */
  exports.prototype['bookStartTime'] = undefined;
  /**
   * @member {Integer} discount
   */
  exports.prototype['discount'] = undefined;




  return exports;
}));


