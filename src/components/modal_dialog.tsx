import { useState, type ReactNode } from "react";
import '../assets/generic_modal_style.css'
import React from "react";


interface GenericModalDialogProps {
    trigger: any
    onClose?: any;
    size?: any;
    children?: any;


}



export function GenericModalDialog({
    trigger,
    onClose,
    size,
    children,
}: GenericModalDialogProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function closeModal() {
        setIsOpen(false);
        if (onClose) onClose;
    };

    const className = `dialog ${size}`;
    return (
        <>
            <span onClick={() => setIsOpen(!isOpen)}>{trigger}</span>
            {isOpen ? (
                <>
                    <div className="backdrop" ></div>
                    <div className={className}>
                        <button className="close" onClick={() => { setIsOpen(!isOpen); onClose }}>
                            X
                        </button>
                        {React.Children.map(children, (child) => {
                            if (React.isValidElement(child)) {
                                return React.cloneElement(child as React.ReactElement<any>, {
                                    closeModal
                                });
                            }
                            return child;
                        })}
                    </div>
                </>
            ) : null}
        </>
    );

}

export function Footer({ children }: { children: ReactNode }) {
    return <div className="footer">{children}</div>;
};

export function Header({ children }: { children: ReactNode }) {
    return <div className="header">{children}</div>;
};

export function Content({ children }: { children: ReactNode }) {
    return <div className="content">{children}</div>;
};
