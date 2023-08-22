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
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

import { signIn, signOut, useSession } from "next-auth/react";

export default function NavbarComponent() {
  const { data: session, status } = useSession();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [{ name: "Personajes", path: "/characters" }];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">Rick And Morty App</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">Rick And Morty App</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="/characters">
            Personajes
          </Link>
        </NavbarItem>
      </NavbarContent>

      {!(status == "authenticated") ? (
        <NavbarContent justify="end">
          <NavbarItem>
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
        <NavbarContent justify="end">
          <NavbarItem>
            <NavbarItem>
              <Button
                as={Link}
                onClick={() =>
                  signOut({
                    callbackUrl: `${window.location.origin}`,
                  })
                }
                color="danger"
                variant="flat"
              >
                Log Out
              </Button>
            </NavbarItem>
          </NavbarItem>
        </NavbarContent>
      )}

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" color="primary" href={item.path} size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
