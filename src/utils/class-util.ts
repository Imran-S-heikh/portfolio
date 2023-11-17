export default function classUtil(
  ...classes: (string | null | undefined | boolean)[]
) {
  return classes.filter(Boolean).join(" ");
}
