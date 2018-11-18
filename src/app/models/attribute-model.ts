export class AttributeModel {
  attributes: Attribute[] | null;

  constructor(attributes: Attribute[]) {
    this.attributes = attributes;
  }
}

export class Attribute {
  key: string;
  value: string;

  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
  }
}
