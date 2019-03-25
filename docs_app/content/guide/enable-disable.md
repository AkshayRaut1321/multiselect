## Enable/Disable

In multiselect you can either enable/disable a single option or disable whole dropdown.
In order to disable whole dropdown just pass the disabled property to be true and the whole dropdown is disabled with the selected option shown as it is but not clickable.

Demo showing disabling dropdown on the fly with one button click.

We can do the same thing using template reference variable also. 

Demo showing disabling dropdown using template ref variable

What, if we want to disable only one item, just clone the array passed to function and set the disabled property to be true for a particular option

Demo showing disabling first option on the fly

In case of disabling the whole group on the fly, just iterate through the collection and filter it on the basis of category you want to disable and set the disabled property of all items in that group to be true.Voila, the group is disabled.

Demo showing disabling group on the fly

#Demo

<ms-enable-disable></ms-enable-disable>

<code-tabs>
  <code-pane title="app/app.component.ts" path="attribute-directives/src/app/app.component.ts"></code-pane>
  <code-pane title="app/app.component.html" path="attribute-directives/src/app/app.component.html"></code-pane>
</code-tabs>
