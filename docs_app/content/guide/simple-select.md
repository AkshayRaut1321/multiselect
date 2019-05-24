# Single Select

Multiselect can be also used as single select, simply by specifying `multiselect` property binding to be `false`. By default it is set to `true`. Also you can hook up on different [events](https://ngx-lib.github.io/multiselect/guide/events) of the multiselect dropdown.

<div class="l-sub-section">
	For single select the helper elements such as ‘Select All’, ‘Select None’ buttons will not be shown because it is not required in case of single select. ’Reset’ will work as expected in this case.
</div>

## Demo

<ms-single-select></ms-single-select>

<code-tabs>
  <code-pane title="app/single-select.component.html" path="single-select/src/app/single-select.component.html"></code-pane>
  <code-pane title="app/single-select.component.ts" path="single-select/src/app/single-select.component.ts"></code-pane>
</code-tabs>