declare var OWF: any;

export class OwfContainerModel {
  attributes: ContainerAttribute[] = [];

  constructor() {
    this.attributes.push(new ContainerAttribute('Container Name', OWF.getContainerName()));
    this.attributes.push(new ContainerAttribute('Container URL', OWF.getContainerUrl()));
    this.attributes.push(new ContainerAttribute('Container Version', OWF.getContainerVersion()));
    this.attributes.push(new ContainerAttribute('Theme', OWF.getCurrentTheme().themeName));
    this.attributes.push(new ContainerAttribute('Layout', OWF.getDashboardLayout()));
    this.attributes.push(new ContainerAttribute('Frame Id', OWF.getIframeId()));
    this.attributes.push(new ContainerAttribute('Instance Id', OWF.getInstanceId()));
    this.attributes.push(new ContainerAttribute('URL', OWF.getUrl()));
    this.attributes.push(new ContainerAttribute('Version', OWF.getVersion()));
    this.attributes.push(new ContainerAttribute('Widget GUID', OWF.getWidgetGuid()));
    this.attributes.push(new ContainerAttribute('Locked', OWF.isDashboardLocked()));
  }
}

export class ContainerAttribute {
  key: string;
  value: string;

  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
  }
}
