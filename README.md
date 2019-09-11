# Accessibility Lab

1. Start dev server: `script/dev`
1. Visit [localhost:8000](http://localhost:8000/)
1. Test screen reader & keyboard usability 😬
1. Make accessibility improvements! ✨
1. Try out improvements 🎉

# Screen reader & keyboard use

## Keyboard

| Action                                   | Command                           |
| ---------------------------------------- | --------------------------------- |
| Next (link, button)                      | <kbd>Tab</kbd>                    |
| Prev (link, button)                      | <kbd>Shift</kbd> + <kbd>Tab</kbd> |
| Trigger interactive (link, button)       | <kbd>Enter</kbd>                  |
| Toggle interactive (checkbox, accordion) | <kbd>Spacebar</kbd>               |

## VoiceOver (Mac built-in screen reader)

| Action                  | Command                                                                                                         |
| ----------------------- | --------------------------------------------------------------------------------------------------------------- |
| Turn on / off           | <kbd>Command</kbd> + triple-press <kbd>Touch ID</kbd><br/>or <kbd>Command</kbd> + <kbd>Fn</kbd> + <kbd>F5</kbd> |
| Start reading           | <kbd>Control</kbd> + <kbd>Option</kbd> + <kbd>A</kbd>                                                           |
| Stop reading            | <kbd>Control</kbd>                                                                                              |
| Next interactive        | <kbd>Tab</kbd>                                                                                                  |
| Prev interactive        | <kbd>Shift</kbd> + <kbd>Tab</kbd>                                                                               |
| Trigger interactive     | <kbd>Control</kbd> + <kbd>Option</kbd> + <kbd>Spacebar</kbd>                                                    |
| Next heading            | <kbd>Control</kbd> + <kbd>Option</kbd> + <kbd>command</kbd> + <kbd>H</kbd>                                      |
| Prev heading            | <kbd>Control</kbd> + <kbd>Option</kbd> + <kbd>command</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd>                   |
| Next sibling element    | <kbd>Control</kbd> + <kbd>Option</kbd> + <kbd>Shift</kbd> + <kbd>→</kbd>                                        |
| Prev sibling element    | <kbd>Control</kbd> + <kbd>Option</kbd> + <kbd>Shift</kbd> + <kbd>←</kbd>                                        |
| Next child element      | <kbd>Control</kbd> + <kbd>Option</kbd> + <kbd>Shift</kbd> + <kbd>↓</kbd>                                        |
| Next parent element     | <kbd>Control</kbd> + <kbd>Option</kbd> + <kbd>Shift</kbd> + <kbd>↑</kbd>                                        |
| Open web rotor          | <kbd>Control</kbd> + <kbd>Option</kbd> + <kbd>U</kbd>                                                           |
| - Next menu             | <kbd>→</kbd>                                                                                                    |
| - Prev menu             | <kbd>←</kbd>                                                                                                    |
| - Next item             | <kbd>↓</kbd>                                                                                                    |
| - Prev item             | <kbd>↑</kbd>                                                                                                    |
| - Go to selected item   | <kbd>Enter</kbd>                                                                                                |
| - Close web rotor       | <kbd>Esc</kbd>                                                                                                  |
| Screen curtain on / off | <kbd>Control</kbd> + <kbd>Option</kbd> + <kbd>Shift</kbd> + <kbd>Fn</kbd> + <kbd>\_</kbd>                       |

# Accessibility Improvements

## Auditing Accessibilty

### Lighthouse

1. In Chrome, open the Developer Tools.
1. Go to the Audits tab.
1. Run an audit that includes Accessibility.

## Focus Outline

[Never remove the outline](https://a11yproject.com/posts/never-remove-css-outlines/) on focus!
It makes is difficult to navigate with a keyboard.

1. Restore the focus outline.

## Alternative Text for Images

[Add alternative text for image](https://webaim.org/techniques/alttext/)

The `alt` text should describe the image and be kept short (under 16 words).
Use empty `alt` attributes for presentational content like background images.
Note: an empty `alt` is not the same as a missing `alt` attribute. If the
`alt` attribute is missing, the screen reader will read out the image
filename, which is usually not useful.

## Add labels to links and buttons without text

Add `aria-label` to links and buttons that do not have text, such as icon buttons.

```
<button aria-label="Next" />
```

## Skip Links

Allow users to skip repetitive elements repeated on every page, such as the navigation menu.

Add a ["Skip to Main Content"](https://webaim.org/techniques/skipnav/) link.
The link should be hidden until the user tabs to it.

## Forms

### [Accessible Form Controls](https://webaim.org/techniques/forms/controls)

1. Match `for` and `id` values associate the label with the appropriate form control.

```
<label for="name">Name:</label>
<input id="name" type="text" name="textfield">
```

2. Group checkboxes and radio buttons in a `<fieldset>` element. Add a
   `<legend>` element to provide a description for the grouping.

```
<fieldset>
  <legend>Choose a shipping method:</legend>
  <input id="overnight" type="radio" name="shipping" value="overnight">
  <label for="overnight">Overnight</label><br>
  <input id="twoday" type="radio" name="shipping" value="twoday">
  <label for="twoday">Two day</label><br>
  <input id="ground" type="radio" name="shipping" value="ground">
  <label for="ground">Ground</label>
</fieldset>
```

3. Add
   [`aria-describedby`](https://webaim.org/techniques/forms/advanced#describedby)
   to the `textarea` for describing your buffalo.

Non-label text is not read by the screen reader, so field instructions
outside a label will be missed.

```
<label for="resetpass">Reset Password:</label>
<input type="password" name="resetpass" id="resetpass" aria-describedby="newpass">
<br>
<span id="newpass">New password must be 8-15 characters and include letters and numbers</span>
```

## Landmarks

Landmarks allow the user to jump to sections of a page. Even if you use
semantic HTML elements like main and nav, not all screen readers will include
them in the landmarks list, You should add a [`role` attribute](https://webaim.org/techniques/aria/#landmarks)
to main sections of the page, like the main content, navigation and search.

1. Add a `role` attribute to the main content.
1. Add a `role` attribute to the navigation.
1. Add a `role` attribute to the search form.

## [Dynamic Content Updates](https://webaim.org/techniques/aria/#dynamic)

1. Add an `aria-live` region for the search results.

# Resources

1. [I Used The Web For A Day With Just A Keyboard](https://www.smashingmagazine.com/2018/07/web-with-just-a-keyboard/)
1. [I Used The Web For A Day Using A Screen Reader](https://www.smashingmagazine.com/2018/12/voiceover-screen-reader-web-apps/)
1. [Inclusive Components](https://inclusive-components.design/)
1. [WebAIM (web accessibility in mind)](https://webaim.org/)
1. [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG21/)
