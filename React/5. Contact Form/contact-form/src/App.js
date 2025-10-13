import './styles.css';

function App() {
  
  const submitForm = (event) => {
    event.preventDefault();
    // Create a FormData object from the form
    console.log(event.target['name'].value, 'name')
    console.log(event.target['email'].value, 'Email');
    console.log(event.target['message'].value, 'Message');

    const formData = new FormData(event.target);

    // Convert to a plain object (optional)
    const data = Object.fromEntries(formData.entries());

    console.log('Form Data:', data);
  }


  return (
    <>
      <form
        onSubmit={submitForm}
        // method='post'
      >
        <div>
          <label htmlFor='name-input'>Name</label>
          <input id="name-input" name='name' type='text' />
        </div>
        <div>
          <label htmlFor='email-input'>Email</label>
          <input id="email-input" name="email" type='email' />
        </div>
        <div>
          <label htmlFor='message-input'>Message</label>
          <textarea 
            id='message-input'
            name='message'
          ></textarea>
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
    </>
  );
}

export default App;
