## FUTURE 

Future improvements that can be done to/using the Boxed Expression Editor. Things listed here are ideas, not planned tasks or commitments.


- UX
    X When double-clicking a column resize handler, resize it to fit to data.
    - Fullscreen for individual expressions
    - Expand/collapse expressions.
    - Annotation column should not be FEEL. Should actually be Markdown.
    - Feel input snippets not working well because of the `Tab` mechanism. How to detect this? e.g. `for` autocompletion
- Copy/paste
    - Make the entire Boxed Expression be copy-able to a spreadsheet.
    - When pasting, add new columns and rows, based on the clipboard's size
- Resizing
    - Press Esc to cancel resizing
    - Freeze table column widths. Resizing its container should not change their widths. If all columns are pinned, the last one is flexible.
    - Make it possible to reisze rows as well.
    - Precision resizing with a popover letting users select the exact width of a column.
        - Must work for more than one column/row at the same time, for resizing multiple columns/rows at once.
- Input
    - Editing long text inside cells should grow the cell to allow more space for editing it. See https://issues.redhat.com/browse/KOGITO-7822
- Drag & drop
    - Move table rows with drag/drop.
    - Move table columns with drag/drop.
    - Move expressions with drag/drop?
- Better type-system integration.
    - Decision table input columns should not have a "Name", but an "Expression". The input should be a FeelInput, not a plain text input.
    - Invocation expression function name should not be a plain text input. It should have autocompletion features.
    - Create a new Data Type from an expression (extract type).
    - Invocation should mutate according to a functions signature.
    - Renaming a variable must rename all references to it.
    - Literal expressions data type. Match with selected for that expression. E.g. Decision Table column, or Context Entry.
    - Suggest all variable names that are in the context of literal expressions / decision table inputs.
    - FEEL expressions should be able to highlight names inside a container like `this` (markdown backticks).
- Selection
    - Select all the cells in the table when double-clicking the controller cell or the expression header.
    - Select entire rows. Context-menu integrated. E.g. Delete rows 1-20.
    - select entire columns. Context-menu integrated. E.g. Delete columns 1-20.
- Performance
    - Enable virtualization of table rows to allow for great performance when dealing with huge tables.
- SceSim
    - Create a new SceSim new editor based on BeeTable.
