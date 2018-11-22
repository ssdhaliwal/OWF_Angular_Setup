export class PreferencesModel {
  preferences: Preference[] | null;

  constructor(preferences: Preference[]) {
    this.preferences = preferences;
  }
}

export class Preference {
  id: number;
  namespace: string;
  category: string;
  key: string;
  value: string;
  dateUpdated: number;
  isDefault: boolean;
  isRequired: boolean;
  isSystem: boolean;

  constructor(id: number, namespace: string, category: string, key: string, value: string,
    dateUpdated: number, isDefault: boolean, isRequired: boolean, isSystem: boolean) {
    this.id = id;
    this.namespace = namespace;
    this.category = category;
    this.key = key;
    this.value = value;
    this.dateUpdated = dateUpdated;
    this.isDefault = isDefault;
    this.isRequired = isRequired;
    this.isSystem = isSystem;
  }
}
