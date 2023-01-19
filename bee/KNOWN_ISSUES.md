## KNOWN ISSUES


- General:
  - Console error: 
      > DevTools failed to load source map: Could not load content for chrome-extension://gighmmpiobklfepjocnamgkkbiglidom/browser-polyfill.js.map: System error: net::ERR_FILE_NOT_FOUND
  - Console error: 
      > Failed to decode downloaded font: http://localhost:3015/6f75249988833dd9f4297c9781ad35ff.ttf
        localhost/:1 OTS parsing error: invalid sfntVersion: 1702391919
- Resizing:
    - (WIP) Resizing table columns when the container is already at minWidth.
    - (WIP) Java function type weird behavior when resizing
    - PMML Functions can break resizing when the document/model names are are too long.
    - DecisionTable/Relation delete columns resizing bug.
- Input:
    - FEEL Input onBlur not working. Typing a value and clicking outside does not save the typed value.
    - Context Menu shouldn't be allowed on every cell. Fix it.
    - Allow pasting arbitrary data on cells that contain literal expressions.
    - Can't edit by start typing after pressing backspace on a cell, without pressing Enter.    
    - Context Menu broken on DT top-level headers. Column index is broken. E.g. Add to the right/left.
    - Additional row context menu broken. Shouldn't have `Delete` nor `Insert below`
    - SELECTION Cut/paste/reset should not be available for header cells on Context Menu.
    - Closing HitPolicySelector without pressing Esc (e.g. clicking outside) breaks keyboard shortcuts like Backspace, Ctrl+C etc.
- UX:
    - Pasting expressions error handling.
    - Arrow-right on upper headers goes beyond the limit. Limit is correct using headerGroups.
    - Navigate, with keyboard, to headers on multiple levels.
    - Dead keys (e.g. ˜ˆ´¨) are not triggering edit mode correctly on table cells.
    - HitPolicySelector should not close the Popover when selecting values on the Selects.
    - Add row/column buttons disappearing when in upper/left positions, after clicked.
    - Resizing columns triggers selection. Sometimes at the right-side, but always at top or bottom.
- UI:
    - Fix rowSpan on DecisionTable input and annotaions sections.
    - Truncate expression name on root expressions.
    - Fix icons positions on expression header menu.
    - Ctrl+ and Ctrl- zoom problems. Zoom in and out.
- Enhancements:
    - HitPolicySelector no caps, description for all. Etc.
    - Add icons to FunctionKind selector.
    - Add explanation to FunctionKind selector.
    - Add explanation to all expression types, right at the `Select expression` menu.
    - Add empty state to parameters on Function expressions.
