// @ts-expect-error - required since IdealImage is not part of the types
import Image from "@theme/IdealImage";
import React from "react";

const Icon = ({src, alt}: { src: string; alt: string }) => {
    return <Image img={src} alt={alt} style={{
        borderRadius: "0.375rem",
        verticalAlign: "middle",
        transform: "translateY(-0.125rem)",
    }}/>;
};

export default Icon;
