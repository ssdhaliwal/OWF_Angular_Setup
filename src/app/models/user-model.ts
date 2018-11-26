export class UserModel {
  name: string;
  user: string;
  prevLogin: string;
  id: string;
  email: string;

  constructor(name: string, user: string, prevLogin: string, id: string, email: string) {
    this.name = name;
    this.user = user;
    this.prevLogin = prevLogin;
    this.id = id;
    this.email = email;
  }
}

export class UserSummaryModel {
  success: boolean;
  data: UserSummaryAttribute[];
  results: number;

  constructor(success: boolean, data: UserSummaryAttribute[], results: number) {
    this.success = success;
    this.data = data;
    this.results = results;
  }
}

export class UserSummaryAttribute {
  totalStacks: number;
  hasPWD: string;
  totalGroups: number;
  id: string;
  userRealName: string;
  totalWidgets: number;
  userName: string;
  email: string;
  lastLogin: string;
  totalDashboards: number;

  constructor(totalStacks: number, hasPWD: string, totalGroups: number, id: string, userRealName: string,
    totalWidgets: number, userName: string, email: string, lastLogin: string, totalDashboards: number) {
    this.totalStacks = totalStacks;
    this.hasPWD = hasPWD;
    this.totalGroups = totalGroups;
    this.id = id;
    this.userRealName = userRealName;
    this.totalWidgets = totalWidgets;
    this.userName = userName;
    this.email = email;
    this.lastLogin = lastLogin;
    this.totalDashboards = totalDashboards;
  }
}

export class UserGroupModel {
  data: UserGroupAttribute[];
  results: number;

  constructor(data: UserGroupAttribute[], results: number) {
    this.data = data;
    this.results = results;
  }
}

export class UserGroupAttribute {
  stackDefault: boolean;
  totalStacks: number;
  status: string;
  totalUsers: number;
  id: string;
  description: string;
  totalWidgets: number;
  email: string;
  name: string;
  automatic: boolean;
  displayName: string;

  constructor(stackDefault: boolean, totalStacks: number, status: string, totalUsers: number, id: string,
    description: string, totalWidgets: number, email: string, name: string, automatic: boolean, displayName: string) {
    this.stackDefault = stackDefault;
    this.totalStacks = totalStacks;
    this.status = status;
    this.totalUsers = totalUsers;
    this.id = id;
    this.description = description;
    this.totalWidgets = totalWidgets;
    this.email = email;
    this.name = name;
    this.automatic = automatic;
    this.displayName = displayName;
  }
}

export class UserDashboardModel {
  results: number;
  success: boolean;

  attributes: UserDashboardAttribute[];

  constructor(results: number, success: boolean, attributes: UserDashboardAttribute[]) {
    this.results = results;
    this.success = success;

    this.attributes = attributes;
  }
}

export class UserDashboardAttribute {
  createDate: string;
  editedDate: string;
  description: string;
  guid: string;
  name: string;
  userId: string;

  isGroupDashboard: boolean;
  isDefault: boolean;
  locked: boolean;
  publishedToStore: boolean;

  dashboardPosition: number;
  iconImageUrl: string;

  stack: UserDashboardStack;

  constructor(createDate: string, editedDate: string, description: string, guid: string, name: string, userId: string,
    isGroupDashboard: boolean, isDefault: boolean, locked: boolean, publishedToStore: boolean, dashboardPosition: number,
    iconImageUrl: string, stack: UserDashboardStack
  ) {
    this.createDate = createDate;
    this.editedDate = editedDate;
    this.description = description;
    this.guid = guid;
    this.name = name;
    this.userId = userId;

    this.isGroupDashboard = isGroupDashboard;
    this.isDefault = isDefault;
    this.locked = locked;
    this.publishedToStore = publishedToStore;

    this.dashboardPosition = dashboardPosition;
    this.iconImageUrl = iconImageUrl;

    this.stack = stack;
  }
}

export class UserDashboardStack {
  approved: boolean;
  id: string;
  name: string;

  ownerName: string;
  ownerId: string;

  imageUrl: string;

  constructor(approved: boolean, id: string, name: string, ownerName: string, ownerId: string,
    imageUrl: string) {
    this.approved = approved;
    this.id = id;
    this.name = name;

    this.ownerName = ownerName;
    this.ownerId = ownerId;

    this.imageUrl = imageUrl;

  }
}

export class UserWidgetModel {
  id: number;
  namespace: string;
  path: string;
  value: UserDashboardAttribute;
}

export class UserWidgetAttribute {
  background: boolean;
  disabled: boolean;
  favorite: boolean;
  mobileReady: boolean;
  singleton: boolean;
  visible: boolean;

  description: string;
  originalName: string;
  namespace: string;
  universalName: string;
  userId: string;
  userRealName: string;

  height: number;
  width: number;
  maximized: number;
  minimized: number;
  position: number;
  widgetVersion: string;

  headerIconUrl: string;
  imageUrl: string;
  largeIconUrl: string;
  smallIconUrl: string;
  url: string;

  intents: UserWidgetIntents;
  widgetTypes: WidgetType[];
}

export class UserWidgetIntents {
  receive: UserWidgetIntentType[];
  send: UserWidgetIntentType[];
}

export class UserWidgetIntentType {
  action: boolean;
  dataTypes: string[];
}

export class WidgetType {
  displayName: string;
  id: number;
  name: string;
}
