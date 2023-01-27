import { Avatar, Button, Link, Navbar, Popover, Text } from "@nextui-org/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Logo } from "./Logo";
import { authActions } from "../../store/auth-Slice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticate = useSelector((state) => state.auth.authenticate);
  const user = useSelector((state) => state.auth.user);

  const logoutHandler = () => {
    dispatch(authActions.logout());
    navigate("/", { replace: true });
  };

  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <Logo />
        <Text b color="inherit" hideIn="xs">
          Proto
        </Text>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight activeColor="secondary" hideIn="xs">
        {isAuthenticate && (
          <Popover>
            <Popover.Trigger>
              <Avatar
                color="secondary"
                size="md"
                text={user.username.charAt(0).toUpperCase()}
                textColor="white"
                zoomed
                bordered
                squared
              />
            </Popover.Trigger>
            <Popover.Content>
              <Text css={{ p: "$10" }}>
                I'm{" "}
                {user.username.charAt(0).toUpperCase() + user.username.slice(1)}
              </Text>
            </Popover.Content>
          </Popover>
        )}

        {isAuthenticate && (
          <Navbar.Item>
            <Button onClick={logoutHandler} as={Link} auto color="error" flat>
              Sign out
            </Button>
          </Navbar.Item>
        )}
      </Navbar.Content>

      <Navbar.Collapse>
        <Navbar.CollapseItem>
          {isAuthenticate && (
            <Popover>
              <Popover.Trigger>
                <Avatar
                  color="secondary"
                  size="md"
                  text={user.username.charAt(0).toUpperCase()}
                  textColor="white"
                  zoomed
                  bordered
                  squared
                />
              </Popover.Trigger>
              <Popover.Content>
                <Text css={{ p: "$10" }}>
                  I'm{" "}
                  {user.username.charAt(0).toUpperCase() +
                    user.username.slice(1)}
                </Text>
              </Popover.Content>
            </Popover>
          )}
        </Navbar.CollapseItem>
        <Navbar.CollapseItem activeColor="secondary">
          <Link
            onClick={logoutHandler}
            color="inherit"
            css={{
              minWidth: "100%",
              color: "$error",
            }}
            href="#"
          >
            {isAuthenticate && "Sign out"}
          </Link>
        </Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
