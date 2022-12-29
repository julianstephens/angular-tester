export enum AllOrderFiltersLabels {
	DateRange = 'Date Range',
	CustomerType = 'Customer Type',
	FulfillmentMethod = 'Fulfillment Method',
	Origin = 'Origin',
	OrderStatus = 'Order Status',
	TrainingMode = 'Training Mode',

	SincePicked = 'Since Picked',
	SinceCreated = 'Since Created',
	CustomerTypePro = 'Pro',
	CustomerTypeHomeOwner = 'Homeowner',

	FMInStorePickUp = 'In-Store Pickup',
	FMCustomerDelivery = 'Customer Delivery',
	FMVendorDirect = 'Vendor Direct',

	OriginCommercial = 'Commercial',
	OriginCustomerCare = 'Customer Care',
	OriginWebOrder = 'Web Order',
	OriginStore = 'Store'
}

export enum fulfillmentMethodOpts {
	FMInStorePickUp = 'In-Store Pickup',
	FMCustomerDelivery = 'Customer Delivery',
	FMVendorDirect = 'Vendor Direct'
}

export enum dateOpts {
	SevenDays = '1-7 days',
	FourteenDays = '8-14 days',
	TwentyNineDays = ' 15-29 Days',
	FortyFourDays = '30-44 Days',
	FortyFivePlusDays = '45+ Days'
}

export enum customerTypeOpts {
	CustomerTypePro = 'Pro',
	CustomerTypeHomeOwner = 'Homeowner'
}

export enum originOpts {
	OriginCommercial = 'Commercial',
	OriginCustomerCare = 'Customer Care',
	OriginWebOrder = 'Web Order',
	OriginStore = 'Store',
	OriginFulfillingStore = 'Fulfilling Store',
	OriginStoreInput = ''
}

// export interface UIFilter {
// 	name: string;
// 	parent: string;
// 	hasSubmenu: boolean;
// 	objectProp?: string;
// 	value?: any;
//   }

export interface FilterData {
	title: string;
	options?: FilterOption[];
}
export interface SubFilterOption {
	name: string;
	value: string;
}

export interface FilterOption {
	value: string;
	name: string;
	options?: SubFilterOption[];
}
export enum orderStatusDetail {
	PickRequired = 'Pick Required',
	PulldownRequired = 'Pulldown Required',
	PutAwayRequired = 'Put Away Required',
	AuditRequired = 'Audit Required',
	DeliveryRequired = 'Delivery Required',
	PickInProgress = 'Pick In Progress',
	AuditInProgress = 'Audit In Progress',
	DeliveryInProgress = 'Delivery In Progress',
	AdjustmentInProgress = 'Adjustment In Progress',
	UnpickRequired = 'Unpick Required',
	Complete = 'Complete',
	IDRequired = 'ID Required',
	Cancelled = 'Cancelled',
	PutBack = 'Put Back',
	ReadyForPickup = 'Ready for Pickup',
	StageForPickup = 'Stage for Pickup',
	PickComplete = 'Pick Complete',
	OnHold = 'On Hold',
	ShippingInfoRequired = 'Shipping Info Required'
}

export const AllOrderFilters: FilterData[] = [
	{
		title: AllOrderFiltersLabels.DateRange,
		options: [
			{
				value: AllOrderFiltersLabels.SinceCreated,
				name: 'Since Created',
				options: [
					{
						value: dateOpts.SevenDays,
						name: '1-7 Days'
					},
					{
						value: dateOpts.FourteenDays,
						name: '8-14 Days'
					},
					{
						value: dateOpts.TwentyNineDays,
						name: '15-29 Days'
					},
					{
						value: dateOpts.FortyFourDays,
						name: '30-44 Days'
					},
					{
						value: dateOpts.FortyFivePlusDays,
						name: '45+ Days'
					}
				]
			},
			{
				value: AllOrderFiltersLabels.SincePicked,
				name: 'Since Picked',
				options: [
					{
						value: dateOpts.SevenDays,
						name: '1-7 Days'
					},
					{
						value: dateOpts.FourteenDays,
						name: '8-14 Days'
					},
					{
						value: dateOpts.TwentyNineDays,
						name: '15-29 Days'
					},
					{
						value: dateOpts.FortyFourDays,
						name: '30-44 Days'
					},
					{
						value: dateOpts.FortyFivePlusDays,
						name: '45+ Days'
					}
				]
			}
		]
	},
	{
		title: AllOrderFiltersLabels.CustomerType,
		options: [
			{
				value: customerTypeOpts.CustomerTypeHomeOwner,
				name: 'Homeowner'
			},
			{
				value: customerTypeOpts.CustomerTypePro,
				name: 'Pro'
			}
		]
	},
	{
		title: AllOrderFiltersLabels.FulfillmentMethod,
		options: [
			{
				value: fulfillmentMethodOpts.FMCustomerDelivery,
				name: 'Customer Delivery'
			},
			{
				value: fulfillmentMethodOpts.FMInStorePickUp,
				name: 'In-Store Pickup'
			},
			{
				value: fulfillmentMethodOpts.FMVendorDirect,
				name: 'Vendor Direct'
			}
		]
	},
	{
		title: AllOrderFiltersLabels.Origin,
		options: [
			{
				value: originOpts.OriginCommercial,
				name: 'Commercial'
			},
			{
				value: originOpts.OriginCustomerCare,
				name: 'Customer Care'
			},
			{
				value: originOpts.OriginWebOrder,
				name: 'Web Order'
			},
			{
				value: originOpts.OriginStore,
				name: 'Store',
				options: [
					{
						value: originOpts.OriginFulfillingStore,
						name: 'Fulfilling Store'
					},
					{
						value: originOpts.OriginStoreInput,
						name: ''
					}
				]
			}
		]
	},
	{
		title: AllOrderFiltersLabels.OrderStatus,
		options: [
			{
				value: OrderStatusDetail.PickRequired,
				name: 'Pick Required'
			}
		]
	},
	{
		title: AllOrderFiltersLabels.TrainingMode
	}
];
