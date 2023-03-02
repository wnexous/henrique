export default function responsive(
  props = { min: Number, setState: Function }
) {
  window.addEventListener("resize", (e) => {
    window.innerWidth < props.min
      ? props.setState("block")
      : props.setState("flex");
  });

  props.setState(window.innerWidth < props.min ? "block" : "flex");
}
