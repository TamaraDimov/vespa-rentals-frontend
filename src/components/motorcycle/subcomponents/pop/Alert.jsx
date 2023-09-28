import Alert from 'react-bootstrap/Alert';

function Alerts() {
  return (
    <Alert variant="danger" dismissible>
      <Alert.Heading>Something went wrong with your request. Please try again.</Alert.Heading>
      <p>Please check the values of all fields and ensure that they are consistent.</p>
    </Alert>
  );
}

export default Alerts;
