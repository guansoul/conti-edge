(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BeautyService', 'model/MaintenanceItem', 'model/ObjectError', 'model/OtherService', 'model/RepairItem', 'model/TireService'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BeautyService'), require('./MaintenanceItem'), require('./ObjectError'), require('./OtherService'), require('./RepairItem'), require('./TireService'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.OrderDetailDTO = factory(root.ContiEdge.ApiClient, root.ContiEdge.BeautyService, root.ContiEdge.MaintenanceItem, root.ContiEdge.ObjectError, root.ContiEdge.OtherService, root.ContiEdge.RepairItem, root.ContiEdge.TireService);
  }
}(this, function(ApiClient, BeautyService, MaintenanceItem, ObjectError, OtherService, RepairItem, TireService) {
  'use strict';




  /**
   * The OrderDetailDTO model module.
   * @module model/OrderDetailDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>OrderDetailDTO</code>.
   * @alias module:model/OrderDetailDTO
   * @class
   */
  var exports = function() {
    var _this = this;





































  };

  /**
   * Constructs a <code>OrderDetailDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderDetailDTO} obj Optional instance to populate.
   * @return {module:model/OrderDetailDTO} The populated <code>OrderDetailDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allError')) {
        obj['allError'] = ApiClient.convertToType(data['allError'], [ObjectError]);
      }
      if (data.hasOwnProperty('beautyItemList')) {
        obj['beautyItemList'] = ApiClient.convertToType(data['beautyItemList'], [BeautyService]);
      }
      if (data.hasOwnProperty('bookEndTimeLong')) {
        obj['bookEndTimeLong'] = ApiClient.convertToType(data['bookEndTimeLong'], 'Integer');
      }
      if (data.hasOwnProperty('bookStartTimeLong')) {
        obj['bookStartTimeLong'] = ApiClient.convertToType(data['bookStartTimeLong'], 'Integer');
      }
      if (data.hasOwnProperty('cancelReason')) {
        obj['cancelReason'] = ApiClient.convertToType(data['cancelReason'], 'String');
      }
      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
      if (data.hasOwnProperty('commentTime')) {
        obj['commentTime'] = ApiClient.convertToType(data['commentTime'], 'String');
      }
      if (data.hasOwnProperty('commentTimeLong')) {
        obj['commentTimeLong'] = ApiClient.convertToType(data['commentTimeLong'], 'Integer');
      }
      if (data.hasOwnProperty('enviroment')) {
        obj['enviroment'] = ApiClient.convertToType(data['enviroment'], 'Integer');
      }
      if (data.hasOwnProperty('forwardURL')) {
        obj['forwardURL'] = ApiClient.convertToType(data['forwardURL'], 'String');
      }
      if (data.hasOwnProperty('lastMileage')) {
        obj['lastMileage'] = ApiClient.convertToType(data['lastMileage'], 'Integer');
      }
      if (data.hasOwnProperty('lastModifiedDate')) {
        obj['lastModifiedDate'] = ApiClient.convertToType(data['lastModifiedDate'], 'Integer');
      }
      if (data.hasOwnProperty('maintenanceDistance')) {
        obj['maintenanceDistance'] = ApiClient.convertToType(data['maintenanceDistance'], 'Integer');
      }
      if (data.hasOwnProperty('maintenanceItemList')) {
        obj['maintenanceItemList'] = ApiClient.convertToType(data['maintenanceItemList'], [MaintenanceItem]);
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('messageCode')) {
        obj['messageCode'] = ApiClient.convertToType(data['messageCode'], 'String');
      }
      if (data.hasOwnProperty('mileage')) {
        obj['mileage'] = ApiClient.convertToType(data['mileage'], 'Integer');
      }
      if (data.hasOwnProperty('orderNo')) {
        obj['orderNo'] = ApiClient.convertToType(data['orderNo'], 'String');
      }
      if (data.hasOwnProperty('otherItemList')) {
        obj['otherItemList'] = ApiClient.convertToType(data['otherItemList'], [OtherService]);
      }
      if (data.hasOwnProperty('repairItemList')) {
        obj['repairItemList'] = ApiClient.convertToType(data['repairItemList'], [RepairItem]);
      }
      if (data.hasOwnProperty('reply')) {
        obj['reply'] = ApiClient.convertToType(data['reply'], 'String');
      }
      if (data.hasOwnProperty('replyTime')) {
        obj['replyTime'] = ApiClient.convertToType(data['replyTime'], 'String');
      }
      if (data.hasOwnProperty('replyTimeLong')) {
        obj['replyTimeLong'] = ApiClient.convertToType(data['replyTimeLong'], 'Integer');
      }
      if (data.hasOwnProperty('resultCode')) {
        obj['resultCode'] = ApiClient.convertToType(data['resultCode'], 'Integer');
      }
      if (data.hasOwnProperty('serviceQuality')) {
        obj['serviceQuality'] = ApiClient.convertToType(data['serviceQuality'], 'Integer');
      }
      if (data.hasOwnProperty('serviceSpeed')) {
        obj['serviceSpeed'] = ApiClient.convertToType(data['serviceSpeed'], 'Integer');
      }
      if (data.hasOwnProperty('shopAddress')) {
        obj['shopAddress'] = ApiClient.convertToType(data['shopAddress'], 'String');
      }
      if (data.hasOwnProperty('shopId')) {
        obj['shopId'] = ApiClient.convertToType(data['shopId'], 'Integer');
      }
      if (data.hasOwnProperty('shopName')) {
        obj['shopName'] = ApiClient.convertToType(data['shopName'], 'String');
      }
      if (data.hasOwnProperty('shopPhoneNo')) {
        obj['shopPhoneNo'] = ApiClient.convertToType(data['shopPhoneNo'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('statusDesc')) {
        obj['statusDesc'] = ApiClient.convertToType(data['statusDesc'], 'String');
      }
      if (data.hasOwnProperty('statusType')) {
        obj['statusType'] = ApiClient.convertToType(data['statusType'], 'String');
      }
      if (data.hasOwnProperty('statusTypeDesc')) {
        obj['statusTypeDesc'] = ApiClient.convertToType(data['statusTypeDesc'], 'String');
      }
      if (data.hasOwnProperty('tireItemList')) {
        obj['tireItemList'] = ApiClient.convertToType(data['tireItemList'], [TireService]);
      }
      if (data.hasOwnProperty('vehicleGuid')) {
        obj['vehicleGuid'] = ApiClient.convertToType(data['vehicleGuid'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ObjectError>} allError
   */
  exports.prototype['allError'] = undefined;
  /**
   * @member {Array.<module:model/BeautyService>} beautyItemList
   */
  exports.prototype['beautyItemList'] = undefined;
  /**
   * @member {Integer} bookEndTimeLong
   */
  exports.prototype['bookEndTimeLong'] = undefined;
  /**
   * @member {Integer} bookStartTimeLong
   */
  exports.prototype['bookStartTimeLong'] = undefined;
  /**
   * @member {String} cancelReason
   */
  exports.prototype['cancelReason'] = undefined;
  /**
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;
  /**
   * @member {String} commentTime
   */
  exports.prototype['commentTime'] = undefined;
  /**
   * @member {Integer} commentTimeLong
   */
  exports.prototype['commentTimeLong'] = undefined;
  /**
   * @member {Integer} enviroment
   */
  exports.prototype['enviroment'] = undefined;
  /**
   * @member {String} forwardURL
   */
  exports.prototype['forwardURL'] = undefined;
  /**
   * @member {Integer} lastMileage
   */
  exports.prototype['lastMileage'] = undefined;
  /**
   * @member {Integer} lastModifiedDate
   */
  exports.prototype['lastModifiedDate'] = undefined;
  /**
   * @member {Integer} maintenanceDistance
   */
  exports.prototype['maintenanceDistance'] = undefined;
  /**
   * @member {Array.<module:model/MaintenanceItem>} maintenanceItemList
   */
  exports.prototype['maintenanceItemList'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {String} messageCode
   */
  exports.prototype['messageCode'] = undefined;
  /**
   * @member {Integer} mileage
   */
  exports.prototype['mileage'] = undefined;
  /**
   * @member {String} orderNo
   */
  exports.prototype['orderNo'] = undefined;
  /**
   * @member {Array.<module:model/OtherService>} otherItemList
   */
  exports.prototype['otherItemList'] = undefined;
  /**
   * @member {Array.<module:model/RepairItem>} repairItemList
   */
  exports.prototype['repairItemList'] = undefined;
  /**
   * @member {String} reply
   */
  exports.prototype['reply'] = undefined;
  /**
   * @member {String} replyTime
   */
  exports.prototype['replyTime'] = undefined;
  /**
   * @member {Integer} replyTimeLong
   */
  exports.prototype['replyTimeLong'] = undefined;
  /**
   * @member {Integer} resultCode
   */
  exports.prototype['resultCode'] = undefined;
  /**
   * @member {Integer} serviceQuality
   */
  exports.prototype['serviceQuality'] = undefined;
  /**
   * @member {Integer} serviceSpeed
   */
  exports.prototype['serviceSpeed'] = undefined;
  /**
   * @member {String} shopAddress
   */
  exports.prototype['shopAddress'] = undefined;
  /**
   * @member {Integer} shopId
   */
  exports.prototype['shopId'] = undefined;
  /**
   * @member {String} shopName
   */
  exports.prototype['shopName'] = undefined;
  /**
   * @member {String} shopPhoneNo
   */
  exports.prototype['shopPhoneNo'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} statusDesc
   */
  exports.prototype['statusDesc'] = undefined;
  /**
   * @member {String} statusType
   */
  exports.prototype['statusType'] = undefined;
  /**
   * @member {String} statusTypeDesc
   */
  exports.prototype['statusTypeDesc'] = undefined;
  /**
   * @member {Array.<module:model/TireService>} tireItemList
   */
  exports.prototype['tireItemList'] = undefined;
  /**
   * @member {String} vehicleGuid
   */
  exports.prototype['vehicleGuid'] = undefined;




  return exports;
}));


