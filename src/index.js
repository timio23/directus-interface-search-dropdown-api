import InterfaceSelectDropdownM2O from './interface.vue';

export default {
	id: 'select-dropdown-m2o-search',
	name: 'M2O Dropdown with Search',
	icon: 'arrow_drop_down_circle',
	description: 'Show options from API',
	component: InterfaceSelectDropdownM2O,
	types: ['uuid', 'string', 'text', 'integer', 'bigInteger'],
	localTypes: ['m2o'],
	group: 'relational',
	relational: true,
	options: ({ relations }) => {
		const collection = relations.m2o?.related_collection;
		console.log(collection);
		return [
			{
				field: 'template',
				name: 'Field to Show',
				meta: {
					interface: 'system-display-template',
					options: {
						collectionName: collection,
					},
					width: 'half',
				},
			},
			{
				field: 'placeholder',
				type: 'string',
				name: 'Placeholder',
				meta: {
					interface: 'input',
					width: 'half',
					options: {
						placeholder: 'Enter a placeholder',
					},
				},
			},
			{
				field: 'filter',
				name: '$t:filter',
				type: 'json',
				meta: {
					interface: 'system-filter',
					options: {
						collectionName: collection,
					},
				},
			},

		];
	},
	recommendedDisplays: ['related-values'],
};
