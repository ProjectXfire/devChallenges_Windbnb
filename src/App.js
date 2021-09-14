import { useState } from "react";
// Data
import items from "./data/stays.json";
// Images
import logo from "./images/logo.png";
// Components
import { Container } from "./components/container";
import { Header } from "./components/header";
import { Menu } from "./components/menu";
import { Articles } from "./components/articles";
import { Card } from "./components/card";
import { Footer } from "./components/footer";
import { DropdownFilter } from "./components/dropdownFilter";

function App() {
  const [data, setData] = useState(items);
  const [showSearch, setShowSearch] = useState(null);
  const cities = new Set(items.map((item) => item.city + ", " + item.country));
  const [selected, setSelected] = useState({
    city: "Location",
    guests: "Add guests",
  });

  const handleSearch = (location, guests) => {
    setShowSearch(false);
    const getCity = location.split(",");
    setSelected({
      city: location,
      guests,
    });
    const filterData = items.filter(
      (item) => item.city === getCity[0] && item.maxGuests === guests
    );
    setData(filterData);
  };

  const handleClean = () => {
    setShowSearch(false);
    setSelected({
      city: "Location",
      guests: "Add guests",
    });
    setData(items);
  };

  return (
    <Container>
      <DropdownFilter
        showSearch={showSearch}
        cities={cities}
        setShowSearch={setShowSearch}
        handleSearch={handleSearch}
        handleClean={handleClean}
      />
      <Header>
        <img src={logo} alt="logo" />
        <Menu setShowSearch={setShowSearch} selected={selected} />
      </Header>
      <Header>
        <h3>Stays in Finland</h3>
        <span>12+ days</span>
      </Header>
      <Articles>
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Articles>
      <Footer>
        created by <strong>gbdeveloper</strong> - devChallenges.io
      </Footer>
    </Container>
  );
}

export default App;
