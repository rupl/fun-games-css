# Notes for slides

Instead of trying to cover a ton of CSS modules, just pick a few and create diff
combos of effects. Each example can have a compatability overlay that shows what
modules are being combined in order to create the effect.

- Transforms (2D/3D)
- Masks
- Filters (blur)
- Media queries
- Transitions
- Animation

Some ideas:

- slinky
- tile
- http://i.imgur.com/jzKsGTW.gif - two elements per "cell" with animated,
  looped attributes. Use animation-delay to create wavy effect.
- a filmstrip that uses stepped animation along a sprite of frames
- spinning coin which transitions from rotateY(100000deg) to rotateY(0deg)
  using an ease-out timing function (before falling over?). Use mask to make
  coin reflection realistic.
- Mention http://html.adobe.com/webstandards/csscustomfilters/cssfilterlab/
- Construct an illusion like the face segments:
  http://www.thisiscolossal.com/2013/01/the-skewed-anamorphic-sculptures-and-engineered-illusions-of-jonty-hurwitz/
