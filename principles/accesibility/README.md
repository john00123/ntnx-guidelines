---
description: Our main goal is to create inclusive experiences across all of our products.
---

# Accesibility

### Color

Some users find it hard to read light gray text on a white background, dark gray text on a black background and white text on a red background.

#### Contrast

![](../../.gitbook/assets/contrast.svg)

| Font Size | Contrast ratio |
| :--- | :--- |
| **Above** 18px | `3.0` |
| **14px** semibold | `3.0` |
| **Below** 14px | `4.5` |

#### Tonality

Some users find it hard to distinguish certain range of tones. Nutanix color swatches have been created to make sure they are distinguishable between them.

| Palette | Color Gamut |
| :--- | :--- |
| Default Palette | ![](../../.gitbook/assets/lavender.svg)![](../../.gitbook/assets/violet.svg)![](../../.gitbook/assets/blue-1.svg)![](../../.gitbook/assets/turquoise.svg)![](../../.gitbook/assets/lime.svg)![](../../.gitbook/assets/orange.svg)![](../../.gitbook/assets/mustard.svg)![](../../.gitbook/assets/wine.svg)  |
| Deuteranopia & Protanopia | ![](../../.gitbook/assets/deuteranopia-1.svg)![](../../.gitbook/assets/deuteranopia-2.svg)![](../../.gitbook/assets/deuteranopia-3.svg)![](../../.gitbook/assets/deuteranopia-4.svg)![](../../.gitbook/assets/deuteranopia-5.svg)![](../../.gitbook/assets/deuteranopia-6.svg)![](../../.gitbook/assets/deuteranopia-7.svg)![](../../.gitbook/assets/deuteranopia-8.svg)  |
| Tritanopia | ![](../../.gitbook/assets/tritanopia-1.svg)![](../../.gitbook/assets/tritanopia-2.svg)![](../../.gitbook/assets/tritanopia-3.svg)![](../../.gitbook/assets/tritanopia-4.svg)![](../../.gitbook/assets/tritanopia-5.svg)![](../../.gitbook/assets/tritanopia-6.svg)![](../../.gitbook/assets/tritanopia-7.svg)![](../../.gitbook/assets/tritanopia-8.svg)  |



### Proper tags and elements

As part of our process to achieve a fully accesible product, make sure that implementation is always using standard tags for elements. H1, H2, H3. 

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



### Test on a developer instance

See how accessible your application/feature is by trying to complete tasks only using a a keyboard and or screen reader devices.



### Accessibility Reference 

{% embed url="https://www.w3.org/TR/WCAG21/" %}





