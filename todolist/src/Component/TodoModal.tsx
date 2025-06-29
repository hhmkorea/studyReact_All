import {Button, Modal} from "react-bootstrap";
import * as React from "react";


type Todo = {
    id: number,
    text: string,
    isChecked: boolean;
}

type TodoModalProps = {
    show : boolean;
    handleClose : () => void; // handleClose : 버튼 클릭하면 호출될 함수
    todo : Todo | null;
}

const TodoModal:React.FC<TodoModalProps> =({show, handleClose, todo}) => {
    return (
        <Modal show={show} onHide={() => handleClose()} centered>
            <Modal.Header closeButton>
                <Modal.Title>상세정보</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {todo?.text} 자세한 정보를 출력합니다.
                <p>현재날짜 : {new Date().toLocaleTimeString()}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default TodoModal;