import { Form, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../css/Modal.css";
import { BASE_URL } from "../../Constants";

function AddBookModal({ getBooks, ...props }) {
    const [bookToAdd, setBookToAdd] = useState({
        name: "",
        author: "",
        category: "",
        publishing_house: "",
        price: "",
        discount: "",
        quantity: "",
        availability_date: "",
        rating: "",
        image: "new_book.png"
    });
    const [validated, setValidated] = useState(false);

    const handleChangeAddBooks = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setBookToAdd({ ...bookToAdd, [name]: value });
    };

    const addBook = (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        if (form.checkValidity()) {
            fetch(`${BASE_URL}/books`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(bookToAdd)
            }).then((data) => {
                if (data.status === 200) {
                    getBooks();
                    props.onHide();
                } else {
                    console.log("error");
                }
            });
        }
        setValidated(true);
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Book
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div
                    id="new-book-container"
                    className="new-book hide d-flex justify-content-center flex-column align-items-center text-left"
                >
                    <Form
                        onSubmit={(e) => addBook(e)}
                        className="new-book-form"
                        noValidate
                        validated={validated}
                    >
                        <Form.Group
                            as={Row}
                            className="mb-3"
                            controlId="validationCustom01"
                        >
                            <Form.Label column sm="3">
                                Category*
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    type="text"
                                    name="category"
                                    defaultValue={props.category}
                                    onChange={handleChangeAddBooks}
                                    placeholder="ex. : Science Fiction"
                                    aria-label="ex. : Science Fiction"
                                    pattern="^[\w\-\s\,]+$"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Invalid book category.
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group
                            as={Row}
                            className="mb-3"
                            controlId="validationCustom01"
                        >
                            <Form.Label column sm="3">
                                Name*
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    name="name"
                                    type="text"
                                    defaultValue={props.name}
                                    onChange={handleChangeAddBooks}
                                    placeholder="ex. : The Lord Of The Rings"
                                    aria-label="ex. : The Lord Of The Rings"
                                    aria-describedby="basic-addon1"
                                    pattern="^[\w\-\s\,]+$"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Invalid book name.
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group
                            as={Row}
                            className="mb-3"
                            controlId="validationCustom01"
                        >
                            <Form.Label column sm="3">
                                Author*
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    name="author"
                                    type="text"
                                    defaultValue={props.author}
                                    onChange={handleChangeAddBooks}
                                    placeholder="ex. : J. R. R. Tolkien"
                                    aria-label="ex. : J. R. R. Tolkien"
                                    aria-describedby="basic-addon1"
                                    pattern="(^[a-zA-Z]{1,16})(\.{0,1})([ ]{0,1})([a-zA-Z]{1,16})(\.{0,1})([ ]{0,1})([a-zA-Z]{0,26})"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Invalid book author.
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group
                            as={Row}
                            className="mb-3"
                            controlId="validationCustom01"
                        >
                            <Form.Label column sm="3">
                                Publishing House*
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    name="publishing_house"
                                    type="text"
                                    defaultValue={props.publishing_house}
                                    onChange={handleChangeAddBooks}
                                    placeholder="ex. : Orion, Rao"
                                    aria-label="ex. : Orion, Rao"
                                    aria-describedby="basic-addon1"
                                    pattern="^[\w\-\s\,]+$"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Invalid book publishing house.
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group
                            as={Row}
                            className="mb-3"
                            controlId="validationCustom01"
                        >
                            <Form.Label column sm="3">
                                Price*
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    name="price"
                                    type="text"
                                    defaultValue={props.price}
                                    onChange={handleChangeAddBooks}
                                    placeholder="ex. : 50"
                                    aria-label="ex. : 50"
                                    aria-describedby="basic-addon1"
                                    pattern="^\d+$"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Invalid price format.
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group
                            as={Row}
                            className="mb-3"
                            controlId="validationCustom01"
                        >
                            <Form.Label column sm="3">
                                Discount
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    name="discount"
                                    type="text"
                                    defaultValue={props.discount}
                                    onChange={handleChangeAddBooks}
                                    placeholder="ex. : 5"
                                    aria-label="ex. : 5"
                                    pattern="^\d+$"
                                    aria-describedby="basic-addon1"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Invalid discount format.
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group
                            as={Row}
                            className="mb-3"
                            controlId="validationCustom01"
                        >
                            <Form.Label column sm="3">
                                Quantity*
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    name="quantity"
                                    type="text"
                                    defaultValue={props.quantity}
                                    onChange={handleChangeAddBooks}
                                    placeholder="ex. : 100"
                                    aria-label="ex. : 100"
                                    aria-describedby="basic-addon1"
                                    pattern="^\d+$"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Invalid quantity format.
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group
                            as={Row}
                            className="mb-3"
                            controlId="validationCustom01"
                        >
                            <Form.Label column sm="3">
                                Availability date*
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    type="text"
                                    defaultValue={props.date}
                                    onChange={handleChangeAddBooks}
                                    name="availability_date"
                                    placeholder="ex. : 2021-08-13"
                                    aria-label="ex. : 2021-08-13"
                                    aria-describedby="basic-addon1"
                                    pattern="^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Invalid date format.
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group
                            as={Row}
                            className="mb-3"
                            controlId="validationCustom01"
                        >
                            <Form.Label column sm="3">
                                Rating
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    name="rating"
                                    type="text"
                                    defaultValue={props.rating}
                                    onChange={handleChangeAddBooks}
                                    className="form-control"
                                    placeholder="ex. : Int between 0 and 5"
                                    aria-label="ex. : Int between 0 and 5"
                                    pattern="^[0-5]"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Invalid rating format.
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div className="add-new-buttons d-flex justify-content-between">
                    <Button variant="danger" onClick={addBook}>
                        Add
                    </Button>
                    <Button onClick={props.onHide}>Cancel</Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}

export default AddBookModal;





