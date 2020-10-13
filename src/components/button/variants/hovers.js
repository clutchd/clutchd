import css from "@styled-system/css";

export const dropShadow = css({
  "&:hover": {
    boxShadow: `0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05),
    0 1px 2px 0 rgba(0, 0, 0, 0.05)`,
  },
});

export const dropShadowLift = css({
  "&:hover": {
    top: `-4px`,
    boxShadow: `0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05),
    0 1px 2px 0 rgba(0, 0, 0, 0.05)`,
  },
});
