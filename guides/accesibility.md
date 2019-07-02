---
description: Our main goal is to create inclusive experiences across all of our products.
---

# Accesibility

### Color

Some users find it hard to read light gray text on a white background, dark gray text on a black background and white text on a red background.

#### Contrast

![](../.gitbook/assets/contrast.svg)

| Font Size | Contrast ratio |
| :--- | :--- |
| **Above** 18px | `3.0` |
| **14px** semibold | `3.0` |
| **Below** 14px | `4.5` |

#### Tonality

Some users find it hard to distinguish certain range of tones. Nutanix color swatches have been created to make sure they are distinguishable between them.

| Palette | Color Gamut |
| :--- | :--- |
| Default Palette | ![](../.gitbook/assets/lavender.svg)![](../.gitbook/assets/violet.svg)![](../.gitbook/assets/blue-1.svg)![](../.gitbook/assets/turquoise.svg)![](../.gitbook/assets/lime.svg)![](../.gitbook/assets/orange.svg)![](../.gitbook/assets/mustard.svg)![](../.gitbook/assets/wine.svg)  |
| Deuteranopia & Protanopia | ![](../.gitbook/assets/deuteranopia-1.svg)![](../.gitbook/assets/deuteranopia-2.svg)![](../.gitbook/assets/deuteranopia-3.svg)![](../.gitbook/assets/deuteranopia-4.svg)![](../.gitbook/assets/deuteranopia-5.svg)![](../.gitbook/assets/deuteranopia-6.svg)![](../.gitbook/assets/deuteranopia-7.svg)![](../.gitbook/assets/deuteranopia-8.svg)  |
| Tritanopia | ![](../.gitbook/assets/tritanopia-1.svg)![](../.gitbook/assets/tritanopia-2.svg)![](../.gitbook/assets/tritanopia-3.svg)![](../.gitbook/assets/tritanopia-4.svg)![](../.gitbook/assets/tritanopia-5.svg)![](../.gitbook/assets/tritanopia-6.svg)![](../.gitbook/assets/tritanopia-7.svg)![](../.gitbook/assets/tritanopia-8.svg)  |



### Proper tags and elements

As part of our process to achieve a fully accesible product, make sure that implementation is always using standard tags for elements. H1, H2, H3. 

The site shouldn’t just mix and match h-tags based on the size that they are. Does the document outline look good or is it broken? The overall skeleton of the page should look good.

#### Provide alternative information

As designers we should be providing aria labels and alt descriptions for new elements that don't have standard attributes.



### Keyboard Navigation

One consideration to make is to always think about how to traverse and interact with your product by using only the keyboard. 

A keyboard user typically uses the Tab key to navigate through interactive elements on a web page—links, buttons, fields for inputting text, etc. When an item has keyboard "focus", it can be activated or manipulated with the keyboard. A sighted keyboard user must be provided with a **visual** indicator of the element that currently has keyboard focus.

| Keyboard Key | Description |
| :--- | :--- |
| `Esc` | Close a modal  \*\* |
| `Alt+/` | Open Hamburger menu |
| `Enter` | Activates primary button |
| `Space` | Actives focused element |
| `Tab` | Traverses through the DOM |

{% hint style="info" %}
Make sure to bring a confirmation popup before closing.
{% endhint %}



### Auditing

Make sure as you are reviewing the implementation that you ask yourself these questions:

1. Can I tab around to all the expected elements? Can I notice the focus ring on all the different elements on the page?
2. Is there any off-screen content that can accidentally be focused? If so, it will make the focus ring disappear. Screen readers and tab key might travel into those off-screen elements. Make sure any off-screen elements are removed from the tab order.
3. Can I navigate using a screen reader? Example screen readers: NVDA, VoiceOver.
4. Do images have alt-text?
5. For any custom controls \(buttons with custom elements or custom javascript\) - Can I interact with them as expected while using a screen reader?
6. Does the screen reader get notified of modal/popup messages that appear? Example: your changes have been saved. \(possibly by moving their focus into that item\). One example method some use to solve this: use a tabindex of -1 to direct the focus. If something is being dynamically added to the page, then focus is directed to it.

{% hint style="info" %}
Use CTRL-Option-U to show the structure within Voiceover. Use left and right arrow keys until you see Headings and Landmarks. 
{% endhint %}



### Automated regression testing

Axe-core library, run with Selenium.

When VoiceOver is on, you can use VoiceOver commands to navigate and interact with items on the screen. You enter VoiceOver commands by holding down the Control and Option keys together, along with one or more other keys. The Control and Option keys are called the “VoiceOver keys,” or “VO keys” for short. They are shown in commands as VO, as in VO-F1. You can assign VoiceOver commands to numeric keypad keys, keyboard keys, braille display input keys, and trackpad gestures, so you can use the commands with fewer keystrokes.

You use the VoiceOver cursor to move around the screen and hear descriptions of the items in the cursor. You use it to select buttons and other controls, and to read and edit text. The keyboard focus and mouse pointer work with the VoiceOver cursor in a variety of ways. You can configure them to follow each other, or use them separately to move in different applications at the same time.

The first time you start VoiceOver, you can choose to take the Quick Start tutorial, an interactive tour of VoiceOver navigation and interaction basics. When VoiceOver is on, you can start the tutorial at any time by pressing VO-Command-F8.



### Accessibility Reference 

{% embed url="https://www.w3.org/TR/WCAG21/" %}

{% embed url="https://www.youtube.com/watch?v=cOmehxAU\_4s" %}



