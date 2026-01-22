require 'json'
package = JSON.parse(File.read(File.join(__dir__, 'package.json')))
prefix = if ENV['NATIVE_PUBLISH'] == 'true'
           'ios/'
         else
           ''
         end

Pod::Spec.new do |s|
  s.name = 'CapacitorNativeTabs'
  s.version = package['version']
  s.summary = 'Capacitor plugin for native iOS tabs with SwiftUI'
  s.license = 'MIT'
  s.homepage = 'https://flexus.team'
  s.authors = { 'SMALL MAGELLANIC CLOUD AI LTD' => 'info@smallcloud.tech' }
  s.source = { git: 'https://github.com/smallcloud/flexus', tag: s.version.to_s }
  s.platform = :ios, 14.0
  s.source_files = "#{prefix}ios/Sources/**/*.swift"
  s.requires_arc = true
  s.swift_version = '5.1'
  s.dependency 'Capacitor'
end
