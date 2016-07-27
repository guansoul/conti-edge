(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AvailableDateAndTime', 'model/AvailableDateAndTimeDTO', 'model/AvailableTimeDTO', 'model/AvailableTimeItemDTO', 'model/BannerDTO', 'model/BaseResult', 'model/BeautyService', 'model/ClientIdDTO', 'model/DeviceInfo', 'model/DeviceInfoRequestDTO', 'model/DisplacementDTO', 'model/FactoryModelDTO', 'model/FactoryModelItem', 'model/FencesRequestDTO', 'model/GoToShopItem', 'model/InsuranceCompany', 'model/InsuranceCompanyDTO', 'model/InsuranceCompanyInfoDTO', 'model/InsuranceCompanyRequestDTO', 'model/KeyAndPasswordDTO', 'model/LaunchAdvertisingPageDTO', 'model/MaintenanceContainerDTO', 'model/MaintenanceDTO', 'model/MaintenanceItem', 'model/ManagedUserDTO', 'model/ModelItem', 'model/ModelVo', 'model/ModelYearDTO', 'model/ModelYearItem', 'model/ObdCodeDesc', 'model/ObdCodeDescListDTO', 'model/ObjectError', 'model/OrderCommentRequestDTO', 'model/OrderDetailDTO', 'model/OrderListDTO', 'model/OrderNoAndTimeDTO', 'model/OrderRemindingDTO', 'model/OrderRequestDTO', 'model/OtherService', 'model/PersistentToken', 'model/PromotionDTO', 'model/PromotionItem', 'model/RepairItem', 'model/Shop', 'model/ShopDetailDTO', 'model/ShopListDTO', 'model/SingleStringRequestDTO', 'model/StringNumItem', 'model/TireService', 'model/TripCountDTO', 'model/TripCountListDTO', 'model/TripInfo', 'model/TripInfoDTO', 'model/TripInfoListDTO', 'model/TripPositionSummary', 'model/UploadAvatarDTO', 'model/UserDTO', 'model/UserInfoDTO', 'model/UserInfoRequestDTO', 'model/VehicleBrandDTO', 'model/VehicleBrandItem', 'model/VehicleInfo', 'model/VehicleInfoDTO', 'model/VehicleInfoRequestDTO', 'model/VehicleModelDTO', 'model/VehicleModelRequestDTO', 'model/VehicleModelStorage', 'model/VehiclePositionDTO', 'model/VehicleStatistics', 'model/VehicleVoltageInfoDTO', 'model/VehicleVoltageThresholdDTO', 'api/AccountresourceApi', 'api/BannercontrollerApi', 'api/ConfigcontrollerApi', 'api/DevicecontrollerApi', 'api/FencescontrollerApi', 'api/FilecontrollerApi', 'api/InsurancecompanycontrollerApi', 'api/MaintenancecontrollerApi', 'api/OrderscontrollerApi', 'api/PromotioncontrollerApi', 'api/ShopcontrollerApi', 'api/TripinfocontrollerApi', 'api/UsercontrollerApi', 'api/UserresourceApi', 'api/VehiclecontrollerApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AvailableDateAndTime'), require('./model/AvailableDateAndTimeDTO'), require('./model/AvailableTimeDTO'), require('./model/AvailableTimeItemDTO'), require('./model/BannerDTO'), require('./model/BaseResult'), require('./model/BeautyService'), require('./model/ClientIdDTO'), require('./model/DeviceInfo'), require('./model/DeviceInfoRequestDTO'), require('./model/DisplacementDTO'), require('./model/FactoryModelDTO'), require('./model/FactoryModelItem'), require('./model/FencesRequestDTO'), require('./model/GoToShopItem'), require('./model/InsuranceCompany'), require('./model/InsuranceCompanyDTO'), require('./model/InsuranceCompanyInfoDTO'), require('./model/InsuranceCompanyRequestDTO'), require('./model/KeyAndPasswordDTO'), require('./model/LaunchAdvertisingPageDTO'), require('./model/MaintenanceContainerDTO'), require('./model/MaintenanceDTO'), require('./model/MaintenanceItem'), require('./model/ManagedUserDTO'), require('./model/ModelItem'), require('./model/ModelVo'), require('./model/ModelYearDTO'), require('./model/ModelYearItem'), require('./model/ObdCodeDesc'), require('./model/ObdCodeDescListDTO'), require('./model/ObjectError'), require('./model/OrderCommentRequestDTO'), require('./model/OrderDetailDTO'), require('./model/OrderListDTO'), require('./model/OrderNoAndTimeDTO'), require('./model/OrderRemindingDTO'), require('./model/OrderRequestDTO'), require('./model/OtherService'), require('./model/PersistentToken'), require('./model/PromotionDTO'), require('./model/PromotionItem'), require('./model/RepairItem'), require('./model/Shop'), require('./model/ShopDetailDTO'), require('./model/ShopListDTO'), require('./model/SingleStringRequestDTO'), require('./model/StringNumItem'), require('./model/TireService'), require('./model/TripCountDTO'), require('./model/TripCountListDTO'), require('./model/TripInfo'), require('./model/TripInfoDTO'), require('./model/TripInfoListDTO'), require('./model/TripPositionSummary'), require('./model/UploadAvatarDTO'), require('./model/UserDTO'), require('./model/UserInfoDTO'), require('./model/UserInfoRequestDTO'), require('./model/VehicleBrandDTO'), require('./model/VehicleBrandItem'), require('./model/VehicleInfo'), require('./model/VehicleInfoDTO'), require('./model/VehicleInfoRequestDTO'), require('./model/VehicleModelDTO'), require('./model/VehicleModelRequestDTO'), require('./model/VehicleModelStorage'), require('./model/VehiclePositionDTO'), require('./model/VehicleStatistics'), require('./model/VehicleVoltageInfoDTO'), require('./model/VehicleVoltageThresholdDTO'), require('./api/AccountresourceApi'), require('./api/BannercontrollerApi'), require('./api/ConfigcontrollerApi'), require('./api/DevicecontrollerApi'), require('./api/FencescontrollerApi'), require('./api/FilecontrollerApi'), require('./api/InsurancecompanycontrollerApi'), require('./api/MaintenancecontrollerApi'), require('./api/OrderscontrollerApi'), require('./api/PromotioncontrollerApi'), require('./api/ShopcontrollerApi'), require('./api/TripinfocontrollerApi'), require('./api/UsercontrollerApi'), require('./api/UserresourceApi'), require('./api/VehiclecontrollerApi'));
  }
}(function(ApiClient, AvailableDateAndTime, AvailableDateAndTimeDTO, AvailableTimeDTO, AvailableTimeItemDTO, BannerDTO, BaseResult, BeautyService, ClientIdDTO, DeviceInfo, DeviceInfoRequestDTO, DisplacementDTO, FactoryModelDTO, FactoryModelItem, FencesRequestDTO, GoToShopItem, InsuranceCompany, InsuranceCompanyDTO, InsuranceCompanyInfoDTO, InsuranceCompanyRequestDTO, KeyAndPasswordDTO, LaunchAdvertisingPageDTO, MaintenanceContainerDTO, MaintenanceDTO, MaintenanceItem, ManagedUserDTO, ModelItem, ModelVo, ModelYearDTO, ModelYearItem, ObdCodeDesc, ObdCodeDescListDTO, ObjectError, OrderCommentRequestDTO, OrderDetailDTO, OrderListDTO, OrderNoAndTimeDTO, OrderRemindingDTO, OrderRequestDTO, OtherService, PersistentToken, PromotionDTO, PromotionItem, RepairItem, Shop, ShopDetailDTO, ShopListDTO, SingleStringRequestDTO, StringNumItem, TireService, TripCountDTO, TripCountListDTO, TripInfo, TripInfoDTO, TripInfoListDTO, TripPositionSummary, UploadAvatarDTO, UserDTO, UserInfoDTO, UserInfoRequestDTO, VehicleBrandDTO, VehicleBrandItem, VehicleInfo, VehicleInfoDTO, VehicleInfoRequestDTO, VehicleModelDTO, VehicleModelRequestDTO, VehicleModelStorage, VehiclePositionDTO, VehicleStatistics, VehicleVoltageInfoDTO, VehicleVoltageThresholdDTO, AccountresourceApi, BannercontrollerApi, ConfigcontrollerApi, DevicecontrollerApi, FencescontrollerApi, FilecontrollerApi, InsurancecompanycontrollerApi, MaintenancecontrollerApi, OrderscontrollerApi, PromotioncontrollerApi, ShopcontrollerApi, TripinfocontrollerApi, UsercontrollerApi, UserresourceApi, VehiclecontrollerApi) {
  'use strict';

  /**
   * conti-edge API documentation.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var ContiEdge = require('index'); // See note below*.
   * var xxxSvc = new ContiEdge.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new ContiEdge.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new ContiEdge.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new ContiEdge.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.2-SNAPSHOT
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AvailableDateAndTime model constructor.
     * @property {module:model/AvailableDateAndTime}
     */
    AvailableDateAndTime: AvailableDateAndTime,
    /**
     * The AvailableDateAndTimeDTO model constructor.
     * @property {module:model/AvailableDateAndTimeDTO}
     */
    AvailableDateAndTimeDTO: AvailableDateAndTimeDTO,
    /**
     * The AvailableTimeDTO model constructor.
     * @property {module:model/AvailableTimeDTO}
     */
    AvailableTimeDTO: AvailableTimeDTO,
    /**
     * The AvailableTimeItemDTO model constructor.
     * @property {module:model/AvailableTimeItemDTO}
     */
    AvailableTimeItemDTO: AvailableTimeItemDTO,
    /**
     * The BannerDTO model constructor.
     * @property {module:model/BannerDTO}
     */
    BannerDTO: BannerDTO,
    /**
     * The BaseResult model constructor.
     * @property {module:model/BaseResult}
     */
    BaseResult: BaseResult,
    /**
     * The BeautyService model constructor.
     * @property {module:model/BeautyService}
     */
    BeautyService: BeautyService,
    /**
     * The ClientIdDTO model constructor.
     * @property {module:model/ClientIdDTO}
     */
    ClientIdDTO: ClientIdDTO,
    /**
     * The DeviceInfo model constructor.
     * @property {module:model/DeviceInfo}
     */
    DeviceInfo: DeviceInfo,
    /**
     * The DeviceInfoRequestDTO model constructor.
     * @property {module:model/DeviceInfoRequestDTO}
     */
    DeviceInfoRequestDTO: DeviceInfoRequestDTO,
    /**
     * The DisplacementDTO model constructor.
     * @property {module:model/DisplacementDTO}
     */
    DisplacementDTO: DisplacementDTO,
    /**
     * The FactoryModelDTO model constructor.
     * @property {module:model/FactoryModelDTO}
     */
    FactoryModelDTO: FactoryModelDTO,
    /**
     * The FactoryModelItem model constructor.
     * @property {module:model/FactoryModelItem}
     */
    FactoryModelItem: FactoryModelItem,
    /**
     * The FencesRequestDTO model constructor.
     * @property {module:model/FencesRequestDTO}
     */
    FencesRequestDTO: FencesRequestDTO,
    /**
     * The GoToShopItem model constructor.
     * @property {module:model/GoToShopItem}
     */
    GoToShopItem: GoToShopItem,
    /**
     * The InsuranceCompany model constructor.
     * @property {module:model/InsuranceCompany}
     */
    InsuranceCompany: InsuranceCompany,
    /**
     * The InsuranceCompanyDTO model constructor.
     * @property {module:model/InsuranceCompanyDTO}
     */
    InsuranceCompanyDTO: InsuranceCompanyDTO,
    /**
     * The InsuranceCompanyInfoDTO model constructor.
     * @property {module:model/InsuranceCompanyInfoDTO}
     */
    InsuranceCompanyInfoDTO: InsuranceCompanyInfoDTO,
    /**
     * The InsuranceCompanyRequestDTO model constructor.
     * @property {module:model/InsuranceCompanyRequestDTO}
     */
    InsuranceCompanyRequestDTO: InsuranceCompanyRequestDTO,
    /**
     * The KeyAndPasswordDTO model constructor.
     * @property {module:model/KeyAndPasswordDTO}
     */
    KeyAndPasswordDTO: KeyAndPasswordDTO,
    /**
     * The LaunchAdvertisingPageDTO model constructor.
     * @property {module:model/LaunchAdvertisingPageDTO}
     */
    LaunchAdvertisingPageDTO: LaunchAdvertisingPageDTO,
    /**
     * The MaintenanceContainerDTO model constructor.
     * @property {module:model/MaintenanceContainerDTO}
     */
    MaintenanceContainerDTO: MaintenanceContainerDTO,
    /**
     * The MaintenanceDTO model constructor.
     * @property {module:model/MaintenanceDTO}
     */
    MaintenanceDTO: MaintenanceDTO,
    /**
     * The MaintenanceItem model constructor.
     * @property {module:model/MaintenanceItem}
     */
    MaintenanceItem: MaintenanceItem,
    /**
     * The ManagedUserDTO model constructor.
     * @property {module:model/ManagedUserDTO}
     */
    ManagedUserDTO: ManagedUserDTO,
    /**
     * The ModelItem model constructor.
     * @property {module:model/ModelItem}
     */
    ModelItem: ModelItem,
    /**
     * The ModelVo model constructor.
     * @property {module:model/ModelVo}
     */
    ModelVo: ModelVo,
    /**
     * The ModelYearDTO model constructor.
     * @property {module:model/ModelYearDTO}
     */
    ModelYearDTO: ModelYearDTO,
    /**
     * The ModelYearItem model constructor.
     * @property {module:model/ModelYearItem}
     */
    ModelYearItem: ModelYearItem,
    /**
     * The ObdCodeDesc model constructor.
     * @property {module:model/ObdCodeDesc}
     */
    ObdCodeDesc: ObdCodeDesc,
    /**
     * The ObdCodeDescListDTO model constructor.
     * @property {module:model/ObdCodeDescListDTO}
     */
    ObdCodeDescListDTO: ObdCodeDescListDTO,
    /**
     * The ObjectError model constructor.
     * @property {module:model/ObjectError}
     */
    ObjectError: ObjectError,
    /**
     * The OrderCommentRequestDTO model constructor.
     * @property {module:model/OrderCommentRequestDTO}
     */
    OrderCommentRequestDTO: OrderCommentRequestDTO,
    /**
     * The OrderDetailDTO model constructor.
     * @property {module:model/OrderDetailDTO}
     */
    OrderDetailDTO: OrderDetailDTO,
    /**
     * The OrderListDTO model constructor.
     * @property {module:model/OrderListDTO}
     */
    OrderListDTO: OrderListDTO,
    /**
     * The OrderNoAndTimeDTO model constructor.
     * @property {module:model/OrderNoAndTimeDTO}
     */
    OrderNoAndTimeDTO: OrderNoAndTimeDTO,
    /**
     * The OrderRemindingDTO model constructor.
     * @property {module:model/OrderRemindingDTO}
     */
    OrderRemindingDTO: OrderRemindingDTO,
    /**
     * The OrderRequestDTO model constructor.
     * @property {module:model/OrderRequestDTO}
     */
    OrderRequestDTO: OrderRequestDTO,
    /**
     * The OtherService model constructor.
     * @property {module:model/OtherService}
     */
    OtherService: OtherService,
    /**
     * The PersistentToken model constructor.
     * @property {module:model/PersistentToken}
     */
    PersistentToken: PersistentToken,
    /**
     * The PromotionDTO model constructor.
     * @property {module:model/PromotionDTO}
     */
    PromotionDTO: PromotionDTO,
    /**
     * The PromotionItem model constructor.
     * @property {module:model/PromotionItem}
     */
    PromotionItem: PromotionItem,
    /**
     * The RepairItem model constructor.
     * @property {module:model/RepairItem}
     */
    RepairItem: RepairItem,
    /**
     * The Shop model constructor.
     * @property {module:model/Shop}
     */
    Shop: Shop,
    /**
     * The ShopDetailDTO model constructor.
     * @property {module:model/ShopDetailDTO}
     */
    ShopDetailDTO: ShopDetailDTO,
    /**
     * The ShopListDTO model constructor.
     * @property {module:model/ShopListDTO}
     */
    ShopListDTO: ShopListDTO,
    /**
     * The SingleStringRequestDTO model constructor.
     * @property {module:model/SingleStringRequestDTO}
     */
    SingleStringRequestDTO: SingleStringRequestDTO,
    /**
     * The StringNumItem model constructor.
     * @property {module:model/StringNumItem}
     */
    StringNumItem: StringNumItem,
    /**
     * The TireService model constructor.
     * @property {module:model/TireService}
     */
    TireService: TireService,
    /**
     * The TripCountDTO model constructor.
     * @property {module:model/TripCountDTO}
     */
    TripCountDTO: TripCountDTO,
    /**
     * The TripCountListDTO model constructor.
     * @property {module:model/TripCountListDTO}
     */
    TripCountListDTO: TripCountListDTO,
    /**
     * The TripInfo model constructor.
     * @property {module:model/TripInfo}
     */
    TripInfo: TripInfo,
    /**
     * The TripInfoDTO model constructor.
     * @property {module:model/TripInfoDTO}
     */
    TripInfoDTO: TripInfoDTO,
    /**
     * The TripInfoListDTO model constructor.
     * @property {module:model/TripInfoListDTO}
     */
    TripInfoListDTO: TripInfoListDTO,
    /**
     * The TripPositionSummary model constructor.
     * @property {module:model/TripPositionSummary}
     */
    TripPositionSummary: TripPositionSummary,
    /**
     * The UploadAvatarDTO model constructor.
     * @property {module:model/UploadAvatarDTO}
     */
    UploadAvatarDTO: UploadAvatarDTO,
    /**
     * The UserDTO model constructor.
     * @property {module:model/UserDTO}
     */
    UserDTO: UserDTO,
    /**
     * The UserInfoDTO model constructor.
     * @property {module:model/UserInfoDTO}
     */
    UserInfoDTO: UserInfoDTO,
    /**
     * The UserInfoRequestDTO model constructor.
     * @property {module:model/UserInfoRequestDTO}
     */
    UserInfoRequestDTO: UserInfoRequestDTO,
    /**
     * The VehicleBrandDTO model constructor.
     * @property {module:model/VehicleBrandDTO}
     */
    VehicleBrandDTO: VehicleBrandDTO,
    /**
     * The VehicleBrandItem model constructor.
     * @property {module:model/VehicleBrandItem}
     */
    VehicleBrandItem: VehicleBrandItem,
    /**
     * The VehicleInfo model constructor.
     * @property {module:model/VehicleInfo}
     */
    VehicleInfo: VehicleInfo,
    /**
     * The VehicleInfoDTO model constructor.
     * @property {module:model/VehicleInfoDTO}
     */
    VehicleInfoDTO: VehicleInfoDTO,
    /**
     * The VehicleInfoRequestDTO model constructor.
     * @property {module:model/VehicleInfoRequestDTO}
     */
    VehicleInfoRequestDTO: VehicleInfoRequestDTO,
    /**
     * The VehicleModelDTO model constructor.
     * @property {module:model/VehicleModelDTO}
     */
    VehicleModelDTO: VehicleModelDTO,
    /**
     * The VehicleModelRequestDTO model constructor.
     * @property {module:model/VehicleModelRequestDTO}
     */
    VehicleModelRequestDTO: VehicleModelRequestDTO,
    /**
     * The VehicleModelStorage model constructor.
     * @property {module:model/VehicleModelStorage}
     */
    VehicleModelStorage: VehicleModelStorage,
    /**
     * The VehiclePositionDTO model constructor.
     * @property {module:model/VehiclePositionDTO}
     */
    VehiclePositionDTO: VehiclePositionDTO,
    /**
     * The VehicleStatistics model constructor.
     * @property {module:model/VehicleStatistics}
     */
    VehicleStatistics: VehicleStatistics,
    /**
     * The VehicleVoltageInfoDTO model constructor.
     * @property {module:model/VehicleVoltageInfoDTO}
     */
    VehicleVoltageInfoDTO: VehicleVoltageInfoDTO,
    /**
     * The VehicleVoltageThresholdDTO model constructor.
     * @property {module:model/VehicleVoltageThresholdDTO}
     */
    VehicleVoltageThresholdDTO: VehicleVoltageThresholdDTO,
    /**
     * The AccountresourceApi service constructor.
     * @property {module:api/AccountresourceApi}
     */
    AccountresourceApi: AccountresourceApi,
    /**
     * The BannercontrollerApi service constructor.
     * @property {module:api/BannercontrollerApi}
     */
    BannercontrollerApi: BannercontrollerApi,
    /**
     * The ConfigcontrollerApi service constructor.
     * @property {module:api/ConfigcontrollerApi}
     */
    ConfigcontrollerApi: ConfigcontrollerApi,
    /**
     * The DevicecontrollerApi service constructor.
     * @property {module:api/DevicecontrollerApi}
     */
    DevicecontrollerApi: DevicecontrollerApi,
    /**
     * The FencescontrollerApi service constructor.
     * @property {module:api/FencescontrollerApi}
     */
    FencescontrollerApi: FencescontrollerApi,
    /**
     * The FilecontrollerApi service constructor.
     * @property {module:api/FilecontrollerApi}
     */
    FilecontrollerApi: FilecontrollerApi,
    /**
     * The InsurancecompanycontrollerApi service constructor.
     * @property {module:api/InsurancecompanycontrollerApi}
     */
    InsurancecompanycontrollerApi: InsurancecompanycontrollerApi,
    /**
     * The MaintenancecontrollerApi service constructor.
     * @property {module:api/MaintenancecontrollerApi}
     */
    MaintenancecontrollerApi: MaintenancecontrollerApi,
    /**
     * The OrderscontrollerApi service constructor.
     * @property {module:api/OrderscontrollerApi}
     */
    OrderscontrollerApi: OrderscontrollerApi,
    /**
     * The PromotioncontrollerApi service constructor.
     * @property {module:api/PromotioncontrollerApi}
     */
    PromotioncontrollerApi: PromotioncontrollerApi,
    /**
     * The ShopcontrollerApi service constructor.
     * @property {module:api/ShopcontrollerApi}
     */
    ShopcontrollerApi: ShopcontrollerApi,
    /**
     * The TripinfocontrollerApi service constructor.
     * @property {module:api/TripinfocontrollerApi}
     */
    TripinfocontrollerApi: TripinfocontrollerApi,
    /**
     * The UsercontrollerApi service constructor.
     * @property {module:api/UsercontrollerApi}
     */
    UsercontrollerApi: UsercontrollerApi,
    /**
     * The UserresourceApi service constructor.
     * @property {module:api/UserresourceApi}
     */
    UserresourceApi: UserresourceApi,
    /**
     * The VehiclecontrollerApi service constructor.
     * @property {module:api/VehiclecontrollerApi}
     */
    VehiclecontrollerApi: VehiclecontrollerApi
  };

  return exports;
}));
