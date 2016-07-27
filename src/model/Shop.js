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
    root.ContiEdge.Shop = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Shop model module.
   * @module model/Shop
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>Shop</code>.
   * @alias module:model/Shop
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>Shop</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Shop} obj Optional instance to populate.
   * @return {module:model/Shop} The populated <code>Shop</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('cityUid')) {
        obj['cityUid'] = ApiClient.convertToType(data['cityUid'], 'Integer');
      }
      if (data.hasOwnProperty('distance')) {
        obj['distance'] = ApiClient.convertToType(data['distance'], 'Integer');
      }
      if (data.hasOwnProperty('enviroment')) {
        obj['enviroment'] = ApiClient.convertToType(data['enviroment'], 'Integer');
      }
      if (data.hasOwnProperty('lat')) {
        obj['lat'] = ApiClient.convertToType(data['lat'], 'Integer');
      }
      if (data.hasOwnProperty('lon')) {
        obj['lon'] = ApiClient.convertToType(data['lon'], 'Integer');
      }
      if (data.hasOwnProperty('phoneNo')) {
        obj['phoneNo'] = ApiClient.convertToType(data['phoneNo'], 'String');
      }
      if (data.hasOwnProperty('picUrl')) {
        obj['picUrl'] = ApiClient.convertToType(data['picUrl'], 'String');
      }
      if (data.hasOwnProperty('serviceQuality')) {
        obj['serviceQuality'] = ApiClient.convertToType(data['serviceQuality'], 'Integer');
      }
      if (data.hasOwnProperty('serviceSpeed')) {
        obj['serviceSpeed'] = ApiClient.convertToType(data['serviceSpeed'], 'Integer');
      }
      if (data.hasOwnProperty('shopDesc')) {
        obj['shopDesc'] = ApiClient.convertToType(data['shopDesc'], 'String');
      }
      if (data.hasOwnProperty('shopFlag')) {
        obj['shopFlag'] = ApiClient.convertToType(data['shopFlag'], 'String');
      }
      if (data.hasOwnProperty('shopName')) {
        obj['shopName'] = ApiClient.convertToType(data['shopName'], 'String');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {Integer} cityUid
   */
  exports.prototype['cityUid'] = undefined;
  /**
   * @member {Integer} distance
   */
  exports.prototype['distance'] = undefined;
  /**
   * @member {Integer} enviroment
   */
  exports.prototype['enviroment'] = undefined;
  /**
   * @member {Integer} lat
   */
  exports.prototype['lat'] = undefined;
  /**
   * @member {Integer} lon
   */
  exports.prototype['lon'] = undefined;
  /**
   * @member {String} phoneNo
   */
  exports.prototype['phoneNo'] = undefined;
  /**
   * @member {String} picUrl
   */
  exports.prototype['picUrl'] = undefined;
  /**
   * @member {Integer} serviceQuality
   */
  exports.prototype['serviceQuality'] = undefined;
  /**
   * @member {Integer} serviceSpeed
   */
  exports.prototype['serviceSpeed'] = undefined;
  /**
   * @member {String} shopDesc
   */
  exports.prototype['shopDesc'] = undefined;
  /**
   * @member {String} shopFlag
   */
  exports.prototype['shopFlag'] = undefined;
  /**
   * @member {String} shopName
   */
  exports.prototype['shopName'] = undefined;
  /**
   * @member {Integer} uid
   */
  exports.prototype['uid'] = undefined;




  return exports;
}));


