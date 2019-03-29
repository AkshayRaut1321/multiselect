## Single Select

Multiselect can be also used as single select simply by specifying multiselect property to be false which is set true by default. There are no other changes needed to be done. All callback functions will also work the same in single select also.

<div class="l-sub-section">
	The helper elements such as ‘Select All’, ‘Select None’ will not be shown because it is not required in case of single select.’Reset’ will work as expected in case of single select also.
</div>

Example : 
	Gender Example will be best suited here .

<ms-single-select></ms-single-select>

<code-tabs>
  <code-pane title="app/single-select.component.ts" path="single-select/src/app/single-select.component.ts"></code-pane>
  <code-pane title="app/single-select.component.html" path="single-select/src/app/single-select.component.html"></code-pane>
</code-tabs>