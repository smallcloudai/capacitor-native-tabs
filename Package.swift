// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "NativeTabsPlugin",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "NativeTabsPlugin",
            targets: ["NativeTabsPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "NativeTabsPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/NativeTabsPlugin"),
        .testTarget(
            name: "NativeTabsPluginTests",
            dependencies: ["NativeTabsPlugin"],
            path: "ios/Tests/NativeTabsPluginTests")
    ]
)
