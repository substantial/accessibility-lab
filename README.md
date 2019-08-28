# Accessibility Lab

1. [Install the Gatsby CLI](https://www.gatsbyjs.org/docs/quick-start#install-the-gatsby-cli)
1. Start dev server `gatsby develop`
1. Visit `localhost:8000`
1. Test screen reader & keyboard usability 😬
1. Make accessibility improvements! ✨
1. Try out improvements 🎉

# Screen reader & keyboard use

## Keyboard

| Action                                   | Command     |
| ---------------------------------------- | ----------- |
| Next (link, button)                      | tab         |
| Prev (link, button)                      | shift + tab |
| Trigger interactive (link, button)       | enter       |
| Toggle interactive (checkbox, accordion) | spacebar    |

## VoiceOver (Mac built-in screen reader)

| Action                      | Command                                         |
| --------------------------- | ----------------------------------------------- |
| Turn on / off               | command + triple-press Touch ID                 |
|                             | **( or** command + fn + F5 **)**                |
| Start reading               | control + option + A                            |
| Stop reading                | control                                         |
| Next / prev interactive     | [shift] + tab                                   |
| Trigger interactive         | control + option + spacebar                     |
| Next/ prev heading          | control + option + command + [shift] + H        |
| Next / prev sibling element | control + option + shift + [right / left] arrow |
| Next child / parent element | control + option + shift + [down / up] arrow    |
| Open web rotor              | control + option + U                            |
| - Next / prev menu          | [right / left] arrow                            |
| - Next / prev item          | [down / up] arrow                               |
| - Go to selected item       | enter                                           |
| - Close web rotor           | esc                                             |
| Screen curtain on / off     | control + option + shift + fn + \_              |

# Accessibility Improvements

## Alternative Text for Images

[Add alternative text for image](https://webaim.org/techniques/alttext/)

## Skip Links

Allow users to skip repetitive elements repeated on every page, such as the navigation menu.

[Add a "Skip to Main Content" anchor link](https://webaim.org/techniques/skipnav/)

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

3. Add [`aria-describedby`](https://webaim.org/techniques/forms/advanced#describedby) to instructions for personality description.

Non-label text is not read by the screen reader, so field instructions
outside a label will be missed.
