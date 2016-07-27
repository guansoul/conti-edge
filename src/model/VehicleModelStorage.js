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
    root.ContiEdge.VehicleModelStorage = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VehicleModelStorage model module.
   * @module model/VehicleModelStorage
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>VehicleModelStorage</code>.
   * @alias module:model/VehicleModelStorage
   * @class
   */
  var exports = function() {
    var _this = this;























  };

  /**
   * Constructs a <code>VehicleModelStorage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VehicleModelStorage} obj Optional instance to populate.
   * @return {module:model/VehicleModelStorage} The populated <code>VehicleModelStorage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('airIntakeForm')) {
        obj['airIntakeForm'] = ApiClient.convertToType(data['airIntakeForm'], 'String');
      }
      if (data.hasOwnProperty('brandId')) {
        obj['brandId'] = ApiClient.convertToType(data['brandId'], 'Integer');
      }
      if (data.hasOwnProperty('brandInitialIndex')) {
        obj['brandInitialIndex'] = ApiClient.convertToType(data['brandInitialIndex'], 'String');
      }
      if (data.hasOwnProperty('brandName')) {
        obj['brandName'] = ApiClient.convertToType(data['brandName'], 'String');
      }
      if (data.hasOwnProperty('brandPicUrl')) {
        obj['brandPicUrl'] = ApiClient.convertToType(data['brandPicUrl'], 'String');
      }
      if (data.hasOwnProperty('displacement')) {
        obj['displacement'] = ApiClient.convertToType(data['displacement'], 'String');
      }
      if (data.hasOwnProperty('emissionStandard')) {
        obj['emissionStandard'] = ApiClient.convertToType(data['emissionStandard'], 'String');
      }
      if (data.hasOwnProperty('factory')) {
        obj['factory'] = ApiClient.convertToType(data['factory'], 'String');
      }
      if (data.hasOwnProperty('flag')) {
        obj['flag'] = ApiClient.convertToType(data['flag'], 'String');
      }
      if (data.hasOwnProperty('fuelLabel')) {
        obj['fuelLabel'] = ApiClient.convertToType(data['fuelLabel'], 'String');
      }
      if (data.hasOwnProperty('fuelType')) {
        obj['fuelType'] = ApiClient.convertToType(data['fuelType'], 'String');
      }
      if (data.hasOwnProperty('levelId')) {
        obj['levelId'] = ApiClient.convertToType(data['levelId'], 'String');
      }
      if (data.hasOwnProperty('marketYear')) {
        obj['marketYear'] = ApiClient.convertToType(data['marketYear'], 'String');
      }
      if (data.hasOwnProperty('modelId')) {
        obj['modelId'] = ApiClient.convertToType(data['modelId'], 'Integer');
      }
      if (data.hasOwnProperty('modelName')) {
        obj['modelName'] = ApiClient.convertToType(data['modelName'], 'String');
      }
      if (data.hasOwnProperty('modelYear')) {
        obj['modelYear'] = ApiClient.convertToType(data['modelYear'], 'String');
      }
      if (data.hasOwnProperty('productionYear')) {
        obj['productionYear'] = ApiClient.convertToType(data['productionYear'], 'String');
      }
      if (data.hasOwnProperty('saleName')) {
        obj['saleName'] = ApiClient.convertToType(data['saleName'], 'String');
      }
      if (data.hasOwnProperty('transmissionType')) {
        obj['transmissionType'] = ApiClient.convertToType(data['transmissionType'], 'String');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'Integer');
      }
      if (data.hasOwnProperty('vehicleSeries')) {
        obj['vehicleSeries'] = ApiClient.convertToType(data['vehicleSeries'], 'String');
      }
      if (data.hasOwnProperty('vehicleType')) {
        obj['vehicleType'] = ApiClient.convertToType(data['vehicleType'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} airIntakeForm
   */
  exports.prototype['airIntakeForm'] = undefined;
  /**
   * @member {Integer} brandId
   */
  exports.prototype['brandId'] = undefined;
  /**
   * @member {String} brandInitialIndex
   */
  exports.prototype['brandInitialIndex'] = undefined;
  /**
   * @member {String} brandName
   */
  exports.prototype['brandName'] = undefined;
  /**
   * @member {String} brandPicUrl
   */
  exports.prototype['brandPicUrl'] = undefined;
  /**
   * @member {String} displacement
   */
  exports.prototype['displacement'] = undefined;
  /**
   * @member {String} emissionStandard
   */
  exports.prototype['emissionStandard'] = undefined;
  /**
   * @member {String} factory
   */
  exports.prototype['factory'] = undefined;
  /**
   * @member {String} flag
   */
  exports.prototype['flag'] = undefined;
  /**
   * @member {String} fuelLabel
   */
  exports.prototype['fuelLabel'] = undefined;
  /**
   * @member {String} fuelType
   */
  exports.prototype['fuelType'] = undefined;
  /**
   * @member {String} levelId
   */
  exports.prototype['levelId'] = undefined;
  /**
   * @member {String} marketYear
   */
  exports.prototype['marketYear'] = undefined;
  /**
   * @member {Integer} modelId
   */
  exports.prototype['modelId'] = undefined;
  /**
   * @member {String} modelName
   */
  exports.prototype['modelName'] = undefined;
  /**
   * @member {String} modelYear
   */
  exports.prototype['modelYear'] = undefined;
  /**
   * @member {String} productionYear
   */
  exports.prototype['productionYear'] = undefined;
  /**
   * @member {String} saleName
   */
  exports.prototype['saleName'] = undefined;
  /**
   * @member {String} transmissionType
   */
  exports.prototype['transmissionType'] = undefined;
  /**
   * @member {Integer} uid
   */
  exports.prototype['uid'] = undefined;
  /**
   * @member {String} vehicleSeries
   */
  exports.prototype['vehicleSeries'] = undefined;
  /**
   * @member {String} vehicleType
   */
  exports.prototype['vehicleType'] = undefined;




  return exports;
}));


