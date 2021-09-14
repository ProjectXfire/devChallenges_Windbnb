import React, { useState } from "react";
// Providers
import { MdClose, MdSearch, MdLocationOn } from "react-icons/md";
// Styles
import {
  DropdownFilterBackground,
  DropdownFilter as DropdownFilterStyled,
  FilterContainer,
  Header,
  Menu,
  MenuDropdown,
  MenuOptions,
  MenuHeader,
  IconContainer,
} from "../styles/dropdownFilter";
import { Button, ActionButtons } from "../styles/button";
import { colors } from "../styles/colors";
// Components
import { AddLess } from "../components/addLess";

export const DropdownFilter = ({
  cities = [],
  showSearch,
  setShowSearch,
  handleSearch,
  handleClean,
}) => {
  const [optionLocation, setOptionLocation] = useState(false);
  const [optionGuest, setOptionGuest] = useState(false);
  const [locationSelected, setLocationSelected] = useState("Location");
  const [guests, setGuests] = useState(0);

  return (
    <>
      <DropdownFilterBackground
        showSearch={showSearch}
        onClick={() => {
          setShowSearch(false);
          setOptionLocation(false);
          setOptionGuest(false);
          document.body.style.overflow = "unset";
        }}
      />
      <DropdownFilterStyled showSearch={showSearch}>
        <FilterContainer>
          <Header>
            <p>
              <strong>Edit your search</strong>
            </p>
            <IconContainer>
              <MdClose
                onClick={() => {
                  setShowSearch(false);
                  setOptionLocation(false);
                  setOptionGuest(false);
                  document.body.style.overflow = "unset";
                }}
              />
            </IconContainer>
          </Header>
          <Menu>
            <MenuDropdown>
              <MenuHeader onClick={() => setOptionLocation(!optionLocation)}>
                <p>
                  <strong>LOCATION</strong>
                </p>
                <p>{locationSelected}</p>
              </MenuHeader>
              {optionLocation && (
                <MenuOptions>
                  <ul>
                    {[...cities].map((city, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setOptionLocation(!optionLocation);
                          setLocationSelected(city);
                        }}
                      >
                        <MdLocationOn />
                        {city}
                      </li>
                    ))}
                  </ul>
                </MenuOptions>
              )}
            </MenuDropdown>
            <MenuDropdown>
              <MenuHeader onClick={() => setOptionGuest(!optionGuest)}>
                <p>
                  <strong>GUESTS</strong>
                </p>
                <p>{guests > 0 ? guests : "Add Guest"}</p>
              </MenuHeader>
              {optionGuest && (
                <MenuOptions>
                  <div>
                    <p>
                      <strong>Adults</strong>
                    </p>
                    <p>Ages 13 or above</p>
                    <AddLess setGuests={setGuests} guests={guests} />
                  </div>
                  <div>
                    <p>
                      <strong>Children</strong>
                    </p>
                    <p>Ages 2 - 12</p>
                    <AddLess setGuests={setGuests} guests={guests} />
                  </div>
                </MenuOptions>
              )}
            </MenuDropdown>
          </Menu>
          <ActionButtons>
            <Button
              color={colors.button}
              onClick={() => {
                handleSearch(locationSelected, guests);
                document.body.style.overflow = "unset";
              }}
            >
              <MdSearch color="white" /> Search
            </Button>
            <Button
              color={colors.button_clean}
              onClick={() => {
                document.body.style.overflow = "unset";
                setLocationSelected("Location");
                setGuests(0);
                handleClean();
              }}
            >
              Clean
            </Button>
          </ActionButtons>
        </FilterContainer>
      </DropdownFilterStyled>
    </>
  );
};
