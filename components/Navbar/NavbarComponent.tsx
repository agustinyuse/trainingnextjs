import React, { useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";

import { signIn, signOut, useSession } from "next-auth/react";

export default function NavbarComponent() {
  const { data: session, status } = useSession();

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Rick And Morty App</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/characters">
            Personajes
          </Link>
        </NavbarItem>
      </NavbarContent>

      {!(status == "authenticated") ? (
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <NavbarItem>
              <Button
                as={Link}
                onClick={() => signIn("okta")}
                color="primary"
                variant="flat"
              >
                Log In
              </Button>
            </NavbarItem>
          </NavbarItem>
        </NavbarContent>
      ) : (
        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{session?.user?.email}</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                <Button
                  as={Link}
                  onClick={() =>
                    signOut({
                      callbackUrl: `${window.location.origin}`,
                    })
                  }
                  color="danger"
                >
                  Log Out
                </Button>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      )}
    </Navbar>
  );
}
