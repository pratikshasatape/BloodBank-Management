import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("user");
    setUser(null);
    setTimeout(() => {
      navigate("/login");
    },20000);
  }, [navigate, setUser]);

  return (
    <div className="text-center p-6">
      <h2 className="text-2xl font-bold">Logging out...</h2>
    </div>
  );
};

export default Logout;
