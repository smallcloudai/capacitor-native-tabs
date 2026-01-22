# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Capacitor plugin that provides native iOS tab bar integration. The plugin overlays a native UITabBar on top of a single WKWebView (non-invasive approach) and forwards tab selection events to JavaScript via Capacitor's event system.

**Key Design Decisions:**
- Does NOT replace the root view controller - uses UI-only tab bar overlay
- Keeps the CAPBridgeViewController and single WKWebView intact
- Automatically manages WKWebView contentInset to prevent overlap with tab bar
- Uses SF Symbols for iOS icons (iOS 13+)

## Build Commands

```bash
npm run build          # TypeScript compilation + Rollup bundling
npm run clean          # Remove dist/ directory
npm run watch          # TypeScript watch mode for development
```

## Verification Commands

```bash
npm run verify         # Run all platform verifications
npm run verify:ios     # iOS: pod install + xcodebuild
npm run verify:android # Android: Gradle build and tests
npm run verify:web     # Web: npm run build
```

## Architecture

```
src/                              # TypeScript (web interface)
├── index.ts                      # Plugin registration & exports
├── definitions.ts                # TypeScript interfaces (NativeTabsPlugin, TabConfig)
└── web.ts                        # Web fallback implementation

ios/Sources/NativeTabsPlugin/     # iOS native implementation
├── NativeTabsPlugin.swift        # Main plugin class - defines public API methods
└── TabViewController.swift       # UITabBar controller and UI management
```

**Cross-Platform Pattern:**
- `NativeTabsPlugin` registered via Capacitor's `registerPlugin()`
- iOS: Native Swift implementation with UITabBar
- Android: Placeholder (not implemented)
- Web: Fallback via `NativeTabsWeb` class

**Event Communication:**
- Native → JS: `notifyListeners('tabSelected', {index, tab})`
- JS → Native: Standard Capacitor plugin method calls

## Plugin API

Core interfaces defined in `src/definitions.ts`:
- `NativeTabsPlugin`: Main plugin interface (initialize, updateTabs, setSelectedTab, hideTabBar, showTabBar)
- `TabConfig`: Tab configuration (title, systemImage, badge, role, route, customData)
- `InitializeOptions`: Initialization options (tabs array, selectedIndex)

## Distribution

- **npm**: `capacitor-native-tabs`
- **CocoaPods**: `CapacitorNativeTabs` (iOS 15.6+)
- **Swift Package Manager**: Via `Package.swift`
