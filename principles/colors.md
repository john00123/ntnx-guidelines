---
description: This is the set of color variables used in our product portfolio.
---

# Colors



{% hint style="info" %}
 View in[ Abstract](https://share.goabstract.com/356c86b5-84b3-48b7-8291-b898d23252f2)
{% endhint %}

| Name | Hex | RGB | CMUK |
| :--- | :--- | :--- | :--- |
|  N900 - Slate | \#091e42 | 9,30,66 | 100,88,34,55 |



{% tabs %}
{% tab title="Neutrals" %}
{% code-tabs %}
{% code-tabs-item title="Color-variables.scss" %}
```css
$black:             #000000;
$semi-black:        #1B2025;
$dark-grey-1:       #22272E;
$dark-grey-2:       #37414B;
$dark-grey-3:       #4D5969;
$grey-1:            #627386;
$grey-2:            #7C8D9F;
$grey-3:            #9AA5B5;
$light-grey-1:      #B8BFCA;
$light-grey-2:      #D5DAE0;
$light-grey-3:      #F2F4F6;
$semi-white:        #F8F9FA;
$white:             #FFFFFF;
```
{% endcode-tabs-item %}
{% endcode-tabs %}
{% endtab %}

{% tab title="Blue" %}
**Blue**

Blue is used in two different scenarios, to inform or neutral state. The second usecase is to be used as a visual signifier of interactivity

{% code-tabs %}
{% code-tabs-item title="Color-variables.scss" %}
```css
$blue-1:              #22A5F7;
$dark-blue-1:         adjust-hue(mix($blue-1, #000, 70%),12);
$dark-blue-2:         adjust-hue(mix($blue-1, #000, 80%),8);
$dark-blue-3:         adjust-hue(mix($blue-1, #000, 90%),4);
$blue-2:              mix($blue-1, #fff, 75%);
$blue-3:              mix($blue-1, #fff, 50%);
$light-blue-1:        mix($blue-1, #fff, 30%);
$light-blue-2:        mix($blue-1, #fff, 20%);
$light-blue-3:        mix($blue-1, #fff, 10%);
$semi-white-blue:     mix($blue-1, #fff, 5%);
```
{% endcode-tabs-item %}
{% endcode-tabs %}
{% endtab %}

{% tab title="Red" %}
**Red**

Red is exclusively used in critical notification or destructive actions.

{% code-tabs %}
{% code-tabs-item title="Color-variables.scss" %}
```css
$red-1:               #F55656;
$dark-red-1:          adjust-hue(mix($red-1, #000, 70%),-12);
$dark-red-2:          adjust-hue(mix($red-1, #000, 80%),-8);
$dark-red-3:          adjust-hue(mix($red-1, #000, 90%),-4);
$red-2:               mix($red-1, #fff, 75%);
$red-3:               mix($red-1, #fff, 50%);
$light-red-1:         mix($red-1, #fff, 30%);
$light-red-2:         mix($red-1, #fff, 20%);
$light-red-3:         mix($red-1, #fff, 10%);
$semi-white-red:      mix($red-1, #fff, 5%);
```
{% endcode-tabs-item %}
{% endcode-tabs %}
{% endtab %}

{% tab title="Green" %}

{% endtab %}

{% tab title="Yellow" %}

{% endtab %}
{% endtabs %}

$$
adjust-hue(coreColor + black (intensity/100), n-4)
$$

