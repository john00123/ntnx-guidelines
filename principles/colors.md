---
description: This is the set of color variables used in our product portfolio.
---

# Colors

{% hint style="info" %}
 View in[ Abstract](https://share.goabstract.com/356c86b5-84b3-48b7-8291-b898d23252f2)
{% endhint %}

## Primary Colors

Our primary palette includes neutral, white, and blue. These colors are present across most places in our product.



### Neutral Palette

General color scheme to define main layout areas, like navigation, borders, backgrounds, and  typographic elements.

| Name | Hex | RGB |
| :--- | :--- | ---: |
| ![](../.gitbook/assets/black.svg) Black | `#091E42` | 0, 0, 0 |
| ![](../.gitbook/assets/semi-black.svg) Semi-black | `#1B2025` | 27, 32, 37 |
| ![](../.gitbook/assets/dark-grey-1.svg) Dark-grey-1 | `#22272E` | 34, 39, 46 |
| ![](../.gitbook/assets/dark-grey-2.svg) Dark-grey-2 | `#37414B` | 55, 65, 75 |
| ![](../.gitbook/assets/dark-grey-3.svg) Dark-grey-3 | `#4D5969` | 77, 89, 105 |
| ![](../.gitbook/assets/grey-1.svg) Grey-1 | `#627386` | 98, 115, 134 |
| ![](../.gitbook/assets/grey-2.svg) Grey-2 | `#7C8D9F` | 124, 141, 159 |
| ![](../.gitbook/assets/grey-3.svg) Grey-3 | `#9AA5B5` | 154, 165, 181 |
| ![](../.gitbook/assets/light-grey-1.svg) Light-grey-1 | `#B8BFCA` | 184, 191, 202 |
| ![](../.gitbook/assets/light-grey-2.svg) Light-grey-2 | `#D5DAE0` | 213, 218, 224 |
| ![](../.gitbook/assets/light-grey-3.svg) Light-grey-3 | `#F2F4F6` | 242, 244, 246 |
| ![](../.gitbook/assets/semi-white.svg) Semi-white     | `#F8F9FA` | 248, 249, 250 |
| ![](../.gitbook/assets/white.svg) White | `#FFFFFF` | 255 ,255, 255 |

### 

### Blue Palette

Blue is used in two different scenarios, to inform or highlight an element without any state association. The second usecase is to be used as a visual signifier of interactivity in our products.

| Name | Hex | RGB |
| :--- | :--- | ---: |
| ![](../.gitbook/assets/dark-blue-1.svg) Dark-blue-1 | `#1856AD` | 24, 86, 173 |
| ![](../.gitbook/assets/dark-blue-2.svg) Dark-blue-2 | `#1B6DC6` | 27, 109, 198 |
| ![](../.gitbook/assets/dark-blue-3.svg) Dark-blue-3 | `#1F88DE` | 31, 136, 222 |
| ![](../.gitbook/assets/blue-1.svg) Blue-1 | `#22A5F7` | 34, 165, 247 |
| ![](../.gitbook/assets/blue-2.svg) Blue-2 | `#59BCF9` | 89, 188, 249 |
| ![](../.gitbook/assets/blue-3.svg) Blue-3 | `#91D2FB` | 145, 210, 251 |
| ![](../.gitbook/assets/light-blue-1.svg) Light-blue-1 | `#BDE4FD` | 189, 228, 253 |
| ![](../.gitbook/assets/light-blue-2.svg) Light-blue-2 | `#D3EDFD` | 211, 237, 253 |
| ![](../.gitbook/assets/light-blue-3.svg) Light-blue-3 | `#E9F6FE` | 233, 246, 254 |
| ![](../.gitbook/assets/semi-white-blue.svg) Semi-white-blue | `#F4FBFF` | 244, 251, 255 |

## Secondary Colors

Our secondary palette includes colors like red, green and yellow. These have a more direct association with states of critical, success and warning states. 

## Color Variables

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

Blue is used in two different scenarios, to inform or neutral state. The second usecase is to be used as a visual signifier of interactivity in our products.

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

```css
//Darken Equation
adjust-hue(coreColor + black (intensity/100), n-4)

//Lighten Equation
mix(coreColor + white (intensity/100));
```



