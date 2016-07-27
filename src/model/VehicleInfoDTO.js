(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DeviceInfo', 'model/InsuranceCompany', 'model/ObjectError', 'model/Shop', 'model/VehicleInfo', 'model/VehicleModelStorage', 'model/VehicleStatistics'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeviceInfo'), require('./InsuranceCompany'), require('./ObjectError'), require('./Shop'), require('./VehicleInfo'), require('./VehicleModelStorage'), require('./VehicleStatistics'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.VehicleInfoDTO = factory(root.ContiEdge.ApiClient, root.ContiEdge.DeviceInfo, root.ContiEdge.InsuranceCompany, root.ContiEdge.ObjectError, root.ContiEdge.Shop, root.ContiEdge.VehicleInfo, root.ContiEdge.VehicleModelStorage, root.ContiEdge.VehicleStatistics);
  }
}(this, function(ApiClient, DeviceInfo, InsuranceCompany, ObjectError, Shop, VehicleInfo, VehicleModelStorage, VehicleStatistics) {
  'use strict';




  /**
   * The VehicleInfoDTO model module.
   * @module model/VehicleInfoDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>VehicleInfoDTO</code>.
   * @alias module:model/VehicleInfoDTO
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>VehicleInfoDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VehicleInfoDTO} obj Optional instance to populate.
   * @return {module:model/VehicleInfoDTO} The populated <code>VehicleInfoDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allError')) {
        obj['allError'] = ApiClient.convertToType(data['allError'], [ObjectError]);
      }
      if (data.hasOwnProperty('deviceInfo')) {
        obj['deviceInfo'] = DeviceInfo.constructFromObject(data['deviceInfo']);
      }
      if (data.hasOwnProperty('dtcLastCheckTime')) {
        obj['dtcLastCheckTime'] = ApiClient.convertToType(data['dtcLastCheckTime'], 'Integer');
      }
      if (data.hasOwnProperty('forwardURL')) {
        obj['forwardURL'] = ApiClient.convertToType(data['forwardURL'], 'String');
      }
      if (data.hasOwnProperty('insuranceCompany')) {
        obj['insuranceCompany'] = InsuranceCompany.constructFromObject(data['insuranceCompany']);
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('messageCode')) {
        obj['messageCode'] = ApiClient.convertToType(data['messageCode'], 'String');
      }
      if (data.hasOwnProperty('resultCode')) {
        obj['resultCode'] = ApiClient.convertToType(data['resultCode'], 'Integer');
      }
      if (data.hasOwnProperty('shop')) {
        obj['shop'] = Shop.constructFromObject(data['shop']);
      }
      if (data.hasOwnProperty('vehicleGuid')) {
        obj['vehicleGuid'] = ApiClient.convertToType(data['vehicleGuid'], 'String');
      }
      if (data.hasOwnProperty('vehicleInfo')) {
        obj['vehicleInfo'] = VehicleInfo.constructFromObject(data['vehicleInfo']);
      }
      if (data.hasOwnProperty('vehicleModelStorage')) {
        obj['vehicleModelStorage'] = VehicleModelStorage.constructFromObject(data['vehicleModelStorage']);
      }
      if (data.hasOwnProperty('vehicleStatistics')) {
        obj['vehicleStatistics'] = VehicleStatistics.constructFromObject(data['vehicleStatistics']);
      }
      if (data.hasOwnProperty('vin')) {
        obj['vin'] = ApiClient.convertToType(data['vin'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ObjectError>} allError
   */
  exports.prototype['allError'] = undefined;
  /**
   * @member {module:model/DeviceInfo} deviceInfo
   */
  exports.prototype['deviceInfo'] = undefined;
  /**
   * @member {Integer} dtcLastCheckTime
   */
  exports.prototype['dtcLastCheckTime'] = undefined;
  /**
   * @member {String} forwardURL
   */
  exports.prototype['forwardURL'] = undefined;
  /**
   * @member {module:model/InsuranceCompany} insuranceCompany
   */
  exports.prototype['insuranceCompany'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {String} messageCode
   */
  exports.prototype['messageCode'] = undefined;
  /**
   * @member {Integer} resultCode
   */
  exports.prototype['resultCode'] = undefined;
  /**
   * @member {module:model/Shop} shop
   */
  exports.prototype['shop'] = undefined;
  /**
   * @member {String} vehicleGuid
   */
  exports.prototype['vehicleGuid'] = undefined;
  /**
   * @member {module:model/VehicleInfo} vehicleInfo
   */
  exports.prototype['vehicleInfo'] = undefined;
  /**
   * @member {module:model/VehicleModelStorage} vehicleModelStorage
   */
  exports.prototype['vehicleModelStorage'] = undefined;
  /**
   * @member {module:model/VehicleStatistics} vehicleStatistics
   */
  exports.prototype['vehicleStatistics'] = undefined;
  /**
   * @member {String} vin
   */
  exports.prototype['vin'] = undefined;




  return exports;
}));


