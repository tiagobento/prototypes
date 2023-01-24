## KNOWN ISSUES

Issues that are currently identified on Boxed Expression Editor, and should be fixed. Most of them are bugs and do not prevent users from authoring expressions, though.

- General:
  - Console error:
    > DevTools failed to load source map: Could not load content for chrome-extension://gighmmpiobklfepjocnamgkkbiglidom/browser-polyfill.js.map: System error: net::ERR_FILE_NOT_FOUND
  - Console error:
    > Failed to decode downloaded font: http://localhost:3015/6f75249988833dd9f4297c9781ad35ff.ttf
        localhost/:1 OTS parsing error: invalid sfntVersion: 1702391919
- Resizing:
  - (Done) Java function type weird behavior when resizing
  - (Done) DecisionTable/Relation delete columns resizing bug.
  - (WIP) Resizing table columns when the container is already at minWidth.
  - PMML Functions can break resizing when the document/model names are are too long.
- Input:
  - Support readonly mode.
  - FEEL Input onBlur not working. Typing a value and clicking outside does not save the typed value.
  - Context Menu shouldn't be allowed on every cell. Fix it.
  - Allow pasting arbitrary data on cells that contain literal expressions.
  - Can't edit by start typing after pressing backspace on a cell, without pressing Enter.
  - Context Menu broken on DT top-level headers. Column index is broken. E.g. Add to the right/left.
  - Additional row context menu broken. Shouldn't have `Delete` nor `Insert below`
  - SELECTION Cut/paste/reset should not be available for header cells on Context Menu.
  - Logic type selector should never render outside the screen. Same for context menu.
  - Closing HitPolicySelector without pressing Esc (e.g. clicking outside) breaks keyboard shortcuts like Backspace, Ctrl+C etc.
- UX:
  - Pasting expressions error handling.
  - Add resizer handles to all column headers.
  - Arrow-right on upper headers goes beyond the limit. Limit is correct using headerGroups.
  - Navigate, with keyboard, to headers on multiple levels.
  - Dead keys (e.g. ˜ˆ´¨) are not triggering edit mode correctly on table cells.
  - HitPolicySelector should not close the Popover when selecting values on the Selects.
  - Add row/column buttons disappearing when in upper/left positions, after clicked.
  - Resizing columns triggers selection. Sometimes at the right-side, but always at top or bottom.
    - The same problem happens when editing text inside a cell. See https://issues.redhat.com/browse/KOGITO-7823
  - Editing long text inside cells should grow the cell to allow more space for editing it. See https://issues.redhat.com/browse/KOGITO-7822
  - FEEL expressions highlight is wrong. E.g. "anything" -> "in" is blue, rest is black.
  - Decision table input columns should not have a "Name", but an "Expression". The input should be a FeelInput, not a plain text input.
  - Invocation expression function name should not be a plain text input. It should have autocompletion features.
- UI:
  - Fix rowSpan on DecisionTable input and annotaions sections.
  - Truncate expression name on root expressions.
  - Fix icons positions on expression header menu.
  - Ctrl+ and Ctrl- zoom problems. Zoom in and out.
  - Decision table top-level header with long name not playing well with sub-headers.
    - Create a DecisionTable.
    - Delete one output column.
    - Rename the expression to `long long long long long long long long long long long`.
    - The widths are broken.
- Enhancements:
  - HitPolicySelector no caps, description for all. Etc.
  - Add icons to FunctionKind selector.
  - Add explanation to FunctionKind selector.
  - Add explanation to all expression types, right at the `Select expression` menu.
  - Add empty state to parameters on Function expressions.


On DMN Editor:
  - CSS differences.
  - Keyboard shortcuts are not working.
  - Resizing Literal Expressions is not having an effect after switching back to the old editor.
  - 

On DMN Runner:
  - 
