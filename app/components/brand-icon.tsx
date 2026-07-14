export function BrandIcon({
  slug,
  color,
  size = 22,
  label,
}: {
  slug: string;
  color: string;
  size?: number;
  label: string;
}) {
  const url = `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`;
  return (
    <span
      role="img"
      aria-label={label}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        WebkitMaskImage: `url(${url})`,
        maskImage: `url(${url})`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
      className="inline-block shrink-0"
    />
  );
}
