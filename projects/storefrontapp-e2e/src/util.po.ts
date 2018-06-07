import { element, by } from 'protractor';

export class E2EUtil {
  /**
   * Get a cms component given the component uid and the selector name.
   * @param componentUid The component-uid as it shows in the "y-component-wrapper"
   * @param componentSelector The selector declared on the component (used to identify the html tag)
   */
  static getComponent(componentUid: string, componentSelector: string) {
    // e.g.: <y-component-wrapper _ngcontent-c6="" _nghost-c11="" ng-reflect-component-type="SimpleBannerComponent"
    //              ng-reflect-component-uid="SiteLogoComponent">
    const componentWrapper = element(
      by.css(`[ng-reflect-component-uid=${componentUid}]`)
    );
    // e.g.: <y-banner _nghost-c19="" style="flex-direction: row; box-sizing: border-box; display: flex;" class="ng-star-inserted">
    const component = componentWrapper.element(by.css(componentSelector));
    return component;
  }

  /**
   * Get a cms component given the parent component and the component selector name.
   * @param parentSelector An id to be used to search the parent
   * @param componentSelector The selector declared on the component (used to identify the html tag)
   */
  static getComponentWithinParent(
    parentSelector: string,
    componentSelector: string
  ) {
    const parent = element(by.css(parentSelector));
    const component = parent.all(by.css(componentSelector));
    return component;
  }
}