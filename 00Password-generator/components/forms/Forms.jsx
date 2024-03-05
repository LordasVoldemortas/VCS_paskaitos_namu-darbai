import { useState } from "react";
const Forms = () => {
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const data = {}
    for (const input of form.entries()) {
      data[input[0]] = input[1]
    };
    console.log(data)

    function rand(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let letters = 'abcdefghijklmnopqrstuvwxyz'
    // const symbol = '~`!@#$%^&*()_-+={[}]:;"<,>.?/'
    const symbol = '~`!@#$%^&*()_-+={[}]|\\:;"\'<,>.?/'

    const finalPassword = [];
    for (let x = 0; x < data.length; x++) {
      const temp = []
      if (data.numbers === 'on') {
        temp.push(rand(0, 9))
      }
      if (data.symbols === 'on') {
        temp.push(symbol[rand(0, 31)])
      }
     
      if (rand(0, 1) === 0) temp.push(letters[rand(0, 25)]);
      else temp.push(letters[rand(0, 25)].toUpperCase());

      let character = temp[rand(0, temp.length - 1)]
      // console.log(temp)
      finalPassword.push(character)

    }
    console.log(finalPassword)
    setPassword(finalPassword.join(''));

  }

    // setData({ ...data, [e.target.Password ] : e.target.length })
  
  return (
    <>
      <h1>Need a password? Try the 1Password Strong Password Generator.</h1>
      <p>Generate secure, random passwords to stay safe online.</p>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <p>Generated password:</p>
          <input
            type="text"
            className='form-control'
            name="PasswordGeneration"
            placeholder=''
            value={password}
            disabled={true}
             />
        </div>
        <div className="options d-flex align-items-center justify-content-center gap-3">
          <div className='mb-3 lenght-box'>
            <p>Lenght</p>
            <input
              type="number"
              name="length"
              // defaultValue={7}
            />
          </div>
          <div className='mb-3'>
            <input
              type="checkbox"
              name="numbers"
            />
            <p>Numbers</p>
          </div>
          <div className='mb-3'>
            <input
              type="checkbox"
              name="symbols"
            />
            <p>Symbols</p>
          </div>
          <button
            className='btn btn-primary'>
            Generate
          </button>
        </div>
      </form>
    </>
  )
}

export default Forms

