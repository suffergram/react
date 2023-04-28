import { 
    FloatingFocusManager, 
    autoUpdate, 
    flip, 
    offset, 
    shift, 
    useClick, 
    useDismiss, 
    useFloating, 
    useInteractions, 
    useRole
} from "@floating-ui/react-dom-interactions";
import { useState } from "react";
import Button from "../Button/Button";
import "./style";

export default function Popover({ newModal, newDeleteModal }) {
    const [isOpen, setIsOpen] = useState(false);

    const { x, y, refs, strategy, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        middleware: [
            offset(10),
            flip(),
            shift()
        ],
        whileElementsMounted: autoUpdate
    });

    const click = useClick(context);
    const dismiss = useDismiss(context);
    const role = useRole(context);

    const { getReferenceProps, getFloatingProps } = useInteractions([
        click,
        dismiss,
        role
    ]);
 
    return (
        <>
            {/* <Button ref={refs.reference} {...getReferenceProps()} className="menu">⋮</Button> */}
            <button ref={refs.reference} {...getReferenceProps()} className="menu">⋮</button>
            {isOpen && (
                <FloatingFocusManager context={context} modal={false}>
                    <div
                        className="menuPopover"
                        ref={refs.floating}
                        style={{
                            position: strategy,
                            top: y ?? 16,
                            right: x ?? 16
                        }}
                        {...getFloatingProps()}
                    >
                        <Button onClick={() => setIsOpen(false)} className="close" />
                        <Button onClick={() => newModal('edit')} className="edit">edit</Button>
                        <Button onClick={newDeleteModal} className="delete">delete</Button>
                    </div>
                </FloatingFocusManager>
            )}
        </>
    );
}