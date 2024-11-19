// @ts-expect-error - required since IdealImage is not part of the types
import IdealImage from "@theme/IdealImage";
import React from "react";

const Image = ({src, alt}: { src: string; alt: string }) => {
    return <IdealImage img={src} alt={alt} style={{
        borderRadius: "0.375rem",
    }}/>;
};

export default Image;
