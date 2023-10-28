import React, { forwardRef, ForwardedRef, useState } from "react";

interface Props {
    onShortClick?: () => void;
    children?: React.ReactNode;
    [x: string]: any;
}

const ExtendedDiv = forwardRef(({ onShortClick, children, ...props }: Props, ref: ForwardedRef<any>) => {
    const [startTime, setStartTime] = useState<number | null>(null);

    const handleShortClick = (e: React.MouseEvent) => {
        switch (e.type) {
            case "mousedown":
                setStartTime(new Date().getTime());
                break;
            case "mouseup":
                if (!startTime) return;
                const endTime = new Date().getTime();
                const difference = endTime - startTime;
                if (difference <= 300) {
                    onShortClick && onShortClick();
                }
                break;
            default:
                break;
        }
    };

    return (
        <div ref={ref} onMouseDown={handleShortClick} onMouseUp={handleShortClick} {...props}>
            {children}
        </div>
    );
});

export default ExtendedDiv;
