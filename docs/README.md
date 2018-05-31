# Bits

`bits` transforms markdown files into easily digestable, interactive documentation sites.

## Files

There are two special markdown files needs to be mentioned.

## README.md

A `README.md` file must be exists under `docs` folder which stands for site's home page.

## toc.md

Optionally, a sidebar of table of contets can be provided by having a `toc.md` file under `docs` folder, which should contain list of links written in generic markdown syntax to provide proper navigation. The base path is `docs` folder which has public path of `/`. 

To create leveled sub menus links need to be indented as needed.

``` markdown
[Home](/README.md)
[Style Guide](/styleguide.md)
  [Logos](/styleguide/logos.md)
  [Colors](/styleguide/colors.md)
[Code](/code/index.md)
```
