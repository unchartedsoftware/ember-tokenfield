# ember-tokenfield

This ember-cli addon provides a UI component called `{{tokenfield-input}}` that manages a list of user-entered keywords (a.k.a. 'tokens'.)
It shows an error if there is an attempt to enter a duplicate token.

## Installation

While this remains a private repo)

* Add to the devDependencies in package.json:
 * ```"ember-tokenfield": "git+ssh://git@github.com/unchartedsoftware/ember-tokenfield.git#0.0.1"```
* `yarn install`
* `ember generate ember-tokenfield`

If this makes it to the public NPM repo, then simply:

* `ember install ember-tokenfield`

## Usage

In your templates, refer to the component as `{{tokenfield-input}}`.

### Parameters

```Handlebars
{{tokenfield-input 
    tokens=myTokens  // Array of strings to modify
    allowDuplicates=<true|false>
}}
```

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
