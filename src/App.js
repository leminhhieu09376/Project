import logo from './logo.svg';
import './App.css';
import { child, get, ref, set } from 'firebase/database';
import database from "./firebase"
import { useEffect, useState } from 'react';


function App() {
  const [control, setControll] = useState("");
  const dbRef = ref(database);
  useEffect(() => {

    get(child(dbRef, `data`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());

        if (snapshot.val().data == 1) {
          setControll("On")
        }
        else {
          setControll("Off")
        }

      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }, [])


  const onLed = () => {
    setControll("On")
    set(child(dbRef, `data`), {
      data: 1

    });
  }
  const offLed = () => {
    setControll("Off")
    set(child(dbRef, `data`), {
      data: 0

    });
  }
  console.log("run")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Đèn: {control}
        </p>
        <button onClick={() => offLed()} >
          Tắt đèn
        </button>
        <button onClick={() => onLed()}>
          Mở đèn
        </button>


      </header>
    </div>
  );
}

export default App;
