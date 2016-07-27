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
    root.ContiEdge.PromotionItem = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PromotionItem model module.
   * @module model/PromotionItem
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>PromotionItem</code>.
   * @alias module:model/PromotionItem
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>PromotionItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PromotionItem} obj Optional instance to populate.
   * @return {module:model/PromotionItem} The populated <code>PromotionItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('beginTime')) {
        obj['beginTime'] = ApiClient.convertToType(data['beginTime'], 'Integer');
      }
      if (data.hasOwnProperty('endTime')) {
        obj['endTime'] = ApiClient.convertToType(data['endTime'], 'Integer');
      }
      if (data.hasOwnProperty('pageUrl')) {
        obj['pageUrl'] = ApiClient.convertToType(data['pageUrl'], 'String');
      }
      if (data.hasOwnProperty('thumbUrl')) {
        obj['thumbUrl'] = ApiClient.convertToType(data['thumbUrl'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} beginTime
   */
  exports.prototype['beginTime'] = undefined;
  /**
   * @member {Integer} endTime
   */
  exports.prototype['endTime'] = undefined;
  /**
   * @member {String} pageUrl
   */
  exports.prototype['pageUrl'] = undefined;
  /**
   * @member {String} thumbUrl
   */
  exports.prototype['thumbUrl'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;




  return exports;
}));


