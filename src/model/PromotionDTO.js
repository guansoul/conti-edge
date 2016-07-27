(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ObjectError', 'model/PromotionItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ObjectError'), require('./PromotionItem'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.PromotionDTO = factory(root.ContiEdge.ApiClient, root.ContiEdge.ObjectError, root.ContiEdge.PromotionItem);
  }
}(this, function(ApiClient, ObjectError, PromotionItem) {
  'use strict';




  /**
   * The PromotionDTO model module.
   * @module model/PromotionDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>PromotionDTO</code>.
   * @alias module:model/PromotionDTO
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>PromotionDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PromotionDTO} obj Optional instance to populate.
   * @return {module:model/PromotionDTO} The populated <code>PromotionDTO</code> instance.
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
      if (data.hasOwnProperty('promotionList')) {
        obj['promotionList'] = ApiClient.convertToType(data['promotionList'], [PromotionItem]);
      }
      if (data.hasOwnProperty('promotionNum')) {
        obj['promotionNum'] = ApiClient.convertToType(data['promotionNum'], 'Integer');
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
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {String} messageCode
   */
  exports.prototype['messageCode'] = undefined;
  /**
   * @member {Array.<module:model/PromotionItem>} promotionList
   */
  exports.prototype['promotionList'] = undefined;
  /**
   * @member {Integer} promotionNum
   */
  exports.prototype['promotionNum'] = undefined;
  /**
   * @member {Integer} resultCode
   */
  exports.prototype['resultCode'] = undefined;




  return exports;
}));


