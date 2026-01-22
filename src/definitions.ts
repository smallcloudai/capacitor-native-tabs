export interface NativeTabsPlugin {
  /**
   * Initialize and show native tabs
   */
  initialize(options: InitializeOptions): Promise<void>;

  /**
   * Update tab configuration
   */
  updateTabs(options: { tabs: TabConfig[] }): Promise<void>;

  /**
   * Set the currently selected tab
   */
  setSelectedTab(options: { index: number }): Promise<void>;

  /**
   * Deselect all tabs (no tab selected)
   */
  deselectAll(): Promise<void>;

  /**
   * Get the currently selected tab (-1 if none selected)
   */
  getSelectedTab(): Promise<{ index: number }>;

  /**
   * Hide the tab bar
   */
  hideTabBar(): Promise<void>;

  /**
   * Show the tab bar
   */
  showTabBar(): Promise<void>;

  /**
   * Listen to tab selection changes
   */
  addListener(
    eventName: 'tabSelected',
    listenerFunc: (info: { index: number; tab: TabConfig }) => void,
  ): Promise<PluginListenerHandle>;

  /**
   * Remove all listeners for this plugin
   */
  removeAllListeners(): Promise<void>;
}

export interface TabConfig {
  /**
   * Tab title
   */
  title: string;

  /**
   * SF Symbol name for iOS (e.g., "house", "person", "gear")
   * https://developer.apple.com/sf-symbols/
   */
  systemImage: string;

  /**
   * Optional badge text
   */
  badge?: string;

  /**
   * Tab role (currently only 'search' is supported on iOS)
   */
  role?: 'search' | 'default';

  /**
   * Route or identifier associated with this tab
   */
  route?: string;

  /**
   * Custom data to pass back when tab is selected
   */
  customData?: any;
}

export interface InitializeOptions {
  /**
   * Array of tab configurations
   */
  tabs: TabConfig[];

  /**
   * Initial selected tab index
   */
  selectedIndex?: number;
}

export interface PluginListenerHandle {
  remove(): Promise<void>;
}
