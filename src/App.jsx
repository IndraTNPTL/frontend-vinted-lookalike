import "./App.css";

import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("");
      } catch (error) {
        console.log(error.response);
      }
    };
  });

  return <></>;
}

export default App;
