import { Link } from "react-router-dom";

import NotFoundImg from "../images/error-404.png";

const NotFound = () => {
  return (
    <>
      <main>
        <div className="container">
          <img className="NOTFOUND-img" src={NotFoundImg} alt="404 Not Found" />
          <Link className="primary-links" to="/">
            Retourner à la page d'acceuil
          </Link>
        </div>
      </main>
    </>
  );
};

export default NotFound;
