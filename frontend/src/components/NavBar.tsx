import { Container, Nav, Navbar } from "react-bootstrap";
import { User } from "../models/user";
import NavBarLoggedInView from "./NavBarLoggedInView";
import NavBarLoggedOutView from "./NavBarLoggedOutView";
import { Link } from "react-router-dom";
import styles from "../styles/Progress.module.css";

/**
 * The NavBar component that renders the [Prog]ress header, the About page, and the user sign-up and login functionalities.
 * The [Prog]ress header is a clickable navigation icon that routes users back to the Entries (home) page.
 * If a user is logged in, the NavBarLoggedInView component is rendered.
 * If not, the NavBarLoggedOutView component is rendered.
 * @returns {JSX.Element} A React element that renders the navigation bar.
 */

interface NavBarProps {
  loggedInUser: User | null;
  onSignUpClicked: () => void;
  onLoginClicked: () => void;
  onLogoutSuccessful: () => void;
}

const NavBar = ({
  loggedInUser,
  onSignUpClicked,
  onLoginClicked,
  onLogoutSuccessful,
}: NavBarProps) => {
  return (
    <Navbar bg="black" variant="dark" expand="sm" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className={styles.display}>
          <span className={styles.progressNav}>
            [<i>Prog</i>]
          </span>
          ress
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {loggedInUser ? (
              <NavBarLoggedInView
                user={loggedInUser}
                onLogoutSuccessful={onLogoutSuccessful}
              />
            ) : (
              <NavBarLoggedOutView
                onLoginClicked={onLoginClicked}
                onSignUpClicked={onSignUpClicked}
              />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
