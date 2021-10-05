import React from "react";
import Card from "../components/Card";

export default function Profile() {
  const [status, setStatus] = React.useState("idle");
  const [profile, setProfile] = React.useState([]);

  React.useEffect(() => {
    const url = "https://reqres.in/api/users";

    const fetchData = async () => {
      try {
        setStatus("loading");
        const response = await fetch(url);
        const json = await response.json(); 
        setStatus("success");
        setProfile(json.data);
      } catch (error) {
        setStatus("error");
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  if (status === "loading") {
    return <p>Fetching data</p>;
  }
  if (status === "error") {
    return <p>There was an error fetching the data!</p>;
  }
  return (
    <div className="flex">
      {profile.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
