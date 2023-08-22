import '../styles/main.scss';
import '../../pages/about.html';

/**
 * Please add components paths here
 * All components added will be available for lazy loading
 */
const components = {
	header: 'components/header/header',
	footer: 'components/footer/footer',
};

export const controller = (() => {
	const componentIdAttribute = 'data-action';
	/**
	 * @method init
	 * Init the modules automatically only if they are preset in a page
	 * @param selector, this is the selector to detect the components
	 */
	const init = (selector = '*[data-action]') => {
		const matchingComponents = document.querySelectorAll(selector);
		initComponents(matchingComponents);
	};
	/**
	 * @method init
	 * Init the modules automatically only if they are preset in a page
	 * @param matchingComponents, all the components that match with '*[data-action]' selector
	 */
	const initComponents = (matchingComponents) => {
		Array.from(matchingComponents).forEach((component) => {
			const componentAttr = component.getAttribute(componentIdAttribute);
			const componentName = componentAttr.charAt(0) + componentAttr.slice(1);
			if (components[componentName]) {
				// export each webChunk for comp wise .js loading
				import(/* webpackChunkName: "[request]" */ `./${components[componentName]}.js`).then((AP) => {
					if (AP[componentName] && AP[componentName].init && !component.classList.contains('js-initialized')) {
						AP[componentName].init(component);
						component.classList.add('js-initialized');
					}
				});
			}
		});
	};
	return {
		init
	};
})();

document.addEventListener('DOMContentLoaded', function () {
	controller.init();
});

const AP = {} || window.AP;
AP.mainController = controller;