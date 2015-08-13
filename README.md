# flag-icon-css

Meteor wrapper of [lipis/flag-icon-css](https://github.com/lipis/flag-icon-css) — CSS for vector based country flags. See the [demo](http://lipis.github.io/flag-icon-css/).

Made by [![Professional Meteor Development Studio](http://s30.postimg.org/jfno1g71p/jss_xs.png)](http://jssolutionsdev.com) - [Professional Meteor Development Company](http://jssolutionsdev.com)


# Usage

First of all you should add this package to your Meteor project: `meteor add jss:flag-icon`

For using the flags inline with text add the classes `.flag-icon` and `.flag-icon-xx` (where `xx` is the
[ISO 3166-1-alpha-2 code](http://www.iso.org/iso/country_names_and_code_elements) of a country) to an empty `<span>`. If you want to have a squared version flag then add the class `flag-icon-squared` as well.

# Example:

    <span class="flag-icon flag-icon-gr"></span>
    <span class="flag-icon flag-icon-gr flag-icon-squared"></span>

You could also apply this to any element, but in that case you'll have to use the `flag-icon-background` instead of `flag-icon` and you're set. This will add the correct background with the following CSS properties:

    background-size: contain;
    background-position: 50%;
    background-repeat: no-repeat;

Which means that the flag is just going to appear in the middle of an element, so you will have to set manually the correct size of 4 by 3 ratio or if it's squared add also the `flag-icon-squared` class.

# License
Note that this project is distributed under the [MIT License](LICENSE).
