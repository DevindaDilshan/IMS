import Card from 'react-bootstrap/Card';

function DashCard(props) {
  return (
    <Card style={{ width: '15rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.num}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DashCard;