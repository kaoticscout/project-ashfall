export type TextureAtlasMeta = {
  image?: string;
  imageWidth: number;
  imageHeight: number;
  /**
   * Optional grid metadata. When provided, sprite rectangles can be derived from
   * `index` (row-major) or `row`/`col` instead of relying on baked `x/y/w/h`.
   */
  columns?: number;
  rows?: number;
  /**
   * Optional explicit tile size in source pixels. If omitted, tile size is
   * derived from imageWidth/columns and imageHeight/rows.
   */
  tileSize?: number;
};

export type TextureAtlasSprite = {
  name: string;
  /**
   * Prefer `index` (row-major) for uniform-grid atlases. `row`/`col` can also be
   * used if you need sparse placement.
   */
  index?: number;
  row?: number;
  col?: number;

  /**
   * Pixel-rect fallback for non-uniform atlases.
   */
  x?: number;
  y?: number;
  w?: number;
  h?: number;
};

function px(n: number) {
  return `${n}px`;
}

function resolveSpriteRect(meta: TextureAtlasMeta, sprite: TextureAtlasSprite) {
  const cols = meta.columns;
  const rows = meta.rows;

  if (cols && rows) {
    const tileW = meta.tileSize ?? meta.imageWidth / cols;
    const tileH = meta.tileSize ?? meta.imageHeight / rows;

    let row: number | undefined = sprite.row;
    let col: number | undefined = sprite.col;

    if ((row == null || col == null) && sprite.index != null) {
      row = Math.floor(sprite.index / cols);
      col = sprite.index % cols;
    }

    if (row != null && col != null) {
      return {
        x: col * tileW,
        y: row * tileH,
        w: tileW,
        h: tileH,
      };
    }
  }

  if (
    sprite.x != null &&
    sprite.y != null &&
    sprite.w != null &&
    sprite.h != null
  ) {
    return { x: sprite.x, y: sprite.y, w: sprite.w, h: sprite.h };
  }

  throw new Error(
    `TextureAtlasIcon: sprite "${sprite.name}" is missing grid (meta.columns/meta.rows) and rect (x/y/w/h) data.`,
  );
}

/**
 * Renders a single sprite from a texture atlas using CSS background positioning.
 * Works with any atlas sprite size by scaling background-size/position to the
 * requested renderSizePx.
 */
export function TextureAtlasIcon(props: {
  atlasMeta: TextureAtlasMeta;
  sprite: TextureAtlasSprite;
  imageSrc: string;
  renderSizePx?: number;
  /**
   * Optional “MMO rarity” frame color. When provided, adds a colored outline and
   * soft glow around the icon.
   */
  frameColor?: string;
  frameWidthPx?: number;
  glowPx?: number;
  className?: string;
  title?: string;
}) {
  const size = props.renderSizePx ?? 44;
  const rect = resolveSpriteRect(props.atlasMeta, props.sprite);
  const scale = size / rect.w;

  const bgW = props.atlasMeta.imageWidth * scale;
  const bgH = props.atlasMeta.imageHeight * scale;
  const bgX = -rect.x * scale;
  const bgY = -rect.y * scale;

  const frameWidth = props.frameWidthPx ?? 2;
  const glow = props.glowPx ?? 16;

  return (
    <div
      className={
        props.className ??
        "shrink-0 rounded-xl border border-[color:color-mix(in_oklab,var(--border-subtle)_85%,transparent)] bg-[color:color-mix(in_oklab,var(--bg-1)_70%,transparent)]"
      }
      title={props.title ?? props.sprite.name}
      aria-label={props.title ?? props.sprite.name}
      role="img"
      style={{
        width: px(size),
        height: px(size),
        backgroundImage: `url(${props.imageSrc})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: `${px(bgW)} ${px(bgH)}`,
        backgroundPosition: `${px(bgX)} ${px(bgY)}`,
        borderColor: props.frameColor
          ? `color-mix(in oklab, ${props.frameColor} 75%, var(--border-subtle))`
          : undefined,
        boxShadow: props.frameColor
          ? `0 0 0 ${px(frameWidth)} ${props.frameColor}, 0 0 ${px(glow)} 0 color-mix(in oklab, ${props.frameColor} 55%, transparent)`
          : undefined,
      }}
    />
  );
}

