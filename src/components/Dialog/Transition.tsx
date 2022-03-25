import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import { CustomTransitionProps } from "./types_d";

interface Props extends TransitionProps, CustomTransitionProps {}

const Transition = React.forwardRef(function Transition(
  props: Props & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return (
    <Slide
      direction={props.direction ? props.direction : "up"}
      ref={ref}
      {...props}
    />
  );
});

export default Transition;
