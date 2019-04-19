import Vue from 'vue'

import {
	Pagination,
	Dialog,
	Autocomplete,
	Dropdown,
	DropdownMenu,
	DropdownItem,
	Menu,
	Submenu,
	MenuItem,
	MenuItemGroup,
	Input,
	InputNumber,
	Radio,
	RadioGroup,
	RadioButton,
	Checkbox,
	CheckboxButton,
	CheckboxGroup,
	Switch,
	Select,
	Option,
	OptionGroup,
	Button,
	ButtonGroup,
	Table,
	TableColumn,
	DatePicker,
	TimeSelect,
	TimePicker,
	Popover,
	Tooltip,
	Breadcrumb,
	BreadcrumbItem,
	Form,
	FormItem,
	Tabs,
	TabPane,
	Tag,
	Tree,
	Alert,
	Slider,
	Icon,
	Row,
	Col,
	Upload,
	Progress,
	Badge,
	Card,
	Rate,
	Steps,
	Step,
	Carousel,
	CarouselItem,
	Collapse,
	CollapseItem,
	Cascader,
	ColorPicker,
	Transfer,
	Container,
	Header,
	Aside,
	Main,
	Footer,
	Loading,
	MessageBox,
	Message,
	Notification
} from 'element-ui';

Vue.component('Pagination', Pagination);
Vue.component('Dialog', Dialog);
Vue.component('Autocomplete', Autocomplete);
Vue.component('Dropdown', Dropdown);
Vue.component('DropdownMenu', DropdownMenu);
Vue.component('DropdownItem', DropdownItem);
Vue.component('Menu', Menu);
Vue.component('Submenu', Submenu);
Vue.component('MenuItem', MenuItem);
Vue.component('MenuItemGroup', MenuItemGroup);
Vue.component('Input', Input);
Vue.component('InputNumber', InputNumber);
Vue.component('Radio', Radio);
Vue.component('RadioGroup', RadioGroup);
Vue.component('RadioButton', RadioButton);
Vue.component('Checkbox', Checkbox);
Vue.component('CheckboxButton', CheckboxButton);
Vue.component('CheckboxGroup', CheckboxGroup);
Vue.use(Switch);
Vue.component('Select', Select);
Vue.component('Option', Option);
Vue.component('OptionGroup', OptionGroup);
Vue.component('Button', Button);
Vue.component('ButtonGroup', ButtonGroup);
Vue.component('Table', Table);
Vue.component('TableColumn', TableColumn);
Vue.component('DatePicker', DatePicker);
Vue.component('TimeSelect', TimeSelect);
Vue.component('TimePicker', TimePicker);
Vue.component('Popover', Popover);
Vue.component('Tooltip', Tooltip);
Vue.component('Breadcrumb', Breadcrumb);
Vue.component('BreadcrumbItem', BreadcrumbItem);
Vue.component('Form', Form);
Vue.component('FormItem', FormItem);
Vue.component('Tabs', Tabs);
Vue.component('TabPane', TabPane);
Vue.component('Tag', Tag);
Vue.component('Tree', Tree);
Vue.component('Alert', Alert);
Vue.component('Slider', Slider);
Vue.component('Icon', Icon);
Vue.component('Row', Row);
Vue.component('Col', Col);
Vue.component('Upload', Upload);
Vue.component('Progress', Progress);
Vue.component('Badge', Badge);
Vue.component('Card', Card);
Vue.component('Rate', Rate);
Vue.component('Steps', Steps);
Vue.component('Step', Step);
Vue.component('Carousel', Carousel);
Vue.component('CarouselItem', CarouselItem);
Vue.component('Collapse', Collapse);
Vue.component('CollapseItem', CollapseItem);
Vue.component('Cascader', Cascader);
Vue.component('ColorPicker', ColorPicker);
Vue.component('Transfer', Transfer);
Vue.component('Container', Container);
Vue.component('Header', Header);
Vue.component('Aside', Aside);
Vue.component('Main', Main);
Vue.component('Footer', Footer);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;