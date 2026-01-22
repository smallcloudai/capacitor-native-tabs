import { WebPlugin } from '@capacitor/core';

import type {
  InitializeOptions,
  NativeTabsPlugin,
  PluginListenerHandle,
  TabConfig,
} from './definitions';

export class NativeTabsWeb extends WebPlugin implements NativeTabsPlugin {
  private tabs: TabConfig[] = [];
  private selectedIndex: number = 0;

  async initialize(options: InitializeOptions): Promise<void> {
    console.log('NativeTabs web fallback - initialize called with:', options);
    this.tabs = options.tabs || [];
    this.selectedIndex = options.selectedIndex || 0;
    // In web mode, this plugin doesn't render anything
    // The Vue app should handle tab rendering
  }

  async updateTabs(options: { tabs: TabConfig[] }): Promise<void> {
    console.log('NativeTabs web fallback - updateTabs called');
    this.tabs = options.tabs;
  }

  async setSelectedTab(options: { index: number }): Promise<void> {
    console.log('NativeTabs web fallback - setSelectedTab:', options.index);
    this.selectedIndex = options.index;
    this.notifyListeners('tabSelected', {
      index: options.index,
      tab: this.tabs[options.index],
    });
  }

  async getSelectedTab(): Promise<{ index: number }> {
    return { index: this.selectedIndex };
  }

  async hideTabBar(): Promise<void> {
    console.log('NativeTabs web fallback - hideTabBar');
  }

  async showTabBar(): Promise<void> {
    console.log('NativeTabs web fallback - showTabBar');
  }

  async deselectAll(): Promise<void> {
    console.log('NativeTabs web fallback - deselectAll');
  }

  override async addListener(
    eventName: 'tabSelected',
    listenerFunc: (info: { index: number; tab: TabConfig }) => void,
  ): Promise<PluginListenerHandle> {
    return super.addListener(eventName, listenerFunc);
  }

  override async removeAllListeners(): Promise<void> {
    return super.removeAllListeners();
  }
}
