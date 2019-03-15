# Stylish (AKA Style-ish) CSS Framework

## Demo

http://stylish.jacobrswanson.com (Not yet live)

## Instructions

1. Copy `stylish.min.css` and `stylish.min.js` to your public folder
2. Include `stylish.min.css` and `stylish.min.js` on your site
3. If needed, copy `_variables.scss` and include in your SASS files.

The JS file is required for inputs to function properly and uses vanilla JS (no jQuery required).

Available methods:

```
setField(field id, value) - Dynamically sets the field value and adds the required classes
```

## Why?

After using several different CSS frameworks, I realized that none of them truly work the way I want them to. Margins and padding were just not right or even worse, I'd implement version X and then version Y would come out, completly changing how the framework works. This, in turn, required tons of re-work to update to the new version.

# TODO

- Create NPM package, maybe CDN?
- Implement CI/CD
