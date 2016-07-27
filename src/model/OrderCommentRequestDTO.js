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
    root.ContiEdge.OrderCommentRequestDTO = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OrderCommentRequestDTO model module.
   * @module model/OrderCommentRequestDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>OrderCommentRequestDTO</code>.
   * @alias module:model/OrderCommentRequestDTO
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>OrderCommentRequestDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderCommentRequestDTO} obj Optional instance to populate.
   * @return {module:model/OrderCommentRequestDTO} The populated <code>OrderCommentRequestDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
      if (data.hasOwnProperty('enviroment')) {
        obj['enviroment'] = ApiClient.convertToType(data['enviroment'], 'Integer');
      }
      if (data.hasOwnProperty('lastModifiedDate')) {
        obj['lastModifiedDate'] = ApiClient.convertToType(data['lastModifiedDate'], 'Integer');
      }
      if (data.hasOwnProperty('orderNo')) {
        obj['orderNo'] = ApiClient.convertToType(data['orderNo'], 'String');
      }
      if (data.hasOwnProperty('serviceQuality')) {
        obj['serviceQuality'] = ApiClient.convertToType(data['serviceQuality'], 'Integer');
      }
      if (data.hasOwnProperty('serviceSpeed')) {
        obj['serviceSpeed'] = ApiClient.convertToType(data['serviceSpeed'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;
  /**
   * @member {Integer} enviroment
   */
  exports.prototype['enviroment'] = undefined;
  /**
   * @member {Integer} lastModifiedDate
   */
  exports.prototype['lastModifiedDate'] = undefined;
  /**
   * @member {String} orderNo
   */
  exports.prototype['orderNo'] = undefined;
  /**
   * @member {Integer} serviceQuality
   */
  exports.prototype['serviceQuality'] = undefined;
  /**
   * @member {Integer} serviceSpeed
   */
  exports.prototype['serviceSpeed'] = undefined;




  return exports;
}));


