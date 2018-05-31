# Content

Provides default content styles that are easy to customize. You don’t need to apply any classes to achieve these styles — just use the appropriate tags.

For easy spacing, it removes top margins and applies a bottom margin to block elements. By default, text sizing and spacing is measured in px units and they get converted to rem on build step. It also sets box-sizing: border-box globally to make it easier to properly size elements, and sets body margin to 0.

## Usage

### Headings `<h1> – <h6>`

```html:example
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

### Paragraphs `<p>`

```html:example
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat excepturi repellendus nostrum dolorum dignissimos quis non, minus debitis laborum vero cupiditate sequi neque, magnam dolore nemo possimus, soluta ducimus eaque.</p>
<p>Blanditiis ea qui, veritatis animi recusandae praesentium magnam. Commodi placeat, laboriosam accusamus laudantium quasi eveniet soluta illo ducimus quis doloremque mollitia, officia pariatur deleniti reprehenderit, maxime, dicta libero vero cum.</p>
```
### Horizontal Rules `<hr>`

```html:example
<p>Blanditiis ea qui, veritatis animi recusandae praesentium magnam.</p>
<hr>
<p>Officia pariatur deleniti reprehenderit, maxime, dicta libero vero cum.</p>
```

### Ordered Lists `ol`

```html:example
<ol>
<li>List item 1</li>
<li>List item 2<ol>
<li>Nested item 1</li>
<li>Nested item 2</li>
<li>Nested item 3</li>
</ol>
</li>
<li>List item 3</li>
</ol>
```

### Unordered Lists `ul`

```html:example
<ul>
<li>List item 1</li>
<li>List item 2<ul>
<li>Nested item 1</li>
<li>Nested item 2</li>
<li>Nested item 3</li>
</ul>
</li>
<li>List item 3</li>
</ul>
```

### Definition Lists `dl`

```html:example
<dl>
  <dt>Term 1</dt>
  <dd>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem perferendis
    exercitationem asperiores fuga incidunt, nam dicta amet. Dolor eligendi nisi praesentium
    placeat officiis esse corporis molestiae. Doloremque accusamus, vel!
  </dd>
  <dt>Term 2</dt>
  <dd>
    Veritatis repellendus porro ipsam beatae temporibus natus id adipisci nobis accusantium
    quidem eum fugit cupiditate deleniti nisi nesciunt dicta officia, enim, atque corporis neque
    error. Unde saepe molestiae hic voluptatibus?
  </dd>
</dl>
```

### Blockquotes `blockquote`

```html:example
<blockquote>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ipsam enim reprehenderit placeat ab voluptate totam suscipit voluptas, culpa pariatur eos quas, sequi unde perferendis officiis! Officiis eligendi eaque facilis.
</blockquote>
```

### Preformatted Text `pre`

```html:example
<pre><code>CLS
SCREEN 13
PRINT &quot;BASE IS AWESOME&quot;
</code></pre>
```

### Text Formats

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>&lt;strong&gt;</code></td>
      <td><strong>This is strong text</strong></td>
    </tr>
    <tr>
      <td><code>&lt;em&gt;</code></td>
      <td><em>This is emphasized text</em></td>
    </tr>
    <tr>
      <td><code>&lt;u&gt;</code></td>
      <td><u>This is underlined text</u></td>
    </tr>
    <tr>
      <td><code>&lt;s&gt;</code></td>
      <td><s>This is strikethrough text</s></td>
    </tr>
    <tr>
      <td><code>&lt;a&gt;</code></td>
      <td><a href="#">This is link text</a></td>
    </tr>
    <tr>
      <td><code>&lt;small&gt;</code></td>
      <td><small>This is small text</small></td>
    </tr>
    <tr>
      <td><code>&lt;sup&gt;</code></td>
      <td><sup>This is superscript text</sup></td>
    </tr>
    <tr>
      <td><code>&lt;sub&gt;</code></td>
      <td><sub>This is subscript text</sub></td>
    </tr>
    <tr>
      <td><code>&lt;code&gt;</code></td>
      <td><code>This is code text</code></td>
    </tr>
    <tr>
      <td><code>&lt;samp&gt;</code></td>
      <td><samp>This is sample text</samp></td>
    </tr>
    <tr>
      <td><code>&lt;var&gt;</code></td>
      <td><var>This is variable text</var></td>
    </tr>
    <tr>
      <td><code>&lt;kbd&gt;</code></td>
      <td><kbd>This is keyboard text</kbd></td>
    </tr>
    <tr>
      <td><code>&lt;abbr&gt;</code></td>
      <td><abbr title="Abbreviation">This is abbreviation text</abbr></td>
    </tr>
    <tr>
      <td><code>&lt;del&gt;</code></td>
      <td><del>This is deleted text</del></td>
    </tr>
    <tr>
      <td><code>&lt;ins&gt;</code></td>
      <td><ins>This is inserted text</ins></td>
    </tr>
    <tr>
      <td><code>&lt;mark&gt;</code></td>
      <td><mark>This is marked text</mark></td>
    </tr>
  </tbody>
</table>

### Customizing the Content


Typographic elements can be customized via
with CSS custom properties:

```css
:root {
  --font-family-sans-serif: Cera, sans-serif;
  --font-family-serif: Tisa, serif;
  --font-family-monospace: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace, monospace;

  --font-weight-normal: 400;
  --font-weight-bold: 500;
  --font-weight-bolder: 700;

  --base-font-family: var(--font-family-sans-serif);
  --base-line-height: 1.5;
  --base-font-size: 16px;
  --base-color: var(--color-dark-grey);

  --link-color: var(--color-primary);
  --link-color-hover: color(var(--color-primary) shade(20%));
  --link-text-decoration: none;
  --link-text-decoration-hover: none;

  --headings-color: var(--color-deep-black);
  --headings-font-weight: var(--font-weight-bolder);
  --headings-margin-bottom: .5em;

  --h1-font-size: 48px;
  --h1-line-height: 1.25; /*60px*/

  --h2-font-size: 36px;
  --h2-line-height: 1.333333; /*48px*/

  --h3-font-size: 24px;
  --h4-font-size: 16px;

  --h5-font-size: 14px;
  --h5-color: var(--color-mid-grey);

  --h6-font-size: 12px;
  --h6-color: var(--color-mid-grey);

  --small-font-size: 12px;
  --small-color: var(--color-mid-grey);

  --pre-font-family: var(--font-family-monospace);
  --pre-font-size: 14px;
  --code-font-family: var(--pre-font-family);
  --code-font-size: 14px;
  --kbd-font-family: var(--pre-font-family);
  --kbd-font-size: 11px;

  --subheadline-font-size: 20px;
  --subheadline-line-height: 1.4; /*28px*/

  --reader-font-family: var(--font-family-serif);
  --reader-font-size: 24px;
  --reader-color: var(--color-midnight);

  --reader--small-font-size: 18px;
  --reader--large-font-size: 28px;

  --list-padding-left: var(--base-font-size);
  --table-cell-padding: var(--base-font-size);

  --blocks-margin-bottom: calc(var(--base-line-height) * 1rem);
}
```
