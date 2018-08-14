/**
 * Creates and returns instance of component
 * @param element: DOM element
 * @param componentName: Component constructor
 */

export default function createInstance(element, componentName, component) {
    component.prototype._name = componentName;
    const instance = new component(element);

    console.info(`Created instance of component "${componentName}".`);
    return instance;
}