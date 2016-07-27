(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AvailableTimeItemDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AvailableTimeItemDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.AvailableDateAndTime = factory(root.ContiEdge.ApiClient, root.ContiEdge.AvailableTimeItemDTO);
  }
}(this, function(ApiClient, AvailableTimeItemDTO) {
  'use strict';




  /**
   * The AvailableDateAndTime model module.
   * @module model/AvailableDateAndTime
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>AvailableDateAndTime</code>.
   * @alias module:model/AvailableDateAndTime
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>AvailableDateAndTime</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AvailableDateAndTime} obj Optional instance to populate.
   * @return {module:model/AvailableDateAndTime} The populated <code>AvailableDateAndTime</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('availableTimeList')) {
        obj['availableTimeList'] = ApiClient.convertToType(data['availableTimeList'], [AvailableTimeItemDTO]);
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/AvailableTimeItemDTO>} availableTimeList
   */
  exports.prototype['availableTimeList'] = undefined;
  /**
   * @member {String} date
   */
  exports.prototype['date'] = undefined;




  return exports;
}));


