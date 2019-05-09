---
description: >-
  We encourage consistency across platforms, environments, and screen sizes by
  using uniform elements and spacing, without being​ restrictive.
---

# Grid & Spacing

### Grid

Consistent use of a grid system allows consistently positioning elements onscreen. Designing to the grid helps create an experience that facilitates understanding and brings order to the page. 

### Baseline grid and vertical rhythm

Nutanix soft is 14px for the base font size, which produces an 10px x-height. The x-height is halved to produce a 5px baseline. All text flows vertically along this baseline, creating a similar rhythm across all screens. This rhythm is created by the line height between each line of text and the margin between elements.

This baseline convention naturally flows on to the rest of the grid system, which includes icons, components, and layout dimensions. Always try to align objects on the 10px grid, but where necessary, use good judgement to fine tune your designs to 5px. The 5 pixel baseline is there to allow more flexibility for line heights and smaller adjustments. 

#### Best practices

* Use multiples of 10px when defining measurements, spacing, and positioning elements.
* When necessary use 5px to make more fine tuned adjustments.
* Whenever possible, make sure that objects line up, both vertically and horizontally.
* Align your bounding box to the grid, not the baseline of your text.

### Layout with the vertical elements

We define grid for content and UI elements to align to, creating a visual structure with content. We prefer this over relying heavily on boxes and lines around content as it reduces the amount of elements a user needs to scan in order to digest what they see.

1. **Global navigation**:  60px
2. **Sub navigation:** 50px
3. **General Padding:** 20px

You can combine multiple blocks of fixed and fluid layout underneath each other on a single screen. This is is useful when you want to combine a piece of long form text with a code block that would be the full width of the screen.e

#### Element Spacing

1. **Compact**: 10px for elements that are closely related input label and label for example .
2. **Cozy :** 15px.
3. **Comfortable:**  20px Most whitespace between section an elements.

### Sidebar layout and text

Sidebar has been standarized using 200px width.

1. Keep layouts simple. Consider a single block of 8 columns or two blocks of 8 and 4 for basic layout.
2. Maximum line length should span up to 8 columns, which is the ideal size for all content types. Do not go over this size for normal text.



