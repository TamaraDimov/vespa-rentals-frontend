import Alert from 'react-bootstrap/Alert';

export default function Created() {
  return (
    <Alert variant="success" dismissible>
      <p>Success! Your new motorcycle item has been created!</p>
    </Alert>
  );
}
