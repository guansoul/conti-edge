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
    root.ContiEdge.GoToShopItem = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GoToShopItem model module.
   * @module model/GoToShopItem
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>GoToShopItem</code>.
   * @alias module:model/GoToShopItem
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>GoToShopItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GoToShopItem} obj Optional instance to populate.
   * @return {module:model/GoToShopItem} The populated <code>GoToShopItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('timeList')) {
        obj['timeList'] = ApiClient.convertToType(data['timeList'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * @member {Array.<String>} timeList
   */
  exports.prototype['timeList'] = undefined;




  return exports;
}));


