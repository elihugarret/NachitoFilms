import Alert from 'react-bootstrap/Alert'


const Index = () => (
    <div>
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
        />
        {
            [
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark',
            ].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                    This is a {variant} alert—check it out!
                </Alert>
            ))
        }
    </div>
)
  
  export default Index