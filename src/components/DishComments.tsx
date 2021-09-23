import { Container, Row, Col, ListGroup } from "react-bootstrap"
import { SelectedDish, Dish } from '../Types'

const DishComments = (props: { selectedPasta :SelectedDish}) => (
    <Container>
        <Row className="justify-content-center mt-3">
            <Col xs={12} md={6}>
                <ListGroup>
                    {
                        props.selectedPasta ? props.selectedPasta.comments.map(c => (
                            <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
                        )) : <p>Click on a dish to read its comments</p>
                    }
                </ListGroup>
            </Col>
        </Row>
    </Container>
)

export default DishComments