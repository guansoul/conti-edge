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
    root.ContiEdge.StringNumItem = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StringNumItem model module.
   * @module model/StringNumItem
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>StringNumItem</code>.
   * @alias module:model/StringNumItem
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>StringNumItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StringNumItem} obj Optional instance to populate.
   * @return {module:model/StringNumItem} The populated <code>StringNumItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('num')) {
        obj['num'] = ApiClient.convertToType(data['num'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * @member {Integer} num
   */
  exports.prototype['num'] = undefined;




  return exports;
}));


