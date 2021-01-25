# ember-scroll-to-bottom

This README outlines the details of collaborating on this Ember addon.

## This addon is no longer actively maintained and is deprecated. Please contact me if you want to take the ownership of the addon, upgrade and maintain it.


## Installation

* `git clone <repository-url>` this repository
* `cd ember-scroll-to-bottom`
* `npm install && bower install`

## Usage

* Add `{{scroll-to-bottom}}` at top of your page

* To do custom styling pass class name to `customClass` attribute
* For example `{{scroll-to-bottom customClass="custom-styling"}}`

* To add scroll to particular element, pass id or class of the element to `customScrollElement` attribute
* For example  `{{scroll-to-bottom customScrollElement="#element-id"}}`

* You can also combine custom attributes like this
* `{{scroll-to-bottom customClass="custom-styling" customScrollElement="#element-id"}}`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
