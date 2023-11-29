import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
function MovieCard({title, description, URL, ratings}) {
  return (
    <div>
        <Link to="/filter" style={{textDecoration: "none"}}>
          <Card style={{ width: '20rem'}}>
          <Card.Img variant="top" src={URL} height="250px"/>
          <ListGroup className="list-group-flush">
              <ListGroup.Item> <span className='fw-bold me-2'>Movie Title:</span>{title}</ListGroup.Item>
              <ListGroup.Item> <span className='fw-bold me-2'>Ratings:</span>{ratings}</ListGroup.Item>
          </ListGroup>
          </Card>
        </Link>
    </div>
  );
}
export default MovieCard;