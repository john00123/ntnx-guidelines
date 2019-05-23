# Baseline Accessibility Audit

How to do a Baseline Accessibility Audit

The following steps define a baseline, first-pass accessibility audit. It is _**not**_ an exhaustive list.

But will take us from \[totally broken\] to \[a decent baseline experience\].

## 1. Keyboard Navigation

1. Can I tab around to all the expected elements? Can I notice the focus ring on all the different elements on the page?
2. Is there any off-screen content that can accidentally be focused? If so, it will make the focus ring disappear. Screen readers and tab key might travel into those off-screen elements. Make sure any off-screen elements are removed from the tab order.

## 2. Screen Reader

1. Can I navigate using a screen reader? Example screen readers: NVDA, VoiceOver.
2. Do images have alt-text?
3. For any custom controls \(buttons with custom elements or custom javascript\) - Can I interact with them as expected while using a screen reader?
4. Does the screen reader get notified of modal/popup messages that appear? Example: your changes have been saved. \(possibly by moving their focus into that item\). One example method some use to solve this: use a tabindex of -1 to direct the focus. If something is being dynamically added to the page, then focus is directed to it.

## 3. Page structure

1. Use CTRL-Option-U to show the structure within Voiceover. Use left and right arrow keys until you see Headings and Landmarks. Does it show the hierarchy of the site? The site shouldn’t just mix and match h-tags based on the size that they are. Does the document outline look good or is it broken? The overall skeleton of the page should look good.

## Color and Contrast

Jeremy to take point on this. Verify using axe.

## Automated regression testing

axe-core library, run with Selenium.

References:

1. A11ycast. Rob Dodson. [https://www.youtube.com/watch?v=cOmehxAU\_4s](https://www.youtube.com/watch?v=cOmehxAU_4s)

2. How to use VoiceOver

When VoiceOver is on, you can use VoiceOver commands to navigate and interact with items on the screen. You enter VoiceOver commands by holding down the Control and Option keys together, along with one or more other keys. The Control and Option keys are called the “VoiceOver keys,” or “VO keys” for short. They are shown in commands as VO, as in VO-F1. You can assign VoiceOver commands to numeric keypad keys, keyboard keys, braille display input keys, and trackpad gestures, so you can use the commands with fewer keystrokes.

You use the VoiceOver cursor to move around the screen and hear descriptions of the items in the cursor. You use it to select buttons and other controls, and to read and edit text. The keyboard focus and mouse pointer work with the VoiceOver cursor in a variety of ways. You can configure them to follow each other, or use them separately to move in different applications at the same time.

The first time you start VoiceOver, you can choose to take the Quick Start tutorial, an interactive tour of VoiceOver navigation and interaction basics. When VoiceOver is on, you can start the tutorial at any time by pressing VO-Command-F8.

