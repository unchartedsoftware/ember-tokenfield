# ember-tokenfield

This ember-cli addon provides a UI component called `{{tokenfield-input}}` that manages a list of user-entered keywords (a.k.a. 'tokens'.)

![tokenfield-input example](tokenfield-input-screenshot.png?raw=true)

## Features

* Easily delete a term by clicking the 'x' beside it.
* Terms are selectable by clicking them.
* Edit an existing term by double-clicking it.
* (Optional) Shows an error if there is an attempt to enter a duplicate token.
* (Optional) Specify placeholder text.

## Installation

To add this addon to your ember project, just:

* `ember install ember-tokenfield`

Or for more manual addon development and testing scenarios:

* Add to the devDependencies in package.json:
 * ```"ember-tokenfield": "git+ssh://git@github.com/unchartedsoftware/ember-tokenfield.git#0.0.X"```
* `yarn install`
* `ember generate ember-tokenfield`

*Know Issue*: The add-on does not install font-awesome for you. To see icons, you'll have to include it in your project manually.

## Usage

In your templates, refer to the component as `{{tokenfield-input}}`.

### Parameters

```Handlebars
{{tokenfield-input 
    tokens=myTokens  // Array of strings to modify
    allowDuplicates=<true|false>
    placeholder="Enter search terms..."
}}
```

See see a working example, run the app under `./tests/dummy`, which renders the `token-test` component.

## Development Installation

* `git clone <repository-url>` this repository
* `cd ember-tokenfield`
* `npm install`

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
