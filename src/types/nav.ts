export interface NavItem {
  id?: number;
  title: string;
  href?: string;
  icon?: any;
  tooltip?: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;
