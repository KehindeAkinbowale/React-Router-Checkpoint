import Card from 'react-bootstrap/Card';
import ReactPlayer from 'react-player';

function Description({description, trailer}) {
  return (
    <>
      <Card style={{width: "40rem"}}>
        <ReactPlayer url={trailer} controls/>
        <Card.Body>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
export default Description;