package com.smallcloud.capacitornativetabs;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "NativeTabs")
public class NativeTabsPlugin extends Plugin {

    @PluginMethod
    public void initialize(PluginCall call) {
        // Android implementation not available - iOS only
        call.resolve();
    }

    @PluginMethod
    public void updateTabs(PluginCall call) {
        // Android implementation not available - iOS only
        call.resolve();
    }

    @PluginMethod
    public void setSelectedTab(PluginCall call) {
        // Android implementation not available - iOS only
        call.resolve();
    }

    @PluginMethod
    public void deselectAll(PluginCall call) {
        // Android implementation not available - iOS only
        call.resolve();
    }

    @PluginMethod
    public void getSelectedTab(PluginCall call) {
        // Android implementation not available - iOS only
        call.resolve();
    }

    @PluginMethod
    public void hideTabBar(PluginCall call) {
        // Android implementation not available - iOS only
        call.resolve();
    }

    @PluginMethod
    public void showTabBar(PluginCall call) {
        // Android implementation not available - iOS only
        call.resolve();
    }

    @PluginMethod
    public void addListener(PluginCall call) {
        // Android implementation not available - iOS only
        call.resolve();
    }

    @PluginMethod
    public void removeAllListeners(PluginCall call) {
        // Android implementation not available - iOS only
        call.resolve();
    }
}
