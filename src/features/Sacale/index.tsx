import React from "react";
import { fetchScales } from "./services";
import { ScaleProps } from "./types_d";

const Scale: React.FC = () => {
  const [scales, setScales] = React.useState<ScaleProps[]>([]);

  React.useEffect(() => {
    fetchScales().then((res) => setScales(res));
  }, []);

  return <div>{JSON.stringify(scales)}</div>;
};

export default Scale;
