---
description: >-
  These are functional palettes used for diagrams or visualization in our
  product.
---

# Visualization Colors

{% hint style="info" %}
[Open in abstract](https://app.goabstract.com/share/ce4d3f63-eb87-4789-84b8-5abd90f7e0c0)
{% endhint %}

### Sequential Palette

Displays data that has direct association and one variable encoding, intensity been the most common scenario.

| Name | Hex | RGB |
| :--- | :--- | ---: |
| ![](../../.gitbook/assets/dark-blue-1.svg) Dark-blue-1 | `#1856AD` | 24, 86, 173 |
| ![](../../.gitbook/assets/dark-blue-2.svg) Dark-blue-2 | `#1B6DC6` | 27, 109, 198 |
| ![](../../.gitbook/assets/dark-blue-3.svg) Dark-blue-3 | `#1F88DE` | 31, 136, 222 |
| ![](../../.gitbook/assets/blue-1.svg) Blue-1 `CoreColor` | `#22A5F7` | 34, 165, 247 |
| ![](../../.gitbook/assets/blue-2.svg) Blue-2 | `#59BCF9` | 89, 188, 249 |
| ![](../../.gitbook/assets/blue-3.svg) Blue-3 | `#91D2FB` | 145, 210, 251 |
| ![](../../.gitbook/assets/light-blue-1.svg) Light-blue-1 | `#BDE4FD` | 189, 228, 253 |
| ![](../../.gitbook/assets/light-blue-2.svg) Light-blue-2 | `#D3EDFD` | 211, 237, 253 |
| ![](../../.gitbook/assets/light-blue-3.svg) Light-blue-3 | `#E9F6FE` | 233, 246, 254 |

### 

### Diverging Palette

Displays data that with a wide range of information. The range spans from negative to positive values. These are defined by the visualization in a case to case basis.

| Name | Hex | RGB |
| :--- | :--- | ---: |
| ![](../../.gitbook/assets/dark-red-2.svg) Dark-red-2 | `#2BA664` | 43, 166, 100 |
| ![](../../.gitbook/assets/red-1.svg) Red-1 | `#36D068` | 54, 208, 104 |
| ![](../../.gitbook/assets/red-3.svg) Red-3 | `#9BE8B4` | 155, 232, 180 |
| ![](../../.gitbook/assets/light-red-2.svg) Light-red-2 | `#D7F6E1` | 215, 246, 225 |
| ![](../../.gitbook/assets/semi-white.svg) Semi-white  `NeutralColor` | `#F8F9FA` | 248, 249, 250 |
| ![](../../.gitbook/assets/light-green-2.svg) Light-green-2 | `#D7F6E1` | 215, 246, 225 |
| ![](../../.gitbook/assets/green-3.svg) Green-3 | `#9BE8B4` | 155, 232, 180 |
| ![](../../.gitbook/assets/green-1.svg) Green-1 | `#36D068` | 54, 208, 104 |
| ![](../../.gitbook/assets/dark-green-2.svg) Dark-green-2 | `#2BA664` | 43, 166, 100 |

### 

### Categorical / Qualitative Palette

Displays data that is part of the general category but do not share any association between each other.

| Hex | RGB | RGB |
| :--- | :--- | ---: |
| ![](../../.gitbook/assets/lavender.svg) Lavender-1 | `#AC9CF0` | 172, 156, 240 |
| ![](../../.gitbook/assets/violet.svg) Violet-1 | `#9B39E0` | 155, 57, 224 |
| ![](../../.gitbook/assets/blue-1.svg) Blue-1 | `#22A5F7` | 34, 165, 247 |
| ![](../../.gitbook/assets/turquoise.svg) Turquoise-1 | `#38C5AF` | 56, 197, 175 |
| ![](../../.gitbook/assets/lime.svg) Lime-1 | `#A0E039` | 160, 224, 57 |
| ![](../../.gitbook/assets/orange.svg) Orange-1 | `#E38168` | 227, 129, 104 |
| ![](../../.gitbook/assets/mustard.svg) Mustard-1 | `#E3CA68` | 227, 202, 104 |
| ![](../../.gitbook/assets/wine.svg) Wine-1 | `#C15286` | 193, 82, 134 |



## Color Equations

To create our variables we used an equation using a CoreColor and hue rotation to achieve a consistent array across different bases.

#### Darken color equation

```css
adjust-hue(coreColor + black (intensity/100), n-4)
```

#### Lighten color equation

```css
mix(coreColor + white (intensity/100));
```

**Categorical color equation**

```css
desaturate(adjust-hue(coreColor, hueRotation),20);
```

\*\*\*\*

