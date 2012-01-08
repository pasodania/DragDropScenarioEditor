// "../closure-library-git/closure/bin/build/depswriter.py" --root_with_prefix="scripts ../../../seditor4/scripts" --output_file=deps.js
// java -jar ../compiler.jar --js=combine.js --compilation_level=SIMPLE_OPTIMIZATIONS --js_output_file=compiled.js

// TODO: deps.jsを作るためだけに作っただけの状態
goog.provide('seditor.app');

goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.object');
goog.require('goog.ui.Component.EventType');
goog.require('goog.ui.Tab');
goog.require('goog.ui.TabBar');
goog.require('goog.ui.TabPane');
goog.require('goog.fx.DragDrop');
goog.require('goog.fx.DragDropGroup');
goog.require('goog.ui.PopupMenu');
goog.require('goog.ui.Dialog');

