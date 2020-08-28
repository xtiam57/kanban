export function rgba(hex = '#FFFFFF', opacity = 1) {
  let rgb = hex;
  let a = '';

  if (rgb.startsWith('#')) {
    rgb = rgb.replace('#', '');
  }

  if (rgb.length === 3) {
    rgb = rgb
      .split('')
      .map((value) => value.repeat(2))
      .join('');
  }

  const interp = Math.ceil(opacity * 255);
  a = interp.toString(16).padStart(2, '0');

  return `#${rgb}${a}`.toUpperCase();
}
